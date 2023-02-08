import { useEffect, useState } from "preact/hooks";

export default function GradientAnimation() {
  const [alreadyShowed, setAlreadyShowed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      console.log(window.pageYOffset);

      if (window.pageYOffset >= 500 && !alreadyShowed) {
        const imageRight: HTMLElement = document.querySelector("#image-right")!;
        imageRight.style.marginRight = "0px";
        const imageLeft: HTMLElement = document.querySelector("#image-left")!;
        imageLeft.style.marginLeft = "0px";

        const textRight: HTMLElement = document.querySelector("#text-right")!;
        textRight.style.marginRight = "0px";
        const textLeft: HTMLElement = document.querySelector("#text-left")!;
        textLeft.style.marginLeft = "0px";
      }
    };
    document.addEventListener("scroll", onScroll);
  }, []);

  return <div />;
}
