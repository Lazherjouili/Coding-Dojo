from flask_app.config.mysqlconnection import connectToMySQL

DATABASE="filmmaker"

class Filmmaker:
    def __init__(self,data):
        self.id=data["id"]
        self.title=data["title"]
        self.filmmaker_id=data["filmmaker_id"]
        self.year=data["year"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        

    @classmethod
    def get_all(cls):
        query="select * from movies;"
        movies=[]
        results=connectToMySQL(DATABASE).query_db(query)
        for row in results:
            movies.append(cls(row))

        return movies
    
    @classmethod
    def save(cls,data):
        query="insert into movies (title,filmmaker_id,year) values(%(title)s,%(filmmaker_id)s,%(year)s);"
        
        result=connectToMySQL(DATABASE).query_db(query,data)
        return result
    
    @classmethod
    def get_by_id(cls,data):
        query="""select * from movies 
                where id=%(id)s;
                """
        
        result=connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
    
    @classmethod
    def get_by_filmmaker_id(cls,data):
        query="select *from movies where filmmaker_id=%(id)s"
        movies=[]
        results=connectToMySQL(DATABASE).query_db(query)
        for row in results:
            movies.append(cls(row))

        return movies