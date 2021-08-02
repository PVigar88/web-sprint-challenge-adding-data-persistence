exports.up = function (knex) {
  return knex.schema.createTable("project_resources", (tbl) => {
    tbl.increments("project_resource_id");
    tbl
      .integer("project_id")
      .references("projects.project_id")
      .notNullable()
      .unsigned()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("resource_id")
      .references("resources.resource_id")
      .notNullable()
      .unsigned()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project_resources");
};
