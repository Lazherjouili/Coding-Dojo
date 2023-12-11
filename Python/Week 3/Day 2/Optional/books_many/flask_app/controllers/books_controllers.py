from flask_app.models.book_model import Book
from flask_app.models.user_model import User
from flask_app import app
from flask import Flask,render_template,redirect,request,session,flash



@app.route('/books/new')
def create_book():
    if "user_id" not in session:
        return redirect("/")
    
    return render_template("create_books.html")
@app.route('/books/<int:id>')
def view_one(id):
    if "user_id" not in session:
        return redirect("/")
    data={
        "id":id
    }
    book=Book.get_book_by_user(data)
    # !========check like===========
    like_dict={"book_id":id,"user_id":session["user_id"]}
    book.is_liked=Book.check_like(like_dict)

    # !=============================
    return render_template("view_one.html",book=book)


@app.route('/save' , methods=['POST'])
def create_books():
    if not Book.validate(request.form):
        return redirect("/books/new")
    
    
    data={
        **request.form,
        "user_id" :session["user_id"]
    }
    Book.save(data)
    return redirect("/books")

@app.route('/books/<int:id>/edit')
def edit_book(id):
    if "user_id" not in session:
        return redirect("/")
    data={
        "id":id
    }
    book=Book.get_book_by_id(data)
    User
    return render_template("edit_books.html",book=book)

@app.route('/process/<int:id>/update',methods=['POST'])
def edit_book_form(id):
    if not Book.validate(request.form):
        return redirect(f"/books/{id}/edit")
    data={**request.form,
        "id":id
    }
    Book.edit(data)
    return redirect("/books")

@app.route('/process/<int:id>/delete',methods=['POST'])
def delete_book(id):
    data={
        "id":id
    }
    Book.delete(data)
    return redirect("/books")


# !=========likes===========
@app.route('/likes/<int:id>')
def like(id):
    data={
        "user_id" :session["user_id"],
        "book_id":id
    }
    Book.likes(data)
    return redirect(f"/books/{id}")

# !=========dislikes===========
@app.route('/dislikes/<int:id>')
def dislike(id):
    data_like={
        "user_id" :session["user_id"],
        "book_id":id
    }
    Book.delete_like(data_like)
    return redirect(f"/books/{id}")