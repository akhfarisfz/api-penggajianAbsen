
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const KaryawanControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "KaryawanControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KaryawanControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "KaryawanControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KaryawanControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "KaryawanControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KaryawanControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "KaryawanControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KaryawanControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "KaryawanControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  KaryawanControllerList,
  KaryawanControllerCreate,
  KaryawanControllerDetail,
  KaryawanControllerUpdate,
  KaryawanControllerDelete,
};
