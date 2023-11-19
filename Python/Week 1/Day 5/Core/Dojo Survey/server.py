from flask import Flask ,render_template,redirect,request,session # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
app.secret_key = 'keep it secret, keep it safe'



@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return render_template("index.html")  # Return the string 'Hello World!' as a response


@app.route('/result')         
def result():
    
    return render_template("result.html")
@app.route('/forme',methods=['POST'])         
def form():
    session["Name"]=request.form["name"]
    session["Location"]=request.form["location"]
    session["Language"]=request.form["language"]
    session["Comment"]=request.form["comments"]
    print(request.form["name"])
    return redirect('/result')  

@app.route('/clear')         
def clear():
    session.clear()
    return redirect('/')


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.