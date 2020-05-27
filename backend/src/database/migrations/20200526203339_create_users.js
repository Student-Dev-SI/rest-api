
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table){
        table.increments('id');
        table.string('username').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
  
        //colocar a data da criação da tabela
        table.timestamp('created_at').defaultTo(knex.fn.now());
        // colocar a data do dia da alteração ou modificação feita na tabela
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users')
  };  
