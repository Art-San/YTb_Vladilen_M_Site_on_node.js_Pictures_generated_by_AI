1
// генерируем новый проэкт
// npm init -y // node.js
2
// npm i -D nodemon
3
// {
//     "name": "ytb_telegram_bot_that_talks_to_chatgpt_api.vladilen_m",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
5
// "type": "module" для использования современого синтаксиса ИМПОРТА и ЭКСПОРТА
//     "type": "module",
//     "scripts": {
6
//         "dev": "nodemon main.js", //  поменяли
//         "start": "node main.js"   // добавили
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//         "cross-env": "^7.0.3",
//         "nodemon": "^2.0.22"
//     }
// }
7
// npm i express
// npm i config
// npm i express-handlebars

// =====================================================================

import express from 'express'
import { engine } from 'express-handlebars'
import config from 'config'
import { Configuration, OpenAIApi } from 'openai'

// const configuration = new Configuration({
//   apiKey: config.get('OPENAI_KEY')
// })
// const openai = new OpenAIApi(configuration)

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const prompt = req.body.prompt
  const size = req.body.size
  const number = req.body.number ?? 1

  // try {
  //   await openai.createImage({
  //     prompt,
  //     size,
  //     n: Number(number)
  //   })
  // } catch (error) {}

  console.log(prompt, size, number)
  res.render('index')
})

app.listen(3000, () => console.log('Server started...'))
// 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
