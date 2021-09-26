
exports.up = function(knex) {
    return knex.schema.createTable('profile_clicks', function (table) {
        table.increments().unsigned().primary();
        table.integer('user_id').notNullable();
        table.integer('clicked_by').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('profile_clicks');
};
