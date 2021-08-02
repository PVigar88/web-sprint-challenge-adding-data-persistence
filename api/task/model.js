// build your `Task` model here

// [POST] /api/tasks

// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}
//  [GET] /api/tasks

// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
// Each task must include project_name and project_description
// Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]

const db = require("../../data/dbConfig");

async function getTasks() {
  const tasks = await db("tasks as T")
    .leftJoin("projects as P", "P.project_id", "T.task_id")
    .select("T.*", "P.project_name", "P.project_description");

  const taskObject = tasks.map((task) => {
    return {
      task_id: task.task_id,
      task_description: task.task_description,
      task_notes: task.task_notes,
      task_completed: task.task_completed ? true : false,
      project_id: task.project_id,
      project_name: task.project_name,
      project_description: task.project_description,
    };
  });
  return taskObject;
}

async function addTask(task) {
  const [task_id] = await db("task")
    .leftJoin("projects as P", "P.project_id", "T.task_id")
    .insert(task);

  return {
    task_id: task_id,
    task_description: task.task_description,
    task_notes: task.task_notes,
    task_completed: task.task_completed ? true : false,
    project_id: task.project_id,
    project_name: task.project_name,
    project_description: task.project_description,
  };
}

module.exports = { getTasks, addTask };
