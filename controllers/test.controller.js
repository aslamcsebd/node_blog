const models = require('../models');

// Many to many: [m:m] [a post belongs to many categories]

async function test(req, res){
    // const user = await models.User.findByPk(1);
/*
    // One to one: [1:1] [a user has one address]    
    const getAddress = await models.User.findByPk(2, {
        include: [models.Address]
    });

    // One to one: [1:1 (inverse)] [an address belongs to one user]    
    const getUser = await models.Address.findByPk(2, {
        include: [models.User]
    });

    // One to many: [1:m] [a user has many posts]    
    const userPost = await models.User.findByPk(2, {
        include: [models.Post]
    });

    // Many to many: [1:m] [a user has many posts]    
    /*
    const all = await models.Post.findByPk(2, {
        include: [models.Category]
    });
*/
    const all = await models.PostCategory.where('postId', 2);
   // models.Post.update(updatePost, {where: {id: id, userId: userId}}).then(result => {

      //  const all = await models.Category.findByPk(2, {
     //   include: [models.Post]
  //  });

    res.status(200).json({
        data: all
    })
}

module.exports = {
    test: test
}