from mysqlconnection import connectToMySQL
DATABASE="users_schema"

class User:
    def __init__(self,date) :
        self.id=date["id"]
        self.first_name=date["first_name"]
        self.last_name=date["last_name"]
        self.email=date["email"]
        self.created_at=date["created_at"]
        self.updated_at=date["updated_at"]

    @classmethod
    def get_all(cls):
        query="select * from users;"
        results=connectToMySQL(DATABASE).query_db(query)
        users=[]
        for row in results:
            users.append(User(row))
        return users
    @classmethod
    def create(cls,date):
        query="""insert into users(first_name,last_name,email) values (%(first_name)s,%(last_name)s,%(email)s) ;

                """
        result=connectToMySQL(DATABASE).query_db(query,date)
        print(result)
        return result
    
    @classmethod
    def get_one(cls,data):
        query="""select * from users
                   WHERE id=%(id)s;
            """
        result=connectToMySQL(DATABASE).query_db(query,data)
        one_user=User(result[0])
        return one_user
    
    @classmethod
    def update(cls,data):
        query="""UPDATE users set first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s
        where id=%(id)s
            """
        result=connectToMySQL(DATABASE).query_db(query,data)
        
        return result
    @classmethod
    def delete(cls,data):
        query="""delete from users 
        where id=%(id)s;
            """
        result=connectToMySQL(DATABASE).query_db(query,data)
        
        return result