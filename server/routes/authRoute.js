const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


router.get('/',authController.index_get);
router.get('/register',authController.register_get);
router.post('/register',authController.register_post);
router.get('/login',authController.login_get);
router.post('/login',authController.login_post);
router.get('/about',authController.about_get);
router.get('/features',authController.feature_get);
router.get('/faq',authController.faq_get);




module.exports=router;