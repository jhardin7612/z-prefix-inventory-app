/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('manager').del()
  await knex('manager').insert([
    {first_name: 'jasmine', last_name: 'hardin', username: 'jhardin', password: 'word'},
    {first_name: 'joe', last_name: 'dirt', username: 'jdirt0420', password: 'ilovemoney'}
  ]);
};
