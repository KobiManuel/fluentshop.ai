"use client";

import React from "react";

const GradientBlurHeader = () => {
  return (
    <div className="gradient-blur-header">
      <div className="gradient gradient-1"></div>
      <div className="gradient gradient-2"></div>
      <div className="blur-ellipse"></div>
      <style jsx>{`
        .gradient-blur-header {
          position: relative;
          width: 100%;
          height: 50%;
          overflow: hidden;
        }
        .gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }
        .gradient-1 {
          background: conic-gradient(
            from 180deg at 50% 50%,
            #f9f7fd -2.47deg,
            #c575f9 1.81deg,
            #733af8 76.1deg,
            rgba(24, 19, 26, 0.131006) 121.11deg,
            rgba(7, 22, 18, 0) 300.72deg,
            rgba(0, 0, 0, 0) 349.73deg,
            #f9f7fd 357.53deg,
            #c575f9 361.81deg
          );
        }
        .gradient-2 {
          background: conic-gradient(
            from 180deg at 50% 50%,
            #f9f7fd -2.47deg,
            #c575f9 1.81deg,
            #733af8 76.1deg,
            rgba(24, 19, 26, 0.131006) 121.11deg,
            rgba(7, 22, 18, 0) 300.72deg,
            rgba(0, 0, 0, 0) 349.73deg,
            #f9f7fd 357.53deg,
            #c575f9 361.81deg
          );
          mix-blend-mode: multiply;
        }
        .blur-ellipse {
          position: absolute;
          bottom: -25%;
          left: 25%;
          width: 50%;
          height: 50%;
          background: #733af8;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default GradientBlurHeader;
