// build your `Project` model here
// [POST] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
//  [GET] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]
const db = require("../../data/dbConfig");

async function getProjects() {
  const projects = await db("projects").select("*");

  const projectsObject = projects.map((project) => {
    return {
      project_id: project.project_id,
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: project.project_completed === 0 ? false : true,
    };
  });
  return projectsObject;
}

async function addProject(project) {
  const [project_id] = await db("projects").insert(project);

  return {
    project_id: project_id,
    project_name: project.project_name,
    project_description: project.project_description,
    project_completed: project.project_completed === 1 ? true : false,
  };
}

module.exports = { getProjects, addProject };
