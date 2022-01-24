import * as Express from 'express'

const app: Express.Application = Express()

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('test')
})

app.listen(3000, err => {
  console.log('Running...')
})