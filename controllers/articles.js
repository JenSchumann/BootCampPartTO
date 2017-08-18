const express = require('express');
const router = express.Router();
const Article = require('../models/articles.js');

//index
router.get('/', (req, res)=>{
    Article.find({}, (err, foundArticles)=>{
        res.json(foundArticles);
    });
});

//create
router.post('/', (req, res)=>{
  console.log(req.body)
    Article.create(req.body, (err, createdArticle)=>{
        res.json(createdArticle);
    });
});

//delete
router.delete('/:id', (req, res)=>{
    Article.findByIdAndRemove(req.params.id, (err, deletedArticle)=>{
        res.json(deletedArticle);
    });
});

//update
router.put('/:id', (req, res)=>{
    Article.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedArticle)=>{
        res.json(updatedArticle);
    });
});

module.exports = router;
