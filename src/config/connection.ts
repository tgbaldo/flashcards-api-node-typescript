import mongoose from 'mongoose';

export const DB_DSN = process.env.DB_DSN || 'mongodb://root:root@mongo:27017/flashcards';

(async () => {
  try {
    await mongoose.connect(DB_DSN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.info('mongo connected');
  } catch (err) {
    console.warn(err);
    process.exit(1);
  }
})();
