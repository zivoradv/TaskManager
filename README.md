# Task Manager Application

The Task Manager is a web application that empowers users to efficiently manage their tasks and to-do lists. It provides a comprehensive set of features for task creation, user registration and login, and user-specific task management.

## Tables

The Task Manager application relies on three essential database tables to store and manage data:

### Users

The Users table is responsible for storing information about registered users. It captures user-specific details such as their username, email, and password. Here's a breakdown of the fields in this table:

- **user_id**: Integer - A unique user identifier.
- **username**: String - User's chosen username.
- **email**: String - User's email address.
- **password**: String - User's securely hashed password.
- **created_at**: Timestamp - Date and time of user account creation.

### Temp Tasks

The Temp Tasks table is utilized to hold tasks created by guest users who have not yet registered. These tasks are temporary and can be accessed by all visitors of the application. The table consists of these fields:

- **temp_task_id**: Integer - A unique temporary task ID.
- **title**: String - Title of the temporary task.
- **description**: String - Task description.
- **due_date**: Date - Due date for the task.

### Tasks

The Tasks table stores tasks created by registered users and is linked to the Users table through a foreign key, associating tasks with their respective users. This table includes the following fields:

- **task_id**: Integer - A unique task identifier.
- **title**: String - Title of the task.
- **description**: String - Task description.
- **due_date**: Date - Due date for the task.
- **user_id**: Integer - Foreign key referring to the Users table.

## Pages

The Task Manager application offers a range of pages to cater to various user functionalities:

- **View Task Page**: This page displays a list of tasks, either for all users or, when logged in, for the specific user.

- **Calendar**: Users can preview the dates and see highlighted, important dates.

- **Create Task Page**: Users can create new tasks on this page, specifying the title, description, and due date.

- **Registration Page**: This is where users can register with the application, creating their accounts.

- **Login Page**: Users can log in to their accounts by providing their credentials on this page.

- **Profile Page**: A user-specific profile page that displays user information and, when logged in, provides access to their tasks.

## Installation and Usage

To get started with the Task Manager application, follow these simple steps:

1. Clone this repository to your local machine.
2. Install the required dependencies using your preferred package manager (e.g., npm or yarn). Use the following command to install dependencies.
3. Go to backend folder (cd ./backend), run `npm start`.
4. Open new terminal (click on the "+" sign)
5. Go to frontend folder (cd ./frontend), run `npm run dev`.
