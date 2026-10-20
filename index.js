import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  const server = app.listen(PORT, () => {
    console.log(`PhotoLog API running on port ${PORT}`);
  });

  server.on('error', (error) => {
    console.error('Server error:', error.message);
  });
}

await startServer();
