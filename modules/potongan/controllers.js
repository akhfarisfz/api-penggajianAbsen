
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Potongan } = require("./models");
const { PotonganFilter } = require("../potongan/filters");

const PotonganControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    const results = Potongan.find(PotonganFilter(req)).sort([["created", -1]]);
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PotonganControllerCreate = async (req, res) => {
  try {
    await Potongan.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PotonganControllerDetail = async (req, res) => {
  try {
    let potongan = await Potongan.findOne({ _id: req.params.id });
    if (!potongan) throw { status: 404, message: "Not found" };
    res.status(200).json(potongan);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PotonganControllerUpdate = async (req, res) => {
  try {
    let potongan = await Potongan.findOne({ _id: req.params.id });
    if (!potongan) throw { status: 404, message: "Not found" };
    await Potongan.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PotonganControllerDelete = async (req, res) => {
  try {
    let potongan = await Potongan.findOne({ _id: req.params.id });
    if (!potongan) throw { status: 404, message: "Not found" };
    await Potongan.findByIdAndDelete(req.params.id);
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
