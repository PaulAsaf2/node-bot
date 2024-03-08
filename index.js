const { Bot } = require('grammy')
const express = require('express')
const cors = require('cors')

const bot = new Bot('6939027276:AAEOHc-hUEdScVXCMVtCVbal05X_gaNoNIo')
const app = express()

app.use(express.json())
app.use(cors())

bot.command('start', ctx => ctx.reply('Welcome! Up and running.'))
bot.on('message', ctx => ctx.reply('Got another message!'))

app.post('/webapp-data', async (req, res) => {
  const { queryId, title } = req.body
  await bot.answerWebAppQuery(queryId, {
    type: 'article',
    id: queryId,
    title: 'Это заголовок сообщения',
    input_message_content: { message_text: title }
  })

  return res.status(200).send({ message: 'Succeed' })
})

app.get('/good-wind', (req, res) => {
  res.status(200).send({
    message: 'Он придёт. Он будет добрый, ласковый.'
  })
})

bot.start()

const PORT = 8000;

app.listen(PORT, () => {
  console.log('Server started on PORT ' + PORT);
})