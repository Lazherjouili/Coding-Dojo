from flask import Flask,render_template,redirect,session,request
from flask_app import app
from flask_app.models.dojos import Dojo

@app.route('/')          
def home():
  
    return render_template('index.html')

@app.route('/result')         
def resultat():
    data={
          "id":session["id"]
    }

    dojo=Dojo.get_by_id(data)
    return render_template('result.html',dojo=dojo)

@app.route('/form',methods=['POST'])          
def form():
    if not Dojo.validate(request.form):
        return redirect("/")
    data={
        **request.form
    }

    id =Dojo.create(data)
    session["id"] = id
    
    return redirect('/result')

@app.route('/clear')         
def clear():
    session.clear()
    return redirect('/')