import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SubHeader from '../Header/SubHeader'
import "./Checkout.scss"
import Button from '@mui/material/Button'
import axios from 'axios'
import GppGoodIcon from '@mui/icons-material/GppGood';
import safeandsecurep from './safeandsecurep.jpeg'
import {connect} from 'react-redux'
import Cashe from './CASHe Logo 2.png'
import Razorpaylogo from './Razorpaay.png'
import WooCommerceAPI from 'woocommerce-api'
function Checkout(props) {
  const [selected,setSelected]=React.useState(2)
  const [address,setAddress]=React.useState(0)
  const [delivery,setDelivery]=React.useState(0)
  const [total,setTotal]=React.useState(0)
  var WooCommerce = new WooCommerceAPI({
    url: 'https://shop.hellomitr.com/',
    consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
    consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
    wpAPI: true,
    version: 'wc/v1'
  });
  const openPayModal = () => {
    const options = {
      key: 'rzp_test_Sn8RPLYLlLXlyD',
      amount: total*100, //  = ₹ 1
      name: 'Hellomitr',
      description: 'some description',
      image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
      handler: function(response) {
          console.log(response);
          props.history.push(`/transaction?address=${address}?transactionId=${response.razorpay_payment_id}`,true)
      
      },
      prefill: {
          name: 'Gaurav',
          contact: '9999999999',
          email: 'demo@demo.com'
      },
      notes: {
          address: 'some address'
      },
      theme: {
          color: 'blue',
          hide_topbar: false
      }
  };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
  };
  React.useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      let total = 0
      if(props.location.state){
        setTotal(props.singleItem.price)
      }else{
        props.cart.map((item)=>{
          total = total + parseInt(item.price)*item.count
        })
        setTotal(total)
      }
      
      // axios.get(`https://uat-paymentgateway.cashe.co.in/api/cashe/paymentgateway/customer/fetchCASHePlans
      // /9665276786/10000`,{headers:{Authorization:'2MLFiopx+givx5mPf8CchQ=='}})
      // .then(res=>{
      //   console.log(res)
      // })
      // .catch(err=>{
      //   console.log(err)
      // })
  }, []);
//console.log(total)
  const openCasheModal = ()=>{
    axios.post(`https://uat-paymentgateway.cashe.co.in/api/cashe/paymentgateway/customer/generateTransaction`,{amount:10000,tenure:6,mobilenumber:'9665276786',authKey:"2MLFiopx+givx5mPf8CchQ==",leafRefNo:'123456785',merchantname:"Amazon",returnPageURL:`http://localhost:3000/transaction?address=${address}`})
    .then(res=>{
      console.log(res);
      window.location.href = `https://secure.qapayments.cashe.co.in/Login?transaction=${res.data.entity}`;
    })
    .catch(err=>{
      console.log(err)
    })

  }

 

  return (
    <div>
        <Header />
        <SubHeader />
        <div className='row m-auto checkout justify-content-between'>
          <div className="col-8">

          <div className="shadow-sm paymentdetails">
            <h1>Delivery Details</h1>
            <p>Select address where you want to deliver your product</p>
            <div className="m-auto row justify-content-between">
            <h3>Shipping Address</h3>

              <div onClick={()=>setAddress(0)} className={address===0?"col-12 pg active":"col-12 pg"}>
              <h5>{props.user.shipping.first_name} {props.user.shipping.last_name}</h5>
                        <p>{props.user.shipping.phone}</p>
                        <p>{props.user.shipping.address_1}</p>
                        <p>{props.user.shipping.state}</p>
                        <p>{props.user.shipping.postcode}</p>
              </div>


              <h3>Billing Address</h3>

              <div onClick={()=>setAddress(1)} className={address===1?"col-12 pg active":"col-12 pg"}>
              <h5>{props.user.billing.first_name} {props.user.billing.last_name}</h5>
                        <p>{props.user.billing.phone}</p>
                        <p>{props.user.billing.address_1}</p>
                        <p>{props.user.billing.state}</p>
                        <p>{props.user.billing.postcode}</p>
              </div>


            </div>
            </div>


            <div className="shadow-sm paymentdetails">
            <h1>Delivery Mode</h1>
            <p>Choose Payment Method for your Order</p>
            <div className="m-auto row justify-content-between">
              <div onClick={()=>setDelivery(0)} className={delivery===0?"col-5 pg active":"col-5 pg"}>
                <h5>Standard</h5>
                <p>Free</p>
              </div>

              <div onClick={()=>setDelivery(1)} className={delivery===1?"col-5 pg active":"col-5 pg"}>
                <h5>Instant</h5>
                <p>Additional ₹499/- Only</p>
              </div>

            </div>
            </div>


            <div className="shadow-sm paymentdetails">
            <h1>Payment Details</h1>
            <p>Choose Payment Method for your Order</p>
            <div className="m-auto row justify-content-between">
              <div onClick={()=>setSelected(3)} className={selected===3?"col-5 pg active":"col-5 pg"}>
              <img src={Cashe} alt="razorpya" />
                
                <p>EMI Tenure of 3 months</p>
              </div>

              <div onClick={()=>setSelected(6)} className={selected===6?"col-5 pg active":"col-5 pg"}>
              <img src={Cashe} alt="razorpya" />
                <p>EMI Tenure of 6 months</p>
              </div>

              <div onClick={()=>setSelected(2)} className={selected===2?"col-5 pg active":"col-5 pg"}>
              <img src={Razorpaylogo} alt="razorpya" />
                <p>Credit Card / Debit Card / Net Banking / UPI</p>
              </div>

            </div>
            <Button onClick={()=>selected===2?openPayModal():openCasheModal()} className="btn" variant="contained" fullWidth>Pay now</Button>
            </div>





          </div>

          <div className="col-3">

            <div className="shadow-sm totaldiv">
              <h5>Your order</h5>
              <div className="row m-auto justify-content-between">
                <p className="greytext">Subtotal:</p>
                <p><b>₹ 1523</b></p>
              </div>

              <div className="row m-auto justify-content-between">
                <p className="greytext">Shipping:</p>
                <p><b>₹ 23</b></p>
              </div>

              <div className="row m-auto justify-content-between">
                <p className="greytext">Discount:</p>
                <p><b>₹ 1623</b></p>
              </div>

              <hr />
              <p className="total">₹ {total}</p>
          </div>
        <div className="row">
          <div className="col-1">
            <GppGoodIcon />
          </div>
          <div className="col-10">
            <p>Safe and Secure Payments. Easy returns 100% Authentic product</p>
          </div>
        </div>

        </div>



        </div>


       
        {/* <Footer /> */}

    </div>
  )
}

const mapStateToProps = ({user,cart,singleItem})=>{
return {
  user:user.user,
  cart,
  singleItem
}
}

export default connect(mapStateToProps)(Checkout)