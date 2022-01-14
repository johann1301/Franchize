const router = require('express').Router()
const Event = require ('../models/Event')

// get all Events
router.get('/events', (req, res, next) => {
	Event.find()
		.then(events => {
			res.status(200).json(events)
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

// get specific Event
router.get('/events/:id', (req, res, next) => {
	Event.findById(req.params.id)
		.then(events => {
			res.status(200).json(events)
		})
		.catch(err => next(err))
});

// get update Event
router.put('/events/:id', (req, res, next) => {
    const { imageUrl, title, date, time, category, description} = req.body
	Event.findByIdAndUpdate(req.params.id, {
        imageUrl, title, date, time, category, description  
    }, { new: true })
		.then(updatedEvent => {
			res.status(200).json(updatedEvent)
		})
		.catch(err => next(err))
});

// delete Event
router.delete('/events/:id', (req, res, next) => {
	Event.findByIdAndDelete(req.params.id)
		.then(() => {
            res.status(200).json({message: 'Event deleted'})   
        })
		.catch(err => next(err))
});


module.exports = router;