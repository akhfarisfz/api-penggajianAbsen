const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Karyawan } = require("./models");
const { KaryawanFilter } = require("./filters");
const { karyawanCreatePotongan, karyawanServiceCreate } = require("./services");

const KaryawanControllerList = async (req, res) => {
  try {
    // Your code here
    const results = Karyawan.find(KaryawanFilter(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const KaryawanControllerCreate = async (req, res) => {
  try {
    // Your code here
    req.cleanedData = karyawanServiceCreate(req);
    req.cleanedData = karyawanCreatePotongan(req);
    // console.log(req.cleanedData)
    await Karyawan.create(req.cleanedData);

    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const KaryawanControllerDetail = async (req, res) => {
  try {
    // Your code here
    let karyawan = await Karyawan.findOne({ _id: req.params.id });
    if (!karyawan) throw { status: 404, message: "Not found" };
    res.status(200).json(karyawan);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const KaryawanControllerPrint = async (req, res) => {
  try {
    // Your code here
    let karyawan = await Karyawan.findOne({ _id: req.params.id });
    if (!karyawan) throw { status: 404, message: "Not found" };
    res.status(200).json(karyawan);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const KaryawanControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let karyawan = await Karyawan.findOne({ _id: req.params.id });
    if (!karyawan) throw { status: 404, message: "Not found" };

    await Karyawan.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const KaryawanControllerDelete = async (req, res) => {
  try {
    //nanti hapus
    let karyawan = await Karyawan.findOne({ _id: req.params.id });
    if (!karyawan) throw { status: 404, message: "Not found" };
    await Karyawan.findByIdAndDelete(req.params.id);
    res.status(204).json(null);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

module.exports = {
  KaryawanControllerList,
  KaryawanControllerCreate,
  KaryawanControllerDetail,
  KaryawanControllerUpdate,
  KaryawanControllerPrint,
  KaryawanControllerDelete,
};
