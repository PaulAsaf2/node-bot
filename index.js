const { Bot } = require('grammy')
const express = require('express')
const cors = require('cors')

const bot = new Bot('6939027276:AAEOHc-hUEdScVXCMVtCVbal05X_gaNoNIo')

const app = express()

app.use(express.json())
app.use(cors())

bot.command('start', ctx => ctx.reply('Welcome! Up and running.'))
bot.on('message', ctx => ctx.reply('Got another message!'))

bot.start()