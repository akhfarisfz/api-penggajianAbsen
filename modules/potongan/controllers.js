
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const PotonganControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "PotonganControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PotonganControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "PotonganControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PotonganControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "PotonganControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PotonganControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "PotonganControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PotonganControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "PotonganControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  PotonganControllerList,
  PotonganControllerCreate,
  PotonganControllerDetail,
  PotonganControllerUpdate,
  PotonganControllerDelete,
};
