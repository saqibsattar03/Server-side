
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('professions').del()
    .then(function () {
      // Inserts seed entries
      return knex('professions').insert([
        {title: 'Cleaner'},
        {title: 'Gardener'},
        {title: 'Removalist'},
        {title: 'Carpet Cleaner'},
        {title: 'Pest Control'},
        {title: 'Graphic Designer'},
        {title: 'Web Designer'},
        {title: 'Tax Accountant'},
        {title: 'Photographer'},
        {title: 'Builder'},
        {title: 'Painter'},
        {title: 'Window Cleaner'},
        {title: 'Windscreen Repairer'},
        {title: 'Party and Event Planner'},
        {title: 'Electrician'},
        {title: 'Personal Trainer'},
        {title: 'Kitchen Renovations'},
        {title: 'Air Conditioning and Heating'},
        {title: 'Plumber'},
      ]);
    });
};
