import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import connectDB from './configs/mongodb.js';
import imageRouter from './routes/imageRoutes.js';

// App Config
const PORT = process.env.PORT || 4000;
const app = express();

// Initialize Middlewares
app.use(express.json());
app.use(cors());

// Function to start the server
(async () => {
  try {
    await connectDB();
    console.log('✅ MongoDB Connected Successfully');

    // API routes
    app.use('/api/user', userRouter);
    app.use('/api/image', imageRouter);

    app.get('/', (req, res) => res.send('API Working'));

    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error('❌ Server Error:', error);
    process.exit(1); // Exit on failure
  }
})();
