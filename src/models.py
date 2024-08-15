from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask import jsonify ,request

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
CORS(app)


class Items(db.Model):
    #all
    id = db.Column(db.Integer , primary_key = True)
    name = db.Column(db.String(80) ,unique = False , nullable = False)
    type = db.Column(db.String(80) ,unique = False , nullable = False)
    description = db.Column(db.String(80) ,unique = False , nullable = False)
    quantity = db.Column(db.String(80) ,unique = False , nullable = False)

    def to_json(self):
        return{
            "id" : self.id,
            "name" : self.name,
            "type" : self.type,
            "description" : self.description,
            "quantity" : self.quantity,
        }
     

class Users (db.Model):
    id = db.Column(db.Integer , primary_key = True)
    email = db.Column(db.String(80) ,unique = False , nullable = False)
    firstName = db.Column(db.String(80) ,unique = False , nullable = False)
    lastName = db.Column(db.String(80) ,unique = False , nullable = False)

    def to_json(self):
            return{
                "id" : self.id,
                "email" : self.email,
                "firstName" : self.firstName,
                "lastName" : self.lastName,
            }


@app.route("/users" , methods = ["GET"])

def get_users ():
    users = Users.query.all()
    json_users = list(map(lambda x : x.to_json() , users))
    return jsonify({ "Users" : json_users })   

@app.route("/create_users" , methods = ["POST"])
def create_users ():

    email = request.json.get("email")
    firstName = request.json.get("firstName")
    lastName = request.json.get("lastName")
    
    new_user = Users( email = email , firstName = firstName , lastName = lastName )

    try :
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        jsonify({"message" : str(e)}),400


# if __name__ == "__main__":
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)                                        



@app.route("/get_items" , methods = ["GET"])

def get_items ():
    items = Items.query.all()
    json_items = list(map(lambda x : x.to_json() , items))
    return jsonify({ "Items" : json_items })   

@app.route("/create_items" , methods = ["POST"])
def create_items ():

    name = request.json.get("name")
    type = request.json.get("type")
    description = request.json.get("description")
    quantity = request.json.get("quantity")

    if not name or not type or not description or not quantity :
        return(
            jsonify({"message": "you must include name, type, description and quantity "}),
            400
        )
    
    new_item = Items( name = name , type = type , description = description , quantity = quantity)

    try :
        db.session.add(new_item)
        db.session.commit()
    except Exception as e:
        jsonify({"message" : str(e)}),400


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)                                        
