const authors = [
	{ id: 1, name: 'J. K. Rowling' },
	{ id: 2, name: 'J. R. R. Tolkien' },
	{ id: 3, name: 'Brent Weeks' }
]

const books = [
	{ id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
	{ id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
	{ id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
	{ id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
	{ id: 5, name: 'The Two Towers', authorId: 2 },
	{ id: 6, name: 'The Return of the King', authorId: 2 },
	{ id: 7, name: 'The Way of Shadows', authorId: 3 },
	{ id: 8, name: 'Beyond the Shadows', authorId: 3 }
]

const UserList = [
	{
	  id: 1,
	  name: "Shanu",
	  username: "ShanuXD",
	  age: 20,
	  nationality: "INDIA",
	  friends: [
		{
		  id: 2,
		  name: "Dummy",
		  username: "DummyTech",
		  age: 20,
		  nationality: "BRAZIL",
		},
		{
		  id: 5,
		  name: "Buddy",
		  username: "Buddy2019",
		  age: 5,
		  nationality: "CHILE",
		},
	  ],
	},
	{
	  id: 2,
	  name: "Dummy",
	  username: "DummyTech",
	  age: 20,
	  nationality: "BRAZIL",
	},
	{
	  id: 3,
	  name: "Naruto",
	  username: "Hokage",
	  age: 25,
	  nationality: "INDIA",
	  friends: [
		{
		  id: 2,
		  name: "Dummy",
		  username: "DummyTech",
		  age: 20,
		  nationality: "BRAZIL",
		},
	  ],
	},
	{
	  id: 4,
	  name: "Luffy",
	  username: "Monkey.D.Luffy",
	  age: 60,
	  nationality: "GERMANY",
	},
	{
	  id: 5,
	  name: "Buddy",
	  username: "Buddy2019",
	  age: 5,
	  nationality: "CHILE",
	},
  ];
  
  const MovieList = [
	{
	  id: 1,
	  name: "Avengers Endgame",
	  yearOfPublication: 2019,
	  isInTheaters: true,
	},
	{
	  id: 2,
	  name: "Interstellar",
	  yearOfPublication: 2007,
	  isInTheaters: true,
	},
	{
	  id: 3,
	  name: "Superbad",
	  yearOfPublication: 2009,
	  isInTheaters: true,
	},
	{
	  id: 4,
	  name: "test",
	  yearOfPublication: 2035,
	  isInTheaters: false,
	},
  ];



module.exports = {authors, books, UserList, MovieList}