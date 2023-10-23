"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, jwt_required, JWTManager,  get_jwt_identity


api = Blueprint('api', __name__)
app = Flask(__name__)
bcrypt = Bcrypt(app)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def get_users():
    all_users = User.query.all()
    results = list(map(lambda item: item.email,all_users))
    return jsonify(results), 200
    
@api.route('/signup', methods=['POST'])
def record_user():
    email_user = request.json.get("email")
    print(email_user)
    password_user = request.json.get("password")
    print(password_user)
    birthdate_user = request.json.get("birthdate")
    print(birthdate_user)
    hobbies_user = request.json.get("hobbies")

    secure_password = bcrypt.generate_password_hash(password_user,10).decode("utf-8")
    print(secure_password)
    userexist = User.query.filter_by(email=email_user).first()
    
    if userexist:
        return jsonify({"msg":"el email de usuario ya se encuentra registrado"})
        
    new_user = User(  email=email_user,
    password=secure_password,
    birthdate = birthdate_user,
    hobbies = hobbies_user,
    is_active=True)

    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg":"Su registro se realizo satisfactoriamente"}), 201
    
@api.route('/login', methods=['POST'])
def login_user():
    email_user = request.json.get("email")
    
    password_user = request.json.get("password")
    

    userexist = User.query.filter_by(email=email_user).first()
    print (type(userexist))
    if not userexist:
        return jsonify({"msg":"Unregistered user"}), 401
    
    if not bcrypt.check_password_hash(userexist.password, password_user):
         return jsonify({"msg":"The password is not correct"}), 401
    
    token=create_access_token(identity=userexist.id)
    return jsonify({"msg":"su usuario y contraseña son correctos", "token":token}), 201
    
# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    # Access the identity of the current user with get_jwt_identity
    id_user = get_jwt_identity()
    datauser=User.query.filter_by(id=id_user).first()
    response_body = {
        "msg": "usuario encontrado", "user":datauser.serialize()
    }
    return jsonify(response_body), 200


