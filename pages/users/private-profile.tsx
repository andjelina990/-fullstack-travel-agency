import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/urlConfig';
import { getUserByValidSessionToken, User } from '../../util/databaseHa';
import { css } from '@emotion/react';

type Props = {
  user?: User;
};

const style = css`
  min-height: 500px;
  text-align: center;
  margin-top: 30px;
`;

const main = css`
  margin-bottom: 50px;
`;
export default function UserDetail(props: Props) {
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
  const [bookingData, setBookingData] = useState([]);
  const [requestFinish, setRequestFinish] = useState(false);
  const [errorMsg, setErrorMsg] = useState({ have: false, err: null });
  useEffect(() => {
    getMyBookings();
  }, []);

  const getMyBookings = () => {
    fetch(BASE_URL + `/api/booking?id=${props.user.id}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setBookingData(data))
      .catch((err) => {
        console.log(err);
        setErrorMsg({ have: true, err: err });
      })
      .finally(() => {
        setRequestFinish(true);
      });
  };
  const removeBooking = (bookingId: number) => {
    fetch(BASE_URL + `/api/booking?id=${bookingId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
        setErrorMsg({ have: true, err: err });
      })
      .finally(() => {
        getMyBookings();
      });
  };

  const bookingLayout = () => {
    return !errorMsg.have ? (
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
          {bookingData.map((el: any) => {
            console.log(bookingData);

            return (
              <tr key={el.bookingid}>
                <td>{el.name}</td>
                <td>{el.destination}</td>
                <td>{el.nights}</td>
                <td>{el.start_date}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeBooking(el.bookingid)}
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
    );
  };

  return (
    <div>
      <Head>
        <title>{props.user.username}</title>
        <meta name="description" content="About the app" />
      </Head>

      <main css={style}>
        <div css={main}>
          {' '}
          <h1>Welcome to your profile page: {props.user.username}</h1>
        </div>
        {/* <div>id: {props.user.id}</div>
        <div>username: {props.user.username}</div> */}
        {requestFinish && bookingLayout()}
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
  console.log(user);

  if (user) {
    return {
      props: {
        user: user,
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
