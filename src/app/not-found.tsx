import Link from 'next/link'
import { IoIosArrowRoundBack } from 'react-icons/io'
import man_space from "../../public/images/man_space.gif"
import Image from 'next/image'
import venus from "../../public/images/venus.gif"
import rocket from "../../public/images/rocket.webp"
import star from "../../public/images/star.webp"
 
export default function NotFound() {
  return (
   <>
   
   <div className=" bg-PrimaryDark h-dvh flex items-center justify-center flex-col relative">
        <div className="container relative mx-auto">
          {/* All main */}
          <div className="w-[80%] mx-auto flex justify-center items-center flex-col gap-4">
            {/* Main of spcae and 404 */}
            <div className="relative flex items-center justify-center w-full">
              {/* space man image */}
              <div className="absolute z-[2]  mx-auto">
                <Image src={man_space} alt="man in space" width={300} />
              </div>
              {/* 404 text */}
              <div className="flex items-center justify-around z-[1] w-full">
                <h3 className="text-[200px] relative top-[100px] w-fit bg-gradient-to-t -rotate-[22deg] from-hamzaPrimary to-white font-bold bg-clip-text text-transparent">
                  4
                </h3>
                <h3 className="text-[180px] w-fit bg-gradient-to-t relative right-[5rem] top-3 -rotate-[20deg] from-hamzaPrimary to-white font-bold bg-clip-text text-transparent">
                  0
                </h3>
                <h3 className="text-[200px] w-fit bg-gradient-to-t  rotate-[20deg] from-hamzaPrimary to-white font-bold bg-clip-text text-transparent">
                  4
                </h3>
              </div>
            </div>
            {/* Content */}
            <div className="flex items-center flex-col font-Lexend text-base text-white">
              <div>{"Looks like you are floating in space OR!"}</div>
              <div>{"This page Doesn’t exist"}</div>
            </div>
            {/* Button */}
            <div>
              <Link
                href={"/"}
                className="uppercase bg-white text-hamzaPrimary px-4 py-2 font-Lexend flex gap-2 font-semibold items-center rounded-lg"
              >
                <IoIosArrowRoundBack size={30} />
                back to home page
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute -left-[5.5rem] top-0">
          <Image src={venus} alt="venus" width={230} />
        </div>
        <div className="absolute -right-[0rem] bottom-[40px] scale-x-[-1]">
          <Image src={venus} alt="venus" width={260} />
        </div>

        <Image
          className="absolute top-5 left-60"
          src={star}
          alt="star"
          width={30}
        />

        <Image
          className="absolute top-[10.7rem] left-[21.2rem]"
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
          className="absolute top-60 right-[25rem]"
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
          className="absolute top-44 right-[15rem]"
          src={star}
          alt="star"
          width={20}
        />

        <Image
          className="absolute top-20 right-[28rem]"
          src={rocket}
          alt="rocket"
          width={50}
        />
      </div>

   </>
  )
}