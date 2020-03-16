const express = require('express')
const app = express()
const mariadb = require('mariadb');
const port = 3299

const pool = mariadb.createPool({
     host: '192.168.7.22', 
     user:'testuser', 
     password: 'testpass',
     connectionLimit: 5
});
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT id from test.temp");
	console.log(rows); //[ {val: 1}, meta: ... ]
  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

app.get('/', (req, res) => res.send('Hello World FROM SANJIB BEHERA LAXMI CHOWK HINJEWADI PUNE!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
