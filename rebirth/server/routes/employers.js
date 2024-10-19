const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const employersFilePath = path.join(__dirname, '../data/employers.json');

function getEmployers() {
    const employersData = fs.readFileSync(employersFilePath);
    return JSON.parse(employersData);
}

function saveEmployers(employers) {
    fs.writeFileSync(employersFilePath, JSON.stringify(employers, null, 2));
}

router.get('/', (req, res) => {
    const employers = getEmployers();
    res.json(employers);
});

router.post('/', (req, res) => {
    const employers = getEmployers();
    const newEmployer = {
        name: req.body.name || 'Unnamed Employer',
        postings: req.body.postings || [],
    };

    employers.push(newEmployer);
    saveEmployers(employers);
    res.redirect(`/employers/${employers.length - 1}`);
})

router.get('/new', (req, res) => {
    res.render('employers/new');
})

router
    .route('/:id')
    .get((req, res) => {
        const employers = getEmployers();
        const employer = employers[req.params.id];
        if (employer) {
            res.json(employer);
        } else {
            res.status(404).send('Employer not found');
        }
    })
    .put((req, res) => {
        const employers = getEmployers();
        const employer = employers[req.params.id];
        if (employer) {
            Object.assign(employer, req.body);
            saveEmployers(employers);
            res.send(`Updated Employer with ID ${req.params.id}`);
        } else {
            res.status(404).send('Employer not found');
        }
    });

module.exports = router;