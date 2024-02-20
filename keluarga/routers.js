
const { LibHTTPRouter } = require("../../libs/https");
const {
  KeluargaControllerList,
  KeluargaControllerCreate,
  KeluargaControllerDetail,
  KeluargaControllerUpdate,
  KeluargaControllerDelete
} = require("./controllers");
const {
  KeluargaMiddlewareCreate,
  KeluargaMiddlewareUpdate,
  KeluargaMiddlewareList,
  KeluargaMiddlewareDetail,
  KeluargaMiddlewareDelete
} = require("./middlewares");

const KeluargaRouter = LibHTTPRouter();

KeluargaRouter.get("", KeluargaMiddlewareList, KeluargaControllerList);
KeluargaRouter.post("", KeluargaMiddlewareCreate, KeluargaControllerCreate);
KeluargaRouter.get("/:id", KeluargaMiddlewareDetail, KeluargaControllerDetail);
KeluargaRouter.put("/:id", KeluargaMiddlewareUpdate, KeluargaControllerUpdate);
KeluargaRouter.delete("/:id", KeluargaMiddlewareDelete, KeluargaControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { KeluargaRouter } = require("./modules/keluarga/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "keluarga", KeluargaRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  KeluargaRouter,
};  
