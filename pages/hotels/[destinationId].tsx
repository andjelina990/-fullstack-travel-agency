import Cookies from 'js-cookie';
import { GetServerSidePropsContext } from 'next';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

import { getHotelsById, queryParamToNumber } from '../../util/databaseHa';

// const hover = css`
//   &:hover {
//     background-color: var(--blue);
//     color: #fff;
//     transition: 0.3 easy;
//     cursor: pointer;
//   }
// `;

type Props = {
  animal: {
    id: string;
    nightPrice: number;
    name: string;
    eatCounter: number;
  };
};

export type NightHotel = {
  id: string;
  eatCounter: number;
};
export default function SingleAnimal(props: Props) {
  const [isInDiet, setIsInDiet] = useState('eatCounter' in props.animal);
  const [eatCounter, setEatCounter] = useState(props.animal.eatCounter || 0);

  useEffect(() => {
    if (Cookies.get('night')) {
      setParsedCookie('night', getParsedCookie('night'));
    } else {
      setParsedCookie('night', []);
    }
  }, []);
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
                  {props.animal.nightPrice}$
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
                    setIsInDiet(false);

                    setEatCounter(0);
                  } else {
                    newDiet = [
                      ...currentNight,
                      { id: props.animal.id, eatCounter: 1 },
                    ];
                    setIsInDiet(true);
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
              )}
            </div>
          </div>

          <h2>Pick a date</h2>
          <input
            className="date"
            type="date"
            onChange={(e) => {
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

      <div className="section wave">
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
        <div className="wavewave4" />
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
