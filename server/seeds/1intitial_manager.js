/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('manager').del()
  await knex('manager').insert([
    {first_name: 'jasmine', last_name: 'hardin', user_name: 'jhardin0101', password: 'sdi15!'},
    {first_name: 'joe', last_name: 'dirt', user_name: 'jdirt0420', password: 'ilovemoney'}
  ]);
};
