// components/ReviewCard.tsx

import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";


type ReviewCardProps = {
  id?: number;
  text: string;
  author: string;
  role: string;
  avatar: any;
}

const ReviewCard = ({
  id,
  text,
  author,
  role,
  avatar,
}: ReviewCardProps) => {
  return (
    <div key={id}>
      <div className="flex flex-col items-center justify-center gap-2 mb-3">
        <div className="w-[50px]">
          <Image
            src={avatar}
            alt="author"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold">{author}</p>
            <p className="text-sm mb-1">{role}</p>
            <div className="flex justify-center items-center gap-1">
              {[...Array(5)].map((_, idx) => (
                <span key={idx} className="text-yellow-400 text-sm">
                  <FaStar />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-gray-900 text-sm sm:text-base my-1">
        <p className="px-6">{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
