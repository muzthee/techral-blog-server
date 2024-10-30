import express from 'express';
import payload from 'payload';
import { mediaManagement } from 'payload-cloudinary-plugin';
import path from 'path';

require('dotenv').config();
const app = express();

app.use('/assets', express.static(path.resolve(__dirname, './assets')));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

app.get('/health-check', (_, res) => {
  res.json({
    message: 'ok',
  });
});

app.use(
  mediaManagement({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  })
);

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
