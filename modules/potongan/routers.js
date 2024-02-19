
const { LibHTTPRouter } = require("../../libs/https");
const {
  PotonganControllerList,
  PotonganControllerCreate,
  PotonganControllerDetail,
  PotonganControllerUpdate,
  PotonganControllerDelete
} = require("./controllers");
const {
  PotonganMiddlewareCreate,
  PotonganMiddlewareUpdate,
  PotonganMiddlewareList,
  PotonganMiddlewareDetail,
  PotonganMiddlewareDelete
} = require("./middlewares");

const PotonganRouter = LibHTTPRouter();

PotonganRouter.get("", PotonganMiddlewareList, PotonganControllerList);
PotonganRouter.post("", PotonganMiddlewareCreate, PotonganControllerCreate);
PotonganRouter.get("/:id", PotonganMiddlewareDetail, PotonganControllerDetail);
PotonganRouter.put("/:id", PotonganMiddlewareUpdate, PotonganControllerUpdate);
PotonganRouter.delete("/:id", PotonganMiddlewareDelete, PotonganControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { PotonganRouter } = require("./modules/potongan/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "potongan", PotonganRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  PotonganRouter,
};  
