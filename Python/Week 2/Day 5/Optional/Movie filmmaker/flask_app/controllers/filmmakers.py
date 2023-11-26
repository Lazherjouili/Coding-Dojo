from flask_app import app
from flask import redirect,render_template,request
from flask_app.models.filmmaker_model import Filmmaker


@app.route("/")
def index():
    return redirect('/filmmakers')


@app.route("/filmmakers")
def filmmakers():
    all_filmmakers=Filmmaker.get_all()
    return render_template('filmmakers.html',all_filmmakers=all_filmmakers)

@app.route("/create/filmmaker" ,methods=['POST'])
def create_filmmaker():
    data={
        "name":request.form['name']
    }
    Filmmaker.save(data)
    return redirect('/filmmakers')

@app.route("filmmaker/<int:id>" )
def show_film(id):
    data={
        "id":request.form['id']
    }
    filmmaker=Filmmaker.get_by_id(data)
    return render_template ('show_filmmaker.html',filmmaker=filmmaker)
    