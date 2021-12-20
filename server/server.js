const express = require('express')
const app = express()
const port = 3030

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

app.post('/api/create_link_token', async function (req, res) {
  // Get the client_user_id by searching for the current user
  const user = { id: '1213453' }
  const clientUserId = user.id
  const request = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: clientUserId,
    },
    client_name: 'Plaid Test App',
    products: [],
    language: 'en',
    webhook: 'https://google.com',
    country_codes: ['US'],
  }
  try {
    console.log('retreiving"')
    const createTokenResponse = await client.linkTokenCreate(request)
    res.json(createTokenResponse.data)
  } catch (error) {
    // handle error
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
