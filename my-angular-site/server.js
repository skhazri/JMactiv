//const cors = require('cors');

const express = require('express');
const app = express();
const oracledb = require ('oracledb');
const dbConfig = require ('./dbconfig');
const bodyParser = require('body-parser');
const moment = require('moment');

//app.use(cors());
//app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next){

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
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
app.get("/api/getMaListeActivite/:userid", function(req, res){
    //res.status(200).json({message: 'getMaListeActivite'});
    const uid = parseInt(req.params.userid, 10);
    console.log("api/getMaListeActivite " + uid);

    var connection = oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        function(err, connection){
            if (err) {console.error(err); res.send(err);}

            connection.execute(
                'SELECT * FROM ACTIVITIES WHERE USERID = :id',
                [ uid ],
                function(err,result)
                {
                    if(err){
                        console.error(err);
                        res.send(err);
                    }
                    else {
                        console.log(result.rows);
                        doRelease(connection);
                        res.json(result.rows);
                    }
                });
        });
})

app.get("/api/getMonActivite/:activityid", function(req, res){
    const activityid = parseInt(req.params.activityid, 10);
    console.log("api/getMonActivite " + activityid);

    var connection = oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        function(err, connection){
            if (err) {console.error(err); res.send(err);}

            connection.execute(
                'SELECT * FROM ACTIVITIES WHERE ACTIVITYID = :id',
                [ activityid ],
                function(err,result)
                {
                    if(err){
                        console.error(err);
                        res.send(err);
                    }
                    else {
                        console.log(result.rows);
                        doRelease(connection);
                        res.json(result.rows);
                    }
                });
        });
})


app.post("/api/SaveActivity", function(req, res) {
    console.log("/api/SaveActivity")
    console.log(req.body.activitytype);
    const uid = parseInt(req.body.userid, 10);
    const duration =parseInt(req.body.activityduration, 10);
    let date = new Date(Date.parse(req.body.starttime));

    console.log(uid);
    console.log(duration);
    console.log(date);

    var connection = oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        function(err, connection){
            if (err) {console.error(err); res.send(err);}

            connection.execute(
                "INSERT INTO ACTIVITIES (ACTIVITYTYPE, STARTTIME, DURATION, ACTIVITYLOCATION, USERID) VALUES (:activitytype, :starttime, :activityduration, :activitylocation, :userid) " ,
                [ req.body.activitytype, date,
                    duration, req.body.activitylocation, uid],
                { autoCommit: true },
                function(err,result)
                {
                    if(err){
                        console.error(err);
                        res.send(err);
                    }
                    else {
                        console.log(result.rowsAffected);
                        res.json(1);
                        doRelease(connection);
                    }
                });
        });

})

app.post("/api/UpdateActivity", function(req, res) {
    console.log("/api/UpdateActivity")
    console.log(req.body.activitytype);
    const actid = parseInt(req.body.activityid, 10);
    const duration =parseInt(req.body.activityduration, 10);
    let date = new Date(Date.parse(req.body.starttime));

    console.log(actid);
    console.log(duration);
    console.log(date);

    var connection = oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        function(err, connection){
            if (err) {console.error(err); res.send(err);}

            connection.execute(
                "UPDATE ACTIVITIES SET ACTIVITYTYPE = :activitytype, STARTTIME = :starttime, DURATION = :activityduration, ACTIVITYLOCATION = :activitylocation where ACTIVITYID = :activityid " ,
                [ req.body.activitytype, date,
                    duration, req.body.activitylocation, actid],
                { autoCommit: true },
                function(err,result)
                {
                    if(err){
                        console.error(err);
                        res.send(err);
                    }
                    else {
                        console.log(result.rowsAffected)
                        res.json(1);
                        doRelease(connection);
                    }
                });
        });

})

app.post("/api/DeleteActivity", function(req, res) {
    //const actid = parseInt(req.params, 10);
    const actid = parseInt(req.body.activityid, 10);
    console.log("/api/DeleteActivity" + actid);


    console.log(actid);

    var connection = oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        function(err, connection){
            if (err) {console.error(err); res.send(err);}

            connection.execute(
                "DELETE FROM ACTIVITIES where ACTIVITYID = :activityid " ,
                [ actid],
                { autoCommit: true },
                function(err,result)
                {
                    if(err){
                        console.error(err);
                        res.send(err);
                    }
                    else {
                        console.log(result.rowsAffected);
                        res.json(1);
                        doRelease(connection);
                    }
                });
        });
})

app.listen(3000, function () {
    console.log('listen port 3000')
});
