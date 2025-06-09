import mongoose from 'mongoose';

declare global {
  // eslint-disable-next-line no-var
  var mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined;
}

const MONGO_URI = process.env.MONGODB_URL;

if (!MONGO_URI) {
  throw new Error('❌ MONGO_URL environment variable not set');
}

let cached = global.mongoose as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached!.conn) {
    console.log('✅ Using existing database connection');
    return cached!.conn;
  }

  if (!cached!.promise) {
    cached!.promise = mongoose.connect(MONGO_URI as string, {
      autoIndex: true,
    });
  }

  cached!.conn = await cached!.promise;
  console.log('🚀 New database connection established');
  return cached!.conn;
}
