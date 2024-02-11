
const { LibHTTPRouter } = require("../../libs/https");
const {
  UserControllerList,
  UserControllerCreate,
  UserControllerDetail,
  UserControllerUpdate,
  UserControllerDelete
} = require("./controllers");
const {
  UserMiddlewareCreate,
  UserMiddlewareUpdate,
  UserMiddlewareList,
  UserMiddlewareDetail,
  UserMiddlewareDelete
} = require("./middlewares");

const UserRouter = LibHTTPRouter();

UserRouter.get("", UserMiddlewareList, UserControllerList);
UserRouter.post("", UserMiddlewareCreate, UserControllerCreate);
UserRouter.get("/:id", UserMiddlewareDetail, UserControllerDetail);
UserRouter.put("/:id", UserMiddlewareUpdate, UserControllerUpdate);
UserRouter.delete("/:id", UserMiddlewareDelete, UserControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { UserRouter } = require("./modules/User/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "User", UserRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  UserRouter,
};  
