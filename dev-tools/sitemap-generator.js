// It must be run on local machine to generate sitemap.xml file.
// NOT for production use.

// TODO: Write code to auto fetch snippets and animations from 'src/data/'

import fs from 'fs';


const snippets = [
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
    {
        name: "Button With Fading Bars Loader",
        hint: '',
        slug: 'ezy-button-with-loader-1',
        category: 'Button',
        tags: [
            'Fade',
            'Loader',
            'Button'
        ],
        css: `
          .ezy-button-with-loader {
              position: relative;
              text-align: center;
          }
  
          .ezy-button-with-loader button {
              padding: 10px 20px;
              border: none;
              background-color: #ec4899;
              color: #fff;
              font-weight: bold;
              font-size: 18px;
              cursor: pointer;
              border-radius: 10px;
              transition: background-color 0.3s ease;
              overflow: hidden;
              display: inline-block;
              box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
          }
  
          .ezy-button-with-loader button:hover {
              background-color: #ca2a7a;
          }
  
          .ezy-button-with-loader button:active {
              background-color: #ca2a7a;
              transform: translateY(1px);
              box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
          }
  
          .ezy-button-with-loader .ezy-fading-bar-loader {
              display: none;
          }
  
  
          .ezy-fading-bar-loader {
              display: flex;
              justify-content: center;
              align-items: center;
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
      <div class="ezy-button-with-loader">
          <button>Submit</button>
          <div class="ezy-fading-bar-loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
              `
        ,
        js: `
          
          const button = document.querySelector('.ezy-button-with-loader button');
          const loader = document.querySelector('.ezy-button-with-loader .ezy-fading-bar-loader');
          if (button && loader) {
              button.addEventListener('click', () => {
                  button.style.display = 'none';
                  loader.style.display = 'flex';
  
                  // Simulate loading, replace it with your logic
                  setTimeout(() => {
                      button.style.display = 'inline-block';
                      loader.style.display = 'none';
                  }, 3000);
              });
          }
      `,
        hiddenStyle: ''
    },
    {
        name: "Round Avatar",
        hint: '',
        slug: 'ezy-avatar-1',
        category: 'Avatar',
        tags: [
            'Round',
            'Avatar',
        ],
        css: `
          .ezy-avatar {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              border: 2px solid #000;
              box-shadow: 0 0 0 4px #ec4899, 0 0 0 8px #000;
          }
              `
        ,
        html: `
      <div>
          <img class="ezy-avatar"
          src="https://plus.unsplash.com/premium_vector-1714618927767-b7606cc6c88c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar" width="200" height="200"/>
      </div>
              `
        ,
        hiddenStyle: ''
    },
    {
        name: "Square Avatar",
        hint: '',
        slug: 'ezy-avatar-square-1',
        category: 'Avatar',
        tags: [
            'Square',
            'Avatar',
        ],
        css: `
          .ezy-avatar-square {
              width: 120px;
              height: 120px;
              border-radius: 10px;
              border: 2px solid #000;
              box-shadow: 0 0 0 4px #ec4899, 0 0 0 8px #000;
          }
              `
        ,
        html: `
      <div>
          <img class="ezy-avatar-square"
          src="https://plus.unsplash.com/premium_vector-1714618927767-b7606cc6c88c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar" width="200" height="200"/>
      </div>
              `
        ,
        hiddenStyle: ''
    },
    {
        name: "Round Avatar with Shadow",
        hint: '',
        slug: 'ezy-avatar-2',
        category: 'Avatar',
        tags: [
            'Round',
            'Avatar',
        ],
        css: `
          .ezy-avatar-with-shadow {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              border: 2px solid #000;
              box-shadow: 0px 0px 16px 5px #ec4899;
          }
              `
        ,
        html: `
      <div>
          <img class="ezy-avatar-with-shadow"
          src="https://plus.unsplash.com/premium_vector-1714618927767-b7606cc6c88c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar" width="200" height="200"/>
      </div>
              `
        ,
        hiddenStyle: ''
    },
    {
        name: "Square Avatar with Shadow",
        hint: '',
        slug: 'ezy-avatar-3',
        category: 'Avatar',
        tags: [
            'Square',
            'Avatar',
        ],
        css: `
          .ezy-square-avatar-with-shadow {
              width: 120px;
              height: 120px;
              border-radius: 10px;
              border: 2px solid #000;
              box-shadow: 0px 0px 16px 5px #ec4899;
          }
              `
        ,
        html: `
      <div>
          <img class="ezy-square-avatar-with-shadow"
          src="https://plus.unsplash.com/premium_vector-1714618927767-b7606cc6c88c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar" width="200" height="200"/>
      </div>
              `
        ,
        hiddenStyle: ''
    },
];

const animations = [
    {
        name: "Rotate 180",
        hint: 'Hover over the box!',
        slug: 'rotate-180-on-hover',
        category: 'Hover',
        tags: [
            'Rotate', 'Hover'
        ],
        css: `
            .ezy-rotate-180 {
                transition: all 0.5s;
            }
            .ezy-rotate-180:hover {
                transform: rotate(180deg);
            }
            
            
            /* Below code is just to make a box*/
            .box {
              width: 100px;
                height: 100px;
              background-color: #EB455F;
              border-radius: 5px;
              box-shadow: 0px 0px 10px #CB1C8D;
              cursor: pointer;
            }
            `,
        html: `
            <div class="box ezy-rotate-180"></div>
            `,
        hiddenStyle: ''
    },
    {
        name: "TransLeft",
        hint: 'Hover over the box!',
        slug: 'trans-left-on-hover',
        category: 'Hover',
        tags: [
            'Translate', 'Hover', 'Left'
        ],
        css: `
            .ezy-transLeft {
                transition: .5s, color .10s;
                    -webkit-transition: .5s, color .10s;
                    -moz-transition: .5s, color .10s;
            }
            .ezy-transLeft:hover {
                transform: translatex(-20px);
                    -webkit-transform: translatex(-20px);
                    -moz-transform: translatex(-20px);
            }
              
            /* Below code is just to make a box*/
            .box {
              width: 100px;
                height: 100px;
              background-color: #EB455F;
              border-radius: 5px;
              box-shadow: 0px 0px 10px #CB1C8D;
              cursor: pointer;
            }
            `,
        html: `
            <div class="box ezy-transLeft"></div>
            `,
        hiddenStyle: ''
    },
    {
        name: "Bounce",
        hint: 'Hover over the box!',
        slug: 'bounce-on-hover',
        category: 'Hover',
        tags: [
            'Bounce', 'Hover'
        ],
        css: `
          @keyframes ezy-bounce {
              from,
              20%,
              53%,
              to {
                animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                transform: translate3d(0, 0, 0);
              }
            
              40%,
              43% {
                animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
                transform: translate3d(0, -30px, 0) scaleY(1.1);
              }
            
              70% {
                animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
                transform: translate3d(0, -15px, 0) scaleY(1.05);
              }
            
              80% {
                transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                transform: translate3d(0, 0, 0) scaleY(0.95);
              }
            
              90% {
                transform: translate3d(0, -4px, 0) scaleY(1.02);
              }
            }
            
            .ezy-bounce:hover {
              animation-duration: 1000ms;
              animation-name: ezy-bounce;
              transform-origin: center bottom;
            }
            
              
          
          /* Below code is just to make a box*/
          .box {
            width: 100px;
              height: 100px;
            background-color: #EB455F;
            border-radius: 5px;
            box-shadow: 0px 0px 10px #CB1C8D;
            cursor: pointer;
          }
    `,
        html: `
            <div class="box ezy-bounce"></div>
            `,
        hiddenStyle: ''
    },
    {
        name: "Bounce In",
        hint: 'It works on entry!',
        slug: 'entry-bounce-in',
        category: 'Entry',
        showReplayButton: true,
        tags: [
            'Bounce', 'Hover'
        ],
        css: `
          @keyframes ezy-bounceIn {
              from,
              20%,
              40%,
              60%,
              80%,
              to {
                animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              }
            
              0% {
                opacity: 0;
                transform: scale3d(0.3, 0.3, 0.3);
              }
            
              20% {
                transform: scale3d(1.1, 1.1, 1.1);
              }
            
              40% {
                transform: scale3d(0.9, 0.9, 0.9);
              }
            
              60% {
                opacity: 1;
                transform: scale3d(1.03, 1.03, 1.03);
              }
            
              80% {
                transform: scale3d(0.97, 0.97, 0.97);
              }
            
              to {
                opacity: 1;
                transform: scale3d(1, 1, 1);
              }
            }
            
            .ezy-bounceIn {
              animation-duration: 1000ms;
              animation-name: ezy-bounceIn;
            }
            
              
            
            /* Below code is just to make a box*/
            .box {
              width: 100px;
              height: 100px;
              background-color: #EB455F;
              border-radius: 5px;
              box-shadow: 0px 0px 10px #CB1C8D;
              cursor: pointer;
            }
            `,
        html: `
            <div class="box ezy-bounceIn"></div>
            `,
        hiddenStyle: ''
    },
    {
        name: "Bounce In Down",
        hint: 'It works on entry!',
        slug: 'entry-bounce-in-down',
        tags: [
            'Bounce', 'Hover'
        ],
        category: 'Entry',
        showReplayButton: true,
        css: `
            @keyframes ezy-bounceInDown {
                from,
                60%,
                75%,
                90%,
                to {
                  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                }
              
                0% {
                  opacity: 0;
                  transform: translate3d(0, -3000px, 0) scaleY(3);
                }
              
                60% {
                  opacity: 1;
                  transform: translate3d(0, 25px, 0) scaleY(0.9);
                }
              
                75% {
                  transform: translate3d(0, -10px, 0) scaleY(0.95);
                }
              
                90% {
                  transform: translate3d(0, 5px, 0) scaleY(0.985);
                }
              
                to {
                  transform: translate3d(0, 0, 0);
                }
              }
              
              .ezy-bounceInDown {
                animation-duration: 1000ms;
                animation-name: ezy-bounceInDown;
              }
                
            
            /* Below code is just to make a box*/
            .box {
              width: 100px;
                height: 100px;
              background-color: #EB455F;
              border-radius: 5px;
              box-shadow: 0px 0px 10px #CB1C8D;
              cursor: pointer;
            }
    `,
        html: `
            <div class="box ezy-bounceInDown"></div>
            `,
        hiddenStyle: ''
    },
    {
        name: "Bounce In Left",
        hint: 'It works on entry!',
        slug: 'entry-bounce-in-left',
        category: 'Entry',
        showReplayButton: true,
        tags: [
            'Bounce', 'Entry'
        ],
        css: `
            @keyframes ezy-bounceInLeft {
                from,
                60%,
                75%,
                90%,
                to {
                  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                }
              
                0% {
                  opacity: 0;
                  transform: translate3d(-3000px, 0, 0) scaleX(3);
                }
              
                60% {
                  opacity: 1;
                  transform: translate3d(25px, 0, 0) scaleX(1);
                }
              
                75% {
                  transform: translate3d(-10px, 0, 0) scaleX(0.98);
                }
              
                90% {
                  transform: translate3d(5px, 0, 0) scaleX(0.995);
                }
              
                to {
                  transform: translate3d(0, 0, 0);
                }
              }
              
              .ezy-bounceInLeft {
                animation-duration: 1000ms;
                animation-name: ezy-bounceInLeft;
              }
              
              
            
            /* Below code is just to make a box*/
            .box {
              width: 100px;
                height: 100px;
              background-color: #EB455F;
              border-radius: 5px;
              box-shadow: 0px 0px 10px #CB1C8D;
              cursor: pointer;
            }
            `,
        html: `
            <div class="box ezy-bounceInLeft"></div>
            `,
        hiddenStyle: ''
    },
    {
        name: "Bounce In Right",
        hint: 'It works on entry!',
        slug: 'entry-bounce-in-right',
        category: 'Entry',
        showReplayButton: true,
        tags: [
            'Bounce', 'Entry'
        ],
        css: `
          @keyframes ezy-bounceInRight {
              from,
              60%,
              75%,
              90%,
              to {
                animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              }
            
              from {
                opacity: 0;
                transform: translate3d(3000px, 0, 0) scaleX(3);
              }
            
              60% {
                opacity: 1;
                transform: translate3d(-25px, 0, 0) scaleX(1);
              }
            
              75% {
                transform: translate3d(10px, 0, 0) scaleX(0.98);
              }
            
              90% {
                transform: translate3d(-5px, 0, 0) scaleX(0.995);
              }
            
              to {
                transform: translate3d(0, 0, 0);
              }
            }
            
            .ezy-bounceInRight {
              animation-duration: 1000ms;
              animation-name: ezy-bounceInRight;
            }
            
            
          
          /* Below code is just to make a box*/
          .box {
            width: 100px;
              height: 100px;
            background-color: #EB455F;
            border-radius: 5px;
            box-shadow: 0px 0px 10px #CB1C8D;
            cursor: pointer;
          }
  
            `,
        html: `
            <div class="box ezy-bounceInRight"></div>
            `,
        hiddenStyle: ''
    },
    {
        name: "Bounce In Up",
        hint: 'It works on entry!',
        slug: 'entry-bounce-in-up',
        showReplayButton: true,
        tags: [
            'Bounce', 'Entry'
        ],
        category: 'Entry',
        css: `
          @keyframes ezy-bounceInUp {
              from,
              60%,
              75%,
              90%,
              to {
                animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              }
            
              from {
                opacity: 0;
                transform: translate3d(0, 3000px, 0) scaleY(5);
              }
            
              60% {
                opacity: 1;
                transform: translate3d(0, -20px, 0) scaleY(0.9);
              }
            
              75% {
                transform: translate3d(0, 10px, 0) scaleY(0.95);
              }
            
              90% {
                transform: translate3d(0, -5px, 0) scaleY(0.985);
              }
            
              to {
                transform: translate3d(0, 0, 0);
              }
            }
            
            .ezy-bounceInUp {
              animation-duration: 1000ms;
              animation-name: ezy-bounceInUp;
            }
            
            
          
          /* Below code is just to make a box*/
          .box {
            width: 100px;
              height: 100px;
            background-color: #EB455F;
            border-radius: 5px;
            box-shadow: 0px 0px 10px #CB1C8D;
            cursor: pointer;
          }
            `,
        html: `
            <div class="box ezy-bounceInUp"></div>
            `,
        hiddenStyle: ''
    },

    {
        name: "Scale Out",
        hint: 'It works on entry!',
        slug: 'entry-scale-out',
        showReplayButton: true,
        tags: [
            'Scale', 'Entry'
        ],
        category: 'Entry',
        css: `
            @keyframes ezy-scaleOut {
                from {
                  transform: scale3d(1, 1, 1);
                }
              
                50% {
                  transform: scale3d(1.25, 1.25, 1.25);
                }
              
                to {
                  transform: scale3d(1, 1, 1);
                }
              }
              
              .ezy-scaleOut {
                animation-name: ezy-scaleOut;
                animation-duration: 1000ms;
                animation-timing-function: ease-in-out;
              }
              
              
            
            /* Below code is just to make a box*/
            .box {
              width: 100px;
                height: 100px;
              background-color: #EB455F;
              border-radius: 5px;
              box-shadow: 0px 0px 10px #CB1C8D;
              cursor: pointer;
            }
  
            `,
        html: `
            <div class="box ezy-scaleOut"></div>
            `,
        hiddenStyle: ''
    },
    {
        name: "Scale In",
        hint: 'It works on entry!',
        slug: 'entry-scale-in',
        category: 'Entry',
        showReplayButton: true,
        tags: [
            'Scale', 'Entry'
        ],
        css: `
          @keyframes ezy-scaleIn {
              from {
                transform: scale3d(1, 1, 1);
              }
            
              50% {
                transform: scale3d(0.80, 0.80, 0.80);
              }
            
              to {
                transform: scale3d(1, 1, 1);
              }
            }
            
            .ezy-scaleIn {
              animation-name: ezy-scaleIn;
              animation-duration: 1000ms;
              animation-timing-function: ease-in-out;
            }
          
            /* Below code is just to make a box*/
            .box {
              width: 100px;
              height: 100px;
              background-color: #EB455F;
              border-radius: 5px;
              box-shadow: 0px 0px 10px #CB1C8D;
              cursor: pointer;
            }
      `,
        html: `
            <div class="box ezy-scaleIn"></div>
            `,
        hiddenStyle: ''

    },
    {
        name: "Gradient Border Animation",
        hint: 'You can increase/decrease the speed of the animation in CSS.',
        slug: 'gradient-border-animation-1',
        category: 'Infinite',
        showReplayButton: true,
        tags: [
            'Border', 'Infinite', 'Gradient'
        ],
        css: `
          @keyframes ezy-rotate {
            from {
              transform: rotate(0);
            }
  
            to {
              transform: rotate(360deg);
            }
          }
                    
          .box {
            width: 100px;
            height: 100px;
            background-color: #222;
            border: 2px solid #000;
            border-radius: 5px;
            cursor: pointer;
            margin: 6px;
            z-index: 1;
          }
  
          .outer {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border-radius: 5px;
          }
  
          .outer::before {
            content: "";
            display: block;
            background: linear-gradient(
              90deg,
              hsla(351, 81%, 60%, 1) 50%,
              hsla(156, 100%, 50%, 1) 80%
            );
            height: 500px;
            width: 500px;
            position: absolute;
            animation: ezy-rotate 3s linear infinite;
            z-index: 0;
          }
      `,
        html: `
            <div class="outer">
              <div class="box">
              </div>
            </div>
            `,
        hiddenStyle: ''

    },
    {
        name: "Border Animation",
        hint: 'You can increase/decrease the speed of the animation in CSS.',
        slug: 'border-animation-2',
        category: 'Infinite',
        showReplayButton: true,
        tags: [
            'Border', 'Infinite',
        ],
        css: `
          @keyframes ezy-rotate {
            from {
              transform: rotate(0);
            }
  
            to {
              transform: rotate(360deg);
            }
          }
                    
          .box {
            width: 100px;
            height: 100px;
            background-color: #EB455F;
            border-radius: 5px;
            cursor: pointer;
            margin: 2px;
            z-index: 1;
          }
  
          .outer {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border-radius: 5px;
          }
  
          .outer::before {
            content: "";
            display: block;
            background: linear-gradient(
              90deg,
              rgba(0,0,0,0) 46%,
              rgba(255,255,255,1) 50%,
              rgba(0,0,0,0) 54%
            );
            height: 500px;
            width: 500px;
            position: absolute;
            animation: ezy-rotate 8s linear infinite;
            z-index: 0;
          }
      `,
        html: `
            <div class="outer">
              <div class="box">
              </div>
            </div>
            `,
        hiddenStyle: ''

    },
    {
        name: "Line Border Animation",
        hint: 'You can increase/decrease the speed of the animation in CSS.',
        slug: 'line-border-animation-1',
        category: 'Infinite',
        showReplayButton: true,
        tags: [
            'Border', 'Infinite',
        ],
        css: `
          @keyframes ezy-animation {
            from {
              stroke-dashoffset: 0;
            }
            to {
              stroke-dashoffset: 1000;
            }
          }
                    
          .box {
            width: 100px;
            height: 100px;
            background-color: #EB455F;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1;
          }
  
          .outer {
            position: relative;
          }
  
          .outer svg {
            position: absolute;
          }
  
          .outer .line {
            stroke-dasharray: 50;
            stroke-width: 4px;
            fill: transparent;
            stroke: rgba(78, 255, 13, 0.5);
            animation: ezy-animation 5s linear infinite;
          }
      `,
        html: `
            <div class="outer">
              <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <rect
                  rx="8"
                  ry="8"
                  class="line"
                  height="100%"
                  width="100%"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="box">
              </div>
            </div>
            `,
        hiddenStyle: ''

    },
    {
        name: "Line Border Animation 2",
        hint: 'You can increase/decrease the speed of the animation in CSS.',
        slug: 'line-border-animation-2',
        category: 'Infinite',
        showReplayButton: true,
        tags: [
            'Border', 'Infinite',
        ],
        css: `
          @keyframes ezy-animation {
            from {
              stroke-dashoffset: 0;
            }
            to {
              stroke-dashoffset: 1200;
            }
          }
                    
          .box {
            width: 100px;
            height: 100px;
            background-color: #EB455F;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1;
          }
  
          .outer {
            position: relative;
          }
  
          .outer svg {
            position: absolute;
          }
  
          .outer .line {
            stroke-dasharray: 300;
            stroke-width: 4px;
            fill: transparent;
            stroke: rgba(255, 255, 0, 0.8);
            animation: ezy-animation 5s linear infinite;
          }
      `,
        html: `
            <div class="outer">
              <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <rect
                  rx="8"
                  ry="8"
                  class="line"
                  height="100%"
                  width="100%"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="box">
              </div>
            </div>
            `,
        hiddenStyle: ''

    }
];

function formatDateToISO(date) {
    // Get the components of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Get the timezone offset in minutes and format it
    const timezoneOffset = -date.getTimezoneOffset(); // offset in minutes
    const offsetHours = String(Math.floor(timezoneOffset / 60)).padStart(2, '0');
    const offsetMinutes = String(timezoneOffset % 60).padStart(2, '0');
    const offsetSign = timezoneOffset >= 0 ? '+' : '-';

    // Construct the ISO 8601 string
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetSign}${offsetHours}:${offsetMinutes}`;
}

function sitemapGenerator() {
    let currentDate = new Date();
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
	<loc>https://fastui.ezyhow.com/</loc>
	<lastmod>${formatDateToISO(currentDate)}</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://fastui.ezyhow.com/#/list</loc>
	<lastmod>${formatDateToISO(currentDate)}</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://fastui.ezyhow.com/#/list/animations</loc>
	<lastmod>${formatDateToISO(currentDate)}</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://fastui.ezyhow.com/#/list/snippets</loc>
	<lastmod>${formatDateToISO(currentDate)}</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://fastui.ezyhow.com/#/css-box-shadow-generator</loc>
	<lastmod>${formatDateToISO(currentDate)}</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://fastui.ezyhow.com/#/css-gradient-generator</loc>
	<lastmod>${formatDateToISO(currentDate)}</lastmod>
	<priority>0.8</priority>
</url>`;

    snippets.forEach((snippet) => {
        sitemap += `
        <url>
            <loc>https://fastui.ezyhow.com/#/snippets/${snippet.slug}</loc>
            <lastmod>${formatDateToISO(currentDate)}</lastmod>
            <priority>0.8</priority>
        </url>`;
    });

    animations.forEach((animation) => {
        sitemap += `
        <url>
            <loc>https://fastui.ezyhow.com/#/animations/${animation.slug}</loc>
            <lastmod>${formatDateToISO(currentDate)}</lastmod>
            <priority>0.8</priority>
        </url>`;
    });


    sitemap += `</urlset>`;
    return sitemap;
}

const args = process.argv.slice(2);
const parsedArgs = {};

args.forEach(arg => {
    const [key, value] = arg.split('=');
    if (key && value) {
        parsedArgs[key] = value;
    }
});



let filename = './dev-tools/sitemap.xml';
// check if filename is passed
if (parsedArgs['filename'] && parsedArgs['filename'].length > 0) {
    filename = parsedArgs['filename'];
}

console.log(filename);

// check if file exists
if (!fs.existsSync(filename)) {
    fs.writeFileSync(filename, sitemapGenerator());
} else {
    // check if force flag is passed
    if (process.argv.includes('--force')) {
        fs.writeFileSync(filename, sitemapGenerator());
    } else {
        console.log(filename + ' already exists. Use --force flag to overwrite it.');
    }
}