import mongoose from 'mongoose';
import app from '.';
import config from './config';

async function connectToDatabase() {
  try {
    await mongoose.connect(config.mongodbURI as string);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
}

function startServer() {
  const PORT = config.port;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

async function main() {
  try {
    await connectToDatabase();
    startServer();
  } catch (error) {
    console.error('Unhandled error:', error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Unhandled error during startup:', error.message);
  process.exit(1);
});
