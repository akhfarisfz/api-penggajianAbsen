
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Asuransi } = require("./models");

const AsuransiControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);
    const results = Asuransi.find(AbsensiControllerCreate(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AsuransiControllerCreate = async (req, res) => {
  try {
    // Your code here
    await Asuransi.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AsuransiControllerDetail = async (req, res) => {
  try {
    // Your code here
    let asuransi = await Asuransi.findOne({ _id: req.params.id });
    if (!asuransi) throw { status: 404, message: "Not found" };
    res.status(200).json(asuransi);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AsuransiControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let asuransi = await Asuransi.findOne({ _id: req.params.id });
    if (!asuransi) throw { status: 404, message: "Not found" };
    await Asuransi.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AsuransiControllerDelete = async (req, res) => {
  try {
    let asuransi = await Asuransi.findOne({ _id: req.params.id });
    if (!asuransi) throw { status: 404, message: "Not found" };
    await Asuransi.findByIdAndDelete(req.params.id);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  AsuransiControllerList,
  AsuransiControllerCreate,
  AsuransiControllerDetail,
  AsuransiControllerUpdate,
  AsuransiControllerDelete,
};
