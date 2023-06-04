import React, { useRef, useState, useEffect } from "react";
import video1 from "../assets/videos/1.mp4";
import video2 from "../assets/videos/2.mp4";
import video3 from "../assets/videos/3.mp4";
import playIcon from "../assets/Play.png";

const Featured = () => {
  const videoRefs = [useRef(), useRef(), useRef()];
  const videoPaths = [video1, video2, video3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handlePlayClick = (index) => {
    const video = videoRefs[index].current;

    if (video.paused) {
      video.play().catch((error) => {
        console.log("Error occurred while playing the video:", error);
      });
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleSlideChange = (index) => {
    const currentVideo = videoRefs[currentSlide].current;
    const newVideo = videoRefs[index].current;

    if (currentVideo && currentVideo !== newVideo && isPlaying) {
      currentVideo.pause();
      setIsPlaying(false);
    }

    setIsFading(true); // Start fade effect
    setTimeout(() => {
      setCurrentSlide(index);
      setIsFading(false); // End fade effect
    }, 300);

    if (newVideo && currentSlide !== index) {
      newVideo.currentTime = 0;
      setIsPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const video = videoRefs[currentSlide].current;
    if (isPlaying) {
      video.addEventListener("ended", handleVideoEnded);
      video.play().catch((error) => {
        console.log("Error occurred while playing the video:", error);
      });
    }
    return () => {
      video.removeEventListener("ended", handleVideoEnded);
    };
  }, [currentSlide, isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 md:p-12 lg:p-24">
      <h1 className="font-garamond text-4xl md:text-6xl">Our Best Projects</h1>
      <p className="mt-2 mb-8 md:mb-12 lg:w-1/2 font-light">
        It's for great minutes, minor achievements, and in the middle between.
        It's for great minutes, minor achievements, and in the middle between.
      </p>
      <div className="relative w-full">
        <div
          className="relative w-full"
          style={{ paddingBottom: "40%" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {videoPaths.map((videoPath, index) => (
            <video
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              ref={videoRefs[index]}
              style={{ objectFit: "cover" }}
            >
              <source src={videoPath} type="video/mp4" />
            </video>
          ))}
          {!isPlaying && (
            <img
              src={playIcon}
              alt="Play"
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                isHovered ? "opacity-75" : ""
              }`}
              style={{ width: "7rem" }}
              onClick={() => handlePlayClick(currentSlide)}
            />
          )}
          {isPlaying && isHovered && (
            <img
              src={playIcon}
              alt="Pause"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-75"
              style={{ width: "7rem" }}
              onClick={() => handlePlayClick(currentSlide)}
            />
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {videoRefs.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full mx-1 cursor-pointer ${
              index === currentSlide ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
