const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/dialog_to_user', require('./routes/dialog.routes'))
app.use('/api/messages', require('./routes/messages.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('uri'))
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()
