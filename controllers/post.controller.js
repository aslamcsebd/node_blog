const models = require('../models');

function save(req, res){
    const post = {
        title      : req.body.title,
        content    : req.body.content,
        imageUrl   : req.body.imageUrl,
        categoryId : req.body.categoryId,
        userId     : 1
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post create successfully",
            post: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            post: error
        })
    })
}

function show(req, res){
    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Post not found"
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong"
        })
    })
}

function index(req, res){
    const id = req.params.id;

    models.Post.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong"
        })
    })
}

function update(req, res){
    const id = req.params.id;
    const userId = 1;

    const updatePost = {
        title      : req.body.title,
        content    : req.body.content,
        imageUrl   : req.body.imageUrl,
        categoryId : req.body.categoryId,
    }

    models.Post.update(updatePost, {where: {id: id, userId: userId}}).then(result => {
        res.status(200).json({
            message: "Post updated successfully",
            post: updatePost
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    })
}

function destroy(req, res){
    const id = req.params.id;
    const userId = 1;
    
    models.Post.destroy({where: {id: id, userId: userId}}).then(result => {
        if(result){
            res.status(200).json({
                message: "Post delete successfully",
            })
        }else{
            res.status(404).json({
                message: "Post not found"
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    })
}


module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy,
}