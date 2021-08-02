import { Router, Request, Response } from "express";
import multer from "multer";
import { imageFilter } from "../utils/filter";
import s3 from "../middleware/s3";

const router = Router();

// things for file upload.
const UPLOAD_PATH = "uploads";
const upload = multer({ dest: `${UPLOAD_PATH}/`, fileFilter: imageFilter });

/**
 *  @route POST api/upload/
 *  @desc File upload to AWS S3
 *  @access Public
 */
router.post(
  "/",
  upload.array("photos", 5),
  s3.imageUploadToS3,
  async (req: Request, res: Response) => {
    try {
      res.send({data : req.body.photos});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
