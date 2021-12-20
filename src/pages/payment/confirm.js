import ProductComponent from '../../components/products/product'
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from 'react-plaid-link'

const linkHandler = Plaid.create({
  token: (await $.post('/create_link_token')).link_token,
  onSuccess: (public_token, metadata) => {
    // Send the public_token to your app server.
    $.post('/exchange_public_token', {
      public_token: public_token,
    })
  },
  onExit: (err, metadata) => {
    // Optionally capture when your user exited the Link flow.
    // Storing this information can be helpful for support.
  },
  onEvent: (eventName, metadata) => {
    // Optionally capture Link flow events, streamed through
    // this callback as your users connect an Item to Plaid.
  },
})

const ConfirmComponent = () => {
  return (
    <div>
      <ProductComponent></ProductComponent>
      <div className="container w-1/4">
        <h2 className="font-bold text-lg my-3">Order Summary</h2>
        <table className="table-auto my-3">
          <tr className="">
            <td className="w-2/4">Items</td>
            <td className="w-2/4">$39.99</td>
          </tr>
        </table>
        <button onClick={() => linkHandler.open()} className="btn">
          Confirm Purchase
        </button>
      </div>
    </div>
  )
}

export default ConfirmComponent
