const Rekkid = require('../models/rekkid');

module.exports = {
  index,
  newRekkid,
  create,
  delete: deleteRekkid,
  rekkidSpecs
};


function rekkidSpecs(req, res){
   Rekkid.findById(req.params.id, function(err, rekkid){
       res.render('collections/boom!', {rekkid: rekkid})
   });
};  

function deleteRekkid(req,res) {
   // console.log(req.params.id, 'this is id')
   Rekkid.findByIdAndDelete(req.params.id, function(err, deletedDoc){
       // console.log(deletedDoc, 'this is deleted doc')
       res.redirect('/collections');

   });
   
}

function index(req, res, next){
    Rekkid.find({'user': req.user._id}, function(err, foundRekkids){
       res.render('collections/index', {rekkids: foundRekkids})
    })
 };

function newRekkid(req, res) {
   res.render('collections/new')
};

function create(req, res) {
   req.body.user = req.user._id;
   let rekkid = new Rekkid(req.body);
   rekkid.save(function(err) {
      res.redirect('/collections');
   });
}