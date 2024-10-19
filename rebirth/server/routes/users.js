const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, 'users.json');

function getUsers() {
    const usersData = fs.readFileSync(usersFilePath);
    return JSON.parse(usersData);
}

function saveUsers(users) {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

router.get('/', (req, res) => {
    const users = getUsers();
    res.json(users);
});

router.post('/', (req, res) => {
    const users = getUsers();
    const newUser = {
        name: req.body.firstName || 'Unnamed User',
        email: req.body.email || '',
        phone_number: req.body.phone_number || '',
        certifications: req.body.certifications || [],
        courses: req.body.courses || [],
        languages: req.body.languages || [],
        barriers: body.barriers || [],
        applications: req.body.applications || []
    };

    users.push(newUser);
    saveUsers(users); 
    res.redirect(`/users/${users.length - 1}`);
});

/*router.get('/new', (req, res) => {
    res.render('users/new');
});*/

router
    .route('/:id')
    .get((req, res) => {
        const users = getUsers();
        const user = users[req.params.id];
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    })
    .put((req, res) => {
        const users = getUsers();
        const user = users[req.params.id];
        if (user) {
            Object.assign(user, req.body);
            saveUsers(users);
            res.send(`Updated User with ID ${req.params.id}`);
        } else {
            res.status(404).send('User not found');
        }
    })
    .delete((req, res) => {
        const users = getUsers();
        if (users[req.params.id]) {
            users.splice(req.params.id, 1);
            saveUsers(users); 
            res.send(`Deleted User with ID ${req.params.id}`);
        } else {
            res.status(404).send('User not found');
        }
    });

router.param('id', (req, res, next, id) => {
    const users = getUsers();
    req.user = users[id];
    next();
});

module.exports = router;
