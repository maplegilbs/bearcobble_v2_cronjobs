//Libraries
import mysql from 'mysql2';
// import dotenv from 'dotenv' //Local development only
// dotenv.config();

const pool = mysql.createPool(
    {
        host: process.env.REMOTE_HOST,
        user: process.env.REMOTE_USER,
        password: process.env.REMOTE_PASSWORD,
        database: process.env.REMOTE_DATABASE
    }
).promise()

const getSomeData = async (pastTime) => {
    const queryResult = await pool.query(
        `
        select *
        from vacuumlogs
        order by recordDateTime desc
        limit 10
        `
    )
    return queryResult[0]
}

const queryResults = await getSomeData(24);
console.log(queryResults)