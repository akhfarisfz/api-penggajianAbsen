
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const PenggajianControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "PenggajianControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PenggajianControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "PenggajianControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PenggajianControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "PenggajianControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PenggajianControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "PenggajianControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PenggajianControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "PenggajianControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  PenggajianControllerList,
  PenggajianControllerCreate,
  PenggajianControllerDetail,
  PenggajianControllerUpdate,
  PenggajianControllerDelete,
};
