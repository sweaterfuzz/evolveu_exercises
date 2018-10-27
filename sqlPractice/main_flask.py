from flask import Flask
from flask import render_template
import db_to_flask

app = Flask(__name__)

@app.route("/all_clients")
def all_clients():
    clients = db_to_flask.get_all_clients()
    return render_template('clientList.html', title='All Clients', clients=clients)

@app.route("/july_clients")
def july_clients():
    clients = db_to_flask.get_july_clients()
    return render_template('clientList.html', title='July Clients', clients=clients)

@app.route("/null_credits")
def null_credits():
    clients = db_to_flask.get_null_credits()
    return render_template('clientList.html', title='All clients with no credits', clients=clients)

@app.route("/null_clients")
def null_clients():
    clients = db_to_flask.get_nullcredit_clients()
    return render_template('clientList.html', title='Credits assigned without a client', clients=clients)
