from datetime import datetime
import openpyxl

def add_five(number):
    return number + 5

def my_max(numList):
    num = numList[0]
    for i in range(len(numList)):
        if numList[i]>num:
            num = numList[i]
    return num

def my_min(numList):
    num = numList[0]
    for i in range(len(numList)):
        if numList[i]<num:
            num = numList[i]
    return num

def has_string(stringList, searchFor):
    # if searchFor == None:
    #     return []
    foundStrings = []
    for strings in stringList:
        if searchFor in strings:
            foundStrings.append(strings)
    return foundStrings

def to_date(dt):
    return datetime.strptime(dt, "%Y-%m-%d").date()

def date_diff(date1str, date2str):
    date1 = to_date(date1str)
    date2 = to_date(date2str)
    return abs((date1-date2).days)

def contains(stuff, pattern):
    if pattern in stuff:
        return True
    else:
        return False

def add_contents(stuff):
    total = 0
    for parts in stuff:
        total += parts
    return total

def lookup(myDict,myKey):
    return myDict.get(myKey)+" mine"

def getFirstNames(nameList):
    firstNames = []
    for name in nameList:
        firstNames.append(name.split(' ')[0])
    return firstNames

def getClientList(wb):
    clientWs = wb['Clients']
    clientList = []

    for cell in clientWs['A']:
        clientList.append(cell.value)

    del clientList[0]

    return getFirstNames(clientList)

def getMonthlyClients(wb,date):
    monthWs = wb[date] 
    monthlyClients = []

    for row_cells in monthWs.iter_rows(min_col=3,min_row=2):
        for cell in row_cells:
            if cell.value:
                monthlyClients.append(cell.value)

    return monthlyClients

def getUnverifiedClients(clist,mlist):
    uvClients = []
    for name in mlist:
        if name not in clist:
            uvClients.append(name)

    return uvClients

def client_verify(wb,date):

    fullClientList = getClientList(wb)
    thisMonthsClients = getMonthlyClients(wb,date)
    unverifiedClients = getUnverifiedClients(fullClientList,thisMonthsClients)
    
    if len(unverifiedClients) > 0:
        return False
    else:
        return True