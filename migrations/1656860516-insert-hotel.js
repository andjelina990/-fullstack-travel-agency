const hotel = [
  { id: '1', name: 'Thailand West', destination_id: '1', night_price: '100' },
  { id: '2', name: 'Thailand Nord', destination_id: '1', night_price: '70' },
  { id: '3', name: 'Thailand Ost', destination_id: '1', night_price: '120' },

  {
    id: '4',
    name: 'Bali Ubud',
    destination_id: '2',
    night_price: '100',
  },
  { id: '5', name: 'Bali West', destination_id: '2', night_price: '130' },
  { id: '6', name: 'Bali Sabana', destination_id: '2', night_price: '90' },
  { id: '7', name: ' Lola Hotel', destination_id: '3', night_price: '70' },
  { id: '8', name: ' Opatija Hotel', destination_id: '3', night_price: '85' },
  { id: '9', name: 'Grand Hotel', destination_id: '3', night_price: '110' },
  { id: '10', name: 'Summer Hotel', destination_id: '4', night_price: '250' },
  { id: '11', name: 'Maldivi Sky', destination_id: '4', night_price: '400' },
  { id: '12', name: 'Daisy Hotel', destination_id: '4', night_price: '300' },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO hotel ${sql(hotel, 'name', 'destination_id', 'night_price')}
  `;
};
exports.down = async (sql) => {
  for (const hotels of hotel) {
    await sql`
				DELETE FROM
					hotel
				WHERE
				name = ${hotels.name} AND
        destination_id=${hotels.destination_id} AND
        night_price=${hotels.night_price}


			`;
  }
};
