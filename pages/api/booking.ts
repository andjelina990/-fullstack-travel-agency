import { NextApiRequest, NextApiResponse } from 'next';
import {
  addToBookingPlan,
  getBookingPlan,
  removeBooking,
  Booking,
} from '../../util/databaseHa';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    // 1. Get the cookie from the request
    const reqBody = req.body;

    const newBooking = await addToBookingPlan(
      reqBody.nights,
      reqBody.hotel_id,
      reqBody.user_id,
      reqBody.start_date,
    );
    res.json('Success booking');
  } else if (req.method === 'GET') {
    const userId = Number(req.query.id);
    const myBookingPlans = await getBookingPlan(userId);
    res.status(200).json(myBookingPlans);
  } else if (req.method === 'DELETE') {
    const booking_id = Number(req.query.id);
    const myBookingPlans = await removeBooking(booking_id);
    res.status(200).json(myBookingPlans);
  } else {
    res.json({ error: 'Method is not allowed' });
  }
}
