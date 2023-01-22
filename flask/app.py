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

    data = {"model": "text-davinci-003", "prompt":  f"{search}", "temperature": 0.1, "max_tokens": 1000}

    response = requests.post(api_url, headers=headers, json=data)

    if response.status_code == 200:
        return response.json()
    else:
        return response.json()