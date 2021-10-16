const { UserList, MovieList } = require("../data");
const _ = require("lodash");

/*
qury->users -> favMovies ->anotherLevel
context is use in auth, authorization accees to diff function
*/

const resolvers = {
  Query: {
    // User Resolvers
    users: (parent, args, context, info) => {
      // console.log(context.req.headers)
      // console.log(info)
      if (UserList) return { users: UserList };

      return { message: "there was an Error" };
    },
    user: (parent, args, context, info) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    // Movie Resolvers
    movies: () => MovieList,

    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },

  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 200 && movie.yearOfPublication <= 2010
      );
    },
  },

  Mutation: {
    createUser: (parent, { input }) => {
      const user = input;
      user["id"] = UserList.length + 1;
      UserList.push(user);
      return user;
    },
    updateUserName: (parent, { input }) => {
      const { id, newUsername } = input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });

      return userUpdated;
    },
    deleteUser: (parent, args) => {
      const { id } = args;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },

  UserResult: {
    __resolveType(obj) {
      if (obj.users) {
        return "UsersSuccessfulResult";
      }
      if (obj.message) {
        return "UsersErrorResult";
      }

      return null;
    },
  },
};

module.exports = { resolvers };
