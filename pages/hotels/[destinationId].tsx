import Cookies from 'js-cookie';
import { GetServerSidePropsContext } from 'next';
import { css } from '@emotion/react';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

import { getHotelsById, queryParamToNumber } from '../../util/databaseHa';
import { Placeholder } from 'react-bootstrap';

// const header = css`
//   background-color: #f4f9fd;
//   img {
//     width: 100%;
//     height: auto;
//     display: block;
//   }
// `;

type Props = {
  animal: Animal | null;
};

export type NightHotel = {
  id: string;
  eatCounter: number;
};
export default function SingleAnimal(props: Props) {
  const [isInDiet, setInDiet] = useState('eatCounter' in props.animal);
  const [eatCounter, setEatCounter] = useState(props.animal.eatCounter || 0);

  const [currentCoockie, setCurrentCoockie] = useState(
    Cookies.get('night') ? getParsedCookie('night') : [],
  );

  useEffect(() => {
    setParsedCookie('night', currentCoockie);
  }, [currentCoockie]);
  console.log(props.animal);

  return (
    <div className="section ">
      <h1 className="my-3"> Hotel:{props.animal.name}</h1>
      <article className="article my-5">
        <div className="hotel">
          <div className="cost">
            <div>
              {' '}
              <p>
                Price per Night:
                <span>
                  <i className="fas fa-tags" />
                  {props.animal.nightPrice}
                </span>
              </p>
            </div>
            <div>
              <button
                className="add"
                onClick={() => {
                  const currentNight = Cookies.get('night')
                    ? getParsedCookie('night')
                    : [];
                  let newDiet;

                  if (
                    currentNight.find(
                      (nightHotel: NightHotel) =>
                        props.animal.id === nightHotel.id,
                    )
                  ) {
                    newDiet = currentNight.filter(
                      (nightHotel: NightHotel) =>
                        nightHotel.id !== props.animal.id,
                    );
                    setInDiet(false);

                    setEatCounter(0);
                  } else {
                    newDiet = [
                      ...currentNight,
                      { id: props.animal.id, eatCounter: 1 },
                    ];
                    setInDiet(true);
                    setEatCounter(1);
                  }
                  setParsedCookie('night', newDiet);
                }}
              >
                {isInDiet ? 'remove nights' : 'add to nights'}
              </button>
              <br />
              {isInDiet ? (
                <>
                  {eatCounter}
                  <button
                    className="add1"
                    onClick={() => {
                      setEatCounter(eatCounter + 1);
                      const currentNight = Cookies.get('night')
                        ? getParsedCookie('night')
                        : [];
                      const currentFruitInDiet = currentNight.find(
                        (nightHotel: NightHotel) =>
                          props.animal.id === nightHotel.id,
                      );
                      currentFruitInDiet.eatCounter += 1;
                      setParsedCookie('night', currentNight);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="add1"
                    onClick={() => {
                      if (eatCounter > 0) {
                        setEatCounter(eatCounter - 1);
                        const currentDiet = Cookies.get('night')
                          ? getParsedCookie('night')
                          : [];
                        const currentFruitInDiet = currentDiet.find(
                          (nightHotel: NightHotel) =>
                            props.animal.id === nightHotel.id,
                        );
                        currentFruitInDiet.eatCounter -= 1;
                        setParsedCookie('night', currentDiet);
                      }
                    }}
                  >
                    -
                  </button>
                </>
              ) : (
                ''
              )}{' '}
            </div>
          </div>

          <h2>Pick a date</h2>
          <input
            className="date"
            type="date"
            onInput={(e) => {
              const currentDiet = Cookies.get('night')
                ? getParsedCookie('night')
                : [];
              const currentFruitInDiet = currentDiet.find(
                (nightHotel: NightHotel) => props.animal.id === nightHotel.id,
              );
              currentFruitInDiet.startDate = e.target.value;
              console.log(currentDiet);

              setParsedCookie('night', currentDiet);
            }}
          />

          <Link href="/checkout">
            <a className="book-btn">Book now</a>
          </Link>
        </div>
        <div className="thumbnail">
          <img src={`/${props.animal.name}.jpg`} alt="" />
        </div>
      </article>

      {/* <div>Price per Night:{props.animal.nightPrice}</div>

        <div>
          <button
            onClick={() => {
              const currentNight = Cookies.get('night')
                ? getParsedCookie('night')
                : [];
              let newDiet;

              if (
                currentNight.find(
                  (nightHotel: NightHotel) => props.animal.id === nightHotel.id,
                )
              ) {
                newDiet = currentNight.filter(
                  (nightHotel: NightHotel) => nightHotel.id !== props.animal.id,
                );
                setInDiet(false);

                setEatCounter(0);
              } else {
                newDiet = [
                  ...currentNight,
                  { id: props.animal.id, eatCounter: 1 },
                ];
                setInDiet(true);
                setEatCounter(1);
              }
              setParsedCookie('night', newDiet);
            }}
          >
            {isInDiet ? 'remove nights' : 'add to nights'}
          </button>
          <br />
          {isInDiet ? (
            <>
              {eatCounter}
              <button
                onClick={() => {
                  setEatCounter(eatCounter + 1);
                  const currentNight = Cookies.get('night')
                    ? getParsedCookie('night')
                    : [];
                  const currentFruitInDiet = currentNight.find(
                    (nightHotel: NightHotel) =>
                      props.animal.id === nightHotel.id,
                  );
                  currentFruitInDiet.eatCounter += 1;
                  setParsedCookie('night', currentNight);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  if (eatCounter > 0) {
                    setEatCounter(eatCounter - 1);
                    const currentDiet = Cookies.get('night')
                      ? getParsedCookie('night')
                      : [];
                    const currentFruitInDiet = currentDiet.find(
                      (nightHotel: NightHotel) =>
                        props.animal.id === nightHotel.id,
                    );
                    currentFruitInDiet.eatCounter -= 1;
                    setParsedCookie('night', currentDiet);
                  }
                }}
              >
                -
              </button>
            </>
          ) : (
            ''
          )}{' '}
        </div>

        <p>Pick a date</p>
        <input
          type="date"
          onInput={(e) => {
            const currentDiet = Cookies.get('night')
              ? getParsedCookie('night')
              : [];
            const currentFruitInDiet = currentDiet.find(
              (nightHotel: NightHotel) => props.animal.id === nightHotel.id,
            );
            currentFruitInDiet.startDate = e.target.value;
            console.log(currentDiet);

            setParsedCookie('night', currentDiet);
          }}
        />

        <Link href="/checkout">
          <a>Book now</a>
        </Link> */}

      <div className="section wave">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wavewave4"></div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const animalId = queryParamToNumber(context.query.destinationId);
  const animal = await getHotelsById(animalId);

  if (!animal) {
    context.res.statusCode = 404;
  }
  console.log(animal);

  return {
    props: {
      animal: animal || 0,
    },
  };
}