const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('User List')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})

router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get User with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)
    })

// static must go above dynamic
router.get('/:id', (req, res) => {
    res.send(`Get User with ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`Update User with ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete User with ID ${req.params.id}`)
})


const users = [
    { name: 'John' },
    { name: 'Doe' },
    { name: 'Smith' }
]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router