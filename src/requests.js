const API_KEY = "805bcd1f0ee81515f1007bbcb8354197";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&launguage=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&launguage=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchTamilMovies: `/discover/movie?api_key=${API_KEY}&with_genres=67`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchChild: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc`,
    

}

export default requests;