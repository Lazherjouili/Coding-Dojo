from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash



class Dojo:
    def __init__(self,data):
        self.id=data["id"]
        self.name=data['name']
        self.location=data['location']
        self.language=data['language']
        self.comments=data['comments']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']


    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO dojos (name,location,language,comments)
                VALUES (%(name)s,%(location)s,%(language)s,%(comments)s);
                """

        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_by_id(cls,data):
        query = """
                select * from dojos where id =%(id)s
                """

        result=connectToMySQL(DATABASE).query_db(query,data)
        
        if len(result) < 1:
            return False

        return cls(result[0])
    




    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["name"]) < 2:
            is_valid = False
            flash(" name must be at least 3 characters")

        if len(data["location"]) < 1:
            is_valid = False
            flash(" must choose a location")

        if len(data["language"]) < 1:
            is_valid = False
            flash("  must choose favorite language")
        if len(data["comments"]) < 3:
            is_valid = False
            flash(" comments must be at least 3 characters")
        
            
        return is_valid