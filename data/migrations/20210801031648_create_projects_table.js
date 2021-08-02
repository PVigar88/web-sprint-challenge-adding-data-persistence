exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments("project_id");
    tbl.string("project_name").notNullable();
    tbl.string("project_description");
    tbl.integer("project_completed").defaultTo(0); //needs to be false if not provided.
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
