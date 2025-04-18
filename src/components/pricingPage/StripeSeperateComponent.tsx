"use client"

import { CTA } from '@/components';

import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';

interface Props {
  packageId?: string;
  packageDuration?: string;
  packagePrice?: number;
  services?: string[];
  discounted_amount?: number;
  sub_total?: number;
  tax_amount?: number | string;
  total_amount?: number;
  description?: string;
  coupon_code?: string;
  coupon_discount_percent?: number;
  used_coins?: number;
  tax_type?: string;
  isLoading?: any;
  selectedPlan?: string;
  coinsAreUSing?: number;
  remaningUserCoins?: number;
}

interface FormData {
  name: string;
  email: string;
  cardNumber: any;
  cardCvc: any;
  cardExpiry: any;
  address?: string;
  city?: string;
  postal_code?: string;
  country?: { value: string; label: string };
}


const StripeSeperateComponent = (props: Props) => {

  const { packageId, packageDuration, remaningUserCoins, coinsAreUSing, selectedPlan, isLoading, tax_type, used_coins, coupon_discount_percent, coupon_code, description, total_amount, tax_amount, sub_total, discounted_amount, services, packagePrice } = props

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  //   const { user } = useAuth();
  //   const { clearCart } = useCart();
  const router = useRouter();

  const {
    setValue,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onSubmit",
  });

  const handleStripe = async (SubData: FormData) => {
    isLoading(true);
    console.log(SubData);
    // if (!stripe || !elements) return;

    // try {
    //   const cardNumberElement = elements.getElement(CardNumberElement);
    //   if (!cardNumberElement) return;

    //   const { paymentMethod, error } = await stripe.createPaymentMethod({
    //     type: "card",
    //     card: cardNumberElement,
    //     billing_details: {
    //       name: SubData.name,
    //       email: SubData.email,
    //       address: {
    //         line1: SubData.address || "",
    //         city: SubData.city || "",
    //         postal_code: SubData.postal_code || "",
    //         country: SubData.country?.value || "",
    //       },
    //     },
    //   });

    //   if (error) {
    //     setError(error.message);
    //     isLoading(false);
    //     return;
    //   }

    //   const cardLast4 = paymentMethod?.card?.last4;

    //   const { data } = await axios.post(
    //     "https://backend.aiproresume.commedia/api/create-payment-intent",
    //     {
    //       amount: Math.round(total_amount * 100),
    //       currency: "usd",
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${user?.token}`,
    //         Accept: "application/json",
    //       },
    //     }
    //   );

    //   if (data.error) {
    //     setError(data.error);
    //     isLoading(false);
    //     return;
    //   }

    //   const clientSecret = data.data.client_secret;

    //   const submitData = {
    //     planId: selectedPlan,
    //     packageId,
    //     packageDuration,
    //     packagePrice,
    //     services,
    //     order_id: clientSecret,
    //     currency: "USD",
    //     discounted_amount,
    //     sub_total,
    //     tax_amount,
    //     total_amount,
    //     description,
    //     payment_type: "stripe",
    //     coupon_code,
    //     coupon_discount_percent,
    //     used_coins,
    //     tax_type,
    //     status: 0,
    //     card_number: cardLast4,
    //     card_name: SubData.name,
    //   };

    //   const orderRes = await ApiService.purchaseCoins(user?.token, submitData);
    //   const order_unique_id = orderRes.data.data.id;

    //   const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: paymentMethod.id,
    //   });

    //   if (confirmPayment.error) {
    //     setError(confirmPayment.error.message);
    //     isLoading(false);
    //   } else {
    //     await ApiService.purchaseCoinsUpdate(user?.token, {
    //       ...submitData,
    //       id: order_unique_id,
    //       status: 1,
    //     });

    //     clearCart();
    //     isLoading(false);
    //     swal({
    //       title: "Congratulations",
    //       text: "Order Completed Successfully",
    //       icon: "success",
    //     }).then(() => router.push("/dashboard?tab=mytransactions"));

    //     localStorage.removeItem("usedCoins");
    //     localStorage.removeItem("tax_amount");
    //     localStorage.removeItem("checkoutUsingCoins");
    //   }
    // } catch (err) {
    //   console.error(err);
    //   setError("Something went wrong. Please try again.");
    //   isLoading(false);
    // }
  };

  const elementOptions = {
    style: {
      base: {
        fontSize: "20px",
        color: "#495057",
        fontFamily: "Arial, sans-serif",
        "::placeholder": {
          color: "#6c757d",
        },
      },
      invalid: {
        color: "#fa755a",
      },
    },
  };


  return (
    <>

      <form onSubmit={handleSubmit(handleStripe)} className="flex flex-col gap-6">
        <div className="font-Lexend">
          <label htmlFor="name" className={`${errors.name ? "text-red-500" : "text-gray-700"} block `}>
            Name*
          </label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Cardholder Name is Required" }}
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  type="text"
                  id="name"
                  name="name"
                  className={`${errors.name ? "border-red-500" : "border-white"} bg-white/50 border-2 py-2 px-2 w-full placeholder:text-[20px] placeholder:text-gray-500 rounded-lg text-[20px] text-gray-500 focus-visible:outline-none`}
                  placeholder="Cardholder Name"
                />
                {errors.name && (
                  <span className="text-red-500 w-full left-0 -bottom-5 text-sm absolute">
                    {errors.name.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>

        <div>
          <label htmlFor="email" className={`${errors.email ? "text-red-500" : "text-gray-700"} block `}>
            Email*
          </label>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Cardholder Email is Required" }}
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  type="email"
                  id="email"
                  name="email"
                  className={`${errors.email ? "border-red-500" : "border-white"} bg-white/50 border-2 py-2 px-2 w-full placeholder:text-[20px] placeholder:text-gray-500 rounded-lg text-[20px] text-gray-500 focus-visible:outline-none`}
                  placeholder="Cardholder Email"
                />
                {errors.email && (
                  <span className="text-red-500 w-full left-0 -bottom-5 text-sm absolute">
                    {errors.email.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>

        <div className=" w-full">
          <label htmlFor="address" className={`${errors.address ? "text-red-500" : "text-gray-700"} block `}>
            Address
          </label>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  type="text"
                  id="address"
                  className={`${errors.address ? "border-red-500" : "border-white"} bg-white/50 border-2 py-2 px-2 w-full placeholder:text-[20px] placeholder:text-gray-500 rounded-lg text-[20px] text-gray-500 focus-visible:outline-none`}
                  placeholder="Complete Address"
                />
                {errors.address && (
                  <span className="text-red-500 w-full left-0 -bottom-5 text-sm absolute">
                    {errors.address.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>

        <div className=" w-full">
          <label htmlFor="postal_code" className={`${errors.address ? "text-red-500" : "text-gray-700"} block `}>
            Postal Code
          </label>
          <Controller
            name="postal_code"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  type="text"
                  id="postal_code"
                  className={`${errors.postal_code ? "border-red-500" : "border-white"} bg-white/50 border-2 py-2 px-2 w-full placeholder:text-[20px] placeholder:text-gray-500 rounded-lg text-[20px] text-gray-500 focus-visible:outline-none`}
                  placeholder="123456"
                />
                {errors.postal_code && (
                  <span className="text-red-500 w-full left-0 -bottom-5 text-sm absolute">
                    {errors.postal_code.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>

        <div>
          <label htmlFor="cardNumber" className={`${errors.cardNumber ? "text-red-500" : "text-gray-700"} block`}>
            Card Number*
          </label>
          <Controller
            name="cardNumber"
            control={control}
            rules={{
              required: "Card Number Required",
            }}
            render={({ field }) => (
              <div className="relative">
                <CardNumberElement
                  {...field}
                  id="cardNumber"
                  options={elementOptions} className={`${errors.cardNumber ? "border-red-500" : "border-white"} border-2 py-2 px-2 bg-white/50 rounded-lg`}
                />
                {errors.cardNumber && (
                  <span className="text-red-500 w-full left-0 -bottom-5 text-sm absolute">
                    {/* {errors.cardNumber.message} */}
                  </span>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className=" w-full">
            <label htmlFor="cardExpiry" className={`${errors.cardExpiry ? "text-red-500" : "text-gray-700"} block`} >
              Expiry Date*
            </label>
            <Controller
              name="cardExpiry"
              control={control}
              rules={{
                required: "Card Expiry Required",
              }}
              render={({ field }) => (
                <div className="relative">
                  <CardExpiryElement
                    {...field}
                    id="cardExpiry"
                    options={elementOptions}
                    className={`${errors.cardExpiry ? "border-red-500" : "border-white"} border-2 py-2 px-2 bg-white/50 rounded-lg`}
                  />
                  {errors.cardExpiry && (
                    <span className="text-red-500 w-full left-0 -bottom-5 text-sm absolute">
                      {/* {errors.cardExpiry.message} */}
                    </span>
                  )}
                </div>
              )}
            />
          </div>

          <div className=" w-full">
            <label htmlFor="cardCvc" className={`${errors.cardCvc ? "text-red-500" : "text-gray-700"} block`}>
              CVC
            </label>
            <Controller
              name="cardCvc"
              control={control}
              rules={{
                required: "Card CVC Required",
              }}
              render={({ field }) => (
                <div className="relative">
                  <CardCvcElement
                    {...field}
                    id="cardCvc"
                    options={elementOptions}
                    className={`${errors.cardCvc ? "border-red-500" : "border-white"} border-2 py-2 px-2 bg-white/50 rounded-lg`}
                  />
                  {errors.cardCvc && (
                    <span className="text-red-500 w-full left-0 -bottom-5 text-sm absolute">
                      {/* {errors.cardCvc.message} */}
                    </span>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        <div>
          <span className="text-[14px] py-4">
            Cardholders please enter your details with confidence, unlocking a
            seamless path to elevate your resume-building experience.
          </span>
        </div>

        <CTA btn text='Pay Now' txtColor='text-white' bgColor='bg-PrimaryDark hover:bg-primary' border='border-0' width='w-full' />
        {error && <p className="text-red-500">{error}</p>}
      </form>

    </>
  )
}

export default StripeSeperateComponent