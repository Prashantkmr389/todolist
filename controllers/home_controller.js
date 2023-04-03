const TodoList = require('../models/todoList');


module.exports.home = function(req, res){
    TodoList.find({}).then(todoList =>{
        return res.render('home', {title : 'Home Page', todoList :todoList} )
      })
}

function duedate(due){
    let date = new Date(due);
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let newdate = day + "/" + month + "/" + year;
    return newdate;
}

module.exports.create = function(req, res){
    TodoList.create({
        desc: req.body.desc,
        due: duedate(req.body.due),
        category: req.body.category
      })
    return res.redirect('back')
}

module.exports.delete = function(req, res){
    let arr = req.query.id;
    arr = arr.split(',');
    for (let i of arr) {
        // console.log(i)
        TodoList
          .findByIdAndDelete(i)
          .then((contact) => {
            // console.log(contact)
          })
          .catch((err) => {
            console.log(err);
          });
    }
    return res.redirect('back');
}

module.exports.deletind = function(req, res){
    let a = req.query.id;
   let id = req.query.id;
   TodoList.findByIdAndDelete(id)
     .then((contact) => {
       // console.log(contact)
     })
     .catch((err) => {
       console.log(err);
     });
   return res.redirect("back");
}

