
/* We need to add a valid URI string */
const myURI = 'postgres://vryumiht:n4vaa43hqwZV9pndx5LeEwn1K9IT0oUi@castor.db.elephantsql.com/vryumiht';

/*if you're working on a web app/software which makes frequent queries you'll want to use 
a connection pool
*/

const { Pool } = require('pg');

const URI = process.env.PG_URI || myURI;

/* Pool is just the object that gives us access to the query method */
const pool = new Pool({
    connectionString: URI
});

/* Below we are exporting a module object with a query Key that have the value of
a function definition referring to the Query method on the pool object initialized above */
module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}; // <-- export your model