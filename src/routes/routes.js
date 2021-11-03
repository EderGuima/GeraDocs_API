const express = require('express');
const user = require('../controllers/user/userController');
const router = express.Router();

router.get('/about/:id', function (req, res) {
    user.get(req, res);
});
module.exports = router;
