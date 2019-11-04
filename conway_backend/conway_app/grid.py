from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .patterns import patterns
import math

class Grid():
    cells = {

    }

    def set_cells(self, id, alive, red, blue, green):
        cell = self.cells[id]
        cell['alive'] = alive
        cell['red'] = red
        cell['blue'] = blue
        cell['green'] = green

    def generate_pattern(self, id, positionId, red, blue, green):
        gridLen = math.floor(math.sqrt(len(self.cells)))
        [dimX, dimY] = patterns[id]['dimension']
        [posX, posY] = self.convert_id_to_xy(positionId, gridLen)
        for i in range(dimX+2):
            for j in range(dimY+2):
                cell = self.cells[self.get_adjusted_id(posX-1+i, posY-1+j, gridLen)]
                cell['alive'] = False
                cell['red'] = 255
                cell['green'] = 255
                cell['blue'] = 255
        for relative_id in patterns[id]['alive_cells']:
            [relX, relY] = self.convert_id_to_xy(relative_id, dimX)
            cell = self.cells[self.get_adjusted_id(posX+relX, posY+relY, gridLen)]
            cell['alive'] = True
            cell['red'] = red
            cell['green'] = green
            cell['blue'] = blue

    def get_adjusted_id(self, x, y, len):
        if x < 0:
            x = len + x
        if y < 0:
            y = len + y
        if x >= len:
            x = x - len
        if y >= len:
            y = y - len
        return x + y * len

    def convert_id_to_xy(self, id, len):
        return [id % len, id // len]

    def get_neighbours(self, id, len):
        [x, y] = self.convert_id_to_xy(id, len)
        return [self.get_adjusted_id(x-1, y+1, len),
                self.get_adjusted_id(x-1, y, len),
                self.get_adjusted_id(x-1, y-1, len),
                self.get_adjusted_id(x, y+1, len),
                self.get_adjusted_id(x, y-1, len),
                self.get_adjusted_id(x+1, y+1, len),
                self.get_adjusted_id(x+1, y, len),
                self.get_adjusted_id(x+1, y-1, len)]

    def __init__(self, dim):
        for id in range(dim*dim):
            self.cells[id] = {
                'alive': False,
                'red': 255,
                'green': 255,
                'blue': 255
            }
        for id in self.cells:
            neighbours = self.get_neighbours(id, dim)
            self.cells[id]['neighbours'] = []
            for neighbour in neighbours:
                self.cells[id]['neighbours'].append(neighbour)

    def update_cells(self):
        nextCells = {}
        for id in self.cells:
            cell = self.cells[id]
            alives = 0
            nextCells[id] = {
                'alive': False,
                'red': 0,
                'green': 0,
                'blue': 0,
            }
            [nextCells[id]['red'], nextCells[id]['green'], nextCells[id]['blue']] = [cell['red'], cell['green'], cell['blue']]
            red, green, blue = 0, 0, 0
            for neighbour in cell['neighbours']:
                if self.cells[neighbour]['alive']:
                    alives += 1
                    red += self.cells[neighbour]['red']
                    green += self.cells[neighbour]['green']
                    blue += self.cells[neighbour]['blue']
            if alives < 2 or alives > 3:
                nextCells[id]['alive'] = False
            elif alives == 3 and not nextCells[id]['alive']:
                nextCells[id]['alive'] = True
                [nextCells[id]['red'], nextCells[id]['green'], nextCells[id]['blue']] = [red//alives, green//alives, blue//alives]
            else:
                nextCells[id]['alive'] = cell['alive']
            if nextCells[id]['alive'] == False:
                [nextCells[id]['red'], nextCells[id]['green'], nextCells[id]['blue']] = [255, 255, 255]
        for id in self.cells:
            cell = self.cells[id]
            cell['alive'] = nextCells[id]['alive']
            cell['red'] = nextCells[id]['red']
            cell['green'] = nextCells[id]['green']
            cell['blue'] = nextCells[id]['blue']

    def get_current_cells_payload(self):
        payload = {
            'cells': {}
        }
        for id in self.cells:
            payload['cells'][id] = {
                'alive': self.cells[id]['alive'],
                'red': self.cells[id]['red'],
                'green': self.cells[id]['green'],
                'blue': self.cells[id]['blue']
            }
        return payload

    def send_updated_cells(self):
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'all',
            {
                'type': 'receive_update_cells'
            }
        )

    def update_and_send_cells(self):
        self.update_cells()
        self.send_updated_cells()
