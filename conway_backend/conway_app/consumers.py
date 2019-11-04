from channels.generic.websocket import AsyncWebsocketConsumer
import json
import random
from .models import Player
from .grid import Grid
import threading

def set_interval(self, func, sec):
    def func_wrapper():
        self.set_interval(func, sec)
        func()
    t = threading.Timer(sec, func_wrapper)
    t.start()
    return t

grid = Grid(50)
self.set_interval(grid.update_and_send_cells, 1.0)

class ConwayConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        print('start conneciton')
        self.group_name = 'all'
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )
        print('group joined')
        self.player = Player.objects.create(red = random.randint(1,255), green = random.randint(1,255), blue = random.randint(1,255))
        await self.accept()
        print('conneciton accepted')

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )
        Player.objects.get(id = self.player.id).delete()

    async def receive(self, text_data):
        data = json.loads(text_data)
        print('receive: ', data['command'])
        await self.commands[data['command']](self, data)

    async def send_data(self, type, payload):
        await self.send(text_data=json.dumps({
            'type': type,
            'payload': payload
        }))
    
    async def get_initial_grid(self, data):
        print('get_initial_grid called')
        await self.send_data('RECEIVE_INITIAL_CELLS', grid.get_current_cells_payload())

    async def activate_cell(self, data):
        id = data['cell_id']
        grid.set_cells(int(id), True, self.player.red, self.player.green, self.player.blue)
        await self.channel_layer.group_send(
            self.group_name,
            {
                'type': 'receive_activate_cell',
                'payload': { 'id': id }
            }
        )
    
    async def receive_update_cells(self, event):
        await self.send_data('RECEIVE_UPDATE_CELLS', grid.get_current_cells_payload())

    async def receive_activate_cell(self, event):
        payload = event['payload']
        id = int(payload['id'])
        cell = grid.cells[id]
        await self.send_data('RECEIVE_ACTIVATE_CELL', {
            'cell_id': id,
            'red': cell['red'],
            'green': cell['green'],
            'blue': cell['blue']
        })

    async def generate_pattern(self, data):
        id = data['pattern_id']
        position = random.randint(0, len(grid.cells)-1)
        
        grid.generate_pattern(int(id), position, self.player.red, self.player.green, self.player.blue)
        await self.channel_layer.group_send(
            self.group_name,
            {
                'type': 'receive_update_cells'
            }
        )
    
    commands = {
        'REQUEST_INITIAL_CELLS': get_initial_grid,
        'REQUEST_ACTIVATE_CELL': activate_cell,
        'REQUEST_CREATE_PATTERN': generate_pattern,
    }