
const { LibHTTPRouter } = require("../../libs/https");
const {
  JabatanControllerList,
  JabatanControllerCreate,
  JabatanControllerDetail,
  JabatanControllerUpdate,
  JabatanControllerDelete
} = require("./controllers");
const {
  JabatanMiddlewareCreate,
  JabatanMiddlewareUpdate,
  JabatanMiddlewareList,
  JabatanMiddlewareDetail,
  JabatanMiddlewareDelete
} = require("./middlewares");

const JabatanRouter = LibHTTPRouter();

JabatanRouter.get("", JabatanMiddlewareList, JabatanControllerList);
JabatanRouter.post("", JabatanMiddlewareCreate, JabatanControllerCreate);
JabatanRouter.get("/:id", JabatanMiddlewareDetail, JabatanControllerDetail);
JabatanRouter.put("/:id", JabatanMiddlewareUpdate, JabatanControllerUpdate);
JabatanRouter.delete("/:id", JabatanMiddlewareDelete, JabatanControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { JabatanRouter } = require("./modules/jabatan/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "jabatan", JabatanRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  JabatanRouter,
};  
