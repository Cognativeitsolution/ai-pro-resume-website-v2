"use client"

import React, { useRef, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { RiCoinsFill } from 'react-icons/ri';
import { Elements } from '@stripe/react-stripe-js';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import swal from 'sweetalert';
import StripeSeperateComponent from './StripeSeperateComponent';



interface Plan {
    id?: string;
    coins?: number;
    duration?: number;
    price?: number;
    tax_type?: string
    tax?: string
}

interface Tax {
    type?: string;
    amount?: number;
}

interface PaymentProps {
    totalAmount?: number;
    selectedPlan?: Plan;
    tax?: Tax;
    setIsLoading?: (val: boolean) => void;
}

const stripePromise = loadStripe("pk_test_51OEUmkGaxxNRTGagQIYF34iTl3r85j1GMZDKbq7jnesM3AzvN5MyudpkqwjLr9m1PLNjjKLz0G7MQCPOPpiL5jar00XuVUMSb8");

const PaymentSection = (props: PaymentProps) => {
    const { totalAmount, selectedPlan, tax, setIsLoading } = props

    const totalAmountPara = useRef<HTMLParagraphElement | null>(null);

    const Paypal__Before__Payment = () => {
        console.log("Processing PayPal Payment");
    };

    const Paypal__Successful__Payment = (order: any) => {
        console.log("Payment Successful", order);
    };



    return (
        <>

            <div className="flex flex-col-reverse lg:flex-row h-full gap-5">
                <div className="flex-1 p-5 bg-indigo-200/20 border-2 border-white rounded-2xl">
                    <PayPalScriptProvider
                        options={{
                            clientId: "ASKmsVMYxaukXBVYZ9Ec0pG7zfo-vPl4qHeHIBgrbWO-KPz8_G-ZjVDm9CHs5_TaznFaGo0brU2KMJ0q",
                            disableFunding: ["paylater", "card"],
                        }}>
                        <PayPalButtons
                            style={{ label: "checkout" }}
                            createOrder={(data, actions) => {
                                Paypal__Before__Payment();
                                return actions.order.create({
                                    intent: "CAPTURE", // ✅ Add this line
                                    purchase_units: [
                                        {
                                            amount: {
                                                currency_code: "USD",
                                                value: totalAmountPara.current?.textContent || "0",
                                            },
                                        },
                                    ],
                                });
                            }}

                            // createOrder={(data, actions) => {
                            //     Paypal__Before__Payment();
                            //     return actions.order.create({
                            //       purchase_units: [
                            //         {
                            //           amount: {
                            //             currency_code: "USD", 
                            //             value: totalAmountPara.current?.textContent || "0",
                            //           },
                            //         },
                            //       ],
                            //     });
                            //   }}

                            onApprove={(data, actions) => {
                                if (!actions.order) {
                                    console.error("PayPal order actions are undefined.");
                                    return Promise.reject(new Error("PayPal order actions are undefined."));
                                }

                                return actions.order.capture().then((order) => {
                                    Paypal__Successful__Payment(order);
                                });
                            }}


                            // onApprove={(data, actions) => {
                            //     return actions.order.capture().then((order) => {
                            //         Paypal__Successful__Payment(order);
                            //     });
                            // }}
                            onError={() => {
                                swal("Error!", "Deposit Balance Transaction Not Successful!", "error");
                            }}
                            onCancel={() => {
                                swal("Error!", "Deposit Balance Transaction has been cancelled", "error");
                            }}
                        />
                    </PayPalScriptProvider>
                    <div className="px-10 py-2 flex items-center">
                        <span className="w-full border-t border-hamzaPrimary"></span>
                        <span className="mx-4 font-Lexend">OR</span>
                        <span className="w-full border-t border-hamzaPrimary"></span>
                    </div>
                    <div className="pt-4">
                        <div className="py-2 flex flex-col gap-2">
                            <h3 className="text-[26px] leading-[36px] font-semibold text-primary">Pay With Card</h3>
                            <span className="text-[14px] font-normal">
                                All transactions are secure and encrypted
                            </span>
                        </div>
                    </div>
                    <Elements stripe={stripePromise} options={undefined}>
                        <StripeSeperateComponent
                            isLoading={setIsLoading}
                            total_amount={totalAmount}
                            selectedPlan={selectedPlan?.id}
                            tax_type={tax?.type}
                            tax_amount={tax?.amount?.toFixed(1)}
                        />
                    </Elements>


                </div>
                <div className="flex flex-col gap-4 w-full lg:w-[300px] xl:w-[400px] 2xl:w-[500px] font-Lexend p-4 h-full rounded-xl">
                    <div className="flex items-center justify-between">
                        <span className="text-[16px] font-normal">Coins</span>
                        <div className="flex items-center gap-1">
                            <RiCoinsFill className="text-yellow-400" />
                            <span className='text-[16px] font-normal'>{selectedPlan?.coins}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[16px] font-normal">Valid Until</span>
                        <span className='text-[16px] font-normal'>{selectedPlan?.duration} Days</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[16px] font-normal">Price</span>
                        <span className='text-[16px] font-normal'>${selectedPlan?.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[16px] font-normal">Tax ({selectedPlan?.tax_type})</span>
                        <span className='text-[16px] font-normal'>+ {selectedPlan?.tax}%</span>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                        <span className="text-[16px] font-semibold">Total</span>
                        <p className="flex items-center text-[14px] font-semibold">
                            $<span ref={totalAmountPara}>{totalAmount}</span>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentSection

