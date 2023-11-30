from flask_app import DATABASE
from flask_app.models import user_model 
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

class Recipe:
    def __init__(self,data) :
        self.id=data["id"]
        self.name=data["name"]
        self.description=data["description"]
        self.instructions=data["instructions"]
        self.date_cooked=data["date_cooked"]
        self.under30=data["under30"]
        self.user_id=data["user_id"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        self.creator=None

    @classmethod
    def save(cls,data):
        query="""INSERT INTO recipes(name,description,instructions,date_cooked,under30,user_id)
                values (%(name)s,%(description)s,%(instructions)s,%(date_cooked)s,%(under30)s,%(user_id)s); 
            """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def edit(cls,data):
        query="""UPDATE recipes set name=%(name)s,description=%(description)s,instructions=%(instructions)s,
        date_cooked=%(date_cooked)s,under30=%(under30)s,user_id=%(user_id)s
        where id=%(id)s; 
            """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query="""delete from recipes 
        where id=%(id)s; 
            """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_all(cls):
        query="""select * from recipes
                join users on users.id=recipes.user_id; 
            """
        results= connectToMySQL(DATABASE).query_db(query)
        recipes=[]
        for row in results:
            one_recipe = cls(row)
            data={
                **row,
                "id":row["users.id"],
                "created_at":row["users.created_at"],
                "updated_at":row["users.updated_at"]
            }
            one_recipe.creator=user_model.User(data)
            recipes.append(one_recipe)

        return recipes
    
    # ? === GET USER BY ID
    @classmethod
    def get_recipe_by_id(cls, data):
        query = """
                     SELECT * FROM recipes
                    WHERE id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query, data)
       

        return cls(result[0])
    @classmethod
    def get_recipe_by_user(cls,data):
        query = """
                     SELECT * FROM recipes
                    join users on users.id=recipes.user_id
                        WHERE recipes.id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query, data)
        recipe=cls(result[0])
        data={
                **result[0],
                "id":result[0]["users.id"],
                "created_at":result[0]["users.created_at"],
                "updated_at":result[0]["users.updated_at"]
            }
        recipe.creator=user_model.User(data)
        return recipe





    # * ========= USER VALIDATOR =========
    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["name"]) < 2:
            is_valid = False
            flash("name must be at least 3 characters ")
        
        if len(data["description"]) < 2:
            is_valid = False
            flash("description must be at least 3 characters")
        
        if len(data["instructions"]) < 2:
            is_valid = False
            flash("instructions must be at least 3 characters")

        return is_valid