const Course = require('../models/Course');

// Fetch all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new course
const createCourse = async (req, res) => {
  const { title, description, price } = req.body;

  try {
    const course = new Course({ title, description, price });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a course
const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;

  try {
    const course = await Course.findByIdAndUpdate(
      id,
      { title, description, price },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a course
const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
