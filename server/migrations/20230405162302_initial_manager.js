/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('manager', table => {
        table.increments('id');
        table.string('first_name');
        table.string('last_name');
        table.string('user_name').notNullable();
        table.string('password').notNullable();

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('manager');
};
