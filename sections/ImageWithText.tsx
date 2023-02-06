import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

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
    "flex flex-col items-center md:flex-row m-auto gap-5 md:gap-10 lg:gap-12 mt-14";
  const cssRight = commonCss + " md:flex-row-reverse ";
  const cssLeft = commonCss + " md:flex-row";

  return (
    <div class={imagePosition == "right" ? cssRight : cssLeft}>
      <div class={`flex items-center w-[90%] rounded-lg lg:w-full h-[380px] md:h-[550px] overflow-hidden ${imagePosition == "right" ? "ml-auto rounded-tl-[400px] rounded-bl-[400px]" : "mr-auto rounded-tr-[400px] rounded-br-[400px]"}`}>
        <picture class="inset-0 h-full">
          <source
            srcset={image}
          />
          <Image
            class="object-cover inset-0 w-full h-full"
            sizes="(max-width: 640px) 75vw, 50vw"
            src={image}
            width={200}
            height={40}
          />
        </picture>
      </div>
      <div class="flex flex-col justify-start items-start px-[40px] md:px-[0px]">
        <h4 class="text-secondary uppercase text-[12px] md:text-[18px] font-bold text-left mb-2 md:mb-[30px]">
            {subTitle}
        </h4>
        <h3 class="w-full text-primary text-left font-bold text-3xl md:text-[38px] md:w-[150px]">
          {title}
        </h3>
        <p class="text-left text-gray text-[16px] md:text-lg md:text-2xl my-3 md:mt-[20px] md:mb-[30px]">
          {text}
        </p>
        <a className="flex items-center bg-secondary px-[20px] rounded-[30px] uppercase text-white text-[12px] md:text-[16px] font-bold h-[40px] md:h-[50px]" href={button.link}>{button.text}</a>
      </div>
      <div class={`hidden md:block ${imagePosition == "right" ? "ml-6" : "mr-6"}`}>
        <img class="h-[380px] w-[140px]" src={imageDecoration} alt="" />
      </div>  
    </div>
  );
}
