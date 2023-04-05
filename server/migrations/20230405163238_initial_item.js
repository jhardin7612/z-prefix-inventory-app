/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.createTable('item', table => {
            table.increments('id');
            table.integer('manager_id').notNullable();
            table.foreign('manager_id').references('manager.id').deferrable('deferred');
            table.string('item_name').notNullable();
            table.string('description');
            table.integer('quantity');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('item', table => {
        table.dropForeign('manager_id');
        table.dropColumn('manager_id');
    })
    .then(() => {
        return knex.schema.dropTableIfExists('item');
    })
};
