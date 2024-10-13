# BookStore MERN Application

## Overview

This project is a BookStore application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, read, update, and delete books from a database.

## Project Structure


![Screenshot 2024-10-13 155338](https://github.com/user-attachments/assets/fdcd1807-7fe5-4304-a03d-237574fee64c)

## Backend

The backend is built using Node.js and Express.js. It connects to a MongoDB database to store and retrieve book data.

### Installation
  
  1. Navigate to the `backend` directory:
     ```bash
     cd backend
  
  2. Install the dependencies:
     ```bash  
     npm install 
  3. Create a `.env` file in the `ackend` directory and add your MongoDB connection string
     ```bash
     MONGODB_URL=your_mongodb_connection_string
     PORT=5555

### Running the Backend
   Start the backend server:
   ```bash
   npm start
   ```

### API Endpoints

   1.```GET /books:``` Retrieve all books.
  
   2.```POST /books:``` Create a new book.
  
   3.```PUT /books/:id:``` Update a book by ID.
  
   4.```DELETE /books/:id:``` Delete a book by ID.


## Backend
  The frontend is built using React.js. It provides a user interface to interact with the backend API.

### Installation
  1.Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
    
  2.Install the dependencies:
    ```bash
    npm install
    ```
    
### Running the Frontend
Start the frontend development server:
  ```bash
  npm start
  ```
### Components
  ```Spinner:``` A loading spinner component.
  
  ```BackButton:``` A button to navigate back to the previous page.
### Pages
  ```Home:``` Displays a list of books and provides options to edit or delete them.

  ```CreateBooks:``` A form to create a new book.


### How It Works
1.Home Page: When the user navigates to the home page, a request is made to the backend to fetch all books. The books are then displayed in a list with options to edit or delete each book.

2.Create Book: When the user navigates to the create book page, they can fill out a form to add a new book. Upon submission, a request is made to the backend to create the book, and the user is redirected back to the home page.

3.Edit Book: When the user clicks the edit button on a book, they are taken to a form pre-filled with the book's details. They can update the details and submit the form to update the book in the backend.

4.Delete Book: When the user clicks the delete button on a book, a request is made to the backend to delete the book, and the book is removed from the list.


## Contributing
Feel free to submit issues and pull requests for new features, improvements, and bug fixes.

## License
This project is licensed under the MIT License.

