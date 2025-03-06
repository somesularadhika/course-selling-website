# Course Selling Application

This is a demo application for selling courses to students. The application consists of a frontend built with React and a backend built with Node.js and Express.

## Running the Application

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

The application should now be running, with the frontend accessible at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Checking the Application

To check if the application is working, follow these steps:

1. Open the frontend in your browser at `http://localhost:3000`.

2. Register a new user account and log in.

3. Browse the available courses on the Home page.

4. Add a course to your cart and proceed to the Cart page.

5. Click on the "Proceed to Payment" button to simulate the payment process.

6. After the payment simulation, navigate to the Dashboard page to view your purchased courses.

If you can successfully complete these steps without any errors, the application is working correctly.
