import ProductComponent from '../../components/products/product'
import { usePlaidLink } from 'react-plaid-link'
import React, { useEffect, useState } from 'react'
const Link = (props) => {
  const onSuccess = React.useCallback((public_token, metadata) => {
    // send public_token to server
    const response = fetch('http://localhost:3030/api/create_link_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token }),
    }) // Handle response ...
  }, [])
  const config = {
    token: props.linkToken,
    receivedRedirectUri: window.location.href,
    onSuccess,
  }
  const { open, ready } = usePlaidLink(config)
  return (
    <button
      onClick={() => {
        console.log('clicked')
        open()
      }}
      disabled={!ready}
    >
      Link account
    </button>
  )
}
const ConfirmComponent = () => {
  const [linkToken, setLinkToken] = useState(null)
  const generateToken = async () => {
    const response = await fetch('/api/create_link_token', {
      method: 'POST',
    })
    const data = await response.json()
    setLinkToken(data.link_token)
  }
  useEffect(() => {
    generateToken()
  }, [])
  return (
    <div>
      <ProductComponent></ProductComponent>
      <div className="container w-1/4">
        <h2 className="font-bold text-lg my-3">Order Summary</h2>
        <table className="table-auto my-3">
          <tbody>
            <tr className="">
              <td className="w-2/4">Items</td>
              <td className="w-2/4">$39.99</td>
            </tr>
          </tbody>
        </table>
        <Link className="btn">Confirm Purchase</Link>
      </div>
    </div>
  )
}

export default ConfirmComponent
