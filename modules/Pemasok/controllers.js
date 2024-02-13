
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Pemasok } = require("./models");
const { PemasokFilter } = require("./filters");

const PemasokControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);

    const results = Pemasok.find(PemasokFilter(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerCreate = async (req, res) => {
  try {
    await Pemasok.create(req.cleanedData);
    res.status(201).json({
      controller: "PemasokControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerDetail = async (req, res) => {
  try {
    let pemasok = await Pemasok.findOne({ _id: req.params.id });
    if (!pemasok) throw { status: 404, message: "Not found" };

    res.status(200).json({
      controller: "PemasokControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerUpdate = async (req, res) => {
  try {
    let pemasok = await Pemasok.findOne({ _id: req.params.id });
    if (!pemasok) throw { status: 404, message: "Not found" };
    await Pemasok.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json({
      controller: "PemasokControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerDelete = async (req, res) => {
  try {
    let pemasok = await Pemasok.findOne({ _id: req.params.id });
    if (!pemasok) throw { status: 404, message: "Not found" };
    await Pemasok.findByIdAndDelete(req.params.id, req.cleanedData);

    res.status(204).json({
      controller: "PemasokControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  PemasokControllerList,
  PemasokControllerCreate,
  PemasokControllerDetail,
  PemasokControllerUpdate,
  PemasokControllerDelete,
};
