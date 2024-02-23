require("dotenv").config();

const express = require("express");
const { DatabaseMongoDBConnector } = require("./libs/databases");
const { LibModuleRegister } = require("./libs/modules");
const { UserRouter } = require("./providers/users/routers");
const { KaryawanRouter } = require("./modules/karyawan/routers");
const { JabatanRouter } = require("./modules/jabatan/routers");
const { PotonganRouter } = require("./modules/potongan/routers");
const { DepartemenRouter } = require("./modules/departemen/routers");
const { AbsensiRouter } = require("./modules/absensi/routers");
const { PenggajianRouter } = require("./modules/penggajian/routers");
const cors = require("cors")



const app = express();

DatabaseMongoDBConnector({hideSuccessMessage: false});

app.use(express.json());
app.use(
  cors({
    origin: "*",
}));

LibModuleRegister(app, "users", UserRouter);
LibModuleRegister(app, "karyawan", KaryawanRouter);
LibModuleRegister(app, "penggajian", PenggajianRouter);

//tunjangan
LibModuleRegister(app, "jabatan", JabatanRouter);
LibModuleRegister(app, "departemen", DepartemenRouter);
// potongan
LibModuleRegister(app, "potongan", PotonganRouter);
LibModuleRegister(app, "absensi", AbsensiRouter);

app.listen(process.env.APP_PORT, function () {
  console.log(`Server berjalan di port ${process.env.APP_PORT}.`);
});
