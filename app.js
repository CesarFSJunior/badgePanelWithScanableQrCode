const bodyParser = require('body-parser')
const express = require('express')
const { engine } = require('express-handlebars')
const qr =  require('qr-image')
const app = express()
const path = require('path')
const PORT = 8081

app.use(express.static(path.join(__dirname, "public")))

// body-parser
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

// handlebars 
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views', './views');

// Routes

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/qrCode', (req, res) => {
    const myURL = new URL(`localhost:${PORT}${req.originalUrl}`)

    error = []
    
    if(!myURL.searchParams.get('name')) {
        error.push({title: "need a name"})
    }

    if(!myURL.searchParams.get('email')) {
        error.push({title: "need a email"})
    }

    if(error.length > 0) {
        console.table(error)
        return res.redirect('/')
    }

    res.render('qrcode', {qr: myURL.search})
})

app.get('/qrCodeGen', (req, res) => {
    const myURL = new URL(`localhost:${PORT}${req.originalUrl}`)

    const qrCode = qr.image(`http://192.168.0.10:${PORT}/badge${myURL.search}`, { type: 'svg'})

    res.type('svg')
    qrCode.pipe(res)


})

app.get('/badge', (req, res) => {
    const myURL = new URL(`localhost:${PORT}${req.originalUrl}`)

    error = []
    
    if(!myURL.searchParams.get('name')) {
        error.push({title: "need a name"})
    }

    if(!myURL.searchParams.get('email')) {
        error.push({title: "need a email"})
    }

    if(error.length > 0) {
        console.table(error)
        return res.redirect('/')
    }

    const info = []

    if(myURL.searchParams.get('name')) {
        info.push({name: myURL.searchParams.get('name')})
    }

    if(myURL.searchParams.get('email')) {
        info.push({email: myURL.searchParams.get('email')})
    }

    if(myURL.searchParams.get('twitter')) {
        info.push({twitter: myURL.searchParams.get('twitter')})
    }

    if(myURL.searchParams.get('github')) {
        info.push({github: myURL.searchParams.get('github')})
    }

    console.log(info)
    res.render('badge', {info: info, url: `${myURL.search}`})
})

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})