import React from "react";

const Paytm=()=>{
    return(
        <section className="paypage">
            <h1>Total billed today</h1>
            <div className="division">
                <h2>Pay with</h2>
                <button className="pay-btn">Gpay</button>
                <p>OR</p>
                <h3>Pay with credit or debit card</h3>
                <form className="form">
                    <label ><b>Card number</b></label>
                    <input type="text" placeholder="5555 4444 4444 4444 4444"   />

                <label ><b>Expiration</b></label>
                <input type="text" placeholder="MM/YY"   />

                <label ><b> Secuirity Code</b></label>
                <input type="text" placeholder="Enter code"  />
                    <div>
                        <p><center>By starting a Medium membership, you agree to our Membership Terms of Service.Your payment method will be charged a recurring $5 USD monthly fee, unless you decide to cancel. No refunds for memberships canceled between billing cycles.</center></p>
                        <button className="pay-btn">Pay with credit or debit card</button>
                    </div>
                </form>
                
            </div>    

        </section>
    )
}
export default Paytm