from flask import ( Flask, request, make_response )
from flask_migrate import Migrate
from dotenv import load_dotenv
import openai
import os
import json
import random
import models

app = Flask(__name__)
load_dotenv()

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

models.db.init_app(app)
migrate = Migrate(app, models.db)

openai.api_key = os.environ.get('OAI_SECRET_KEY')
openai.Model.list()

@app.route('/', methods=[ 'POST' ])
def index():
    query = request.get_json()

    response = openai.Completion.create(
        model = 'text-davinci-003',
        prompt = query,
        temperature = 0,
        max_tokens = 1000
    )

    return response

@app.route('/image', methods=[ 'POST' ])
def image():
    query = request.get_json()

    response = openai.Image.create(
        prompt = query['prompt'],
        n = query['n'],
        size = '1024x1024',
        response_format = 'b64_json'
    )

    return json.dumps(response['data'])

@app.route('/create', methods=[ 'POST' ])
def create():
    credentials = request.get_json()
    
    email_credential = credentials['email']
    username_credential = credentials['username']
    password_credential = credentials['password']

    rand_int = random.randint(100000000000, 999999999999)
    id_credential = rand_int

    if models.User.query.filter_by(id=id_credential).first():
        return make_response(json.dumps({ 'err': 'User with assigned user ID already exists. This is a server error. Please try again.' }), 400)
    elif models.User.query.filter_by(email=email_credential).first():
        return make_response(json.dumps({ 'err': 'User with selected email already exists. Please try a different one.' }), 400)
    elif models.User.query.filter_by(username=username_credential).first():
        return make_response(json.dumps({ 'err': 'User with selected username already exists. Please try a different one.' }), 400)

    new_user = models.User(id = id_credential, email = email_credential, username = username_credential, password = password_credential)
    models.db.session.add(new_user)
    models.db.session.commit()

    found_user = models.User.query.filter_by(id=id_credential).first()

    user = {
        'email': found_user.email,
        'username': found_user.username
    }

    return json.dumps(user)

@app.route('/login', methods=[ 'POST' ])
def login():
    credentials = request.get_json()

    email_credential = credentials['email']
    username_credential = credentials['username']
    password_credential = credentials['password']

    print(bool(models.User.query.filter_by(email=email_credential).first()))

    if bool(models.User.query.filter_by(email=email_credential).first()) != True:
        return make_response(json.dumps({ 'err': 'Entered email does not match. Please try again.' }), 400)
    elif bool(models.User.query.filter_by(username=username_credential).first()) != True:
        return make_response(json.dumps({ 'err': 'Entered username does not match. Please try again.' }), 400)
    elif bool(models.User.query.filter_by(password=password_credential).first()) != True:
        return make_response(json.dumps({ 'err': 'Entered password does not match. Please try again.' }), 400)

    found_user = models.User.query.filter_by(email=email_credential).first()

    user = {
        'email': found_user.email,
        'username': found_user.username
    }

    return json.dumps(user)

if __name__  ==  '__main__':
    app.run(debug=True)