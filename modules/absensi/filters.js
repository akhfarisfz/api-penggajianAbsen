
function AbsensiFilter(req) {
  let qSearch = {};
  const { search, limit, page, ...filters } = req.query;

  if (search) {
    qSearch = {
      $or: [
        /**
         * You can change field1 and field2 according to your needs.
         **/

        { Hadir: { $regex: ".*" + search + ".*", $options: "i" } },
        { Izin: { $regex: ".*" + search + ".*", $options: "i" } },
        { Sakit: { $regex: ".*" + search + ".*", $options: "i" } },
        { Alpa: { $regex: ".*" + search + ".*", $options: "i" } },
        { Terlambat: { $regex: ".*" + search + ".*", $options: "i" } },
      ],
    };
  }

  return { ...filters, ...qSearch };
}

module.exports = {
  AbsensiFilter,
};
  