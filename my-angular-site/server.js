//const cors = require('cors');
const express = require('express');
const app = express();
const oracledb = require ('oracledb');
const dbConfig = require ('./dbconfig');
const bodyParser = require('body-parser');

//app.use(cors());
//app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next){

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.header('Access-Control-Credentials', true);
    //res.status(200).json({message: 'It works!'});
    next();
    //res.end();
});

app.get("/api/getUser", function(req, res){
    //res.status(200).json({message: 'getuser'});
    console.log("api/user");
    var connection = oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        function(err, connection){
            if (err) {console.error(err); res.send(err);}

            connection.execute(
                'SELECT * FROM USER_DEF',
                function(err,result)
                {
                    if(err){
                        console.error(err);
                        res.send(err);
                    }
                    else {
                        console.log(result.rows);

                        //return result.rows;
                        doRelease(connection);
                        res.json(result.rows);
                    }
                });
        });
})

function doRelease(connection) {
    connection.close(
        function(err) {
            if (err)
                console.error(err.message);
        });
}


/************* ACTIVITÉS *******************/
app.get("/api/getMaListeActivite", function(req, res){
    //res.status(200).json({message: 'getMaListeActivite'});
    console.log("api/getMaListeActivite");
    var connection = oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        function(err, connection){
            if (err) {console.error(err); res.send(err);}

            connection.execute(
                'SELECT * FROM ACTIVITIES',
                function(err,result)
                {
                    if(err){
                        console.error(err);
                        res.send(err);
                    }
                    else {
                        console.log(result.rows);

                        res.json(result.rows);
                    }
                });
        });
})


//module.exports = app;
app.listen(3000, function () {
    console.log('listen port 3000')
});
