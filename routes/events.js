const router = require('express').Router()
const Event = require ('../models/Event')

// get all Events
router.get('/events', (req, res, next) => {
	Event.find()
		.then(Events => {
			res.status(200).json(Events)
		})
		.catch(err => next(err))
});

// create an Event
router.post('/events/create', (req, res, next)=>{
    const { imageUrl, title, date, time, category, description} = req.body
    Event.create({imageUrl, title, date, time, category, description})
    .then(event =>{
        res.status(201).json(event)
    })
    .catch(err => next(err))
})



module.exports = router;