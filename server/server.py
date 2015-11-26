# all the imports
from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash

# configuration
DEBUG = True
SECRET_KEY = 'development keyfghkfbbqrbqebcrwejen.'


from flask import Flask
app = Flask(__name__)
app.config.from_object(__name__)

@app.route("/")
def index():
    return render_template('index.html')


@app.route("/contact")
def contact():
    return render_template('contact.html')


@app.route("/price")
def contact():
    return render_template('price.html')


@app.route("/opininons")
def contact():
    return render_template('opininons.html')


if __name__ == "__main__":
    app.run()
