const Order = require('../models/Order');
const User = require('../models/User');
const Course = require('../models/Course');

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { userId, courseIds } = req.body;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the courses
    const courses = await Course.find({ _id: { $in: courseIds } });
    if (courses.length !== courseIds.length) {
      return res.status(404).json({ message: 'One or more courses not found' });
    }

    // Create the order
    const order = new Order({
      user: userId,
      courses: courseIds,
      status: 'completed',
    });

    // Save the order
    await order.save();

    // Add the courses to the user's purchased courses
    user.purchasedCourses.push(...courseIds);
    await user.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('courses');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  createOrder,
  getOrders,
};
