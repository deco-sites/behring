import { context } from "$live/live.ts";

import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  logo: { image: LiveImage; altText: string };
  menu: { text: string; link: string }[];
}

export default function GetStarted({ logo, menu }: Props) {
  return (
    <header class="w-full fixed bg-white py-3 z-50">
      <div class="flex text-white justify-between items-center h-[76px] md:px-[10vw] m-auto">
        <div class="ml-[40px] md:ml-0">
          <a href="/">
            <picture class="inset-0">
              <Image
                class=""
                src={logo.image}
                alt={logo.altText}
                width={152}
                height={44}
              />
            </picture>
          </a>
        </div>
        <nav class="hidden md:block">
          <ul class="flex text-[14px]">
            {menu.map((menu, idx) => {
              return (
                <li class="hover:text-primary">
                  <a
                    href={menu.link}
                    class={`block text-primary uppercase font-bold ml-[35px] ${
                      idx == 0 ? "border-b-[3px]" : ""
                    } hover:border-b-[3px] border-primary`}
                  >
                    {menu.text}
                  </a>
                </li>
              );
            })}
            <li class="hover:text-primary flex items-center gap-1.5">
              <a
                href="/"
                class="block text-gray uppercase ml-[35px] duration-150"
              >
                Alto Contraste
              </a>
              <svg
                className="opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                width="14.038"
                height="14.038"
                viewBox="0 0 14.038 14.038"
              >
                <path
                  d="M9.59,1.928a7.019,7.019,0,1,0,7.019,7.019A7.019,7.019,0,0,0,9.59,1.928ZM4.325,8.947A5.264,5.264,0,0,1,9.59,3.683V14.211A5.264,5.264,0,0,1,4.325,8.947Z"
                  transform="translate(-2.571 -1.928)"
                >
                </path>
              </svg>
            </li>
            <li class="hover:text-primary">
              <a
                href="/"
                class="block text-primary uppercase font-bold ml-[35px] hover:border-b-[3px] border-primary"
              >
                EN
              </a>
            </li>
          </ul>
        </nav>
        <details class="md:hidden px-[40px]">
          <summary>
            <svg
              width="40"
              height="24"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                fill="#0E649F"
              >
              </path>
            </svg>
          </summary>
          <nav class="block md:hidden fixed h-[100vh] w-[100vw] left-0 right-0 bg-primary z-50 top-[100px] p-10">
            <ul class="flex flex-col justify-items-start items-start text-[14px]">
              {menu.map((menu, idx) => {
                return (
                  <li class="mb-[30px]">
                    <a
                      href={menu.link}
                      class={`block duration-150 text-[18px] text-center uppercase font-bold border-white ${
                        idx == 0 ? "border-b-[3px]" : ""
                      }`}
                    >
                      {menu.text}
                    </a>
                  </li>
                );
              })}
              <li class="flex items-center gap-1.5 mb-[30px]">
                <a
                  href="/"
                  class="block text-white uppercase text-[18px]"
                >
                  Alto Contraste
                </a>
                <svg
                  className="opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.038"
                  height="14.038"
                  viewBox="0 0 14.038 14.038"
                >
                  <path
                    d="M9.59,1.928a7.019,7.019,0,1,0,7.019,7.019A7.019,7.019,0,0,0,9.59,1.928ZM4.325,8.947A5.264,5.264,0,0,1,9.59,3.683V14.211A5.264,5.264,0,0,1,4.325,8.947Z"
                    transform="translate(-2.571 -1.928)"
                  >
                  </path>
                </svg>
              </li>
              <li class="mb-[30px]">
                <a
                  href="/"
                  class="block duration-150 text-[18px] text-center uppercase font-bold"
                >
                  EN
                </a>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
