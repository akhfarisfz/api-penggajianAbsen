
const { LibHTTPRouter } = require("../../libs/https");
const {
  TunjanganControllerList,
  TunjanganControllerCreate,
  TunjanganControllerDetail,
  TunjanganControllerUpdate,
  TunjanganControllerDelete
} = require("./controllers");
const {
  TunjanganMiddlewareCreate,
  TunjanganMiddlewareUpdate,
  TunjanganMiddlewareList,
  TunjanganMiddlewareDetail,
  TunjanganMiddlewareDelete
} = require("./middlewares");

const TunjanganRouter = LibHTTPRouter();

TunjanganRouter.get("", TunjanganMiddlewareList, TunjanganControllerList);
TunjanganRouter.post("", TunjanganMiddlewareCreate, TunjanganControllerCreate);
TunjanganRouter.get("/:id", TunjanganMiddlewareDetail, TunjanganControllerDetail);
TunjanganRouter.put("/:id", TunjanganMiddlewareUpdate, TunjanganControllerUpdate);
TunjanganRouter.delete("/:id", TunjanganMiddlewareDelete, TunjanganControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { TunjanganRouter } = require("./modules/tunjangan/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "tunjangan", TunjanganRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  TunjanganRouter,
};  
