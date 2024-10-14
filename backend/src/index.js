// Use `import` instead of `require`
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import route from './Routes/route.js';  // Ensure the extension is .js
//import authMiddleware from './middleware/authMiddleware.js';

// Initialize express app
const app = express();

// Use CORS middleware
app.use(cors());

// Set the port from environment or default to 3008
const port = process.env.PORT || 3008;

// Middleware for parsing JSON
app.use(express.json());

// Public routes (registration and login)
app.use('/', route);

// Protected routes (requires authentication)
//app.use(authMiddleware);
// app.use('/api/users', userRoutes.protectedRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




