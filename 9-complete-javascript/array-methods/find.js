let movies = [
    "Badrinath ki dulhaniya",
    "The amazing spider man",
    "Jatt james bond"
]
const movie = movies.find(movie=>{
    return movie.includes('Th')
})
console.log(movie);