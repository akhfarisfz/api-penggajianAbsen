
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const UserControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "UserControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const UserControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "UserControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const UserControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "UserControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const UserControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "UserControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const UserControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "UserControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  UserControllerList,
  UserControllerCreate,
  UserControllerDetail,
  UserControllerUpdate,
  UserControllerDelete,
};
