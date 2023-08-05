const cloudinary = require("cloudinary").v2;
<<<<<<< Updated upstream
const { User } = require("../models");

cloudinary.config({
  cloud_name: "dyykzkgyc",
  api_key: "468927147681242",
  api_secret: "ye4vfR10v144ycD5-eXRxf7nt5k",
});

const uploadToCloud = async (req, res) => {
  const { _id } = req.user;
  const filePath = req.file.path;
  const uniqueFilename = `${_id}_avatar`;

  const options = {
    public_id: `task-pro/avatars/${uniqueFilename}`,
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    transformation: [{ width: 128, height: 128, crop: "fill" }],
    quality: "auto:best",
  };
  try {
    const result = await cloudinary.uploader.upload(filePath, options);
    await User.findByIdAndUpdate(_id, { avatarURL: result.secure_url });
    res.json({
      avatarURL: result.secure_url,
    });
  } catch (error) {
    res.status(500).json({ message: "Image processing error" });
  }
=======

cloudinary.config({
  secure: true,
  cloud_name: dyykzkgyc,
  api_key: 468927147681242,
  api_secret: ye4vfR10v144ycD5 - eXRxf7nt5k,
});

const uploadToCloud = async (image) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  const result = await cloudinary.uploader.upload(image, options);
  return result.secure_url;
>>>>>>> Stashed changes
};

module.exports = uploadToCloud;
