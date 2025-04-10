// components/ReviewCard.tsx

import Image from "next/image";
import React from "react";


interface ReviewCardProps {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: any;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  id,
  text,
  author,
  role,
  avatar,
}) => {
  return (
    <div key={id}>
      <div className="max-w-3xl mx-auto text-gray-900 text-sm sm:text-base my-6">
        <p className="px-6">{text}</p>
      </div>

      <div className="flex items-center justify-center gap-4 mb-3">
        <Image
          src={avatar}
          alt="author"
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div className="text-left">
          <p className="font-semibold">{author}</p>
          <p className="text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
