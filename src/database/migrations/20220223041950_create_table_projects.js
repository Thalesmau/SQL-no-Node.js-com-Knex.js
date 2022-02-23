exports.up = knex => knex.schema.createTable('projects', table => {
    table.increments('id')
    table.text('title')

    //relacionamento

    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp('create_at').defaultTo(knex.fn.now())
    table.timestamp('uptade_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('projects')
