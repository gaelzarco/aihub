from flask import ( Flask, request )
from dotenv import load_dotenv
import os
import openai
import json

app = Flask(__name__)
load_dotenv()

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