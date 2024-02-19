
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const TunjanganControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "TunjanganControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const TunjanganControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "TunjanganControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const TunjanganControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "TunjanganControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const TunjanganControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "TunjanganControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const TunjanganControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "TunjanganControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  TunjanganControllerList,
  TunjanganControllerCreate,
  TunjanganControllerDetail,
  TunjanganControllerUpdate,
  TunjanganControllerDelete,
};
