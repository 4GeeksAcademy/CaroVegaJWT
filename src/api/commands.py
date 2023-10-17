
import click
from api.models import db, User
from flask import Flask, request, jsonify, url_for

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        pass

    @app.route('/user', methods=['GET'])
    def get_users():
        all_users = User.query.all()
        results = list(map(lambda item: item.serialize(),all_users))
        return jsonify(results), 200
    
    @app.route('/signup', methods=['POST'])
    def record_user():
        data_user = request.json 
        userexist = User.query.filter_by(email=data_user['email']).first()
        if userexist:
            return jsonify({"msg":"el email de usuario ya se encuentra registrado"})
        
        new_user = User(  email=data_user['email'],
        password=data_user['password'],
        is_active=True)

        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg":"Su registro se realizo satisfactoriamente"}), 201
    
    @app.route('/signup', methods=['POST'])
    def record_user():
        data_user = request.json 
        userexist = User.query.filter_by(email=data_user['email']).first()
        if userexist:
            return jsonify({"msg":"el email de usuario ya se encuentra registrado"})
        
        new_user = User(  email=data_user['email'],
        password=data_user['password'],
        is_active=True)

        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg":"Su registro se realizo satisfactoriamente"}), 201
    
    @app.route('user/private', methods=['GET'])
    def data_user():
        data_user = request.json 
        userexist = User.query.filter_by(email=data_user['email']).first()
        if userexist:
            return jsonify({"msg":"el email de usuario ya se encuentra registrado"})
        
        new_user = User(  email=data_user['email'],
        password=data_user['password'],
        is_active=True)

        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg":"Su registro se realizo satisfactoriamente"}), 201