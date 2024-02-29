
const { LibHTTPRouter } = require("../../libs/https");
const {
  PenggajianControllerList,
  PenggajianControllerCreate,
  PenggajianControllerDetail,
  PenggajianControllerPrint,
  PenggajianControllerUpdate,
  PenggajianControllerDelete
} = require("./controllers");
const {
  PenggajianMiddlewareCreate,
  PenggajianMiddlewareUpdate,
  PenggajianMiddlewareList,
  PenggajianMiddlewareDetail,
  PenggajianMiddlewareDelete
} = require("./middlewares");

const PenggajianRouter = LibHTTPRouter();

PenggajianRouter.get("", PenggajianMiddlewareList, PenggajianControllerList);
PenggajianRouter.post("", PenggajianMiddlewareCreate, PenggajianControllerCreate);
PenggajianRouter.get("/:id", PenggajianMiddlewareDetail, PenggajianControllerDetail);
PenggajianRouter.put("/:id/print/", PenggajianMiddlewareDetail, PenggajianControllerPrint);
// PenggajianRouter.put("/:id", PenggajianMiddlewareUpdate, PenggajianControllerUpdate);
PenggajianRouter.delete("/:id", PenggajianMiddlewareDelete, PenggajianControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { PenggajianRouter } = require("./modules/penggajian/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "penggajian", PenggajianRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  PenggajianRouter,
};  
