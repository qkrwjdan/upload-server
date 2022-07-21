import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),
  
  /**
   * aws access key for image upload to s3
   */
  awsAccessKey: process.env.AWS_ACCESS_KEY,
  awsPrivateAccessKey: process.env.AWS_PRIVATE_ACCESS_KEY,
  bucketName: process.env.S3_BUCKET_NAME,
};
