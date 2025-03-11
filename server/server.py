from flask import Flask, request, render_template, jsonify
import json
from config import db

app = Flask(__name__, template_folder="pages") # This is the name of the module/package that is being imported
# This is the name of the package that is being run
# This is the name of the module in Python
# This is the name of the package in Python

# This is an endpoint that will return a string
# when the user goes to the root of the website
# the root is the first page that the user sees
# when they go to the website
# This is the same as the index.html file
# in a static website       
@app.get("/")
def home():
    return render_template("index.html")

@app.get("/about")
def about():
    return render_template("about.html")
# This is an endpoint that will return a string
# when the user goes to the /about page
# This is the same as the about.html file
# in a static website
@app.get("/info")
def info():
    name = {"name":"Koiree Descoteaux"}
    return json.dumps(name)

products = [] # This is a list that will store the products, Not need for mongoDB
# This is a list that will store the products
# This is the same as the products.json file
# This is the same as the products collection in MongoDB

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj

@app.get("/api/products")
def get_products():
# ---- > Now we are returning the products list from MongoDB
# ---- > We are converting the ObjectId to a string
# ---- > We are adding the product to the products list
# ---- > We are returning the products list   

    products_db = []
    cursor = db.products.find({}) # This is a cursor that will go through the products collection
    for product in cursor: # This is a loop that will go through each product in the cursor
        print("product", product)
        # product["_id"] = str(product["_id"]) # This will convert the ObjectId to a string
        products_db.append(fix_id(product)) # This will add the product to the products list
    return json.dumps(products_db)
# ---- > Previously we were returning the products list
    # return json.dumps(products_db)
# This is an endpoint that will return a string
    # return json.dumps(products)
# This is an endpoint that will return a string
# when the user goes to the /api/products page
# This is the same as the products.json file 

@app.post("/api/products")
def post_products():
    #    ---> Here we need to get the product from the request
    product = request.get_json()
    #    ---> We need to add the product to the products list
    # products.append(product)
    #    ---> We need to return the product
    #    ---> We need to convert the product to a json string
    #    ---> We need to return the json string
    db.products.insert_one(product)
# ---- > Now we are adding the product to the products collection in MongoDB
    print(product)
    #    ---> We need to print the product
    return "Product was added"
    #    ---> We need to return the product

@app.put("/api/products/<int:index>")
def put_products(index):
    #    ---> Here we need to specify wich element from products list will be updated
    updatedProduct = request.get_json()
    #    ---> We need to get the updated product from the request
    if 0<= index < len(products):
        #    ---> We need to check if the index is valid
        products[index]=updatedProduct
        #   ---> We need to update the element in the list
        return json.dumps(updatedProduct)
        #    ---> We need to return the updated element
        #    ---> We need to convert the updated element to a json string
        #    ---> We need to return the json string
    else: 
        return "that index does not exist"
    #    ---> We need to return a message if the index does not exist
    
# To delete an element from a list, you need to use - pop
@app.delete("/api/products/<int:index>")
def delete_products(index):
    #    ---> Here we need to specify wich element from products list will be removed
    if 0<= index < len(products):
        deletedProduct = products.pop(index)
    #    ---> We need to use the pop method to remove the element from the list
    #    ---> We need to specify the index of the element that we want to remove
        return json.dumps(deletedProduct)
    #    ---> We need to return the deleted element
    #    ---> We need to convert the deleted element to a json string
    #    ---> We need to return the json string
    else: 
        return "that index does not exist" 
    #    ---> We need to return a message if the index does not exist
    


@app.patch("/api/products/<int:index>")
def patch_products(index):
    #    ---> Here we need to specify wich element from products list will be updated
    patchProducts = request.get_json()
    #    ---> We need to get the updated product from the request
    if 0<= index < len(products):
        #  ---> We need to check if the index is valid
        products[index].update(patchProducts)
        #  ---> We need to update the element in the list
        return json.dumps(patchProducts)
        #  ---> We need to return the updated element
        #  ---> We need to convert the updated element to a json string
        #  ---> We need to return the json string
    else:
        return "That index does not exist"
        #  ---> We need to return a message if the index does not exist

@app.get("/api/product/count")
def product_count():
    # count = len(products)
    # return jsonify({ "count": count })
    count = db.products.count_documents({}) # This will get the number of elements in the products collection   
    #    ---> We need to get the number of elements in the products list
    #    ---> We need to return the number of elements

    return jsonify({ "count": count })
    #    ---> We need to convert the number of elements to a json string
    #    ---> We need to return the json string

@app.get("/api/catalog/<category>")
def product_by_category(category):
    products_by_cat = []
    # for product in products:
    cursor = db.products.find({"category": category}) # This is a cursor that will go through the products collection
    for product in cursor:
        products_by_cat.append(fix_id(product)) # This will add the product to the products list
    #    ---> We need to go through each product in the products list
    #    ---> We need to check if the category of the product matches the category in the request
    #    ---> We need to add the product to the products list
    return json.dumps(products_by_cat)
    #    ---> We need to return the products list




app.run(debug=True) # This pass the changes to the server when we savepush