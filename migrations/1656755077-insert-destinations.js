const destinations = [
  {
    id: '1',
    destination: 'Thailand',
    description:
      ' Thailand is Southeast Asia’s most visited country, and for good reason. From the golden Buddhist temples and floating markets, to thick jungles and exotic wildlife, to white-sand beaches and tropical reefs, there’s a myriad of attractions on offer.',
  },
  {
    id: '2',
    destination: 'Bali',
    description:
      ' Bali Island is a small beautiful island and a part of Indonesia archipelago, and the most famous of Indonesian tourism in the world. It owns the panorama and unique culture that make this island is exclusive than others.',
  },
  {
    id: '3',

    destination: 'Croatia',
    description:
      ' Croatia as extraordinary island-speckled coastline is indisputably its main attraction. The first thing that strikes you is the remarkable clarity of the water. ',
  },
  {
    id: '4',
    destination: 'Maldivi',
    description:
      ' The Maldives is a nation of islands in the Indian Ocean, that spans across the equator. The country is comprised of 1192 islands that stretch along a length of 871 kilometers.',
  },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO destinations ${sql(destinations, 'destination', 'description')}
  `;
};
exports.down = async (sql) => {
  for (const destination of destinations) {
    await sql`
				DELETE FROM
					destinations
				WHERE
				destination = ${destination.destination} AND
					description = ${destination.description}
			`;
  }
};
