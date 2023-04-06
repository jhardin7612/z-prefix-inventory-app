/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item').del()
  await knex('item').insert([
    {manager_id: 1, name: 'Jordan 1 Mid SE', description: 'Let them color outside the lines in this fun take on the AJ1. Synthetic leather and screen-printed canvas combine for a bold mix of textures and colors.', quantity: 3},
    {manager_id: 2, name: 'Nike Air Max 270', description: 'The Nike Air Max 270 is all about BIG Air for little feet. Kiddos can see 270 degrees of Air cushioning from the sides to the back. Plus, these everyday kicks are comfy for all of their daily adventures.', quantity: 25},
    {manager_id: 2, name: 'Jordan 1 Mid SE Craft', description: 'Start em young with a true icon. Sporting a suede and textile upper and a soft flexible foam sole, these AJ1s are easy to get on tiny feet in a flash.', quantity: 2}
  ]);
};
