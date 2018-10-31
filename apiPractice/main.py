import flask
from flask import request, jsonify
import db_to_flask

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/client', methods=['GET'])
def api_id():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify an id."

    client = db_to_flask.get_one_clients(id)

    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return jsonify(client)

@app.route('/<id>')
def api_id_restful(id=None):
    client = db_to_flask.get_one_clients(id)

    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return jsonify(client)

app.run()