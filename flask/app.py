from flask import ( Flask, request )
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

@app.route('/create', methods=[ 'GET', 'POST' ])
def create():
    credentials = request.get_json()
    
    email_credential=credentials['email']
    username_credential=credentials['username']
    password_credential=credentials['password']

    rand_int=random.randint(100000000000, 999999999999)

    new_user = models.User(id = rand_int, email = email_credential, username = username_credential, password = password_credential)
    models.db.session.add(new_user)
    models.db.session.commit()

    user = models.User.query.filter_by(email=F'{email_credential}').first()

    print(user)

    return { 'data': credentials}

@app.route('/login', methods=[ 'POST' ])
def login():
    credentials = request.get_json()

    return { 'data': credentials }

if __name__  ==  '__main__':
    app.run(debug=True)