require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

    try{
      connection.connect((error)=>{
        if(error)
        throw error;
        console.log('MySql connected...');
      });

    } catch (error) {
      console.error('MySql error: ' + error.message + '. Inner Exception: ' + error);
      new Promise(res => setTimeout(res, 10000));
        
    }

// let attempts = 10;
// while (attempts) {
//   try {

//     let queryDespesa = `CREATE TABLE IF NOT EXISTS despesa (
//         id INT NOT NULL AUTO_INCREMENT,
//         date DATETIME NULL,
//         type VARCHAR(45) NULL,
//         value DOUBLE NULL,
//         description VARCHAR(255) NULL,
//         PRIMARY KEY (id));`;

//     let insetSeed1 = `INSERT INTO despesa (id, date, type, value, description)
//                   VALUES (0, "2020-03-17T00:00:00", "0", 30.52, "ifood");`

//     let insetSeed2 = `INSERT INTO despesa (id, date, type, value, description)
//                   VALUES (0, "2020-05-03T00:00:00", "3", 57.08, "Mercado");`;

//     connection.query(queryDespesa, (err, results, fields) => {
//       if (err)
//         throw 'MySql Create Table error: ' + err.message;

//       connection.query(insetSeed1, (err, results, fields) => {
//         if (err)
//           throw 'MySql Insert Seed 1 error: ' + err.message;
//       });

//       connection.query(insetSeed2, (err, results, fields) => {
//         if (err)
//           throw 'MySql Insert Seed 2 error: ' + err.message;
//       });
//     });

//     break;
//   } catch (error) {
//     console.error('MySql error: ' + error.message + '. Inner Exception: ' + error);
//     new Promise(res => setTimeout(res, 10000));
//   }
// }

module.exports = connection;