from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/play')          # The "@" decorator associates this route with the function immediately following
def playground1():
    return render_template("index2.html",x=3)  

@app.route('/play/<int:x>')          # The "@" decorator associates this route with the function immediately following
def playground2(x):
    return render_template("index2.html", x=x)


@app.route('/play/<int:x>/<color>')          # The "@" decorator associates this route with the function immediately following
def playground3(x,color):
    return render_template("index2.html", color=color, x=x)








if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)