import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
	user: 'postgres',
	host: 'roundhouse.proxy.rlwy.net',
	database: 'railway',
	password: 'QjxQczjpOvysXYvFrAEwUPiQsIhLrvDm',
	port: 25905,
})
export default pool;