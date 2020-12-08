const axios = require('axios');

var teste = [0,1,2,3,4]

axios.get('https://rickandmortyapi.com/api/character')
    .then(props => {
       props.data.results.map(result => console.log(result.name))

        
        
    })