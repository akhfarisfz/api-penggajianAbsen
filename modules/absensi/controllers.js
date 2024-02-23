
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Absensi } = require("./models");
const { AbsensiFilter } = require("./filters");
const { AbsensiServiceCreate } = require("../absensi/services");

const AbsensiControllerList =  async (req, res) => {
  try {
    // Your code here
    const results = Absensi.find(AbsensiFilter(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AbsensiControllerCreate = async (req, res) => {
  try {
    req.cleanedData = AbsensiServiceCreate(req);
    const results = Absensi.create(req.cleanedData);
    res.status(201).json(results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AbsensiControllerDetail = async (req, res) => {
  try {
    // Your code here
    let absensi = await Absensi.findOne({ _id: req.params.id });
    if (!absensi) throw { status: 404, message: "Not found" };
    res.status(200).json(absensi);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AbsensiControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let absensi = await Absensi.findOne({ _id: req.params.id });
    if (!absensi) throw { status: 404, message: "Not found" };
    await Absensi.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const AbsensiControllerDelete = async (req, res) => {
  try {
    // Your code here
    let absensi = await Absensi.findOne({ _id: req.params.id });
    if (!absensi) throw { status: 404, message: "Not found" };
    await Karyawan.findByIdAndDelete(req.params.id);
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
