# Begin tdd

import unittest
import my_math

class TestDates(unittest.TestCase):

	def test_multiply(self):
		a=3
		b=4
		self.assertEqual(a*b,my_math.multiply(a,b))
		a=-4
		b=5
		self.assertEqual(a*b,my_math.multiply(a,b))
		a=4
		b=0
		self.assertEqual(a*b,my_math.multiply(a,b))