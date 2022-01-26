const router = require('express').Router()
const User = require('../models/User.model');

// get all Post
router.get('/', (req, res, next) => {
	User.findById(req.payload._id)
		.then(users => {
			res.status(200).json(users)
		})
		.catch(err => next(err))
});

// // create an Post
// router.post('/create', (req, res, next)=>{
//     const { imageUrl, title, date, time, category, description} = req.body
//     Post.create({imageUrl, title, date, time, category, description})
//     .then(post =>{
//         res.status(201).json(post)
//     })
//     .catch(err => next(err))
// })

// // get specific Post
// router.get('/:id', (req, res, next) => {
// 	Post.findById(req.params.id)
// 		.then(posts => {
// 			res.status(200).json(posts)
// 		})
// 		.catch(err => next(err))
// });

// // get update Post
// router.put('/:id', (req, res, next) => {
//     const { imageUrl, title, date, time, category, description} = req.body
// 	Post.findByIdAndUpdate(req.params.id, {
//         imageUrl, title, date, time, category, description  
//     }, { new: true })
// 		.then(updatedPost => {
// 			res.status(200).json(updatedPost)
// 		})
// 		.catch(err => next(err))
// });

// // delete Post
// router.delete('/:id', (req, res, next) => {
// 	Post.findByIdAndDelete(req.params.id)
// 		.then(() => {
//             res.status(200).json({message: 'Post deleted'})   
//         })
// 		.catch(err => next(err))
// });


module.exports = router;