async function getData() {
    try {
        const response = await axios.get('https://swapi.dev/api/planets');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
}
getData();