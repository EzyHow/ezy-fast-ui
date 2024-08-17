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
];