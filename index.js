require("dotenv").config();

const express = require("express");
const { DatabaseMongoDBConnector } = require("./libs/databases");
const { LibModuleRegister } = require("./libs/modules");
const { UserRouter } = require("./providers/users/routers");
const { KaryawanRouter } = require("./modules/karyawan/routers");
const { JabatanRouter } = require("./modules/jabatan/routers");
const { PajakRouter } = require("./modules/pajak/routers");
const { KeluargaRouter } = require("./modules/keluarga/routers");


const app = express();

DatabaseMongoDBConnector({hideSuccessMessage: false});

app.use(express.json());

LibModuleRegister(app, "users", UserRouter);
LibModuleRegister(app, "karyawan", KaryawanRouter);
LibModuleRegister(app, "jabatan", JabatanRouter);
LibModuleRegister(app, "pajak", PajakRouter);
LibModuleRegister(app, "keluarga", KeluargaRouter);

app.listen(process.env.APP_PORT, function () {
  console.log(`Server berjalan di port ${process.env.APP_PORT}.`);
});
