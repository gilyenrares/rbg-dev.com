import mysql, { createPool } from 'mysql2';

const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'rbg_system',
});
