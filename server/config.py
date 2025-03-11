import pymongo
from pymongo import MongoClient
#import certifi  ---> to import the package
import certifi # #pip install certifi  ---> to install the package

# connection_string = "mongodb+srv://qoryhanisagal:passwordcohort55@fsdi-107.sy1tl.mongodb.net/?retryWrites=true&w=majority&appName=fsdi-107"
connection_string = "mongodb+srv://qoryhanisagal:passwordcohort55@fsdi-107.sy1tl.mongodb.net/"
client = pymongo.MongoClient(connection_string, tlsCAFile=certifi.where())
# client = pymongo.MongoClient(connection_string)
# client = pymongo.MongoClient(connection_string, tlsCAFile=certifi.where())
# #tlsCAFile=certifi.where() is used to verify the SSL certificate
# #without it, you will get a warning message
# #this is not a good practice
# #but it is ok for development
# #for production, you should use the certificate
# #tlsCAFile=certifi.where()
# #certifi is a package that provides the certificate
# #tlsCAFile=certifi.where()  ---> to use the certificate                                                                                           
db = client.get_database("organika")
#db = client.get_database("organika")
# #I need to specify the database
# #I can use an existing database or create a new one
# #in this case, I are using an existing database
# #the database is called organika
# #if the database does not exist, it will be created
# #if the database exists, it will be used
# #the database is created when I insert the first document

products_collection = db["products"]
