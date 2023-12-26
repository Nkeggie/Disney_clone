import axios from 'axios';

const moviebaseURL = "https://api.themoviedb.org/3"
const api_key = "0772872d852c297c64bed622c912eda3"

const movieGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=0772872d852c297c64bed622c912eda3"
//https://api.themoviedb.org/3/trending/all/day?api_key=0772872d852c297c64bed622c912eda3

const getTrendingVideos = axios.get(moviebaseURL+
    "/trending/all/day?api_key="+api_key);

    const getMovieByGenreId=(id)=>
    axios.get(movieGenreBaseURL+"&with_genres="+id)
export default{
    getTrendingVideos,
    getMovieByGenreId
}

/*const api_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzcyODcyZDg1MmMyOTdjNjRiZWQ2MjJjOTEyZWRhMyIsInN1YiI6IjY1ODE3NWE2YWM2MTdjMDg4ZTE1YTJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gnHGDjfxt_Wsaf6tEr30WmyMDdvCJo26-0Zlx99wRAQ';
const base_url = 'https://api.themoviedb.org/3/';

const axiosInstance = axios.create({
    moviebaseURL: base_url,
    headers: {
        'Authorization': `Bearer ${api_token}`,
        'Content-Type': `application/json`,
    },
});

const getTrendingVideos = () => {
    return axiosInstance
    .get('trending/all/day')
    .then(response => response.data.results)
    .catch(error => {
        throw new error('Error fetching trending videos');
    });
};

export default getTrendingVideos*/