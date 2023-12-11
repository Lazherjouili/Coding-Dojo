from flask_app import DATABASE
from flask_app.models import user_model 
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

class Book:
    def __init__(self,data) :
        self.id=data["id"]
        self.title=data["title"]
        self.author=data["author"]
        self.my_thoughts=data["my_thoughts"]
        self.user_id=data["user_id"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        self.creator=None

    @classmethod
    def save(cls,data):
        query="""INSERT INTO books(title,author,my_thoughts,user_id)
                values (%(title)s,%(author)s,%(my_thoughts)s,%(user_id)s); 
            """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def edit(cls,data):
        query="""UPDATE books set title=%(title)s,author=%(author)s,my_thoughts=%(my_thoughts)s
        where id=%(id)s; 
            """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query="""delete from books 
        where id=%(id)s; 
            """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_all(cls):
        query="""select * from books
                join users on users.id=books.user_id; 
            """
        results= connectToMySQL(DATABASE).query_db(query)
        books=[]
        for row in results:
            one_book = cls(row)
            data={
                **row,
                "id":row["users.id"],
                "created_at":row["users.created_at"],
                "updated_at":row["users.updated_at"]
            }
            one_book.creator=user_model.User(data)
            books.append(one_book)

        return books
    
    # ? === GET USER BY ID
    @classmethod
    def get_book_by_id(cls, data):
        query = """
                     SELECT * FROM books
                    WHERE id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query, data)
       

        return cls(result[0])
    @classmethod
    def get_book_by_user(cls,data):
        query = """
                     SELECT * FROM books
                    join users on users.id=books.user_id
                        WHERE books.id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query, data)
        book=cls(result[0])
        data={
                **result[0],
                "id":result[0]["users.id"],
                "created_at":result[0]["users.created_at"],
                "updated_at":result[0]["users.updated_at"]
            }
        book.creator=user_model.User(data)
        return book





    # * ========= USER VALIDATOR =========
    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["title"]) < 1:
            is_valid = False
            flash("title must not be blank ")
        
        if len(data["author"]) < 1:
            is_valid = False
            flash("author must not be blank")
        
        if len(data["my_thoughts"]) < 1:
            is_valid = False
            flash("my thoughts must not be blank")

        return is_valid