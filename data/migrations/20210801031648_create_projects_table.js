exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments("project_id");
    tbl.string("project-name").notNullable();
    tbl.string("project_description");
    tbl.boolean("project_completed"); //needs to be false if not provided.
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
