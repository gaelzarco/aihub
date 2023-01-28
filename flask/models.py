from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from json import JSONEncoder

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.BigInteger(), primary_key = True, nullable = False)
    email = db.Column(db.Text(), unique = True, nullable = False)
    username = db.Column(db.Text(), unique = True, nullable = False)
    password = db.Column(db.Text(), nullable = False)
    created_on = db.Column(db.Date(), default = datetime.utcnow)

class UserEncoder(JSONEncoder):
    def default(self, o):
        return o.__dict__