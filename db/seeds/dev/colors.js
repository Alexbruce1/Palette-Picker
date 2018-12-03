
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('palettes').del()
    .then(() => knex('projects').del())
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('projects').insert({
          name: 'new project',
        }, 'id')
        .then(project => {
          knex('palettes').insert([
            {
              name: "asdf",
              color1: "#ca68a0",
              color2: "#c5bdf0",
              color3: "#a1dac5",
              color4: "#2d4984",
              color5: "#1aeef0",
            },
            {
              name: "asdfg",
              color1: "#1c63b2",
              color2: "#768fec",
              color3: "#a24977",
              color4: "#4ca795",
              color5: "#ef0629",
            },
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
