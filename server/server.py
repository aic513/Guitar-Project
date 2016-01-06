# -*- coding: utf-8
# all the imports
from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash, jsonify
from flask.ext.mail import Mail, Message

# configuration
ADMINS = ['admin@guitar40.ru', 'info@guitar40.ru']

DEBUG = True
SECRET_KEY = 'development keyfghkfbbqrbqebcrwejen.'

MAIL_SERVER = 'smtp.yandex.ru'
MAIL_PORT = 465
MAIL_USE_SSL = True
MAIL_USERNAME = 'admin@guitar40.ru'
MAIL_PASSWORD = '123456789q'

app = Flask(__name__)
app.config.from_object(__name__)

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html', index=True)


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/price')
def price():
    return render_template('price.html')


@app.route('/feedback')
def feedback():
    return render_template('feedback.html')


@app.route('/send', methods=['GET', 'POST'])
def form():
    if request.method == 'GET':
        return render_template('register.html')

    elif request.method == 'POST':

        data = request.get_json()

        user = data['user']
        phone = data['phone']
        email = data['email']

        msg = Message('Заявка с сайта Guitar40', sender = ADMINS[0], recipients = ADMINS)
        msg.body = 'Имя: ' + user + '\nТелефон: ' + phone + '\nEmail: ' + email
        msg.html = '<b>Имя:</b> ' + user + '<br><b>Телефон:</b> ' + phone + '<br><b>Email:</b> ' + email
        mail.send(msg)

        return jsonify(data)


if __name__ == '__main__':
    app.run()
