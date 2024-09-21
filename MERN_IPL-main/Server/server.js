require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}

connectDB()

app.use(cors())
app.use(express.json())
app.use('/', require('./routes/root'))
app.use('/schedule', require('./routes/scheduleRoutes'))

app.use('/api', require('./routes/playerRoutes'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})