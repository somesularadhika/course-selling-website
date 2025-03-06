import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/purchased-courses')
      .then(response => {
        setPurchasedCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the purchased courses!', error);
      });
  }, []);

  return (
    <div>
      <h1>Purchased Courses</h1>
      <ul>
        {purchasedCourses.map(course => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
