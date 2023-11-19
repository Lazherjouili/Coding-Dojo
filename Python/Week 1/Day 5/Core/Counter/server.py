from flask import Flask,render_template,request,session,redirect
app = Flask(__name__)  

app.secret_key = 'keep it secret, keep it safe' 

@app.route('/' )          
def hello_world():
   
    session['counter']=0
    
    
    return render_template("index.html")


@app.route('/count' )          
def visited():
    session['counter']+=1
    return render_template("index.html")

@app.route('/clear' )          
def clear():
    session.clear()
    return redirect("/")

if __name__=="__main__":       
    app.run(debug=True)    