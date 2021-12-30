from flask import render_template
from Well_Spacing_Application import app
from flask import jsonify

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/graph")
def graph():
    return render_template('graph.html')


