exports.up = function (knex) {
  return knex.schema.createTable("tasks", (tbl) => {
    tbl.increments("task_id");
    tbl.string("task_description").notNullable();
    tbl.string("task_notes");
    tbl.boolean("task_completed");
    tbl.integer("project_id").references("projects.project_id").notNullable();
  });
};

exports.down = function (knex) {};
