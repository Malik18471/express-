const express = require('express')
const app = express()
const path = require('path')
const port = 3111
const shape = (path.join(__dirname, '../../public'))
app.use(express.static(shape))
app.get('/', (req,res)=>{
    res.send('thisi si dsi fidsfio')
})
app.listen(port, ()=>{
    console.log(`kdjasdfiohasidjf ${port}`)
})