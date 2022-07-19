exports.up = async (sql) => {
  await sql`
	CREATE TABLE booking (
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		nights integer NOT NULL,
		hotel_id integer REFERENCES hotel (id),
		user_id integer REFERENCES users (id),
		start_date timestamp NOT NULL
	)

	`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE booking
	`;
};
