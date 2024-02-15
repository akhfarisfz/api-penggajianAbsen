
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Pesanan } = require("./models");
const { PesananFilter } = require("./filters");
const { PesananKalkulasi } = require("../../libs/services");

const PesananControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);

    const results = Pesanan.find(PesananFilter(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PesananControllerCreate = async (req, res) => {
  try {
    const hasilKalkulasi = PesananKalkulasi(req.cleanedData)
    await Pesanan.create(hasilKalkulasi);
    res.status(201).json(hasilKalkulasi);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const PesananControllerDetail = async (req, res) => {
  try {
    // Your code here
    const pesanan = await Pesanan.findOne({ _id: req.params.id });
    res.status(200).json(pesanan);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PesananControllerUpdate = async (req, res) => {
  try {
    let pesanan = await Pesanan.findOne({_id: req.params.id});
    if (!pesanan) throw { status: 404, message: "Not found"};
    const hasilKalkulasi = PesananKalkulasi(req.cleanedData)
    await Pesanan.findByIdAndUpdate(req.params.id, hasilKalkulasi);
    res.status(200).json(hasilKalkulasi);

    res.status(200).json({
      controller: "PesananControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PesananControllerDelete = async (req, res) => {
  try {
    let pesanan = await Pesanan.findOne({ _id: req.params.id });
    if (!pesanan) throw { status: 404, message: "Not found" };
    await Pesanan.findByIdAndDelete(req.params.id);
    res.status(204).json({
      controller: "PesananControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  PesananControllerList,
  PesananControllerCreate,
  PesananControllerDetail,
  PesananControllerUpdate,
  PesananControllerDelete,
};
