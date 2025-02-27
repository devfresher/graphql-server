export const typeDefs = `#graphql 
    type Game {
        id: ID!
        title: String!
        platform: [String]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        comment: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        addGame(game: GameInput!): Game
        updateGame(id: ID!, game: EditGameInput!): Game
        deleteGame(id: ID!): Game
        addReview(gameId: ID!, review: ReviewInput!): Review
    }

    input GameInput {
        title: String!
        platform: [String!]!
    }

    input EditGameInput {
        title: String
        platform: [String!]
    }

    input ReviewInput {
        rating: Int!
        comment: String!
        authorId: ID!
    }
`;
