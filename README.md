# IT2234-P--Web-services-Server-Technology
🍃 MongoDB Hands-On
DB Creation | Collections | CRUD | Queries

Key Terms.
Database → Holds collections

Collection → Like a table (stores documents)

Document → BSON-style object

🄚 _id → Auto-generated, unique identifier

🏗️ Create a Database & Collection Using Compass
Create Database -> Database Name -> Collection Name -> Create Database

![1](https://github.com/user-attachments/assets/1419d493-e2ba-4fad-b391-b36a662a5f82)



✍️ Insert Documents Using Compass

Insert Document -> insert keys and values.

![2](https://github.com/user-attachments/assets/6c5527e2-ebb7-4abd-b1ef-f2236a74f753)

se format button to make the document permitted.


✍️ Edit Documents Using Compass

Edit -> Make changes -> Update

![3](https://github.com/user-attachments/assets/9592c8e8-d46d-4a05-ab65-20566caa297b)

✍️ Insert Documents Using MongoDB Shell

Change database and display available databases and collections.

![4](https://github.com/user-attachments/assets/b2cc79c9-4590-44fb-b8eb-6828bec45172)


Enter one document - insertOne()

  db.students.insertOne({
  "regno": "2021IT006",
  "name": "Nova",
  "age": 24,
  "gender": "Male",
  "degree": "IT",
  "skills": [
    "JS",
    "MongoDb",
    "Nodejs"
  ]
})



![5](https://github.com/user-attachments/assets/e08bf123-6d7b-4555-bb4a-c2152470091f)

Inserted Documents.


![6](https://github.com/user-attachments/assets/e741ca97-5e5b-4a64-8fe9-cdd7dd3e6e7a)








