import { getMongoDb } from '@/app/lib/mongo';
import { PRACTITIONERS_COLLECTION } from '@/app/constants/schema';
import { ObjectId } from 'mongodb';

/**
 * Fetch a practitioner by userId
 * @param userId The practitioner's user ID
 * @returns practitioner document or null
 */
export async function getPractitioner(userId: string) {
  const db = await getMongoDb();
  const objectId = typeof userId === 'string' ? new ObjectId(userId) : userId;
  const practitioners = db.collection(PRACTITIONERS_COLLECTION);
  return practitioners.findOne({ _id: objectId });
}