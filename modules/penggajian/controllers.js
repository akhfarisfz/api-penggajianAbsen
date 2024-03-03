const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Penggajian } = require("./models");
const { PenggajianFilter } = require("./filters");
const {
  penggajianTotalPotonganCreate,
  penggajianGajiBersihCreate,
} = require("./services");
const { Karyawan } = require("../karyawan/models");

const PenggajianControllerList = async (req, res) => {
  try {
    const results = Penggajian.find(PenggajianFilter(req)).populate(
      "karyawanref"
    );

    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const PenggajianControllerCreate = async (req, res) => {
  try {
    let karyawan = await Karyawan.findOne({ _id: req.cleanedData.karyawanref });
    req.cleanedData = penggajianTotalPotonganCreate(req, karyawan);
    req.cleanedData = penggajianGajiBersihCreate(req, karyawan);
    
    await Penggajian.create(req.cleanedData);

    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const PenggajianControllerDetail = async (req, res) => {
  try {
    let penggajian = await Penggajian.findOne({ _id: req.params.id });
    if (!penggajian) throw { status: 404, message: "Not found" };
    res.status(200).json(penggajian);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const PenggajianControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let penggajian = await Penggajian.findOne({ _id: req.params.id });
    if (!penggajian) throw { status: 404, message: "Not found" };
    await Penggajian.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const PenggajianControllerPrint = async (req, res) => {
  try {
    // Your code here
    let penggajian = await Penggajian.findOne({ _id: req.params.id });
    if (!penggajian) throw { status: 404, message: "Not found" };
    res.status(200).json(penggajian);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

const PenggajianControllerDelete = async (req, res) => {
  try {
    // Your code here
    let penggajian = await Penggajian.findOne({ _id: req.params.id });
    if (!penggajian) throw { status: 404, message: "Not found" };
    await Penggajian.findByIdAndDelete(req.params.id);
    res.status(204).json(null);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

module.exports = {
  PenggajianControllerList,
  PenggajianControllerCreate,
  PenggajianControllerDetail,
  PenggajianControllerUpdate,
  PenggajianControllerDelete,
  PenggajianControllerPrint,
};
