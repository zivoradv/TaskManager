const express = require('express');
const mysql = require('mysql');
const taskRoute = require('./Routes/taskRoute');
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'task_manager',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.message);
  } else {
    console.log('Connected to the database');
  }
});

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    req.db = db;
    next();
  });

// API routes
app.get('/tasks', taskRoute.getAllTasks);
app.delete('/tasks/:id', taskRoute.deleteTask);
app.post('/tasks/', taskRoute.createTask);
app.post('/tasks/:username', taskRoute.createTaskByUser);
app.post('/register/', taskRoute.createUser);
app.post('/login/', taskRoute.login);
app.get('/user/:username', taskRoute.getUser);
app.get('/tasks/:username', taskRoute.getTasksByUser);
app.put('/tasks/setStatus/:id', taskRoute.setTaskStatus);
app.put('/tasks/:id', taskRoute.updateTask);

// TEMP TASKS
app.post('/tempTasks/', taskRoute.createTempTask);
app.delete('/tempTasks/:id', taskRoute.deleteTempTask);
app.get('/tempTasks', taskRoute.getTempTasks);
app.put('/tempTasks/setStatus/:id', taskRoute.setTempTaskStatus);
app.put('/tempTasks/:id', taskRoute.updateTempTask);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
