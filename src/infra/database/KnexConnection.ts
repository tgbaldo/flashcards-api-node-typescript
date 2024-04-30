import knex from "knex";

export default class KnexConnection {
  connect() {
    return knex({
      client: 'sqlite3',
      connection: {
        filename: './database.sqlite',
      },
    });
  }
}