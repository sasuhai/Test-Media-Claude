const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const admin = require('firebase-admin');
const express = require('express');

admin.initializeApp();
const db = admin.firestore();

const DEFAULT_CONTENT = require('./default-content.json');
const CONTENT_DOC = db.doc('site/content');

const app = express();
app.use(express.json({ limit: '2mb' }));

app.get('/content.json', async (req, res) => {
  try {
    const snapshot = await CONTENT_DOC.get();
    if (!snapshot.exists) {
      res.set('Cache-Control', 'no-store');
      return res.status(200).json(DEFAULT_CONTENT);
    }
    res.set('Cache-Control', 'no-store');
    return res.status(200).json(snapshot.data());
  } catch (error) {
    logger.error('Failed to read content', error);
    res.set('Cache-Control', 'no-store');
    return res.status(200).json(DEFAULT_CONTENT);
  }
});

app.post('/api/publish', async (req, res) => {
  try {
    const payload = req.body;
    if (!payload || typeof payload !== 'object') {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    await CONTENT_DOC.set(payload, { merge: false });
    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    logger.error('Failed to publish content', error);
    return res.status(500).json({ error: 'Publish failed' });
  }
});

exports.api = onRequest(app);
