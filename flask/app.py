from flask import ( Flask, request )
import requests
from dotenv import load_dotenv
import os
import openai

app = Flask(__name__)
load_dotenv()

openai.api_key = os.environ.get('OAI_SECRET_KEY')
openai.Model.list()

@app.route('/', methods=[ 'POST' ])
def index():
    search = request.get_json()

    api_url = 'https://api.openai.com/v1/completions'

    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {openai.api_key}'
    }

    data = {"model": "text-davinci-003", "prompt":  f"{search}", "temperature": 0, "max_tokens": 1000}

    response = requests.post(api_url, headers=headers, json=data)

    if response.status_code == 200 :
        return response.json()
    else:
        return response.json()

@app.route('/image', methods=[ 'POST' ])
def image():
    params = request.get_json()

    response = openai.Image.create(
        prompt = f'{params}',
        n = 1,
        size = "1024x1024",
        response_format = 'b64_json'
    )

    print(response)

    data = response['data'][0]['b64_json']

    if response.status_code == 200 :
        return data
    else : 
        return response.json()