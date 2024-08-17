import { CodeSnippetData } from "../types";

export const animations: CodeSnippetData[] = [
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

    }
];