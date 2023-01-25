from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer(), primary_key = True)
    email = db.Column(db.String(50), unique = True, nullable = False)
    username = db.Column(db.String(20), unique = True, nullable = False)
    password = db.Column(db.String(255), nullable = False)
    created_on = db.Column(db.Date())
