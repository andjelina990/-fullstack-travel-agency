import { NextApiRequest, NextApiResponse } from 'next';
import {
  addToBookingPlan,
  getBookingPlan,
  removeBooking,
} from '../../util/databaseHa';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    // 1. Get the cookie from the request
    const reqBody = req.body;

    await addToBookingPlan(
      reqBody.nights,
      reqBody.hotel_id,
      reqBody.user_id,
      reqBody.start_date,
    );
    res.status(200).json('Success booking');
  } else if (req.method === 'GET') {
    const userId = Number(req.query.id);
    const myBookingPlans = await getBookingPlan(userId);
    res.status(200).json(myBookingPlans);
  } else if (req.method === 'DELETE') {
    const myBookingPlans = await removeBooking(Number(req.query.id));
    res.status(200).json(myBookingPlans);
  } else {
    res.status(405).json({ error: 'Method is not allowed' });
  }
}
