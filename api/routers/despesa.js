const express = require('express');
const router = express.Router();
const mysql = require('../context/mysql');

router.get('/api/despesa/getDespesas', function (req, res, next) {
  mysql.query(
      'SELECT * FROM despesa',
      (error, results) => {
        if (error) 
          return res.status(500).json({status: error});
        
          return res.status(200).json(results);
        }
  );
});

router.get('/api/despesa/getById/:id', function (req, res, next) { 
  /*
  #swagger.description = 'Rota para pegar despesa por Id.'
*/
  mysql.query('SELECT * FROM despesa WHERE id =?;',[req.params.id],
    (error, results) => {
      if (error)
      return res.status(500).send({status:500, mensagem:error, data:undefined});

      if(results.length==0)
        return res.status(200).json({status:404, mensagem:"Despesa não encontrada. Id: "+ req.params.id, data:[]});
        
        var despesa = {
          'id':results[0].id,
          'date':results[0].date,
          'type':results[0].type,
          'value':results[0].value,
          'description':results[0].description,
        }
              res.status(200).json({
                status:200,
                mensagem:"Essas são as despesas com esse id:",
                data:[despesa]
              });
      }
    
  );
});

router.get('/api/despesa/getSearch',function (req, res, next){
 
  // criar array 
  var filters=[];
  let query= `SELECT * FROM despesa`;

  //verificar os campos do body e add no array os campos com valor
  if(req.query.date!=undefined){
    query += filters.length==0?" WHERE date=? ":""
    query += filters.length>0? " AND date=? ":""
    filters.push(req.query.date);
  }
  if(req.query.type!=undefined){
    query += filters.length==0?" WHERE type=? ":""
    query += filters.length>0? " AND type=? ":""
    filters.push(req.query.type)
  }
  if(req.query.value!=undefined){
    query += filters.length==0?" WHERE value=? ":""
    query += filters.length>0? " AND value=? ":""
    filters.push(req.query.value)
  }
  if(req.query.description!=undefined){
    query += filters.length==0?` WHERE description LIKE ? `:""
    query += filters.length>0? ` AND description LIKE ? `:"" 
    filters.push('%'+req.query.description+'%')
  }
  mysql.query(
   query,
   filters,        
    (error, results) => {
      if (error)
        return res.status(500).json({status:500, mensagem:error, data:undefined});

      if(results.length==0)
        return res.status(200).json({status:404, mensagem:"Nenhuma despesa foi encontrada .", data:[]});

        return res.status(200).json({
          status:200,
          mensagem:"Essas são as despesas com esse filtro:",
          data:results
        });
      }
    
  );

});


router.post('/api/despesa/create', function (req, res, next) {
  mysql.query(
    `INSERT INTO despesa
     (id,
        date,
        type,
        value,
        description)
        VALUES
        (0,?,?,?,?); `,
        [req.body.date,req.body.type,req.body.value,req.body.description],
        (error, results) => {
          if (error)
            return res.status(500).json({status:500, mensagem:error, data:undefined});

            return res.status(200).json({
              status:200,
              mensagem:"Despesa adicionada com Sucesso!",
              data:[{
                id:results.insertId,
                'date':req.body.date,
                'type':req.body.type,
                'value':req.body.value,
                'description':req.body.description,
              }]
            });
          }
      );
    });

router.patch('/api/despesa/update',function (req, res, next){
      
      mysql.query(

        `UPDATE despesa SET date=?,type=?,value=?,description=? WHERE id=?;`,
        [req.body.date,req.body.type,req.body.value,req.body.description,req.body.id],        
        (error, results) => {
          if (error)
            return res.status(500).json({status:500, mensagem:error, data:undefined});

          if(results.affectedRows==0)
            return res.status(200).json({ status:404, mensagem:"Despesa não encontrada. Id: "+ req.body.id, data:[]});

            return res.status(200).json({
              status:200,
              mensagem:"Despesa alterada com Sucesso!",
              data:[{
                'id':req.body.id,
                'date':req.body.date,
                'type':req.body.type,
                'value':req.body.value,
                'description':req.body.description,
              }]
            });
            
          }
        
      );

    });

router.delete('/api/despesa/delete/:id', function (req, res, next) { 
      mysql.query('DELETE FROM despesa WHERE id =?;',[req.params.id],
        (error, results) => {
          if (error)
          return res.status(500).json({status:500, mensagem:error, data:undefined});

          if(results.affectedRows==0)
          return res.status(200).json({ status:404, mensagem:"Despesa não encontrada. Id: "+ req.params.id, data:[]});

            res.status(200).json({
              status:200,
              mensagem:"Despesa excluída com Sucesso!",
              data:[{
                'id':req.params.id,
              }]
            });
          }
        
      );
    });

  module.exports = router;