
const { LibHTTPRouter } = require("../../libs/https");
const {
  AbsensiControllerList,
  AbsensiControllerCreate,
  AbsensiControllerDetail,
  AbsensiControllerUpdate,
  AbsensiControllerDelete
} = require("./controllers");
const {
  AbsensiMiddlewareCreate,
  AbsensiMiddlewareUpdate,
  AbsensiMiddlewareList,
  AbsensiMiddlewareDetail,
  AbsensiMiddlewareDelete
} = require("./middlewares");

const AbsensiRouter = LibHTTPRouter();

AbsensiRouter.get("", AbsensiMiddlewareList, AbsensiControllerList);
AbsensiRouter.post("", AbsensiMiddlewareCreate, AbsensiControllerCreate);
AbsensiRouter.get("/:id", AbsensiMiddlewareDetail, AbsensiControllerDetail);
AbsensiRouter.put("/:id", AbsensiMiddlewareUpdate, AbsensiControllerUpdate);
AbsensiRouter.delete("/:id", AbsensiMiddlewareDelete, AbsensiControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { AbsensiRouter } = require("./modules/absensi/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "absensi", AbsensiRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  AbsensiRouter,
};  
