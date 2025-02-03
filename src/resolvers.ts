import db from './_db.js';

export const resolvers = {
	Query: {
		games: () => db.games,
		game: (_, { id }) => db.games.find((game) => game.id === id),
		reviews: () => db.reviews,
		review: (_, { id }) => db.reviews.find((review) => review.id === id),
		authors: () => db.authors,
		author: (_, { id }) => db.authors.find((author) => author.id === id),
	},
	Game: {
		reviews: (game) => db.reviews.filter((review) => review.gameId === game.id),
	},
	Review: {
		game: (review) => db.games.find((game) => game.id === review.gameId),
		author: (review) => db.authors.find((author) => author.id === review.authorId),
	},
	Author: {
		reviews: (author) => db.reviews.filter((review) => review.authorId === author.id),
	},
};
