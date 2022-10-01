const url = 'https://swapi.dev/api/planets'

const showData = ({data})=>{
    data.results.forEach((planet) => {
        console.log(planet.name)
    })
    return axios.get(data.next)
}

axios.get(url)
.then(showData)
.then(showData)

    // axios.get(data.next).then(({ data }) => {
    //     data.results.forEach((planet) => { console.log(planet.name) })
    //     axios.get(data.next).then(({ data }) => {
    //         data.results.forEach((planet) => { console.log(planet.name) })

    //     })
    // })    