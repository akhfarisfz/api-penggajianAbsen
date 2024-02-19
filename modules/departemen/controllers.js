
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const DepartemenControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "DepartemenControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const DepartemenControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "DepartemenControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const DepartemenControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "DepartemenControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const DepartemenControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "DepartemenControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const DepartemenControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "DepartemenControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  DepartemenControllerList,
  DepartemenControllerCreate,
  DepartemenControllerDetail,
  DepartemenControllerUpdate,
  DepartemenControllerDelete,
};
