
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const AbsensiControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "AbsensiControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AbsensiControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "AbsensiControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AbsensiControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "AbsensiControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AbsensiControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "AbsensiControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AbsensiControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "AbsensiControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  AbsensiControllerList,
  AbsensiControllerCreate,
  AbsensiControllerDetail,
  AbsensiControllerUpdate,
  AbsensiControllerDelete,
};
