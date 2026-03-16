import { useEffect } from "react";

export default function WandCursor(){

  useEffect(()=>{

    const createSparkle = (x,y)=>{

      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";

      sparkle.style.left = x + "px";
      sparkle.style.top = y + "px";

      document.body.appendChild(sparkle);

      setTimeout(()=>{
        sparkle.remove();
      },600);
    }

    const moveCursor = (e)=>{
      createSparkle(e.clientX,e.clientY);
    }

    document.addEventListener("mousemove",moveCursor);

    return ()=>{
      document.removeEventListener("mousemove",moveCursor);
    }

  },[]);

  return null;
}