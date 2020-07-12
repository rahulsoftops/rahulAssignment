  const RANDOM_URL = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY"

const ID_URL = "https://api.nasa.gov/neo/rest/v1/neo/2021277?api_key="



  const API_KEY = "JXj6pc8U6u3bzJ4poETk0uICBk9r1UZRJGdgeGro"

  export const AsteroidIdAction = (data)=>{
    const {id} = data
    
    console.warn("astro",id)
    
    return async function(dispatch){
        const data = await fetch( 'https://api.nasa.gov/neo/rest/v1/neo/'+id+'?api_key='+API_KEY, {
            method:'GET'
        })
    
    
        const jsondata = await data.json();
        console.log("server response FRO ASTROO",jsondata)
    dispatch({
        type:'ASTROID_ID',
        payload: jsondata
    })
    
    }
    
    }









export const RandomIdAction = (data)=>{
const {id} = data

console.warn(id)

return async function(dispatch){
    const data = await fetch( RANDOM_URL, {
        method:'GET'
    })


    const jsondata = await data.json();
    console.log("server response",jsondata)
dispatch({
    type:'RANDOM_ID',
    payload: jsondata
})

}

}