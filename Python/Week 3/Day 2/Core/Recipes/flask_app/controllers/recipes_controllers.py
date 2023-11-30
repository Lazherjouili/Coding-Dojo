from flask_app.models.recipe_model import Recipe
from flask_app.models.user_model import User
from flask_app import app
from flask import Flask,render_template,redirect,request,session,flash


# !display route create
@app.route('/recipes/new')
def create_recipe():
    if "user_id" not in session:
        return redirect("/")
    
    return render_template("create_recipes.html")

# !action route create
@app.route('/save' , methods=['POST'])
def create_recipes():
    if not Recipe.validate(request.form):
        return redirect("/recipes/new")
    
    
    data={
        **request.form,
        "user_id" :session["user_id"]
    }
    Recipe.save(data)
    return redirect("/recipes")


# !display route create one
@app.route('/recipes/<int:id>')
def view_one(id):
    if "user_id" not in session:
        return redirect("/")
    data={
        "id":id
    }
    recipe=Recipe.get_recipe_by_user(data)
    data = {"id": session["user_id"]}
    loggedin_user = User.get_user_by_id(data)
    return render_template("view_one.html",recipe=recipe,loggedin_user=loggedin_user)



# !display route edit 
@app.route('/recipes/<int:id>/edit')
def edit_recipe(id):
    if "user_id" not in session:
        return redirect("/")
    data={
        "id":id
    }
    recipe=Recipe.get_recipe_by_id(data)
    
    return render_template("edit_recipes.html",recipe=recipe)


# !action route edit
@app.route('/process/<int:id>/update',methods=['POST'])
def edit_recipe_form(id):
    if not Recipe.validate(request.form):
        return redirect(f"/recipe/{id}/edit")
    data={**request.form,
        "user_id" :session["user_id"],
        "id":id
    }
    Recipe.edit(data)
    return redirect("/recipes")

# !action route delete
@app.route('/process/<int:id>/delete',methods=['POST'])
def delete_recipe(id):
    data={
        "id":id
    }
    Recipe.delete(data)
    return redirect("/recipes")