// build your `/api/resources` router here

// [POST] /api/resources

// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}
//  [GET] /api/resources

// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]

const express = require("express");
const Resources = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Resources.getResource()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "There was a server error retreiving resources" });
    });
});

router.post("/", (req, res) => {
  Resources.addResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error Adding new resource" });
    });
});

module.exports = router;
