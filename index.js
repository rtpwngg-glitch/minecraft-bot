const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'furina.nexuscloud.id',
  port: 19092,
  username: 'barry_bot', // Ganti dengan username bot yang kamu inginkan
  auth: 'offline'
  version:'1.21.11'
})

bot.on('login', () => {
  console.log('Bot berhasil login!')
})

bot.on('spawn', () => {
  console.log('Bot sudah masuk ke server!')
})

bot.on('kicked', (reason) => {
  console.log('Bot dikeluarkan:', reason)
})

bot.on('error', (err) => {
  console.log('Error:', err)
})

bot.on('end', () => {
  console.log('Bot terputus, mencoba reconnect dalam 5 detik...')
  setTimeout(() => {
    require('./index.js')
  }, 5000)
})
