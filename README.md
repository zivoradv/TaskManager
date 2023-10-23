Task Manager Application
The Task Manager is a web application that allows users to manage tasks and to-do lists. It includes features for task creation, user registration and login, and user-specific task management.

Tables
The Task Manager application utilizes three database tables to store and manage data:

Users
The Users table stores information about registered users, including their username, email, and other user-specific data.

Field	Data Type	Description
user_id	Integer	Unique user identifier
username	String	User's chosen username
email	String	User's email address
password	String	User's hashed password
created_at	Timestamp	Date and time of creation
Temp Tasks
The Temp Tasks table is used to store tasks created by guest users who haven't registered. These tasks are temporary and accessible to all visitors of the application.

Field	Data Type	Description
temp_task_id	Integer	Unique temporary task ID
title	String	Title of the temporary task
description	String	Task description
due_date	Date	Due date for the task
Tasks
The Tasks table stores tasks created by registered users. It is linked to the Users table through a foreign key to associate tasks with their respective users.

Field	Data Type	Description
task_id	Integer	Unique task identifier
title	String	Title of the task
description	String	Task description
due_date	Date	Due date for the task
user_id	Integer	Foreign key to Users table
Pages
The Task Manager application consists of various pages to provide users with different functionalities:

View Task Page: Displays a list of tasks, either for all users or, when logged in, for the specific user.

Create Task Page: Allows users to create new tasks, specifying the title, description, and due date.

Registration Page: Provides a form for users to register with the application, creating an account.

Login Page: Enables users to log in to their accounts by providing their credentials.

Profile Page: Offers a user-specific profile page that displays user information and, when logged in, provides access to their tasks.

Installation and Usage
To use the Task Manager application, follow these steps:

Clone this repository to your local machine.

Install the required dependencies using the package manager of your choice (e.g., npm or yarn). Use the following command to install dependencies:

bash
Copy code
npm install
Configure the database connection in the application's settings to match your environment.

Run the application using the appropriate command (e.g., npm start).

Access the application by navigating to the provided URL in your web browser.

License
This Task Manager application is open-source and available under the MIT License. You are free to use, modify, and distribute it as needed.

Contributing
Contributions to this project are welcome. If you find issues or have suggestions for improvements, please open an issue or submit a pull request.

Feel free to customize and expand this README to include additional details about your application or provide instructions for users and contributors.#   T a s k M a n a g e r  
 