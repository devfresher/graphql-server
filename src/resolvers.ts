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
	Mutation: {
		addGame: (_, { game }) => {
			const newGame = {
				id: String(parseInt(db.games[db.games.length - 1].id) + 1),
				...game,
			};
			db.games.push(newGame);
			return newGame;
		},
		updateGame: (_, { id, game }) => {
			const gameIndex = db.games.findIndex((game) => game.id === id);
			if (gameIndex === -1) {
				throw new Error(`Game with id ${id} not found`);
			}
			const updatedGame = { ...db.games[gameIndex], ...game };
			db.games[gameIndex] = updatedGame;
			return updatedGame;
		},
		deleteGame: (_, { id }) => {
			const gameIndex = db.games.findIndex((game) => game.id === id);
			if (gameIndex === -1) {
				throw new Error(`Game with id ${id} not found`);
			}
			const [deletedGame] = db.games.splice(gameIndex, 1);
			return deletedGame;
		},
		addReview: (_, { gameId, review }) => {
			const newReview = {
				id: String(parseInt(db.reviews[db.reviews.length - 1].id) + 1),
				gameId,
				...review,
			};
			db.reviews.push(newReview);
			return newReview;
		},
	},
};
