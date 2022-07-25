import { useEffect, useRef, useState } from 'react';
import Router from 'next/router';
import { setParsedCookie } from '../util/cookies';
import { css } from '@emotion/react';

const h1 = css`
  text-align: center;
  padding-bottom: 50px;
`;

export default function Checkout() {
  const cardSelect = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const [country, setCountry] = useState('');
  const [card, setCard] = useState('');
  console.log(card);
  const [expiration, setExpiration] = useState('');
  const [secCode, setSecCode] = useState('');
  const [errForm, setErrForm] = useState('');

  useEffect(() => {
    setCard(cardSelect.current.value);
  }, []);

  const validationForm = () => {
    let err = false;
    !firstName && (err = true);
    !lastName && (err = true);
    !email && (err = true);

    !city && (err = true);

    !country && (err = true);
    !expiration && (err = true);
    !secCode && (err = true);
    setErrForm('All fileds are required!');
    return err;
  };

  const clearCookies = () => {
    setParsedCookie('diet', []);
  };

  const checkoutInfo = async (e) => {
    e.preventDefault();
    if (!validationForm()) {
      clearCookies();
      await Router.push('/thankyou');
    } else {
    }
  };

  return (
    <div className="container">
      <div css={h1}>
        <h1>Checkout</h1>
      </div>
      <div className="row">
        <div className="col-10 offset-1">
          <form onSubmit={checkoutInfo}>
            <input
              className="form-control mb-2"
              placeholder="firstname"
              onInput={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="form-control mb-2"
              placeholder="lastname"
              onInput={(e) => {
                setLastName(e.target.value);
              }}
            />
            <input
              className="form-control mb-2"
              type="email"
              placeholder="email"
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              className="form-control mb-2"
              placeholder="city"
              onInput={(e) => {
                setCity(e.target.value);
              }}
            />

            <input
              className="form-control mb-2"
              placeholder="country"
              onInput={(e) => {
                setCountry(e.target.value);
              }}
            />
            <select
              ref={cardSelect}
              className="form-control mb-2"
              onChange={(e) => {
                setCard(e.target.value);
              }}
            >
              <option value="PayPal">PayPal</option>
              <option value="MasterCard">MasterCard</option>
              <option value="Visa">Visa</option>
            </select>
            <input
              className="form-control mb-2"
              type="date"
              placeholder="expiration date"
              onInput={(e) => {
                setExpiration(e.target.value);
              }}
            />
            <input
              className="form-control mb-2"
              placeholder="security code"
              onInput={(e) => {
                setSecCode(e.target.value);
              }}
            />

            <button className="btn btn-danger my-3">Confirm</button>
          </form>
          {errForm && <div className="alert alert-danger mt-3">{errForm}</div>}
        </div>
      </div>
    </div>
  );
}
