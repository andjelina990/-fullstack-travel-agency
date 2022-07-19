import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getParsedCookie, setParsedCookie } from '../util/cookies';
import { getHotelsById } from '../util/databaseHa';
import { useRouter } from 'next/router';

export default function Checkout(props) {
  const [currentCoockie, setCurrentCoockie] = useState([]);
  const router = useRouter();
  useEffect(() => {
    setCurrentCoockie(Cookies.get('night') ? getParsedCookie('night') : []);
  }, []);

  const submitHandler = async () => {
    const insertResponse = await fetch('http://localhost:3000/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nights: currentCoockie[0].eatCounter,
        hotel_id: currentCoockie[0].id,
        user_id: JSON.parse(localStorage.getItem('user')).user.id,
        start_date: currentCoockie[0].startDate,
      }),
    });
    const resposneBody = await insertResponse.json();
    if (resposneBody.errors) {
      console.log(resposneBody.errors);
      return;
    } else {
      console.log('Sucefuly booking');
    }
    setParsedCookie('night', []);
    await router.push('/book');
  };

  return (
    <div className="container" style={{ minHeight: '500px' }}>
      {currentCoockie.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Hotel</th>
              <th>Detinsation</th>
              <th>Start date</th>
              <th>Price per night</th>
              <th>Number of night</th>
              <th>Total price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{props.animal.name}</td>
              <td>{props.animal.destination}</td>
              <td>{currentCoockie[0].startDate}</td>
              <td>{props.animal.nightPrice}</td>
              <td>{currentCoockie[0].eatCounter}</td>
              <td>{props.animal.nightPrice * currentCoockie[0].eatCounter}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No Booking</p>
      )}
      <button className="btn btn-primary" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const animalId = JSON.parse(context.req.cookies.night);
  const animal = animalId.length && (await getHotelsById(animalId[0].id));

  if (!animal) {
    context.res.statusCode = 404;
  }

  // if (
  //   context.req.headers.host &&
  //   context.req.headers['x-forwarded-proto'] &&
  //   context.req.headers['x-forwarded-proto'] !== 'https'
  // ) {
  //   return {
  //     redirect: {
  //       destination: `https://${context.req.headers.host}/api/booking`,
  //       permanent: true,
  //     },
  //   };
  // }

  return {
    props: {
      animal: animal || 0,
    },
  };
}
