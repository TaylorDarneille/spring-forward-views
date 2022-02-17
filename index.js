// import express
const express = require('express')
// create an instance of express
const app = express()

// ----------> ROUTES (aka ACTIONS) <----------

// HOME
app.get('/', (req, res)=>{
    console.log(__dirname)
    // __dirname = node shortcut for the absolute path to current directory
    res.sendFile(__dirname+'/views/index.html')
    // res.send('This is the Home Page!')
})
// ABOUT
app.get('/about', (req, res)=>{
    res.sendFile(__dirname+'/views/about.html')
    // res.send('Some stuff about me will go here.')
})
// BLOG
app.get('/blog', (req, res)=>{
    res.sendFile(__dirname+'/views/blog-directory.html')
    // res.send('A directory of all my blog posts will go here.')
})

// Tell the app to listen for incoming requests on PORT 8000
app.listen(8000, ()=>{
    console.log('You\'re listening to the smooth sounds of port 8000 🎧')
})