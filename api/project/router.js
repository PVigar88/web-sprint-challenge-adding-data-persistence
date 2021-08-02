// build your `/api/projects` router here

// [POST] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
//  [GET] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]
const express = require("express");
const Projects = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "There was a server error retreiving projects" });
    });
});

router.post("/", (req, res) => {
  Projects.addProject(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error Adding new project" });
    });
});

module.exports = router;
