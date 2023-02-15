
export async function searchMovies({ search }) {
    if (search == '') {
        return null
    }
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search;
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year
        }))
    } catch (error) {
        throw new Error('Error searching movies')
    }
}