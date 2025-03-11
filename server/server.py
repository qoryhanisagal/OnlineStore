from flask import Flask, request
import json

app = Flask(__name__) # This is the name of the module/package that is being imported
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
    return "Hello World from Flask"

@app.get("/about")
def about():
    return "Hello this is the about page"
# This is an endpoint that will return a string
# when the user goes to the /about page
# This is the same as the about.html file
# in a static website
@app.get("/info")
def info():
    name = {"name":"Koiree Descoteaux"}
    return json.dumps(name)

products = []
@app.get("/api/products")
def get_products():
    return json.dumps(products)
# This is an endpoint that will return a string
# when the user goes to the /api/products page
# This is the same as the products.json file    

@app.post("/api/products")
def post_products():
    #    ---> Here we need to get the product from the request
    product = request.get_json()
    #    ---> We need to add the product to the products list
    products.append(product)
    #    ---> We need to return the product
    #    ---> We need to convert the product to a json string
    #    ---> We need to return the json string
    print(product)
    #    ---> We need to print the product
    return json.dumps(product)
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
    
# just remember that to delete an element from a list, you need to use - pop
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
    
# try this to the patch, but use this logic instead - list[index].update(object)

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

app.run(debug=True) # This pass the changes to the server when we save