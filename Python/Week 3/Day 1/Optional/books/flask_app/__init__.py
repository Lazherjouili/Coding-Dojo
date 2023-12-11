from flask import Flask
DATABASE="users_books"
app = Flask(__name__)
app.secret_key = "shhhhhh"
