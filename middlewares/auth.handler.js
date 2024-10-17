function isAdmin(req, res, next){
  if(req.query.admin){
    console.log("The Client Is Admin");
    next();
  }else{
    console.log("Who are you? :| ");
    res.send()
  }
}

module.exports = isAdmin;
