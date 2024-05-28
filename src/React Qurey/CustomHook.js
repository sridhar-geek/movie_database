import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Creating axiosInstance, so that we can call this anytime
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    accept: "application/json",
    Authorization:
    `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`  },
});

// Function to call Movies
const getMovies = async () => {
    const { data } = await axiosInstance.get("/popular");
    return data
}

// Custom hook for calling movies using react qurey
export const useTopNews = () => {
    return useQuery({
        queryKey: ["popular-movies"],
        queryFn: getMovies,
        staleTime: 1000 * 60 * 10,
    })
}

