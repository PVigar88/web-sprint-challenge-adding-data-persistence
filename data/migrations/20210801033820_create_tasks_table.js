exports.up = function (knex) {
  return knex.schema.createTable("tasks", (tbl) => {
    tbl.increments("task_id");
    tbl.string("task_description").notNullable();
    tbl.string("task_notes");
    tbl.integer("task_completed").defaultTo(0);
    tbl
      .integer("project_id")
      .unsigned()
      .references("projects.project_id")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};
