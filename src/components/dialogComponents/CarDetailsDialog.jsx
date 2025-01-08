import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCar } from '../../store/slices/dashboardSlice';
import { closeDialog } from '../../store/slices/dialogSlice';
import { formatDateString, loadScript } from '../../utils/helperFunctions';
import Button from '../ReusableComponents/Button';
import { useCancelPaymentMutation, useCreateBookingMutation, useCreateOrderMutation, useVerifyOrderMutation } from '../../api/endpoints/booking';
import { toast } from 'react-toastify';

const CarDetailsDialog = () => {

    const dispatch = useDispatch();

    const [createBooking] = useCreateBookingMutation();
    const [createOrder] = useCreateOrderMutation();
    const [verifyOrder] = useVerifyOrderMutation();
    const [cancelPayment] = useCancelPaymentMutation();

    const [btnDisabled,setBtnDisabled] = useState();

    const { selectedLocation, selectedFromDate, selectedToDate, selectedCar,allLocations } = useSelector(
      (state) => state.root.dashboard
    );

    const handleCancel = () => {
        dispatch(closeDialog());
        dispatch(setSelectedCar(null));
    }

    const handleConfirm = async () => {
        setBtnDisabled(true);
        try {
            const location = allLocations.find(
                (loc) => loc.name === selectedLocation
            );
            const payload = { locationId : location._id, carId : selectedCar._id, fromDate : selectedFromDate, toDate:selectedToDate }
            const response = await createBooking(payload).unwrap();
            if(response.statusCode === 201){
                response.data._id ? createOrderId(response.data._id) : toast.error('Booking failed');
                setBtnDisabled(false);
            }
        } catch (error) {
            console.log(error);
            toast.error('Booking failed');
            handleCancel();
            setBtnDisabled(false);
        }
    }

    const createOrderId = async(bookingId) => {
      setBtnDisabled(true);
        try{
            const payload = {bookingId}
            const response = await createOrder(payload).unwrap();
            if(response.statusCode === 201){
                response.data.orderId ? displayRazorpay(response.data) : toast.error('order generation failed');
                setBtnDisabled(false);
            }
        }catch(e){
            console.error(e);
            toast.error('order creation failed')
            handleCancel();
            setBtnDisabled(false);
        }
    }

    const displayRazorpay = async (orderData) => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            toast.error("Razorpay SDK failed to load.");
            return;
        }

        const { amount, orderId, paymentId, currency } = orderData;

        
        const options = {
            key: "rzp_test_CsE4wmF24Wm2bt",
            amount: amount.toString(),
            currency: currency,
            name: "Car Rental",
            description: "Car Rental",
            order_id: orderId,
            handler: async function (response) {
                const data = {
                    paymentId,
                    orderCreationId: orderId,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };
                const res = await verifyOrder(data).unwrap();
                if(res.statusCode === 200){
                  toast.success("Payment successful! Details will be emailed soon.");
                  dispatch(closeDialog());
                }else{
                  toast.error("Payment failed! If debited, it will be refunded within 2-3 business days.");
                  dispatch(closeDialog());
                }
                setBtnDisabled(false);
            },
            notes: {
                address: "Car Rental Corporate Office",
            },
            theme: {
                color: "#CD2132",
            },
            modal:{
              confirm_close: true,
              ondismiss:async (reason) => {
                const cancelResponse = await cancelPayment(paymentId).unwrap();
                if(cancelResponse.statusCode === 200){
                  toast.error("Payment canceled");
                }else{
                  toast.error("Payment canceled. Contact support with your booking ID")
                }
              }
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
  
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg">
        <h3 className="text-2xl font-bold text-reddish mb-4">{selectedCar.carName}</h3>
        <div className="grid grid-cols-2 gap-2">
          <p className="text-md text-gray-800">
            <span className="font-semibold text-gray-900">Location:</span> {selectedLocation}
          </p>
          <p className="text-md text-gray-800">
            <span className="font-semibold text-gray-900">From Date:</span>{" "}
            <span className="text-primary">{formatDateString(selectedFromDate)}</span>
          </p>
          <p className="text-md text-gray-800">
            <span className="font-semibold text-gray-900">Price:</span> ₹{selectedCar.rentalPrice}/day
          </p>
          <p className="text-md text-gray-800">
            <span className="font-semibold text-gray-900">To Date:</span>{" "}
            <span className="text-primary">{formatDateString(selectedToDate)}</span>
          </p>
          <p className="text-md text-gray-800">
            <span className="font-semibold text-gray-900">Total Price:</span>{" "}
            <span className="text-primary font-bold">₹{selectedCar.totalPrice}</span>
          </p>


        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <Button text={'Cancel'} width={'px-4'} onClickHandler={handleCancel}/> 
          <Button text={'Confirm Booking'} width={'px-4'} onClickHandler={handleConfirm} disabled={btnDisabled} />
        </div>
      </div>
    );
  };
  

export default CarDetailsDialog