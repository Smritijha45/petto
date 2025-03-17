import React from 'react';
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";

const cardData = [
  {
    image: card1,
    title: "Getting the Joy of pet Adoption ",
    description: "Adopting a pet can bring immense joy and fullfilment to your life unexpectedly."
  },
  {
    image: card2,
    title: "Rescued Hmaster Finds Loving Home",
    description: "In a heartwarming twist of fate a rescued hamster finds a forever home filled with love."
  },
  {
    image: card3,
    title: "The benifits of Owning a Cat",
    description: "cats are fascinating creatures that bring a multitude benifits in our lives."
  },
  {
    image: card4,
    title: "Training tips for a well behaved Dog",
    description: "Having a well-behaved dog is a delight for both owner and the community."
  }
];

const Blogs = () => {
  return (
    <div className="flex flex-col items-center p-8 pb-20">
      <h1 className="text-5xl pt-10 font-bold text-green-900 text-center">Heartwarming tales of forever homes.</h1>
      <p className="text-center pt-5 text-gray-600 mt-2">Discover inspiring stories of pet adoptions and happy endings.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-[180px] object-cover"
            />
            <h1 className="text-xl font-semibold mt-4">{card.title}</h1>
            <p className="text-gray-500 mt-2">{card.description}</p>
            <button className="mt-4 px-4 py-2 bg-[#FFC3A0] text-green-900 rounded-lg shadow-md">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
