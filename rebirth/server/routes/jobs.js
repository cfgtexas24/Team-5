// Routing jobs contains HTTPS request routes and simple get, post functionality
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const jobsFilePath = path.join(__dirname, '../data/jobs.json');

function getJobs() {
    const jobsData = fs.readFileSync(jobsFilePath);
    return JSON.parse(jobsData);
}

function saveJobs(jobs) {
    fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2));
}

// https request to get all jobs
router.get('/', (req, res) => {
    const jobs = getJobs();
    res.json(jobs);
});


// search filter by skills
router.get('/by-skill', (req, res) => {
    const skill = req.query.skill;
    
    if (!skill) {
        return res.status(400).json({ error: 'Skill query parameter is required' });
    }

    const jobs = getJobs();
    const filteredJobs = jobs.filter(job => job.required_skills.includes(skill));

    if (filteredJobs.length > 0) {
        res.json(filteredJobs);
    } else {
        res.status(404).json({ message: `No jobs found requiring the skill: ${skill}` });
    }
});

// search filter by location
router.get('/by-location', (req, res) => {
    const location = req.query.location;

    if (!location) {
        return res.status(400).json({ error: 'Location query parameter is required' });
    }

    const jobs = getJobs();
    const filteredJobs = jobs.filter(job => job.location.toLowerCase() === location.toLowerCase());

    if (filteredJobs.length > 0) {
        res.json(filteredJobs);
    } else {
        res.status(404).json({ message: `No jobs found in location: ${location}` });
    }
});


// search filter by title
router.get('/by-title', (req, res) => {
    const title = req.query.title;

    if (!title) {
        return res.status(400).json({ error: 'Title query parameter is required' });
    }

    const jobs = getJobs();
    const filteredJobs = jobs.filter(job => job.title.toLowerCase() === title.toLowerCase());

    if (filteredJobs.length > 0) {
        res.json(filteredJobs);
    } else {
        res.status(404).json({ message: `No jobs found with title: ${title}` });
    }
});

// request to add new job posting
router.post('/', (req, res) => {
    const jobs = getJobs();
    const newJob = {
        company: req.body.company || 'No company',
        title: req.body.title || 'Unnamed Job',
        description: req.body.description || 'No description',
        location: req.body.location || 'No location',
        salary_range: req.body.salary_range || 'No salary',
        required_skills: req.body.required_skills || 'No requirements',
    };

    jobs.push(newJob);
    saveJobs(jobs);
    res.redirect(`/jobs/${jobs.length - 1}`);
})

router.get('/new', (req, res) => {
    res.render('jobs/new');
})

router
    .route('/:id')
    .get((req, res) => {
        const jobs = getJobs();
        const job = jobs[req.params.id];
        if (job) {
            res.json(job);
        } else {
            res.status(404).send('Job not found');
        }
    })
    .put((req, res) => {
        const jobs = getJobs();
        const job = jobs[req.params.id];
        if (job) {
            Object.assign(job, req.body);
            saveJobs(jobs);
            res.send(`Updated Job with ID ${req.params.id}`);
        } else {
            res.status(404).send('Job not found');
        }
    });

module.exports = router;