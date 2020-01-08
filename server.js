const express = require('express')
const app = express()
const app= express()
const port = process.env.PORT || 3000

app.use(express.static(_dirname + '/dist/ngproject'));
app.get('/', (req, res) => res.sendFile(path.join(_dirname + '/dist/ngproject/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))