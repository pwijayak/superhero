const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000




app.use(cors())

const superheroes = {
    'superman':{
        'age': 31,
        'birthName':'Kal-El',
        'birthLocation': 'Krypton' 
    },
    'batman':{
        'age': 30,
        'birthName':'Bruce Wayne',
        'birthLocation': 'Gotham, USA' 
    },
    'wonder woman':{
        'age': 2000,
        'birthName':'Diana Prince',
        'birthLocation': 'Themiscyra' 
    },
    'Unknown':{
        'age': 0,
        'birthName':'Unknown',
        'birthLocation': 'Unknown' 
}}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const heroName = request.params.name.toLowerCase()
    if(superheroes[heroName]){
        response.json(superheroes[heroName])
     }else{
        response.json(superheroes['Unknown'])
     }
    response.json(superheroes)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
