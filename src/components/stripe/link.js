import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'

import {
  usePlaidLink,
  PlaidLinkOnSuccess,
  PlaidLinkOnEvent,
  PlaidLinkOnExit,
  PlaidLinkOptions,
} from 'react-plaid-link'

const PlaidLink = () => {
  const [pToken, sePublictToken] = useState(null)
  const onSuccess = useCallback((pToken, metadata) => {
    // send public_token to your server
    // https://plaid.com/docs/api/tokens/#token-exchange-flow
    console.log('success! sending public token for access token ')
    console.log(pToken, metadata)
    ExchangePublicToken(pToken)
  }, [])
  const config = {
    token: pToken,
    onSuccess,
  }

  const { open, ready, error } = usePlaidLink(config)

  // get link_token from your server when component mounts
  useEffect(() => {
    const createLinkToken = async () => {
      axios
        .post('/auth/public_token', {})
        .then(function (response) {
          console.log('received in client ', response)
          const tokenObj = response.data
          sePublictToken(tokenObj.link_token)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    createLinkToken()
  }, [])
  const ExchangePublicToken = async (publicToken) => {
    axios
      .post('/auth/exchange_public_token', {
        publicToken: publicToken,
      })
      .then(function (response) {
        console.log('received access token in client ', response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  )
}

export default PlaidLink
