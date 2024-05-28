
//Imports from another files
import { useTopNews } from "../React Qurey/CustomHook";
import MoviesCart from "./MoviesCart";


const Home = () => {
  const { isLoading, isError, error, data } = useTopNews();
  return (
    <div>
      {/* Welcome Text */}
      <div className="container mx-auto my-20 px-5">
        <h1 className="text-3xl font-Geological font-bold mb-2 ">
          Welcome to Movie Data Base!
        </h1>
        <h5 className="text-xl font-Poppins text-gray-500 mb-3">
          {" "}
          Easy way to find best movies to watch.
        </h5>
        <p className="text-md font-BriemHand text-gray-600/70 md:w-3/4 lg:w-1/2">
          You can find movies by category, collections, awards, popular and many
          more. Our website provides reviews and user ratings of the paticular
          movie.
        </p>
      </div>
      <div className="text-3xl font-Poppins p-2 bg-slate-600">
        Trending Movies
      </div>
         {/* Error Handling */}
      {isError && <p>Error: {error.message}</p>}
      {isLoading && <h1 className="text-2xl font-bold">Loading...</h1>}
         {/* Movie Carts */}
      <div className="flex flex-wrap mt-10 mb-10 ">
      {data?.results.map((movie) => (
        <MoviesCart key={movie.id} movie= {movie} />
      ))}
      </div>
    </div>
  );
}

export default Home