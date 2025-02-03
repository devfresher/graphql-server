let games = [
	{ id: '1', title: 'Super Mario Bros', platform: ['NES', 'SNES', 'N64'] },
	{ id: '2', title: 'The Legend of Zelda', platform: ['NES', 'N64'] },
	{ id: '3', title: 'Metroid', platform: ['NES'] },
	{ id: '4', title: 'Castlevania', platform: ['NES'] },
	{ id: '5', title: 'Final Fantasy', platform: ['NES', 'SNES'] },
	{ id: '6', title: 'Gekkouga', platform: ['NES'] },
];

let authors = [
	{ id: '1', name: 'Yoshi', verified: true },
	{ id: '2', name: 'Mario', verified: true },
	{ id: '3', name: 'Luigi', verified: true },
	{ id: '4', name: 'Peach', verified: false },
	{ id: '5', name: 'Bowser', verified: true },
	{ id: '6', name: 'Toad', verified: false },
];

let reviews = [
	{ id: '1', rating: 5, comment: 'Great game!', gameId: '1', authorId: '1' },
	{ id: '2', rating: 4, comment: 'Pretty good game.', gameId: '1', authorId: '2' },
	{ id: '3', rating: 3, comment: 'Average game.', gameId: '1', authorId: '3' },
	{ id: '4', rating: 2, comment: 'Bad game.', gameId: '5', authorId: '4' },
	{ id: '5', rating: 1, comment: 'Terrible game.', gameId: '1', authorId: 5 },
	{ id: '6', rating: 5, comment: 'Great game!', gameId: '6', authorId: '1' },
	{ id: '7', rating: 4, comment: 'Pretty good game.', gameId: '2', authorId: '2' },
	{ id: '8', rating: 3, comment: 'Average game.', gameId: '3', authorId: '3' },
	{ id: '9', rating: 2, comment: 'Bad game.', gameId: '2', authorId: '4' },
	{ id: '10', rating: 1, comment: 'Terrible game.', gameId: '2', authorId: '5' },
];

export default { games, authors, reviews };
