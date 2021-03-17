let router = require('express').Router();
const user = require('../models/user');
let usersCtrl = require('../controllers/user');
let collectionCtrl = require('../controllers/collection');

// GET /user
router.get('/user', usersCtrl.index);
// router.post('/posts', isLoggedIn, usersCtrl.addPost);
router.get('/collections',collectionCtrl.index);

// custom authorization middleware function
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    // req.isAuthenticated function is given to us by passport
    res.redirect('/auth/google')
}


module.exports = router;