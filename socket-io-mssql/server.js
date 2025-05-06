const express = require("express");
require("dotenv").config();
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const server = http.createServer(app);
app.use(cors());

const io = new Server(server, {
  cors: {},
});
var sql = require("mssql");
const sqlConfig = {
  // user: "denilsonvr",
  user: process.env.SERVER_USER,
  //password: "fCr9z2Z2g5mNLriC4QGT",
  password: process.env.SERVER_PASSWORD,
  database: "OSS",
  //server: "orbitas.database.windows.net",
  server: process.env.SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

const database = sql.connect(sqlConfig);

//socket io config
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("send_order", (data) => {
    //socket.join(data.companyId);

    database
      .then(function () {
        new sql.Request()
          .query(
            "select id,TotalIVA from [oss-ecommerce].[Order] where CompanyId=38 and notificate=1"
          )
          .then(function (recordset) {
            console.log(recordset);
            socket.broadcast.emit(data.companyId, recordset);
          })
          .catch(function (err) {
            console.log(err);
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  });
});

//server run
server.listen(process.env.PORT || 3001, () => {});
