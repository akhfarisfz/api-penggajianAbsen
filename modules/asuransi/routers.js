
const { LibHTTPRouter } = require("../../libs/https");
const {
  AsuransiControllerList,
  AsuransiControllerCreate,
  AsuransiControllerDetail,
  AsuransiControllerUpdate,
  AsuransiControllerDelete
} = require("./controllers");
const {
  AsuransiMiddlewareCreate,
  AsuransiMiddlewareUpdate,
  AsuransiMiddlewareList,
  AsuransiMiddlewareDetail,
  AsuransiMiddlewareDelete
} = require("./middlewares");

const AsuransiRouter = LibHTTPRouter();

AsuransiRouter.get("", AsuransiMiddlewareList, AsuransiControllerList);
AsuransiRouter.post("", AsuransiMiddlewareCreate, AsuransiControllerCreate);
AsuransiRouter.get("/:id", AsuransiMiddlewareDetail, AsuransiControllerDetail);
AsuransiRouter.put("/:id", AsuransiMiddlewareUpdate, AsuransiControllerUpdate);
AsuransiRouter.delete("/:id", AsuransiMiddlewareDelete, AsuransiControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { AsuransiRouter } = require("./modules/asuransi/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "asuransi", AsuransiRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  AsuransiRouter,
};  
