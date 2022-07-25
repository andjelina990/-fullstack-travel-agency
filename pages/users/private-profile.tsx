import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { BASE_URL } from '../../config/urlConfig';
import {
  getBookingPlan,
  getUserByValidSessionToken,
  User,
} from '../../util/databaseHa';


type Props = {
  user: User | null;
  bookingsByUserId: {
    bookingid: number;
    nights: number;
    start_date: string;
    id: number;
    destination: string;
    description: string;
    name: string;
    destination_id: number;
    night_price: number;
  }[];
};

type UsersBookings = {
  bookingid: number;
  nights: number;
  start_date: string;
  id: number;
  destination: string;
  description: string;
  name: string;
  destination_id: number;
  night_price: number;
};

// const style = css`
//   min-height: 500px;
//   text-align: center;
//   margin-top: 30px;
// `;

// const main = css`
//   margin-bottom: 50px;
// `;
export default function UserDetail(props: Props) {
  const [bookingData, setBookingData] = useState<UsersBookings[]>(
    props.bookingsByUserId,
  );
  console.log(bookingData);
  // const [bookingData, setBookingData] = useState([]);
  // const [requestFinish, setRequestFinish] = useState(false);
  const [errorMsg, setErrorMsg] = useState({ have: false, err: null });
  console.log(bookingData);
  // useEffect(() => {
  //   getMyBookings();
  // }, []);

  // const getMyBookings = () => {
  //   fetch(BASE_URL + `/api/booking?id=${props.user.id}`, {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setBookingData(data))
  //     .catch((err) => {
  //       console.log(err);
  //       setErrorMsg({ have: true, err: err });
  //     })
  //     .finally(() => {
  //       setRequestFinish(true);
  //     });
  // };
  const removeBooking = (bookingId: number) => {
    fetch(BASE_URL + `/api/booking?id=${bookingId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((deletedBooking) =>
        setBookingData((prevBooking) =>
          prevBooking.filter(
            (booking) => booking.bookingid !== deletedBooking.id,
          ),
        ),
      )
      .catch((err) => {
        console.log(err);
        setErrorMsg({ have: true, err: err });
      });
  };

  if (!props.user) {
    return (
      <>
        <Head>
          <title>User not found</title>
          <meta name="description" content="User not found" />
        </Head>
        <h1>404 - User not found</h1>
        Better luck next time
      </>
    );
  }
  return (
    <div>
      <Head>
        <title>{props.user.username}</title>
        <meta name="description" content="About the app" />
      </Head>

      <main>
        <div>
          <h1>Welcome to your profile page: {props.user.username}</h1>
        </div>
        {!errorMsg.have ? (
          <table className="table">
            <thead>
              <tr>
                <th>Hotel</th>
                <th>Destination</th>
                <th>Nights</th>
                <th>Start date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking) => {
                return (
                  <tr key={booking.bookingid}>
                    <td>{booking.name}</td>
                    <td>{booking.destination}</td>
                    <td>{booking.nights}</td>
                    <td>{booking.start_date}</td>

                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeBooking(booking.bookingid)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h3>Error</h3>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // if you want to use username in the URL name this variable properly

  // if you want to use username in the URL call function getUserByUsername and don't use parse int
  const user = await getUserByValidSessionToken(
    context.req.cookies.sessionToken,
  );

  if (user) {
    const bookingsByUserId = await getBookingPlan(user.id);
    return {
      props: {
        user: user,
        bookingsByUserId,
      },
    };
  }

  return {
    redirect: {
      destination: `/login?returnTo=/users/private-profile`,
      permanent: false,
    },
  };
}
