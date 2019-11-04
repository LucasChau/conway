from django.test import TestCase
from .grid import Grid
from .patterns import patterns

class GridTestCase(TestCase):
    # 0 1 2
    # 3 4 5
    # 6 7 8
    def setUp(self):
        self.grid = Grid(3)

    def test_set_cells(self):
        id = 5
        self.grid.set_cells(id, True, 1, 2, 3)
        self.assertEqual(self.grid.cells[id], {
            'alive': True,
            'red': 1,
            'blue': 2,
            'green': 3,
            'neighbours': self.grid.cells[id]['neighbours']
        })

    def test_live_cell_with_zero_live_neighbors_dies(self):
        self.grid.set_cells(4, True, 1, 2, 3)
        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['alive'], False)

    def test_live_cell_with_one_live_neighbors_dies(self):
        self.grid.set_cells(0, True, 1, 2, 3)
        self.grid.set_cells(4, True, 1, 2, 3)
        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['alive'], False)

    def test_live_cell_with_two_live_neighbors_live(self):
        self.grid.set_cells(0, True, 1, 2, 3)
        self.grid.set_cells(1, True, 1, 2, 3)
        self.grid.set_cells(4, True, 1, 2, 3)

        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['alive'], True)

    def test_live_cell_with_three_live_neighbors_live(self):
        self.grid.set_cells(0, True, 1, 2, 3)
        self.grid.set_cells(1, True, 1, 2, 3)
        self.grid.set_cells(2, True, 1, 2, 3)
        self.grid.set_cells(4, True, 1, 2, 3)

        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['alive'], True)
 
    def test_live_cell_with_four_live_neighbors_live(self):
        self.grid.set_cells(0, True, 1, 2, 3)
        self.grid.set_cells(1, True, 1, 2, 3)
        self.grid.set_cells(2, True, 1, 2, 3)
        self.grid.set_cells(3, True, 1, 2, 3)
        self.grid.set_cells(4, True, 1, 2, 3)

        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['alive'], False)
  
    def test_live_cell_with_five_live_neighbors_live(self):
        self.grid.set_cells(0, True, 1, 2, 3)
        self.grid.set_cells(1, True, 1, 2, 3)
        self.grid.set_cells(2, True, 1, 2, 3)
        self.grid.set_cells(3, True, 1, 2, 3)
        self.grid.set_cells(4, True, 1, 2, 3)
        self.grid.set_cells(5, True, 1, 2, 3)

        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['alive'], False)
  
    def test_live_cell_with_six_live_neighbors_live(self):
        self.grid.set_cells(0, True, 1, 2, 3)
        self.grid.set_cells(1, True, 1, 2, 3)
        self.grid.set_cells(2, True, 1, 2, 3)
        self.grid.set_cells(3, True, 1, 2, 3)
        self.grid.set_cells(4, True, 1, 2, 3)
        self.grid.set_cells(5, True, 1, 2, 3)
        self.grid.set_cells(6, True, 1, 2, 3)

        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['alive'], False)
  
    def test_live_cell_with_seven_live_neighbors_live(self):
        self.grid.set_cells(0, True, 1, 2, 3)
        self.grid.set_cells(1, True, 1, 2, 3)
        self.grid.set_cells(2, True, 1, 2, 3)
        self.grid.set_cells(3, True, 1, 2, 3)
        self.grid.set_cells(4, True, 1, 2, 3)
        self.grid.set_cells(5, True, 1, 2, 3)
        self.grid.set_cells(6, True, 1, 2, 3)
        self.grid.set_cells(7, True, 1, 2, 3)

        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['alive'], False)
  
    def test_live_cell_with_eight_live_neighbors_live(self):
        self.grid.set_cells(0, True, 1, 2, 3)
        self.grid.set_cells(1, True, 1, 2, 3)
        self.grid.set_cells(2, True, 1, 2, 3)
        self.grid.set_cells(3, True, 1, 2, 3)
        self.grid.set_cells(4, True, 1, 2, 3)
        self.grid.set_cells(5, True, 1, 2, 3)
        self.grid.set_cells(6, True, 1, 2, 3)
        self.grid.set_cells(7, True, 1, 2, 3)
        self.grid.set_cells(8, True, 1, 2, 3)

        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['alive'], False)
 
    def test_dead_cell_with_three_live_neighbors_revive(self):
        self.grid.set_cells(0, True, 1, 2, 3)
        self.grid.set_cells(1, True, 1, 2, 3)
        self.grid.set_cells(2, True, 1, 2, 3)
        self.grid.set_cells(4, False, 255, 255, 255)

        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['alive'], True)

    def test_dead_cell_with_three_live_neighbors_revive_with_averge_neighbors_color(self):
        self.grid.set_cells(0, True, 1, 2, 3)
        self.grid.set_cells(1, True, 3, 1, 2)
        self.grid.set_cells(2, True, 2, 3, 1)
        self.grid.set_cells(4, False, 255, 255, 255)

        self.grid.update_cells()
        self.assertEqual(self.grid.cells[4]['red'], 2)
        self.assertEqual(self.grid.cells[4]['green'], 2)
        self.assertEqual(self.grid.cells[4]['blue'], 2)
        
    def test_generate_pattern(self):
        self.grid.generate_pattern(id=1, positionId=1, red=1, blue=2, green=3)
        self.assertEqual(self.grid.cells[1]['alive'], True)
        self.assertEqual(self.grid.cells[2]['alive'], True)
        self.assertEqual(self.grid.cells[4]['alive'], True)
        self.assertEqual(self.grid.cells[5]['alive'], True)