let router = require('express').Router();
const passport = require('passport');

const collectionCtrl =require('../controllers/collection');

router.get('/', collectionCtrl.index);
router.get('/new', collectionCtrl.newRekkid);
router.post('/new', collectionCtrl.create);

// custom authorization middleware function
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    // req.isAuthenticated function is given to us by passport
    res.redirect('/auth/google')
}


module.exports = router ;