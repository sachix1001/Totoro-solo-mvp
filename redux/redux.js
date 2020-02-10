import { createStore } from "redux";

const initialState = {
  allMovies: [],
  selected: {},
  allExceptSelected: []
};

export const allMovies = movies => {
  return {
    type: "SET_MOVIES",
    movies
  };
};
export const selectMovie = movie => {
  return {
    type: "SELECT_MOVIE",
    movie
  };
};
export const allExceptSelected = movie => {
  return {
    type: "CREATE_EXCEPTSELECTED",
    movie
  };
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_MOVIES": {
      return { ...state, allMovies: action.movies };
    }
    case "SELECT_MOVIE": {
      return { ...state, selected: action.movie };
    }
    case "CREATE_EXCEPTSELECTED": {
      const allExceptSelected = state.allMovies.filter(
        movie => movie.id !== action.movies.id
      );
      return { ...state, allExceptSelected: allExceptSelected };
    }
  }
  return state;
};

export const store = createStore(reducer);
