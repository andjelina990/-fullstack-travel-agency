import { config } from 'dotenv-safe';
import postgres from 'postgres';
import camelcaseKeys from 'camelcase-keys';

config();

// Type needed for the connection function below
declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.postgresSqlClient) {
      globalThis.postgresSqlClient = postgres();
    }
    sql = globalThis.postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export type Animal = {
  id: number;
  firstName: string;
  type: string;
  accessory: string;
};

export type Destination = {
  id: number;
  firstName: string;
  type: string;
  accessory: string;
};

export async function getDestinations() {
  const destinations = await sql<Destination[]>`
    SELECT * FROM destinations
  `;
  return destinations.map((destination) => camelcaseKeys(destination));
}

export async function getDestinationsById(id: number | undefined) {
  if (!id) return undefined;
  const [destination] = await sql<[Destination | undefined]>`
    SELECT
      *
    FROM
      destinations
    WHERE
      id = ${id}
  `;
  return destination && camelcaseKeys(destination);
}

export type User = {
  id: number;
  username: string;
};

type UserWithPasswordHash = User & {
  passwordHash: string;
};

export async function createUser(username: string, passwordHash: string) {
  const [user] = await sql<[User]>`
    INSERT INTO users
      (username, password_hash)
    VALUES
      (${username}, ${passwordHash})
    RETURNING
      id,
      username
    `;
  console.log(user);

  return camelcaseKeys(user);
}

export async function getUserByUsername(username: string) {
  if (!username) return undefined;
  const [user] = await sql<[User | undefined]>`

  SELECT
  id,
  username
  FROM
  users
  WHERE
  username=${username}
  `;
  return user && camelcaseKeys(user);
}

export async function getUserById(userId: number) {
  if (!userId) return undefined;
  const [user] = await sql<[User | undefined]>`

  SELECT
  id,
  username
  FROM
  users
  WHERE
  id=${userId}
  `;
  return user && camelcaseKeys(user);
}

export async function getUserWithPasswordHashByUsername(username: string) {
  if (!username) return undefined;
  const [user] = await sql<[UserWithPasswordHash | undefined]>`

  SELECT
    *
  FROM
  users
  WHERE
  username=${username}
  `;
  return user && camelcaseKeys(user);
}

type Session = {
  id: number;
  token: string;
};

export async function createSession(token: string, userId: User['id']) {
  const [session] = await sql<[Session]>`
  INSERT INTO sessions
    (token, user_id)
  VALUES
    (${token}, ${userId})
  RETURNING
    id,
    token
  `;

  return camelcaseKeys(session);
}

export async function getUserByValidSessionToken(token: string) {
  if (!token) return undefined;

  const [user] = await sql<[User | undefined]>`
  SELECT
    users.id,
    users.username
  FROM
    users,
    sessions
  WHERE
    sessions.token = ${token} AND
    sessions.user_id = users.id AND
    sessions.expiry_timestamp > now();
  `;

  return user && camelcaseKeys(user);
}

export async function deleteSessionByToken(token: string) {
  const [session] = await sql<[Session | undefined]>`
  DELETE FROM
    sessions
  WHERE
    sessions.token = ${token}
  RETURNING *
  `;

  return session && camelcaseKeys(session);
}

export async function deleteExpiredSessions() {
  const sessions = await sql<[Session[]]>`
  DELETE FROM
    sessions
  WHERE
    expiry_timestamp < now()
  RETURNING *
  `;

  return sessions.map((session) => camelcaseKeys(session));
}
// export async function getAnimalWithFoodsById(destinationId: number) {
//   // Join query
//   const animalsWithFoods = await sql`
//     SELECT
//       destinations.id AS destination_id,
//       destinations.description AS destination_description,
//       destinations.destination AS destination_destination,
//       hotel.id AS hotel_id,
//       hotel.name AS hotel_name,
//       hotel.destination_id AS hotel_destination
//     FROM
//       destinations,
//       hotel_destination,
//       hotel
//     WHERE
//       destinations.id = ${destinationId} AND
//       hotel_destination.destination_id = destinations.id AND
//       hotel.destination_id = hotel_destination.hotel_destination
//   `;
//   return camelcaseKeys(animalsWithFoods);
// }

// export async function hotelDestinationsById(destinationId: number) {
//   const hotels = await sql`
//  SELECT * FROM hotel
//  WHERE destination_id=${destinationId}

//   `;
//   console.log(hotels);
// }

// export async function getDestinationsAndHotelsById(destinationId: number) {
//   const destinationHotels = await sql`
//   SELECT
//   destinations.id,
//   destinations.destination,
//   destinations.description,
//   hotel.id,
//   hotel.name,
//   hotel.destination_id,
//   hotel.night_price
//   FROM
//   destinations,
//   hotel
//   WHERE
//   destinations.id=${destinationId} AND
//   destinations.id=hotel.destination_id

//   `;
//   return destinationHotels;

//   console.log(destinationHotels);
// }

export async function getDestinationsAndHotelsById(destinationId: number) {
  const destinationHotels = await sql`
  SELECT
    destinations.id,
    destinations.destination,
    destinations.description,
    hotel.id,
    hotel.name,
    hotel.destination_id,
    hotel.night_price
  FROM
    destinations

  JOIN hotel ON hotel.destination_id = destinations.id
  WHERE
    destinations.id=${destinationId}
  `;
  return destinationHotels;

  console.log(destinationHotels);
}

// export async function getHotelsById(id: number | undefined) {
//   if (!id) return undefined;
//   const [hotel] = await sql<[Destination | undefined]>`
//     SELECT
//       *
//     FROM
//       hotel
//     WHERE
//       id = ${id}
//   `;
//   return hotel && camelcaseKeys(hotel);
// }

export async function getHotelsById(id: number | undefined) {
  if (!id) return undefined;
  const [hotel] = await sql<[Destination | undefined]>`
    SELECT
      hotel.*,
      destinations.destination,
      destinations.description
    FROM
      hotel
    JOIN destinations ON hotel.destination_id = destinations.id
    WHERE
      hotel.id = ${id}
  `;
  return hotel && camelcaseKeys(hotel);
}

export function queryParamToNumber(queryParam: string | string[] | undefined) {
  if (!queryParam) return undefined;
  if (Array.isArray(queryParam)) {
    return Number(queryParam[0]);
  }
  return Number(queryParam);
}

export async function getBookingPlan(userId: string) {
  const bookingPlans = await sql`
  SELECT
    booking.id AS bookingId,
    booking.nights,
    booking.start_date,

    destinations.id,
    destinations.destination,
    destinations.description,

    hotel.id,
    hotel.name,
    hotel.destination_id,
    hotel.night_price

  FROM
    booking
  JOIN hotel ON booking.hotel_id = hotel.id
  JOIN destinations ON hotel.destination_id = destinations.id

  WHERE
    booking.user_id=${userId}
  `;
  return bookingPlans;
}

export async function addToBookingPlan(
  nights: number,
  hotel_id: number,
  user_id: number,
  start_date: Date,
) {
  const bookingPlan = await sql`
  INSERT INTO booking
    (nights, hotel_id, user_id, start_date)
  VALUES
    (${nights}, ${hotel_id}, ${user_id}, ${start_date})
  `;

  return bookingPlan;
}

export type Booking = {
  id: number;
  nights: number;
  hotel_id: number;
  user_id: number;
  start_date: Date;
};

export async function removeBooking(booking_id: number) {
  const bookingPlan = await sql`
  DELETE FROM
    booking
  WHERE id =${booking_id}
  `;

  return bookingPlan;
}
