
exports.up = function(knex) {
    return knex.schema.createTable('professions', function (table) {
        table.increments().unsigned().primary();
        table.string('title').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('professions');
};
