const db = require("../server");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getAllTasks = (req, res) => {
  const sql = "SELECT * FROM tasks";
  req.db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching tasks." });
    } else {
      res.status(200).json(results);
    }
  });
};

const getTasksByUser = (req, res) => {
  const username = req.params.username;

  const sql = `SELECT tasks.id, tasks.title, tasks.description, due_date, tasks.status FROM tasks INNER JOIN users ON tasks.user_id = users.id WHERE users.username = "${username}"`;

  req.db.query(sql, [username], (err, results) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching tasks." });
    } else {
      const formattedResults = results.map((task) => {
        const formattedDate = task.due_date
          ? new Date(task.due_date).toLocaleDateString("en-US")
          : null;
        return {
          id: task.id,
          title: task.title,
          description: task.description,
          due_date: formattedDate, 
          status: task.status,
          user_id: task.user_id,
        };
      });
      res.status(200).json(formattedResults);
    }
  });
};

const getUser = (req, res) => {
  const username = req.params.username;

  const sql = "SELECT * FROM users WHERE username = ?";

  req.db.query(sql, [username], (err, results) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching user information." });
    } else if (results.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      const user = results[0];
      res.status(200).json(user);
    }
  });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM tasks WHERE id = ${id}`;
  req.db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the task." });
    } else {
      res.status(200).json({ message: "Task deleted successfully" });
    }
  });
};

const createTask = (req, res) => {
  const { title, description, due_date } = req.body;
  const sql =
    "INSERT INTO tasks (title, description, due_date) VALUES (?, ?, ?)";
  const values = [title, description, due_date];

  req.db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while creating the task." });
    } else {
      res.status(201).json({ message: "Task created successfully" });
    }
  });
};

const createTaskByUser = (req, res) => {
  const username = req.params.username;
  const { title, description, due_date } = req.body;

  const getUserQuery = "SELECT id FROM users WHERE username = ?";

  req.db.query(getUserQuery, [username], (err, userResults) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while fetching user." });
    } else {
      const userId = userResults[0].id;

      let formattedDueDate = due_date; 

      if (!due_date) {
        formattedDueDate = new Date().toISOString().slice(0, 10); 
      } else {
        formattedDueDate = new Date(due_date).toISOString().slice(0, 10); 
      }

      const createTaskQuery =
        "INSERT INTO tasks (user_id, title, description, due_date) VALUES (?, ?, ?, ?)";
      const taskValues = [userId, title, description, formattedDueDate];

      req.db.query(createTaskQuery, taskValues, (taskErr, taskResults) => {
        if (taskErr) {
          console.error(taskErr);
          res
            .status(500)
            .json({ error: "An error occurred while creating the task." });
        } else {
          res.status(201).json({ message: "Task created successfully" });
        }
      });
    }
  });
};

const createUser = (req, res) => {
  const { username, password, is_admin, email } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "An error occurred while creating the user." });
    }

    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ error: "An error occurred while creating the user." });
      }

      const sql =
        "INSERT INTO users (username, password, is_admin, last_login_date, email) VALUES (?, ?, ?, now(), ?)";
      const values = [username, hash, is_admin, email];

      req.db.query(sql, values, (err, results) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: "An error occurred while creating the user." });
        }
        res.status(201).json({ message: "User created successfully" });
      });
    });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  const checkUserQuery = "SELECT * FROM users WHERE username = ?";
  req.db.query(checkUserQuery, [username], (err, userResults) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "An error occurred while checking user existence." });
    } else if (userResults.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    const storedPassword = userResults[0].password;

    bcrypt.compare(password, storedPassword, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      const updateLastLoginQuery =
        "UPDATE users SET last_login_date = NOW() WHERE username = ?";
      req.db.query(updateLastLoginQuery, [username], (err, updateResults) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            error: "An error occurred while updating last login time.",
          });
        }
        res.status(200).json({ message: "Login successful" });
      });
    });
  });
};

const setTaskStatus = (req, res) => {
  const taskId = req.params.id;

  const getCurrentStatusQuery = `SELECT status FROM tasks WHERE id = ${taskId}`;

  req.db.query(getCurrentStatusQuery, (err, results) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while getting the task status." });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: "Task not found" });
      } else {
        const currentStatus = results[0].status;

        const newStatus = currentStatus === 0 ? 1 : 0;

        const updateStatusQuery = `UPDATE tasks SET status = ${newStatus} WHERE id = ${taskId}`;

        req.db.query(updateStatusQuery, (updateErr) => {
          if (updateErr) {
            console.error(updateErr);
            res.status(500).json({
              error: "An error occurred while updating the task status.",
            });
          } else {
            res
              .status(200)
              .json({ message: "Task status updated successfully", newStatus });
          }
        });
      }
    }
  });
};

//TEMP TASKS

const createTempTask = (req, res) => {
  const { title, description, due_date } = req.body;

  let sql, values;

  if (due_date) {
    sql = "INSERT INTO temp_tasks (title, description, due_date) VALUES (?, ?, ?)";
    values = [title, description, due_date];
  } else {
    sql = "INSERT INTO temp_tasks (title, description, due_date) VALUES (?, ?, NOW())";
    values = [title, description];
  }

  req.db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while creating a temporary task." });
    } else {
      res.status(201).json({ message: "Temporary task created successfully" });
    }
  });
};


const deleteTempTask = (req, res) => {
  const taskId = req.params.id;

  const sql = `DELETE FROM temp_tasks WHERE id = ${taskId}`;

  req.db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "An error occurred while deleting the temporary task.",
      });
    } else {
      res.status(200).json({ message: "Temporary task deleted successfully" });
    }
  });
};

const getTempTasks = (req, res) => {
  const sql = "SELECT id, title, description, due_date, status FROM temp_tasks";
  req.db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while fetching temporary tasks." });
    } else {
      const formattedResults = results.map((task) => {
        const formattedDate = task.due_date
          ? new Date(task.due_date).toLocaleDateString("en-US")
          : null;
        return {
          id: task.id,
          title: task.title,
          description: task.description,
          due_date: formattedDate,
          status: task.status
        };
      });
      res.status(200).json(formattedResults);
    }
  });
};


const setTempTaskStatus = (req, res) => {
  const taskId = req.params.id;

  const getCurrentStatusQuery = `SELECT status FROM temp_tasks WHERE id = ${taskId}`;

  req.db.query(getCurrentStatusQuery, (err, results) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while getting the task status." });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: "Task not found" });
      } else {
        const currentStatus = results[0].status;

        const newStatus = currentStatus === 0 ? 1 : 0;

        const updateStatusQuery = `UPDATE temp_tasks SET status = ${newStatus} WHERE id = ${taskId}`;

        req.db.query(updateStatusQuery, (updateErr) => {
          if (updateErr) {
            console.error(updateErr);
            res.status(500).json({
              error: "An error occurred while updating the task status.",
            });
          } else {
            res
              .status(200)
              .json({ message: "Task status updated successfully", newStatus });
          }
        });
      }
    }
  });
};

const updateTempTask = (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;

  const sql = `
    UPDATE temp_tasks
    SET title = '${title}', description = '${description}'
    WHERE id = ${taskId}
  `;

  req.db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "An error occurred while updating the temporary task.",
      });
    } else {
      res.status(200).json({ message: "Temporary task updated successfully" });
    }
  });
};

const updateTask = (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;

  const sql = `
    UPDATE tasks
    SET title = '${title}', description = '${description}'
    WHERE id = ${taskId}
  `;

  req.db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "An error occurred while updating the temporary task.",
      });
    } else {
      res.status(200).json({ message: "Temporary task updated successfully" });
    }
  });
};

const numberOfTasksByUser = (req, res) => {
  const username = req.params.username;

  const sql = `
    SELECT COUNT(tasks.id) as taskCount
    FROM tasks
    WHERE tasks.user_id = (SELECT id FROM users WHERE username = ?);
  `;

  req.db.query(sql, [username], (err, results) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the task count." });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: "User not found or has no tasks." });
      } else {
        const taskCount = results[0].taskCount;
        res.status(200).json({ taskCount });
      }
    }
  });
};

module.exports = {
  numberOfTasksByUser,
};

module.exports = {
  getAllTasks,
  deleteTask,
  createTask,
  createUser,
  login,
  getUser,
  getTasksByUser,
  createTaskByUser,
  deleteTempTask,
  getTempTasks,
  createTempTask,
  setTempTaskStatus,
  setTaskStatus,
  updateTempTask,
  updateTask,
  numberOfTasksByUser,
};
