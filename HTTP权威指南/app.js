const express = require('express')
const app = express()
app.listen(3006, () => {
  console.log('HTTP权威指南前后端交互练习 running at localhost:3006');
})
app.use(express.static('../../study/'))
  // app.use(express.static('../assets/'))


// const cors = require('cors');
// app.use(cors())

app.use('/test/options', (req, res) => {
  res.send('OK')
})