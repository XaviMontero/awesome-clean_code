import express from 'express';
import dotenv from 'dotenv';
import { createVideo } from './controllers/videoController';
import { createBook } from './controllers/bookController';
import { configureEventSubscriptions } from './config/eventConfig';

// Load environment variables
dotenv.config();

// Configure event subscriptions
configureEventSubscriptions();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the TypeScript Backend API!' });
});

// Create video endpoint
app.post('/videos', createVideo);


// Create book endpoint
app.post('/books', createBook);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
