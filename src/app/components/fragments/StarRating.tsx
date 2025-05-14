import React from "react";
import Star from "@/assets/icons/star.svg";

interface StarRatingProps {
  rating: number; 
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="gap-12 flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-20 h-20 ${index < rating ? "text-oranye" : "text-secondary-dark-20"}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
