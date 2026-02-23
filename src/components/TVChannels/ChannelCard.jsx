import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChannelCard = ({ channel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/channel/${channel.id}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group bg-neutral-900 rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center gap-2.5 md:gap-3 border border-neutral-800 hover:border-orange-500 hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-lg"
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-neutral-800 flex items-center justify-center overflow-hidden">
        <img
          src={channel.logo}
          alt={channel.name}
          className="w-10 h-10 md:w-12 md:h-12 object-contain transform group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <span className="text-sm md:text-base text-neutral-100 text-center font-medium group-hover:text-white">
        {channel.name}
      </span>
    </button>
  );
};

export default ChannelCard;

