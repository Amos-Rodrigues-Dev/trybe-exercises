const multer = require('multer');
const fs = require('fs');

// Usaremos o 'fs' pois teremos que fazer a leitura de todos os arquivos do diretório.

const fileExists = (fileName) => {
  // fs.readdirSync retorna uma lista com nome de todos os arquivos da pasta uploads.
  const files = fs.readdirSync(`${__dirname}/../uploads`);
  // Aqui usamos a função some, que retorna `true` se algum dos items do array passar no teste, no nosso caso o `file.includes`.
  return files.some((file) => file.split('-').pop() === fileName);
};

const fileFilter = async (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    // Colocar uma flag de erro na requisição
    req.fileValidationError = true;
    // Rejeitar o arquivo
    return cb(null, false);
  }
  if (fileExists(file.originalname)) {
    // Colocar uma flag de erro na requisição
    req.fileDuplicated = true;

    // Rejeitar o arquivo
    return cb(null, false);
  }
  // Aceitar o arquivo
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, `${__dirname}/../uploads`),  
  filename: (req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage, fileFilter });

module.exports = upload.single('file');