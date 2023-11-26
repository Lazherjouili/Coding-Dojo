from flask_app.config.mysqlconnection import connectToMySQL

DATABASE="filmmaker"

class Filmmaker:
    def __init__(self,data):
        self.id=data["id"]
        self.name=data["name"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        

    @classmethod
    def get_all(cls):
        query="select * from filmmakers;"
        film_makers=[]
        results=connectToMySQL(DATABASE).query_db(query)
        for row in results:
            film_makers.append(cls(row))

        return film_makers
    
    @classmethod
    def save(cls,data):
        query="insert into filmmakers (name) values(%(name)s);"
        
        result=connectToMySQL(DATABASE).query_db(query,data)
        return result
    
    @classmethod
    def get_by_id(cls,data):
        query="""select * from filmmakers 
                where id=%(id)s;
                """
        
        result=connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])