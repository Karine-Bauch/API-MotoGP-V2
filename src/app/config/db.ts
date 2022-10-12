const { Pool } = require('pg');

const config = {};

const pool = new Pool(config);

export const client = {
  originalClient: pool,
  async query(...params: any) {
    return this.originalClient.query(...params);
  }
}