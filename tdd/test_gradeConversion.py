# Begin tdd

import unittest
import gradeConversion

class TestDates(unittest.TestCase):
    
    def test_one(self):
        self.assertEqual('A', gradeConversion.convert(80))
        self.assertEqual('B', gradeConversion.convert(75))
        self.assertEqual('C', gradeConversion.convert(52))
        self.assertEqual('F', gradeConversion.convert(8))