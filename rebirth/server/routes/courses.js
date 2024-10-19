const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const coursesFilePath = path.join(__dirname, '../data/courses.json');

function getCourses() {
    const coursesData = fs.readFileSync(coursesFilePath);
    return JSON.parse(coursesData);
}

function saveCourses(courses) {
    fs.writeFileSync(coursesFilePath, JSON.stringify(courses, null, 2));
}

router.get('/', (req, res) => {
    const courses = getCourses();
    
    const coursesWithCompletion = courses.map(course => {
        const completedModules = course.modules.filter(module => module.completed).length;
        const totalModules = course.module_count;
        const completionPercentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0; // Avoid division by zero
        
        return {
            ...course,
            completionPercentage: completionPercentage.toFixed(2) // Format to 2 decimal places
        };
    });
    
    res.json(coursesWithCompletion);
});

router.post('/', (req, res) => {
    const courses = getCourses();
    const newCourse = {
        student: req.body.student || 'Unnamed Student',
        title: req.body.title || 'Unnamed Course',
        module_count: req.body.module_count || 0,
        modules: req.body.modules || []
    };

    courses.push(newCourse);
    saveCourses(courses);
    res.redirect(`/courses/${courses.length - 1}`);
});

router.get('/new', (req, res) => {
    res.render('courses/new');
})

router
    .route('/:id')
    .get((req, res) => {
        const courses = getCourses();
        const course = courses[req.params.id];
        if (course) {
            const completedModules = course.modules.filter(module => module.completed).length;
            const totalModules = course.module_count;
            const completionPercentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

            res.json({
                ...course,
                completionPercentage: completionPercentage.toFixed(2) // Format to 2 decimal places
            });
        } else {
            res.status(404).send('Course not found');
        }
    })
    .put((req, res) => {
        const courses = getCourses();
        const course = courses[req.params.id];
        if (course) {
            Object.assign(course, req.body);
            saveCourses(courses);
            res.send(`Updated Course with ID ${req.params.id}`);
        } else {
            res.status(404).send('Course not found');
        }
    });

module.exports = router;