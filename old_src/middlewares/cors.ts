import cors from 'cors';

export const allowCORS = cors({
  origin: true,
  credentials: true,
  methods: 'GET,POST,PUT',
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization'],
});
