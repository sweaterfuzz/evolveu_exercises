
import unittest
import jar_jar
from dateutil import parser

class TestDates(unittest.TestCase):

    
    def test_yearMonth(self):
        self.assertEqual('2018-08', jar_jar.get_year_month('2018-08-30'))
        self.assertEqual('2019-08', jar_jar.get_year_month('2019-08'))

    def test_getymd(self):
        self.assertEqual(parser.parse('2018-08-01'), jar_jar.get_ymd('2018-08-01'))
        self.assertEqual('=A2+1', jar_jar.get_ymd('2018-08-02'))
        self.assertEqual('=A3+1', jar_jar.get_ymd('2018-08-03'))
        self.assertEqual('=A4+1', jar_jar.get_ymd('2018-08-04'))
        self.assertEqual('=A5+1', jar_jar.get_ymd('2018-08-05'))
        self.assertEqual('=A6+1', jar_jar.get_ymd('2018-08-06'))
        self.assertEqual('=A7+1', jar_jar.get_ymd('2018-08-07'))
        self.assertEqual('=A8+1', jar_jar.get_ymd('2018-08-08'))
        self.assertEqual('=A9+1', jar_jar.get_ymd('2018-08-09'))
        self.assertEqual('=A10+1', jar_jar.get_ymd('2018-08-10'))
        self.assertEqual('=A11+1', jar_jar.get_ymd('2018-08-11'))
        self.assertEqual('=A12+1', jar_jar.get_ymd('2018-08-12'))
        self.assertEqual('=A13+1', jar_jar.get_ymd('2018-08-13'))
        self.assertEqual('=A14+1', jar_jar.get_ymd('2018-08-14'))
        self.assertEqual('=A15+1', jar_jar.get_ymd('2018-08-15'))
        self.assertEqual('=A16+1', jar_jar.get_ymd('2018-08-16'))
        self.assertEqual('=A17+1', jar_jar.get_ymd('2018-08-17'))
        self.assertEqual('=A18+1', jar_jar.get_ymd('2018-08-18'))
        self.assertEqual('=A19+1', jar_jar.get_ymd('2018-08-19'))
        self.assertEqual('=A20+1', jar_jar.get_ymd('2018-08-20'))
        self.assertEqual('=A21+1', jar_jar.get_ymd('2018-08-21'))
        self.assertEqual('=A22+1', jar_jar.get_ymd('2018-08-22'))
        self.assertEqual('=A23+1', jar_jar.get_ymd('2018-08-23'))
        self.assertEqual('=A24+1', jar_jar.get_ymd('2018-08-24'))
        self.assertEqual('=A25+1', jar_jar.get_ymd('2018-08-25'))
        self.assertEqual('=A26+1', jar_jar.get_ymd('2018-08-26'))
        self.assertEqual('=A27+1', jar_jar.get_ymd('2018-08-27'))
        self.assertEqual('=A28+1', jar_jar.get_ymd('2018-08-28'))
        self.assertEqual('=A29+1', jar_jar.get_ymd('2018-08-29'))
        self.assertEqual('=A30+1', jar_jar.get_ymd('2018-08-30'))
        self.assertEqual('=A31+1', jar_jar.get_ymd('2018-08-31'))

    def test_getrooms(self):
        self.assertIn('First Floor Hall', jar_jar.getrooms('2018-07-16'))
        self.assertNotIn('Desk 3rd floor 7', jar_jar.getrooms('2018-07-16'))
        self.assertNotIn('Second Floor Hall', jar_jar.getrooms('2018-08-05'))
        self.assertNotIn('Desk 3rd floor 2', jar_jar.getrooms('2018-09-02'))
        self.assertNotIn('Second Floor Hall', jar_jar.getrooms('2018-10-18'))
        self.assertNotIn('Desk 3rd floor 8', jar_jar.getrooms('2018-11-24'))
