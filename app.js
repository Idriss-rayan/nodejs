const express = require('express')
const app = express()
let { people } = require('./data')


// static asset
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// parse json 
app.use(express.json())
app.get('/api/people',(req,res) =>{
  res.status(200).json({success: true, data:people})
})

app.post('/api/people',(req,res) =>{
  const {name} = req.body
  if(!name){
    return res.status(400).json({success: false, msg:'please provide name value'})
  }
  res.status(201).send('Success')
})

app.post('/api/postman/people',(req,res)=>{
  const {name} = req.body
  if(!name) {
    return res
    .status(400)
    .json({success: false, msg: 'please provide name value'})
  }
  res.status(201).send({ success: true, data: [...people, name] })
})

app.post('/login',(req, res)=>{
  const {name} = req.body;
  if(name){
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('please  credentials')
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const{ name } = req.body
  
  const person = people.find((people)=> person.id === Number(id))
  if(!person) {
    return res
    .status(404)
    .json({success: false, msg: `no person with this id ${id}`})
  }
  const newpeople = people.map((person) => {
    if(person.id === Number(id)){
      person.name = name
    }
    return person
  })
  res.status(200).json({success: true,data: newpeople})

})


app.listen(5000,()=>{
  console.log('Server is on port 5000 ...')
})