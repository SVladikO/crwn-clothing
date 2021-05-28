import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const priceForStripee  = price * 100;
    const publishableKey = 'pk_test_51Iw0yRDa2z28Dh9xtUejFnKPKQwf2YROgzZ3PxLd95cxHuiZvoOwYQEWhVFgEZGQdVVvqlBbl6jjjrL98wr7qJzs00zaSWo6pi';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}}`}
            amount={priceForStripee}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckout;