
const { LibHTTPRouter } = require("../../libs/https");
const {
  GolonganControllerList,
  GolonganControllerCreate,
  GolonganControllerDetail,
  GolonganControllerUpdate,
  GolonganControllerDelete
} = require("./controllers");
const {
  GolonganMiddlewareCreate,
  GolonganMiddlewareUpdate,
  GolonganMiddlewareList,
  GolonganMiddlewareDetail,
  GolonganMiddlewareDelete
} = require("./middlewares");

const GolonganRouter = LibHTTPRouter();

GolonganRouter.get("", GolonganMiddlewareList, GolonganControllerList);
GolonganRouter.post("", GolonganMiddlewareCreate, GolonganControllerCreate);
GolonganRouter.get("/:id", GolonganMiddlewareDetail, GolonganControllerDetail);
GolonganRouter.put("/:id", GolonganMiddlewareUpdate, GolonganControllerUpdate);
GolonganRouter.delete("/:id", GolonganMiddlewareDelete, GolonganControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { GolonganRouter } = require("./modules/golongan/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "golongan", GolonganRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  GolonganRouter,
};  
