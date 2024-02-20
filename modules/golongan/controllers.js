
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Golongan } = require("./models");

const GolonganControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    const results = Golongan.find(AbsensiControllerCreate(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const GolonganControllerCreate = async (req, res) => {
  try {
    // Your code here
    await Golongan.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const GolonganControllerDetail = async (req, res) => {
  try {
    // Your code here
    let golongan = await Golongan.findOne({ _id: req.params.id });
    if (!golongan) throw { status: 404, message: "Not found" };
    res.status(200).json(golongan);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const GolonganControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let golongan = await Golongan.findOne({ _id: req.params.id });
    if (!golongan) throw { status: 404, message: "Not found" };
    await Golongan.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const GolonganControllerDelete = async (req, res) => {
  try {
    let golongan = await Golongan.findOne({ _id: req.params.id });
    if (!golongan) throw { status: 404, message: "Not found" };
    await Golongan.findByIdAndDelete(req.params.id);
    
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  GolonganControllerList,
  GolonganControllerCreate,
  GolonganControllerDetail,
  GolonganControllerUpdate,
  GolonganControllerDelete,
};
