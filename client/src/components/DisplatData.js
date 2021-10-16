import React from "react";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
import CreateUser from "./CreateUser";

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      name
      id
      age
      nationality
      username
    }
  }
`;
const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      name
      yearOfPublication
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query ($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`;
// line mutation CreateUser($input: CreateUserInput!)  so that it identify that type
const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
        name
        nationality
        age
    }
  }
`;

const DisplatData = () => {
  const [searchMovie, setsearchMovie] = React.useState("");
  const [
    fetchMovie,
    {
      data: movieSearchData,
      error: movieSearchError,
      loading: movieSearchDataLoading,
    },
  ] = useLazyQuery(GET_MOVIE_BY_NAME);
  const { data, loading, error, refetch } = useQuery(QUERY_ALL_USERS);
  const {
    data: movieData,
    loading: movieLoading,
    error: movieError,
  } = useQuery(QUERY_ALL_MOVIES);

  const [createUser] = useMutation(CREATE_USER_MUTATION);

  if (loading || movieLoading || movieSearchDataLoading)
    return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  if (movieError) return <h1>Error while loading movies</h1>;
  if (movieSearchError) return <h1>Error while searching</h1>;

  const { users } = data;
  const { movies } = movieData;
  console.log(movieSearchData);

  return (
    <div>
        {/*Add New User */}
        <CreateUser createUser={createUser} refetch={refetch}/>


      {/* Search movie */}
      {/* <div className="input">
        <input type="text" value={searchMovie} onChange={(e) => setsearchMovie(e.target.value)} />
        <button onClick={()=>fetchMovie({variables:{
            name:searchMovie,
        }})}>Fetch Data</button>
      </div>
        {movieSearchData && <div className="">
            <h3>Search Data</h3>
            <h4>{movieSearchData.movie.name}</h4>
            <h4>{movieSearchData.movie.yearOfPublication}</h4>
        </div>} */}

      {/* users */}
      <div className="users">
        {users.map((user, index) => {
          return (
            <div key={index} style={{ backgroundColor: "#eee" }}>
              <h2>Name: {user.name}</h2>
              <h2>User Name :{user.username}</h2>
              <h3>Age: {user.age}</h3>
            </div>
          );
        })}
      </div>
      {/* movies */}
      {/* <div className="movies">
        {movies.map((movie, index) => {
          return <h1 key={index}>{movie.name}</h1>;
        })}
      </div> */}
    </div>
  );
};

export default DisplatData;
