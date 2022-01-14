module.exports = (req, res) => {
  const uploadFiles = req.files.map((file) => ({
    file: file.originalname,
    url: `http://localhost:3000/${file.path}`,
  }));

  return res.status(200).send(uploadFiles);
};