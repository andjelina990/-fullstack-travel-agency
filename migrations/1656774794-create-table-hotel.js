exports.up = async (sql) => {
  await sql`
	CREATE TABLE hotel (
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name varchar(40) NOT NULL,
		destination_id integer NOT NULL,
		night_price integer NOT NULL

	)

	`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE hotel
	`;
};
