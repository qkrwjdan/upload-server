const imageFilter = function (req, file, cb) {
  // accept image only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|mp4)$/)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

export { imageFilter };

