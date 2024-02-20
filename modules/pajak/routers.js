
const { LibHTTPRouter } = require("../../libs/https");
const {
  PajakControllerList,
  PajakControllerCreate,
  PajakControllerDetail,
  PajakControllerUpdate,
  PajakControllerDelete
} = require("./controllers");
const {
  PajakMiddlewareCreate,
  PajakMiddlewareUpdate,
  PajakMiddlewareList,
  PajakMiddlewareDetail,
  PajakMiddlewareDelete
} = require("./middlewares");

const PajakRouter = LibHTTPRouter();

PajakRouter.get("", PajakMiddlewareList, PajakControllerList);
PajakRouter.post("", PajakMiddlewareCreate, PajakControllerCreate);
PajakRouter.get("/:id", PajakMiddlewareDetail, PajakControllerDetail);
PajakRouter.put("/:id", PajakMiddlewareUpdate, PajakControllerUpdate);
PajakRouter.delete("/:id", PajakMiddlewareDelete, PajakControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { PajakRouter } = require("./modules/pajak/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "pajak", PajakRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  PajakRouter,
};  
