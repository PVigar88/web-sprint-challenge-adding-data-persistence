// build your `Resource` model here
// [POST] /api/resources

// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}
//  [GET] /api/resources

// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]

const db = require("../../data/dbConfig");

function getResource() {
  return db("resources");
}

async function addResource(resource) {
  const [resource_id] = await db("resources").insert(resource);

  return {
    resource_id: resource_id,
    resource_name: resource.resource_name,
    resource_description: resource.resource_description,
  };
}

module.exports = { getResource, addResource };
