
const { LibHTTPRouter } = require("../../libs/https");
const {
  DepartemenControllerList,
  DepartemenControllerCreate,
  DepartemenControllerDetail,
  DepartemenControllerUpdate,
  DepartemenControllerDelete
} = require("./controllers");
const {
  DepartemenMiddlewareCreate,
  DepartemenMiddlewareUpdate,
  DepartemenMiddlewareList,
  DepartemenMiddlewareDetail,
  DepartemenMiddlewareDelete
} = require("./middlewares");

const DepartemenRouter = LibHTTPRouter();

DepartemenRouter.get("", DepartemenMiddlewareList, DepartemenControllerList);
DepartemenRouter.post("", DepartemenMiddlewareCreate, DepartemenControllerCreate);
DepartemenRouter.get("/:id", DepartemenMiddlewareDetail, DepartemenControllerDetail);
DepartemenRouter.put("/:id", DepartemenMiddlewareUpdate, DepartemenControllerUpdate);
DepartemenRouter.delete("/:id", DepartemenMiddlewareDelete, DepartemenControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { DepartemenRouter } = require("./modules/departemen/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "departemen", DepartemenRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  DepartemenRouter,
};  
