const url = "https://swapi.dev/api/planets";

const checkStatusAndParse = (response)=>{
    if(!response.ok) throw new Error('Status code error')
    return response.json();
}
const printPlanets = (data)=>{
    console.log("FETCHED ALL PLANETS")
    data.results.forEach((planet)=>{
        console.log(planet.name)
    })
    return Promise.resolve(data.next)
}

const fetchMorePlanets = (url)=>{
    return fetch(url);
}

fetch(url)
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchMorePlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchMorePlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.catch((err)=>{console.log(err)})

