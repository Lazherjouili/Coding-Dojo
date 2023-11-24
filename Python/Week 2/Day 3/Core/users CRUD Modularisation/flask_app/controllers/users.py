
# users.py
from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.user import User





@app.route("/")  
def hello():
    return  render_template ("create.html") 



@app.route("/users")  
def read_all():
    all_users=User.get_all()
    return  render_template ("read.html" ,users=all_users) 

@app.route("/process",methods=["POST"])  
def create():
    dict={
        "first_name":request.form["first_name"],
        "last_name":request.form["last_name"],
        "email":request.form["email"],
        
    }
    User.create(dict)

    return redirect ("/users")

@app.route("/users/show/<int:id>")  
def show_one(id):
    data={"id":id}
    one_user=User.get_one(data)
    print(one_user)
    return  render_template ("show.html" ,one_user=one_user) 

@app.route("/users/edit/<int:id>")  
def edit(id):
    user={"id":id}
    user_up=User.get_one(user)
    return  render_template ("edit.html",user_up=user_up ) 

@app.route("/update/<int:id>",methods=["POST"])  
def update(id):
    dict_user={
        "first_name":request.form["first_name"],
        "last_name":request.form["last_name"],
        "email":request.form["email"],
        "id":id
        
    }
    User.update(dict_user)

    return redirect ("/users")

@app.route("/users/delete/<int:id>")  
def delete(id):
    data={"id":id}
    User.delete(data)
    
    return  redirect ("/users" ) 
