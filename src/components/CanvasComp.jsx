import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CanvasComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const desktopModules = import.meta.glob("../assets/Canvas/frame_*.webp", {
  eager: true,
  import: "default",
});
const mobileModules = import.meta.glob("../assets/CanvasMobile/frame_*.webp", {
  eager: true,
  import: "default",
});

const sortedDesktopFrames = Object.keys(desktopModules)
  .sort()
  .map((key) => desktopModules[key]);

const sortedMobileFrames = Object.keys(mobileModules)
  .sort()
  .map((key) => mobileModules[key]);

const CanvasComp = ({ onEnd, isMobile }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = [];
    const imageSeq = { frame: 0 };

    const sortedFrames = isMobile ? sortedMobileFrames : sortedDesktopFrames;
    const frameCount = sortedFrames.length;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(Math.round(imageSeq.frame));
    }

    sortedFrames.forEach((frame) => {
      const image = new Image();
      image.src = frame;
      img.push(image);
    });

    img[0].onload = () => {
      resizeCanvas();
    };

    function renderFrame(index) {
      const image = img[index];
      if (!image || !image.complete) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = image.width / image.height;
      let sx, sy, sWidth, sHeight;

      if (imgRatio > canvasRatio) {
        sHeight = image.height;
        sWidth = sHeight * canvasRatio;
        sx = (image.width - sWidth) / 2;
        sy = 0;
      } else {
        sWidth = image.width;
        sHeight = sWidth / canvasRatio;
        sx = 0;
        sy = (image.height - sHeight) / 2;
      }

      context.drawImage(image, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);
    }

    window.addEventListener("resize", resizeCanvas);

    const ctx = gsap.context(() => {
      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 0.15,
          pin: true,
          onLeave: () => onEnd?.(true),
          onEnterBack: () => onEnd?.(false),
        },
        onUpdate: () => renderFrame(Math.round(imageSeq.frame)),
      });
    }, wrapperRef);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <div className="canvas-fullscreen" ref={wrapperRef}>
      <canvas ref={canvasRef} />
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
};

export default CanvasComp;