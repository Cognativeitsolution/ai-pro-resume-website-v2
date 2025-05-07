import Image from 'next/image'
// =================
import { CTA } from '@/components'
// =================
import man_space from "media/images/man_space.gif"
import venus from "media/images/venus.gif"
import rocket from "media/images/rocket.webp"
import star from "media/images/star.webp"

export default function NotFound() {
  return (
    <>
      <section className='mb-0 lg:pb-5 xl:pb-10'>
        <div className=" bg-PrimaryDark h-dvh flex items-center justify-center flex-col relative overflow-hidden">
          <div className="container relative mx-auto">
            {/* All main */}
            <div className="w-full md:w-[80%] mx-auto flex justify-center items-center flex-col gap-4">
              {/* Main of spcae and 404 */}
              <div className="relative flex items-center justify-center w-full">
                {/* space man image */}
                <div className="absolute z-[2] left-[120px] sm:left-auto mx-auto">
                  <Image src={man_space} alt="man in space" width={300} className='w-[80%] sm:w-full md:w-[300px]' />
                </div>
                {/* 404 text */}
                <div className="flex items-center justify-around z-[1] w-full">
                  <span className="text-[100px] md:text-[200px] relative top-[30px] md:top-[100px] w-fit bg-gradient-to-t -rotate-[22deg] from-hamzaPrimary to-white font-bold bg-clip-text text-transparent">
                    4
                  </span>
                  <span className="text-[80px] md:text-[180px] w-fit bg-gradient-to-t relative right-[0rem] md:right-[1rem] top-0 -rotate-[20deg] from-hamzaPrimary to-white font-bold bg-clip-text text-transparent">
                    0
                  </span>
                  <span className="text-[100px] md:text-[200px] w-fit bg-gradient-to-t rotate-[20deg] from-hamzaPrimary to-white font-bold bg-clip-text text-transparent">
                    4
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="flex items-center flex-col font-Lexend text-base text-white mt-8 lg:mt-0">
                <div>{"Looks like you are floating in space OR!"}</div>
                <div>{"This page Doesn’t exist"}</div>
              </div>
              {/* Button */}
              <CTA
                link
                text="BACK TO HOME PAGE"
                href="/"
                bgColor="bg-white hover:bg-transparent"
                txtColor="text-hamzaPrimary hover:text-white"
                border="border-2 border-white"
                icon
              />
            </div>
          </div>

          <div className="absolute -left-[4rem] top-0">
            <Image src={venus} alt="venus" width={230} />
          </div>
          <div className="absolute -right-[4rem] bottom-[10px] scale-x-[-1]">
            <Image src={venus} alt="venus" width={260} />
          </div>

          <Image
            className="absolute top-1 sm:top-5 left-60"
            src={star}
            alt="star"
            width={30}
          />

          <Image
            className="absolute top-[45rem] md:top-[10.7rem] left-[4rem] md:left-[21.2rem]"
            src={star}
            alt="star"
            width={30}
          />

          <Image
            className="absolute top-60 left-32"
            src={star}
            alt="star"
            width={20}
          />

          <Image
            className="absolute top-60 right-[1rem] lg:right-[25rem]"
            src={star}
            alt="star"
            width={30}
          />

          <Image
            className="absolute top-12 right-[19rem]"
            src={star}
            alt="star"
            width={10}
          />

          <Image
            className="absolute top-[36rem] md:top-[30rem] lg:top-44 right-[8rem] md:right-[15rem]"
            src={star}
            alt="star"
            width={20}
          />

          <Image
            className="absolute top-20 right-[2rem] sm:right-[5rem] lg:right-[28rem]"
            src={rocket}
            alt="rocket"
            width={50}
          />
        </div>
      </section>

    </>
  )
}