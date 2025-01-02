const express = require("express");
const {
  uploadFile,
  deleteFile,
  getUserFiles,
} = require("../controllers/fileController");
const { IsAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

// POST route to handle file upload
router.post("/post/upload", IsAuthenticatedUser, uploadFile);
router.delete("/delete/file/:fileName", IsAuthenticatedUser, deleteFile);
router.get("/get/files/:id", IsAuthenticatedUser, getUserFiles);

module.exports = router;
