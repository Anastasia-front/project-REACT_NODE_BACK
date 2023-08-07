const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const { User } = require("../models");
const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
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
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "avatars",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = { upload, uploadToCloud };
