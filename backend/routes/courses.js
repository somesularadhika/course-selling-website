const express = require('express');
const router = express.Router();
const { getCourses, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController');

// Route for fetching all courses
router.get('/', getCourses);

// Route for creating a new course
router.post('/', createCourse);

// Route for updating a course
router.put('/:id', updateCourse);

// Route for deleting a course
router.delete('/:id', deleteCourse);

module.exports = router;
