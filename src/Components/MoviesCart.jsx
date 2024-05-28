import { Suspense } from "react"
import PropTypes from 'prop-types'


const MoviesCart = ({movie}) => {
  return (
    <div className="p-3 m-2">
      <div className=" bg-white shadow-md shadow-gray-500 rounded-md w-52 h-[430px]">
        <Suspense fallback={<div>Loading image...</div>}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movie poster"
          />
        </Suspense>

        <h6 className="font-Poppins pt-5 font-semibold text-red-400 text-center">
          {movie.original_title}{" "}
        </h6>
        <p className="font-medium ml-2 pb-5 ">
          Release date: {movie.release_date}{" "}
        </p>
      </div>
    </div>
  );
}


// validating prop types
MoviesCart.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviesCart