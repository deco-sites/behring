import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

import MidContentAnimation from '../islands/MidContentAnimation.tsx'

export interface Props {
  subTitle?: string;
  title: string;
  text: string;
  imagePosition?: "left" | "right";
  image: LiveImage;
  imageDecoration: LiveImage;
  button: {text: string; link?: string}
}

export default function ImageWithText(
  { subTitle, title, text, imagePosition, image, button, imageDecoration }: Props,
) {
  const commonCss =
    "flex flex-col items-center md:flex-row m-auto gap-5 md:gap-10 lg:gap-12 mt-14 mb-[100px] w-full overflow-hidden";
  const cssRight = commonCss + " md:flex-row-reverse ";
  const cssLeft = commonCss + " md:flex-row";

  return (
    <div id="atuacao" class={imagePosition == "right" ? cssRight : cssLeft}>
      <div 
      id={imagePosition == "right" ? "image-right" : "image-left"}
      class={`animation max-w-[90vw] md:max-w-[55vw] flex items-center w-[90%] rounded-lg lg:w-full h-[380px] md:h-[550px] uw:h-[700px] overflow-hidden ${imagePosition == "right" ? "ml-auto rounded-tl-[400px] rounded-bl-[400px] mr-0 md:mr-[-60vw]" : "mr-auto rounded-tr-[400px] rounded-br-[400px] ml-0 md:ml-[-60vw]"}`}>
        <picture class="inset-0 h-full flex justify-center items-center">
          <source
            srcset={image}
          />
          <Image
            class="object-cover inset-0 w-full h-full md:h-auto"
            sizes="(max-width: 640px) 75vw, 50vw"
            src={image}
            width={200}
            height={40}
          />
        </picture>
      </div>
      <div 
      id={imagePosition == "right" ? "text-left" : "text-right"}
      class={`animation max-w-[740px] flex gap-10 md:w-[70%] ${imagePosition == "right" ? 'flex-row-reverse ml-0 md:ml-[-50vw]' : 'flex-row mr-0 md:mr-[-50vw]'}`}>
        <div class="flex px-[8vw] md:px-0 flex-col justify-start items-start px-[40px] md:px-[0px]">
          <h4 class="text-secondary uppercase text-[12px] md:text-[18px] font-bold text-left mb-2 md:mb-[30px]">
              {subTitle}
          </h4>
          <h3 class="w-full text-primary text-left font-semibold text-[22px] md:text-[38px] md:w-[150px]">
            {title}
          </h3>
          <p class="text-left text-gray text-[14px] md:text-lg md:text-2xl my-3 md:mt-[20px] md:mb-[30px]">
            {text}
          </p>
          <a className="flex items-center bg-secondary px-[20px] rounded-[30px] uppercase text-white text-[12px] md:text-[16px] font-bold h-[40px] md:h-[50px]" href={button.link}>{button.text}</a>
        </div>
        <div class={`hidden md:block ${imagePosition == "right" ? "ml-6" : "mr-6"}`}>
          <img class="h-[380px] w-[140px]" src={imageDecoration} alt="" />
        </div> 
      </div> 
      <MidContentAnimation />
    </div>
  );
}
