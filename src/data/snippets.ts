import { CodeSnippetData } from "../types";


export const snippets: CodeSnippetData[] = [
  {
    name: "Spring Button",
    hint: 'Click on button!',
    slug: 'spring-button',
    category: 'Button',
    tags: [
      'Round'
    ],
    css: `
      .ezy-spring-button {
        /* Variables */
       --button_radius: 0.75em;
       --button_color: #e8e8e8;
       --button_outline_color: #000000;
       font-size: 17px;
       font-weight: bold;
       border-bottom: 2px solid  var(--button_color);
       border-radius: var(--button_radius);
       background: var(--button_outline_color);
      }
      
      .ezy-spring-button .button_top {
       display: block;
       box-sizing: border-box;
       border: 2px solid var(--button_outline_color);
       border-radius: var(--button_radius);
       padding: 0.75em 1.5em;
       background: var(--button_color);
       color: var(--button_outline_color);
       transform: translateY(-0.2em);
       transition: transform 0.1s ease;
      }
      
      .ezy-spring-button:hover .button_top {
        /* Pull the button upwards when hovered */
       transform: translateY(-0.33em);
      }
      
      .ezy-spring-button:active .button_top {
        /* Push the button downwards when pressed */
       transform: translateY(0);
      }

              `
    ,
    html: `
      <button class="ezy-spring-button">
      <span class="button_top"> Button
      </span>
    </button>
              `
    ,
    hiddenStyle: ''
  },
  {
    name: "Outline Button",
    hint: 'Click on button!',
    slug: 'outline-button-1',
    category: 'Button',
    tags: [
      'Outline',
      'Glow'
    ],
    css: `
      .ezy-outline-button-1 {
        background-color: transparent;
        border: 2px solid #ec4899;
        box-shadow: 0 0 5px #ec4899;
        border-radius: 10px;
        font-size: 17px;
        font-weight: bold;
        padding: 10px 25px;
        cursor: pointer;
        color: #fff;
        outline: none;
        transition: transform 0.1s ease;
      }
      
      .ezy-outline-button-1:hover {
        box-shadow: 1px 1px 8px #ec4899;
        transform: translateY(-2px);
      }
      
      .ezy-outline-button-1:active {  
        box-shadow: 0 0 5px #ec4899;
        transform: translateY(0);
      }
      

              `
    ,
    html: `
      <button class="ezy-outline-button-1">
       Button
    </button>
              `
    ,
    hiddenStyle: ''
  },
  {
    name: "Outline Round Button",
    hint: 'Click on button!',
    slug: 'outline-round-button-1',
    category: 'Button',
    tags: [
      'Outline',
      'Glow',
      'Round'
    ],
    css: `
      .ezy-outline-round-button-1 {
        background-color: transparent;
        border: 2px solid #ec4899;
        box-shadow: 0 0 5px #ec4899;
        border-radius: 24px;
        font-size: 17px;
        font-weight: bold;
        padding: 10px 25px;
        cursor: pointer;
        color: #fff;
        outline: none;
        transition: transform 0.1s ease;
      }
      
      .ezy-outline-round-button-1:hover {
        box-shadow: 1px 1px 8px #ec4899;
        transform: translateY(-2px);
      }
      
      .ezy-outline-round-button-1:active {  
        box-shadow: 0 0 5px #ec4899;
        transform: translateY(0);
      }
      

              `
    ,
    html: `
      <button class="ezy-outline-round-button-1">
       Button
    </button>
              `
    ,
    hiddenStyle: ''
  },
  {
    name: "Outline Checkbox",
    hint: 'Click on checkbox!',
    slug: 'outline-checkbox-1',
    category: 'Checkbox',
    tags: [
      'Outline',
      'Round'
    ],
    css: `
      .ezy-outline-checkbox-1 {
        appearance: none;
        width: 30px;
        height: 30px;
        border: 2px solid #000;
        outline: 2px solid #fff;
        transition: all 0.2s ease;
        background-color: transparent;
      }
      
      .ezy-outline-checkbox-1:checked {
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 457.57'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill-rule:evenodd%3B%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M0 220.57c100.43-1.33 121-5.2 191.79 81.5 54.29-90 114.62-167.9 179.92-235.86C436-.72 436.5-.89 512 .24 383.54 143 278.71 295.74 194.87 457.57 150 361.45 87.33 280.53 0 220.57Z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
      }
              `
    ,
    html: `
      <input type="checkbox" class="ezy-outline-checkbox-1"/>
              `
    ,
    hiddenStyle: ''
  },
  {
    name: "Checkbox",
    hint: 'Click on Checkbox!',
    slug: 'checkbox-123',
    category: 'Checkbox',
    tags: [
      'Round'
    ],
    css: `
      .clear {
        clear: both;
      }
      
      .ezy-checkbox-123 {
        display: block;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border: 3px solid rgba(255, 255, 255, 0);
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        box-shadow: 0px 0px 0px 2px #fff;
      }
      
      .ezy-checkbox-123 div {
        width: 60px;
        height: 60px;
        background-color: #fff;
        top: -52px;
        left: -52px;
        position: absolute;
        transform: rotateZ(45deg);
        z-index: 100;
      }
      
      .ezy-checkbox-123 input[type=checkbox]:checked + div {
        left: -10px;
        top: -10px;
      }
      
      .ezy-checkbox-123 input[type=checkbox] {
        position: absolute;
        left: 50px;
        visibility: hidden;
      }
      
      .ezy-checkbox-123 .transition {
        transition: 300ms ease;
      }

              `
    ,
    html: `
      <div class="content">
  <label class="ezy-checkbox-123">
    <input id="ch1" type="checkbox">
    <div class="transition"></div>
  </label>
</div>
              `
    ,
    hiddenStyle: ''
  },
  {
    name: "Pulse Loader",
    hint: '',
    slug: 'pulse-loader-1',
    category: 'Loader',
    tags: [
      'Pulse',
      'Loader'
    ],
    css: `
        .ezy-pulse-loader {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100vh;
        }
        .ezy-pulse-loader div {
            width: 20px;
            height: 20px;
            background-color: #ec4899;
            border-radius: 50%;
            animation: ezy-pulse 1.5s infinite ease-in-out;
        }
        .ezy-pulse-loader div:nth-child(2) {
            animation-delay: 0.2s;
        }
        .ezy-pulse-loader div:nth-child(3) {
            animation-delay: 0.4s;
        }
        @keyframes ezy-pulse {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.5);
                opacity: 0.5;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
            `
    ,
    html: `
    <div class="ezy-pulse-loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
            `
    ,
    hiddenStyle: ''
  },
  {
    name: "Rotating Square Loader",
    hint: '',
    slug: 'rotating-square-loader-1',
    category: 'Loader',
    tags: [
      'Rotating',
      'Loader'
    ],
    css: `
        .ezy-rotating-square-loader {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .ezy-rotating-square-loader div {
            width: 40px;
            height: 40px;
            background-color: #ec4899;
            animation: ezy-rotate 1.2s linear infinite;
        }
        .ezy-rotating-square-loader div:nth-child(2) {
            animation-delay: -0.6s;
        }
        @keyframes ezy-rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
            `
    ,
    html: `
    <div class="ezy-rotating-square-loader">
        <div></div>
        <div></div>
    </div>
            `
    ,
    hiddenStyle: ''
  },
  {
    name: "Bouncing Balls Loader",
    hint: '',
    slug: 'bouncing-balls-loader-1',
    category: 'Loader',
    tags: [
      'Bouncing',
      'Loader'
    ],
    css: `
        .ezy-bouncing-ball-loader {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100vh;
        }
        .ezy-bouncing-ball-loader div {
            width: 20px;
            height: 20px;
            background-color: #ec4899;
            border-radius: 50%;
            animation: ezy-bounce 1s infinite ease-in-out;
        }
        .ezy-bouncing-ball-loader div:nth-child(2) {
            animation-delay: 0.2s;
        }
        .ezy-bouncing-ball-loader div:nth-child(3) {
            animation-delay: 0.4s;
        }
        @keyframes ezy-bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }
            `
    ,
    html: `
    <div class="ezy-bouncing-ball-loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
            `
    ,
    hiddenStyle: ''
  },
  {
    name: "Spinning Dots Loader",
    hint: '',
    slug: 'spinning-dots-loader-1',
    category: 'Loader',
    tags: [
      'Spinning',
      'Loader'
    ],
    css: `
        .ezy-spinning-dots-loader {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .ezy-spinning-dots-loader div {
            width: 20px;
            height: 20px;
            background-color: #ec4899;
            border-radius: 50%;
            position: absolute;
            animation: ezy-spin 1.2s linear infinite;
        }
        .ezy-spinning-dots-loader div:nth-child(1) {
            animation-delay: 0s;
            transform: rotate(0deg);
        }
        .ezy-spinning-dots-loader div:nth-child(2) {
            animation-delay: 0.4s;
            transform: rotate(120deg);
        }
        .ezy-spinning-dots-loader div:nth-child(3) {
            animation-delay: 0.8s;
            transform: rotate(240deg);
        }
        @keyframes ezy-spin {
            0% {
                transform: rotate(0deg) translateX(30px) rotate(0deg);
            }
            100% {
                transform: rotate(360deg) translateX(30px) rotate(-360deg);
            }
        }
            `
    ,
    html: `
    <div class="ezy-spinning-dots-loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
            `
    ,
    hiddenStyle: ''
  },
  {
    name: "Fading Bars Loader",
    hint: '',
    slug: 'fading-bars-loader-1',
    category: 'Loader',
    tags: [
      'Fade',
      'Loader'
    ],
    css: `
        .ezy-fading-bar-loader {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .ezy-fading-bar-loader div {
            width: 10px;
            height: 50px;
            background-color: #ec4899;
            margin: 0 5px;
            animation: ezy-fade 1.5s infinite ease-in-out;
        }
        .ezy-fading-bar-loader div:nth-child(1) {
            animation-delay: 0s;
        }
        .ezy-fading-bar-loader div:nth-child(2) {
            animation-delay: 0.3s;
        }
        .ezy-fading-bar-loader div:nth-child(3) {
            animation-delay: 0.6s;
        }
        .ezy-fading-bar-loader div:nth-child(4) {
            animation-delay: 0.9s;
        }
        @keyframes ezy-fade {
            0% {
                opacity: 0.2;
                transform: translateY(0);
            }
            50% {
                opacity: 1;
                transform: translateY(-20px);
            }
            100% {
                opacity: 0.2;
                transform: translateY(0);
            }
        }
            `
    ,
    html: `
    <div class="ezy-fading-bar-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
            `
    ,
    hiddenStyle: ''
  },
];