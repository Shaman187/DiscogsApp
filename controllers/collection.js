const Collection = require('../models/rekkid');

module.exports = {
  index,
  newRekkid,
  create
};

function index(req, res, next){
    Collection.find({}, function(err, foundCollections){
       res.render('collections/index', {collections: foundCollections})
    })
 };

function newRekkid(req, res) {
   res.render('collections/new')
};

function create(req, res) {
   req.body.user = req.user._id
   let rekkid = new Rekkid(req.body);
   rekkid.save(function(err) {
      res.redirect('/collections');
   });
}