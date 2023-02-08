// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/GradientAnimation.tsx";
import * as $$1 from "./islands/LiveControls.tsx";
import * as $$2 from "./islands/MidContentAnimation.tsx";
import * as $$3 from "./islands/Slider.tsx";
import * as $$$0 from "./sections/Footer.tsx";
import * as $$$2 from "./sections/GradientSection.tsx";
import * as $$$3 from "./sections/Head.tsx";
import * as $$$4 from "./sections/Header.tsx";
import * as $$$5 from "./sections/ImageWithText.tsx";
import * as $$$6 from "./sections/MainCarousel.tsx";
import * as $$$7 from "./sections/Markdown.tsx";
import * as $$$8 from "./sections/QuillText.tsx";
import * as $$$$0 from "./functions/LoadGitHubRaw.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/GradientAnimation.tsx": $$0,
    "./islands/LiveControls.tsx": $$1,
    "./islands/MidContentAnimation.tsx": $$2,
    "./islands/Slider.tsx": $$3,
  },
  sections: {
    "./sections/Footer.tsx": $$$0,
    "./sections/GradientSection.tsx": $$$2,
    "./sections/Head.tsx": $$$3,
    "./sections/Header.tsx": $$$4,
    "./sections/ImageWithText.tsx": $$$5,
    "./sections/MainCarousel.tsx": $$$6,
    "./sections/Markdown.tsx": $$$7,
    "./sections/QuillText.tsx": $$$8,
  },
  functions: { "./functions/LoadGitHubRaw.ts": $$$$0 },
  schemas: {
    "./sections/Footer.tsx": {
      "inputSchema": {
        "title": " Footer",
        "type": "object",
        "properties": {
          "aboutUs": {
            "type": "string",
            "title": "About Us",
          },
          "menu": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "link": {
                  "type": "string",
                  "title": "Link",
                },
                "submenu": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "text": {
                        "type": [
                          "string",
                          "null",
                        ],
                        "title": "Text",
                      },
                      "link": {
                        "type": [
                          "string",
                          "null",
                        ],
                        "title": "Link",
                      },
                    },
                    "required": [],
                  },
                  "title": "Submenu",
                },
              },
              "required": [
                "title",
                "link",
              ],
            },
            "title": "Menu",
          },
          "logo": {
            "format": "image-uri",
            "type": "string",
            "title": "Logo",
          },
        },
        "required": [
          "aboutUs",
          "menu",
          "logo",
        ],
      },
      "outputSchema": null,
    },
    "./sections/GradientSection.tsx": {
      "inputSchema": {
        "title": " Gradient Section",
        "type": "object",
        "properties": {
          "part1": {
            "title": "Part1",
            "type": "object",
            "properties": {
              "text": {
                "type": "string",
                "title": "Text",
              },
              "button": {
                "title": "Button",
                "type": "object",
                "properties": {
                  "text": {
                    "type": [
                      "string",
                      "null",
                    ],
                    "title": "Text",
                  },
                  "link": {
                    "type": [
                      "string",
                      "null",
                    ],
                    "title": "Link",
                  },
                },
                "required": [],
              },
            },
            "required": [
              "text",
            ],
          },
          "part2": {
            "title": "Part2",
            "type": "object",
            "properties": {
              "text": {
                "type": "string",
                "title": "Text",
              },
              "button": {
                "title": "Button",
                "type": "object",
                "properties": {
                  "text": {
                    "type": [
                      "string",
                      "null",
                    ],
                    "title": "Text",
                  },
                  "link": {
                    "type": [
                      "string",
                      "null",
                    ],
                    "title": "Link",
                  },
                },
                "required": [],
              },
            },
            "required": [
              "text",
            ],
          },
        },
        "required": [
          "part1",
          "part2",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": "string",
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": "string",
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": "string",
            "title": "Theme Color",
          },
        },
        "required": [
          "title",
          "description",
          "url",
          "imageUrl",
          "faviconUrl",
          "styleUrls",
          "themeColor",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "logo": {
            "title": "Logo",
            "type": "object",
            "properties": {
              "image": {
                "format": "image-uri",
                "type": "string",
                "title": "Image",
              },
              "altText": {
                "type": "string",
                "title": "Alt Text",
              },
            },
            "required": [
              "image",
              "altText",
            ],
          },
          "menu": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "text": {
                  "type": "string",
                  "title": "Text",
                },
                "link": {
                  "type": "string",
                  "title": "Link",
                },
              },
              "required": [
                "text",
                "link",
              ],
            },
            "title": "Menu",
          },
        },
        "required": [
          "logo",
          "menu",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ImageWithText.tsx": {
      "inputSchema": {
        "title": " Image With Text",
        "type": "object",
        "properties": {
          "subTitle": {
            "type": [
              "string",
              "null",
            ],
            "title": "Sub Title",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
          "text": {
            "type": "string",
            "title": "Text",
          },
          "imagePosition": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "left",
              },
              {
                "type": "string",
                "const": "right",
              },
            ],
            "title": "Image Position",
          },
          "image": {
            "format": "image-uri",
            "type": "string",
            "title": "Image",
          },
          "imageDecoration": {
            "format": "image-uri",
            "type": "string",
            "title": "Image Decoration",
          },
          "button": {
            "title": "Button",
            "type": "object",
            "properties": {
              "text": {
                "type": "string",
                "title": "Text",
              },
              "link": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Link",
              },
            },
            "required": [
              "text",
            ],
          },
        },
        "required": [
          "title",
          "text",
          "image",
          "imageDecoration",
          "button",
        ],
      },
      "outputSchema": null,
    },
    "./sections/MainCarousel.tsx": {
      "inputSchema": {
        "title": " Main Carousel",
        "type": "object",
        "properties": {
          "content": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "button": {
                  "title": "Button",
                  "type": "object",
                  "properties": {
                    "text": {
                      "type": "string",
                      "title": "Text",
                    },
                    "link": {
                      "type": "string",
                      "title": "Link",
                    },
                  },
                  "required": [
                    "text",
                    "link",
                  ],
                },
                "image": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Image",
                },
              },
              "required": [
                "title",
                "button",
                "image",
              ],
            },
            "title": "Content",
          },
        },
        "required": [
          "content",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Markdown.tsx": {
      "inputSchema": {
        "title": " Markdown",
        "type": "object",
        "properties": {
          "text": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
            "format": "live-function",
            "type": "string",
            "title": "Text",
          },
        },
        "required": [
          "text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/QuillText.tsx": {
      "inputSchema": {
        "title": " Quill Text",
        "type": "object",
        "properties": {
          "html": {
            "format": "html",
            "type": "string",
            "title": "Html",
          },
        },
        "required": [
          "html",
        ],
      },
      "outputSchema": null,
    },
    "./functions/LoadGitHubRaw.ts": {
      "inputSchema": {
        "title": " Load Git Hub Raw",
        "type": "object",
        "properties": {
          "repo": {
            "type": "string",
            "title": "Repo",
            "description": "Complete user/repo format",
          },
          "branch": {
            "type": "string",
            "title": "Branch",
            "description": "Branch",
          },
          "path": {
            "type": "string",
            "title": "Path",
            "description":
              "Path to fetch, or leave blank and add :path route param.",
          },
        },
        "required": [
          "repo",
          "branch",
          "path",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
