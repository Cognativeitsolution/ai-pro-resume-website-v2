"use client"

import React, { useState } from 'react'
import { RiCoinsFill } from 'react-icons/ri';
import styles from "./pricing.module.css";
import PaymentSection from './PaymentSection';
import { HowToPurchaseCoins } from '../../app/pricing/data';
import Image from 'next/image';
import check_1 from "media/images/check_1.webp"

interface Plan {
  id: string;
  coins: number;
  duration: number;
  price: number;
}

interface Tax {
  type: string;
  amount: number;
}

const CoinsPurchaseSection = () => {

  const [coinPlans, setCoinPlans] = useState<any[]>([
    { id: 1, coins: 5, price: "10.00", discount: 0, duration: 90, tax_type: "GST", tax: "13" },

    { id: 2, coins: 10, price: "20.00", discount: 0, duration: 90 },

    { id: 3, coins: 25, price: "50.00", discount: 0, duration: 90 },

    { id: 4, coins: 50, price: "95.00", discount: 5, duration: 90 },

    { id: 5, coins: 75, price: "135.00", discount: 10, duration: 90 },

    { id: 6, coins: 100, price: "180.00", discount: 20, duration: 90 },
  ]);
  const [selectedPlan, setSelectedPlan] = useState<any>();
  const [isProceeding, setIsProceeding] = useState<any>(false);

  return (
    <>

      <div className='container'>
        <div className="w-full flex flex-col gap-[10px] justify-center items-center px-2 sm:px-6 py-8 mb-[30px] bg-white/30 border-2 border-white rounded-2xl">
          <div className="mb-4 text-center">
            <p className="text-3xl font-bold font-Lexend mb-2">Buy Coins</p>

            <p className="font-Lexend text-base text-left">
              Our flexible coin packages allow you to purchase resume parser
              tokens and more. With these coins, you can select the package
              that suits your needs and use them to buy any service available
              on the platform. When using the resume parser, remember that
              each document (up to 3 pages) costs two coins to parse. On
              registration, you will receive two coins and 5 parser tries as
              part of the default-free package.
            </p>

          </div>

          <div className="flex flex-col items-center gap-4 container">
            <div className=" flex items-center justify-center flex-wrap gap-4 ">
              {coinPlans?.map((plan, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg hover:bg-primary hover:text-white hover:font-medium border-2 shadow-[0px_0px_30px_rgb(220,220,230)] text-lg font-Lexend w-[120px] h-[100px] flex items-center justify-center relative flex-col ${selectedPlan?.id === plan.id
                    ? "bg-PrimaryDark text-white"
                    : "bg-white"
                    }`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  {plan.discount > 0 && (
                    <div
                      className={`${styles.discountbadge} text-white text-sm flex justify-center items-center absolute -top-[5px] -right-[5px]`}
                    >
                      <span className="z-10 text-[12px] relative font-Lexend ">
                        {plan.discount}%
                      </span>
                    </div>
                  )}
                  <div className="">${plan.price}</div>
                  <div className="flex items-center justify-center text-xl gap-1">
                    <RiCoinsFill className="text-yellow-400" />
                    {plan.coins}
                  </div>
                </div>
              ))}
            </div>
            {!isProceeding ? (
              <div className={`flex items-center justify-center w-full`}>
                <button
                  disabled={!selectedPlan}
                  onClick={() => {

                    setIsProceeding(true);

                  }}
                  className={`w-[200px] font-Lexend rounded-xl p-2 ${selectedPlan ? "bg-primary" : "bg-PrimaryDark"
                    }   text-white`}
                >
                  Proceed To Checkout
                </button>
              </div>
            ) : (

              <div

                className={`rounded-2xl w-full xl:max-w-[90%] m-auto p-5`}
              >

                <PaymentSection selectedPlan={selectedPlan} />
              </div>

            )}
            <div className="mb-4">
              <div className="mx-auto px-2 sm:px-4 space-y-4">
                {HowToPurchaseCoins.map((item, index) => (
                  <div key={index} className="w-full">
                    <h3 className="text-[22px] md:text-[30px] 2xl:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[44px] font-semibold mb-2">
                      {item.title}
                    </h3>
                    <ul className="mb-4 space-y-3">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <Image
                            src={check_1}
                            alt="bullet"
                            width={15}
                            height={15}
                            className="mt-[5px]"
                          />
                          <p>{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p className="text-xl sm:text-3xl font-bold font-Lexend">Referrals:</p>

                <p className="font-Lexend text-base">
                  If you do not want to purchase the coins, you can earn coins
                  through referrals. Invite your friends to join AI Pro Resume,
                  and you will earn coins when they sign up using your referral
                  link. You can use them to unlock parser tokens and premium
                  services. You will receive 3 coins for 10 referrals, 4 coins
                  for 20 referrals, and 6 coins for 30 referrals.
                </p>
              </div>





            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CoinsPurchaseSection