import { css } from '@emotion/react';
import Link from 'next/link';
import { getDestinationsAndHotelsById } from '../../util/databaseHa';
import 'animate.css';

const btnhover = css`
  text-decoration: none;
  color: white;
  font-family: sans-serif;
  font-size: 40px;
  border: 3px solid white;
  padding: 40px 80px;
  position: relative;
  transition: all 1s;
  overflow: hidden;
  &:before {
    content: 'YEAH!';
    color: white;
    background-color: var(--red);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transform: translateY(-100%);
    transition: all 0.5s;
  }
  &:hover:before {
    transform: translateY(0);
  }
`;

export default function Destination(props) {
  if (!props.destination.length) {
    return <div>We dont have this location</div>;
  }
  console.log(props.destination);

  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide text-center "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active " data-bs-interval="10000">
            {props.destination.map((place) => {
              return (
                <video
                  id="videoSl"
                  loop
                  muted
                  autoPlay
                  key={`destination-${place.id}`}
                >
                  <source src={`/${place.id}.mp4`} type="video/webm" />
                </video>
              );
            })}
            <div className="ani animate__animated animate__backInLeft animate__slow">
              <h1>
                We wish you welcome on page of
                <br />
                {props.destination[0].destination}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section className="programs">
          {props.destination.map((place) => {
            return (
              <article key={`destination-${place.id}`}>
                <div className="hotel">
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h2 className="my-1 display-7 fw-normal">
                    Hotel: {place.name}
                  </h2>
                  <p className="fs-6 fw-normal">
                    Description:{place.description}
                  </p>
                  <div className="cost">
                    <p>
                      Price pre Night:
                      <span>
                        <i className="fas fa-tags" />
                        {place.night_price}$
                      </span>
                    </p>
                  </div>
                  <Link href={`/hotels/${place.id}`}>
                    <button css={btnhover} className="my-2">
                      Book now
                    </button>
                  </Link>
                </div>
                <div className="thumbnail">
                  <img src={`/${place.name}.jpg`} alt="" />
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  //   // const place = destinations.find((destination) => {
  //   //   return destination.id === context.query.destinationId;
  //   // });
  const destination = await getDestinationsAndHotelsById(
    context.query.destinationId,
  );
  //   // const destination = await getDestinationsById(context.query.destinationId);
  //   // console.log(typeof context.query.destinationId);
  //   // if (!place) {
  //   //   context.res.statusCode = 404;
  //   // }
  //   // const hotels = await hotelDestinationsById(context.query.destinationId);
  console.log(destination);
  return {
    props: {
      destination: destination,

      // destinations: destinations,
    },
  };
}
