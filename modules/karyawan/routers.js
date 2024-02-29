
const { LibHTTPRouter } = require("../../libs/https");
const {
  KaryawanControllerList,
  KaryawanControllerCreate,
  KaryawanControllerDetail,
  KaryawanControllerUpdate,
  KaryawanControllerDelete,
  KaryawanControllerPrint
} = require("./controllers");
const {
  KaryawanMiddlewareCreate,
  KaryawanMiddlewareUpdate,
  KaryawanMiddlewareList,
  KaryawanMiddlewareDetail,
  KaryawanMiddlewareDelete
} = require("./middlewares");

const KaryawanRouter = LibHTTPRouter();

KaryawanRouter.get("", KaryawanMiddlewareList, KaryawanControllerList);
KaryawanRouter.post("", KaryawanMiddlewareCreate, KaryawanControllerCreate);
KaryawanRouter.get("/:id", KaryawanMiddlewareDetail, KaryawanControllerDetail);
KaryawanRouter.put("/:id", KaryawanMiddlewareUpdate, KaryawanControllerUpdate);
KaryawanRouter.get("/:id/print/", KaryawanMiddlewareDetail, KaryawanControllerPrint);
KaryawanRouter.delete("/:id", KaryawanMiddlewareDelete, KaryawanControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { KaryawanRouter } = require("./modules/karyawan/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "karyawan", KaryawanRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  KaryawanRouter,
};  
