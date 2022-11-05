import MovieList from "./MovieList";
import Nav from "./Nav";

import AddMovie from "./AddMovie";

import { MovieProvider } from "./MovieContext";

function ContextApiData() {
  return (
    <MovieProvider>
      <div className="Context">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default ContextApiData;