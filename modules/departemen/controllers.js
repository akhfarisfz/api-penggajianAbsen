
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
    await Departemen.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const DepartemenControllerDetail = async (req, res) => {
  try {
    // Your code here
    let departemen = await Departemen.findOne({ _id: req.params.id });
    if (!departemen) throw { status: 404, message: "Not found" };
    res.status(200).json(departemen);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const DepartemenControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let departemen = await Departemen.findOne({ _id: req.params.id });
    if (!departemen) throw { status: 404, message: "Not found" };
    await Departemen.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
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
