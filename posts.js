const express = require('express');
const router = express.Router();
const Posts = require('./schemas');

//Fetch data with find()
router.get('/', (req, res) => {
    Posts.find()
    .sort({date : -1})
    .then(data => res.json(data))
});

//Post data with save()
router.post('/', (req, res) => {

    const postInsert = new Posts({
        id:     req.body.id,
        title : req.body.title,
        desc :  req.body.desc
    })

    postInsert.save()
    .then(data => res.json(data))
});

//Fetch specific data with finById
/* router.get('/:id', (req, res) => {

    Posts.findById(req.params.id)
    .then(data => res.json(data))

}); */

//Delete specific data with finByID permet d'aller chercher directement dans les _id de mongoDB
//Mais dans notre cas des id sont ajouté à la volé, findOne permet alors d'aller chercher notre champs de façon ciblée
router.delete('/:id', (req, res) => {

    Posts.findOne({id : req.params.id})
    .then(data => data.remove())
    .catch(err => console.log(err))

});

module.exports = router;