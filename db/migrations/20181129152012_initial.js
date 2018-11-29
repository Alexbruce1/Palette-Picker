
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects', projects => {
      projects.increments('id').primary();
      projects.string('title');

      projects.timestamps(true, true);
    }),
    knex.schema.createTable('palettes', palettes => {
      palettes.increments('id').primary();
      palettes.string('color1');
      palettes.string('color2');
      palettes.string('color3');
      palettes.string('color4');
      palettes.string('color5');
      palettes.string('title');
      palettes.integer('project_id').unsigned();
      palettes.foreign('project_id').references('projects.id');

      palettes.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  
};
