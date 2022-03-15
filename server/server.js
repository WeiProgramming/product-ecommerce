const express = require('express')
const app = express()
const port = 3030

const {
  receivePublicToken,
  getTransactions,
  exchangeForAccessToken
  } = require("./controllers/controller");

app.use(express.json())

const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid')

const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': '5b270d965666c400126917c6',
      'PLAID-SECRET': '6aafd56f3e15c4d89dc29db8c4dbb1',
    },
  },
})

const client = new PlaidApi(configuration)
app.get('/', (req, res) => {
  console.log(client.user)
  res.send('Hello World!')
})

// Get the public token and exchange it for an access token
app.post("/auth/public_token", receivePublicToken);

app.post("/auth/exchange_public_token", exchangeForAccessToken )
// Get Transactions
app.get("/transactions", getTransactions);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
