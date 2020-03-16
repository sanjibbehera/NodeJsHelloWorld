const express = require('express')
const app = express()
const port = 3299

app.get('/', (req, res) => res.send('Hello World FROM SANJIB BEHERA LAXMI CHOWK HINJEWADI PUNE!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
