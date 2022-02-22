var plaid = require('plaid')
var moment = require('moment')

var PLAID_CLIENT_ID = '5b270d965666c400126917c6'
var PLAID_SECRET = '6aafd56f3e15c4d89dc29db8c4dbb1'
var PLAID_PUBLIC_KEY = 'e58feb20542aaa92a543a1b14d384d'
var PLAID_ENV = 'sandbox'

var ACCESS_TOKEN = null
var PUBLIC_TOKEN = null
var ITEM_ID = null

const configuration = new plaid.Configuration({
  basePath: plaid.PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
      'PLAID-SECRET': PLAID_SECRET,
      'Plaid-Version': '2020-09-14',
    },
  },
})

// Initialize the Plaid client
var client = new plaid.PlaidApi(configuration)

const receivePublicToken = async (req, res) => {
  console.log('receieving public token')
  // First, receive the public token and set it to a variable
  const request = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: '1234',
    },
    client_name: 'Plaid Test App',
    products: [plaid.Products.Auth, plaid.Products.Transactions],
    language: 'en',
    webhook: 'https://google.com',
    country_codes: ['US'],
  }
  try {
    const response = await client.linkTokenCreate(request)
    const linkToken = response.data
    console.log(linkToken)
    res.json(linkToken)
  } catch (error) {
    // handle error
    console.log(error)
  }
}

const exchangeForAccessToken = async (req, res) => {
  console.log('receieving public token ', req.body)
  const request = {
    public_token: req.body.publicToken,
  }
  // First, receive the public token and set it to a variable
  try {
    const response = await client.itemPublicTokenExchange(request)
    const accessToken = response.data.access_token
    console.log(accessToken)
    res.json(accessToken)
  } catch (error) {
    // handle error
    console.log(error)
  }
}

const getTransactions = (req, res) => {
  console.log('getting transactions')
  // Pull transactions for the last 30 days
  let startDate = moment().subtract(30, 'days').format('YYYY-MM-DD')
  let endDate = moment().format('YYYY-MM-DD')
  console.log('made it past variables')
  client.getTransactions(
    ACCESS_TOKEN,
    startDate,
    endDate,
    {
      count: 250,
      offset: 0,
    },
    function (error, transactionsResponse) {
      res.json({ transactions: transactionsResponse })
      // TRANSACTIONS LOGGED BELOW!
      // They will show up in the terminal that you are running nodemon in.
      console.log(transactionsResponse)
    },
  )
}

module.exports = {
  receivePublicToken,
  getTransactions,
  exchangeForAccessToken,
}
