from flask import Flask,render_template ,redirect,request,session
import random



app = Flask(__name__)   
app.secret_key = 'keep it secret, keep it safe'


@app.route('/')          
def hello_world():
    if 'great' not in session:
        
        session["great"]=random.randint(1, 100)
        
    return   render_template("index.html")

@app.route('/guess',methods=['POST'] )          
def guess():
    print(request.form["number"])
    session["num"]=int(request.form["number"])
    return   redirect("/")

@app.route('/clear' )          
def clear():
    
    session.clear()
    return   redirect("/")



if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

