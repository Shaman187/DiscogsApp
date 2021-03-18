const Rekkid = require('../models/rekkid');
 
 module.exports = {
    create,
    delete: deleteComment,
    update
 };

 function create(req, res) {
    
     Rekkid.findById(req.params.id, function(err, rekkid) {
        req.body.user = req.user._id;
        rekkid.comments.push(req.body);
        rekkid.save(function(err) {
        res.redirect(`/collections/${rekkid._id}`);
    });
});
}

function deleteComment(req, res) {
   Rekkid.findOne({'comments._id': req.params.id}, function(err, rekkid) {
        const commentSubdoc = rekkid.comments.id(req.params.id);
        commentSubdoc.remove();
        rekkid.save(function(err) {
            res.redirect(`/collections/${rekkid._id}`);
        });
    });
}

function update(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Rekkid.findOne({'comments._id': req.params.id}, function(err, rekkid) {
      // Find the comment subdoc using the id method on Mongoose arrays
      
      const commentSubdoc = rekkid.comments.id(req.params.id);
      // Ensure that the comment was created by the logged in user
      
      if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/collections/${rekkid._id}`);
    
      // Update the text of the comment
      commentSubdoc.content = req.body.text;
      console.log(commentSubdoc);
      // Save the updated book
      rekkid.save(function(err) {
        // Redirect back to the book's show view
        res.redirect(`/collections/${rekkid._id}`);
      });
    });
  }