import React, { useState } from 'react';

const ChannelPlayer = ({ channel }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!channel) return null;

  return (
    <section className="w-full bg-black rounded-3xl overflow-hidden border border-neutral-800 mb-8">
      <div className="relative w-full aspect-video bg-neutral-900 flex items-center justify-center">
        {/* In a real app, replace with HLS/video player */}
        <video
          className="w-full h-full object-cover"
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={channel.streamUrl} type="application/x-mpegURL" />
          Your browser does not support the video tag.
        </video>

        {/* Compact channel logo overlay instead of large poster */}
        {!isPlaying && channel.logo && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-black/70 flex items-center justify-center border border-neutral-700 shadow-lg">
              <img
                src={channel.logo}
                alt={channel.name}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
          </div>
        )}
        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-red-600 text-xs font-semibold tracking-wide">
          LIVE
        </div>
      </div>
      <div className="p-5 md:p-6 lg:p-8 flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">{channel.name}</h1>
        <p className="text-sm md:text-base text-neutral-300 max-w-3xl">
          {channel.description}
        </p>
      </div>
    </section>
  );
};

export default ChannelPlayer;

