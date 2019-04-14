//const cors = require('cors');

const express = require('express');
const app = express();
const oracledb = require('oracledb');
const dbConfig = require('./dbconfig');
const bodyParser = require('body-parser');
const moment = require('moment');

//app.use(cors());
//app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Credentials', true);
    //res.status(200).json({message: 'It works!'});
    next();
    //res.end();
});

app.get("/api/getUser/:facebookid", function (req, res) {
    const fid = req.params.facebookid;
    console.log("api/getUser/" + fid);
    var connection = oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err);
                res.send(err);
            }

            connection.execute(
                "SELECT USERID FROM USER_DEF WHERE FBID = :id ",
                [fid],
                function (err, result) {
                    let id;
                    if (err) {
                        console.error(err);
                        res.send(err);
                    } else {
                        console.log(result.rows);
                        result.rows.forEach(function (e) {
                            id = e[0];
                        });
                        console.log("id", id);
                        res.json(id);
                    }
                });
        });
});

app.post("/api/postUser", function (req, res) {
    console.log("/api/postUser");
    const uid = req.body.id;
    console.log('id',uid);

    var connection = oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err);
                res.send(err);
            }

            connection.execute(
                "INSERT INTO USER_DEF (FBID) VALUES (:fbid)",
                [uid],
                { autoCommit: true },
                function (err, result) {
                    if (err) {
                        console.error(err);
                        res.send(err);
                    } else {
                        console.log(result.rowsAffected);
                        res.json(1);
                        doRelease(connection);
                    }
                });
        });
});
function doRelease(connection) {
    connection.close(
        function (err) {
            if (err)
                console.error(err.message);
        });
}


/************* ACTIVITÉS *******************/
app.get("/api/getMaListeActivite/:userid", function (req, res) {
    //res.status(200).json({message: 'getMaListeActivite'});
    const uid = parseInt(req.params.userid, 10);
    console.log("api/getMaListeActivite " + uid);

    var connection = oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err);
                res.send(err);
            }

            connection.execute(
                'SELECT  * FROM EVENTS WHERE USERID = :id',
                [uid],
                function (err, result) {
                    let activities = [];

                    if (err) {
                        console.error(err);
                        res.send(err);
                    } else {

                        console.log(result);
                        result.rows.forEach(function (e) {
                            let activity = {};
                            activity.id = e[1];
                            activity.name = e[2];
                            activity.location = e[3];
                            activity.description = e[4];
                            activity.startDate = e[5];
                            activity.startTime = e[6];
                            activity.endDate = e[7];
                            activity.endTime = e[8];
                            activity.type = e[9];
                            activity.endDateTime = e[10];
                            activity.online = e[11];
                            activity.image = e[12];

                            activities.push(activity);
                        });
                        // console.log((activities));
                        doRelease(connection);
                        // res.send(activities);
                        res.json(activities);

                    }
                });
        });
});
/* * 

*/
app.get("/api/getActivites/", function (req, res) {

    var connection = oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err);
                res.send(err);
            }

            connection.execute(
                "SELECT  * FROM EVENTS WHERE TYPE = 'public'",
                function (err, result) {
                    let activities = [];

                    if (err) {
                        console.error(err);
                        res.send(err);
                    } else {
                        console.log(result);
                        result.rows.forEach(function (e) {
                            let activity = {};
                            activity.id = e[1];
                            activity.name = e[2];
                            activity.location = e[3];
                            activity.description = e[4];
                            activity.startDate = e[5];
                            activity.startTime = e[6];
                            activity.endDate = e[7];
                            activity.endTime = e[8];
                            activity.type = e[9];
                            activity.endDateTime = e[10];
                            activity.online = e[11];
                            activity.image = e[12];

                            activities.push(activity);
                        });
                        console.log((activities));
                        doRelease(connection);
                        res.json(activities);
                    }
                });
        });
});

// 
app.get("/api/getMonActivite/:activityid", function (req, res) {
    const activityid = parseInt(req.params.activityid, 10);
    console.log("api/getMonActivite " + activityid);

    var connection = oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err);
                res.send(err);
            }

            connection.execute(
                'SELECT * FROM EVENTS WHERE EVENTID = :id',
                [activityid],
                function (err, result) {
                    let activity = {};
                    if (err) {
                        console.error(err);
                        res.send(err);
                    } else {
                        result.rows.forEach(function (e) {

                            activity.id = e[1];
                            activity.name = e[2];
                            activity.location = e[3];
                            activity.description = e[4];
                            activity.startDate = e[5];
                            activity.startTime = e[6];
                            activity.endDate = e[7];
                            activity.endTime = e[8];
                            activity.type = e[9];
                            activity.endDateTime = e[10];
                            activity.online = e[11];
                            activity.image = e[12];

                        });
                        console.log((activity));
                        doRelease(connection);
                        res.json(activity);
                    }
                });
        });
});


app.post("/api/SaveActivity", function (req, res) {
    console.log("/api/SaveActivity");
    const uid = req.body.id;
    var connection = oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err);
                res.send(err);
            }

            connection.execute(
                "INSERT INTO EVENTS (NAME, LOCATION, DESCRIPTION, TYPE, STARTDATE, STARTTIME, ENDDATE, ENDTIME, ENDDATETIME, ISONLINE,USERID,IMAGE) VALUES (:name, :location, :description, :type, :startDate, :startTime, :endDate, :endTime, :endDateTime, :isOnline, :userId, :image)",
                [req.body.attributes.name, req.body.attributes.location, req.body.attributes.description, req.body.attributes.type, req.body.attributes.startDate, req.body.attributes.startTime,
                req.body.attributes.endDate, req.body.attributes.endTime, req.body.attributes.endDateTime, req.body.attributes.online, req.body.id,req.body.attributes.image],
                { autoCommit: true },
                function (err, result) {
                    if (err) {
                        console.error(err);
                        res.send(err);
                    } else {
                        console.log(result.rowsAffected);
                        res.json(1);
                        doRelease(connection);
                    }
                });
        });
});

app.post("/api/UpdateActivity", function (req, res) {
    console.log("/api/UpdateActivity");
    const eventid = parseInt(req.body.id, 10);
    var connection = oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err);
                res.send(err);
            }

            connection.execute(
                "UPDATE EVENTS SET NAME = :name, LOCATION = :location, DESCRIPTION = :description,TYPE = :type, STARTDATE = :startDate, STARTTIME = :startTime,ENDDATETIME = :endDateTime, ENDDATE = :endDate, ENDTIME = :endTime,ISONLINE = :isOnline, IMAGE= :image where EVENTID = :eventid ",
                [req.body.attributes.name, req.body.attributes.location, req.body.attributes.description, req.body.attributes.type, req.body.attributes.startDate, req.body.attributes.startTime,
                req.body.attributes.endDateTime, req.body.attributes.endDate, req.body.attributes.endTime, req.body.attributes.online,req.body.attributes.image, eventid],
                { autoCommit: true },
                function (err, result) {
                    if (err) {
                        console.error(err);
                        res.status(err.statusCode || 500).json(err);
                    } else {
                        console.log(result.rowsAffected);
                        res.json(1);
                        doRelease(connection);
                    }
                });
        });

});

app.post("/api/DeleteActivity", function (req, res) {
    const actid = parseInt(req.body.id, 10);
    console.log("/api/DeleteActivity" + actid);
    var connection = oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err);
                res.send(err);
            }

            connection.execute(
                "DELETE FROM EVENTS where EVENTID = :id ",
                [actid],
                {autoCommit: true},
                function (err, result) {
                    if (err) {
                        console.error(err.status);
                        res.status(err.statusCode || 500).json(err);
                    } else {
                        console.log(result.rowsAffected);
                        res.json(1);
                        doRelease(connection);
                    }
                });
        });
});

app.listen(process.env.PORT || 3000 , function (res) {
    console.log('listen port 3000');
    res.send('server is running');
});
