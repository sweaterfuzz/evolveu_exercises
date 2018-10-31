import psycopg2
import json

class Client:
        def __init__(self,clientTuple):
                self.idnum, self.name, self.email, self.city, self.birth_year = clientTuple

        def dictify(self):
                return {'idnum':self.idnum,'name':self.name,'email':self.email,'city':self.city,'birth_year':self.birth_year}


def print_clients(dct):
    client_string = ""
    for clientId, client in dct.items():
        client_string += "({}) {} \n".format(clientId, client.name)
    return client_string

def get_one_clients(reqID):
        conn = psycopg2.connect("dbname=postgres")
        cur = conn.cursor()

        cur.execute("SELECT * FROM clients where client_id=(%s);",(reqID,))

        clientInfoArray = cur.fetchall()

        singleClient = Client(clientInfoArray[0])
        clientDict = singleClient.dictify()
        #json_string = json.dumps(clientDict)

        cur.close()
        conn.close()
        return clientDict

def get_all_clients():
        conn = psycopg2.connect("dbname=postgres")
        cur = conn.cursor()

        cur.execute("SELECT * FROM clients;")

        clientInfoArray = cur.fetchall()

        clientDict = {}
        for client in clientInfoArray:
                idnum = client[0]
                clientDict[idnum] = Client(client)
        
        cur.close()
        conn.close()
        
        return clientDict

def get_july_clients():
        conn = psycopg2.connect("dbname=postgres")
        cur = conn.cursor()

        cur.execute("SELECT clients.client_id,name,email,city,birth_year \
                FROM clients LEFT JOIN credits \
                on clients.client_id = credits.client_id \
                WHERE month='2018-07';")

        clientInfoArray = cur.fetchall()

        clientDict = {}
        for client in clientInfoArray:
                idnum = client[0]
                clientDict[idnum] = Client(client)
        
        cur.close()
        conn.close()
        
        return clientDict

def get_null_credits():
        conn = psycopg2.connect("dbname=postgres")
        cur = conn.cursor()

        cur.execute("SELECT clients.client_id,name,email,city,birth_year \
                FROM clients LEFT JOIN credits \
                on clients.client_id = credits.client_id \
                WHERE credits is NULL;")

        clientInfoArray = cur.fetchall()

        clientDict = {}
        for client in clientInfoArray:
                idnum = client[0]
                clientDict[idnum] = Client(client)
        
        cur.close()
        conn.close()
        
        return clientDict

def get_nullcredit_clients():
        conn = psycopg2.connect("dbname=postgres")
        cur = conn.cursor()

        cur.execute("SELECT credits.client_id,name,email,city,birth_year \
                FROM clients RIGHT JOIN credits \
                on clients.client_id = credits.client_id \
                WHERE name is NULL;")

        clientInfoArray = cur.fetchall()

        clientDict = {}
        for client in clientInfoArray:
                idnum = client[0]
                clientDict[idnum] = Client(client)
        
        cur.close()
        conn.close()
        
        return clientDict

all_clients = get_all_clients()
print_clients(all_clients)

print('------------')

july_clients = get_july_clients()
print_clients(july_clients)

print('------------')

null_clients = get_null_credits()
print_clients(null_clients)

print('------------')
null_creds = get_nullcredit_clients()
print_clients(null_creds)