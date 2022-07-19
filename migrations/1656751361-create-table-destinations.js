exports.up = async (sql) => {
  await sql`
	CREATE TABLE destinations (
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		destination varchar(40) NOT NULL,
		description varchar(300) NOT NULL
	)

	`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE destinations
	`;
};
