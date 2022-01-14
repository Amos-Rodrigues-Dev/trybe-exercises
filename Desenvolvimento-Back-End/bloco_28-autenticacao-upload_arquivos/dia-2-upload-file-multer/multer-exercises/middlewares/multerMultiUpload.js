const multer = require('multer');

const defaultStorage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, `${__dirname}/../uploads/`) });

const multiUpload = multer({ storage: defaultStorage });

module.exports = multiUpload.array('files');