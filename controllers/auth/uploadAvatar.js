const fs = require("fs/promises");
const Jimp = require("jimp");
const uploadToCloud = require("../../middlewares/uploadToCloud");

const uploadImage = async (file) => {
  const { buffer } = file;
  const tempImage = "../../uploads"
  try {
    const image = await Jimp.read(buffer);
    image.cover(250, 250).write(tempImage);
    const publicLink = await uploadToCloud(tempImage);
    return publicLink;
  } catch {
    await fs.unlink(tempImage);
    throw new Error("Image processing error");
  }
};

module.exports = uploadImage;
