<template>
  <div class="max-w-screen h-[1800px] bg-gradient-to-r from-black to-[#002983]">
    <div id="header_background">
      <div id="navbar">
        <p id="navbar_headline_txt">{{ navbar_headline_js }}</p>
        <button id="navbar_home_button">Home</button>
        <button 
        class="navbar_button" onclick="">Dienstleistungen <img class="navbar_pfeil" src="../public/images/pfeil_nach_unten.png"></img></button>
        <button class="navbar_button" onclick="">Über Mich <img class="navbar_pfeil" src="../public/images/pfeil_nach_unten.png"></img></button>
        <button class="navbar_button" onclick="">Kontaktdaten <img class="navbar_pfeil" src="../public/images/pfeil_nach_unten.png"></img></button>
      </div>
      <div id="header_content">
        <div id="header_content_oben">
          <div id="schreibmaschine">
            <p id="schreibmaschine_txt">Ihre Website.</p>
            <h2 id="typewriter"></h2>
          </div>
        </div>
        <div class="w-2/3 mt-48">
            <laptop class="mt-24 mb-24 w-[100vw]"/>
          </div>
          
          <div id=header_infos>
            <p id=header_infos_first_headline>Das zeichnet meine Internetseiten aus:</p>
            <div id=header_infos_container>
              <div class="scroll-fade">
                <p class=header_infos_headline>Übersichtlich & Einfach</p>
                <p class=header_infos_txt>Ich gestalte Internetseiten, die Ihre Besucher intuitiv durch Ihre Inhalte führen. So finden sich Ihre Kunden schnell zurecht und bekommen genau das, was sie suchen – ohne Umwege.</p>
              </div>
              <div class="scroll-fade">
                <p class=header_infos_headline>Schön & Ansprechend</p>
                <p class=header_infos_txt>Mit einem modernen, ästhetischen Look mache ich Ihre Website zum Hingucker. Harmonische Farben, stimmige Typografie und ein durchdachtes Layout sorgen für einen professionellen Auftritt, der im Gedächtnis bleibt.</p>
              </div>
              <div class="scroll-fade">
                <p class=header_infos_headline>Ideale Lösungen</p>
                <p class=header_infos_txt>Ich programmiere nicht nur einfach Internetseiten, sondern entwickeln individuelle Online-Erlebnisse, die perfekt zu Ihrer Marke und Ihren Zielen passen. So heben Sie sich klar von der Konkurrenz ab.</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
</template>

<style>
  #header{
    background: linear-gradient(to right, #000000, #002983);
    height: 2550px;
  }
  #header_background{
    background-image: url('../public/images/Muster.png');
    background-repeat: repeat;
    z-index: -1;
    height: 100%;
  }
  #navbar{
    display: flex;
    justify-content: left;
    align-items: baseline;
    padding-top: 10px;
  }
  #navbar_headline_txt{
    color: white;
    font-weight: bold;
    padding-right: 75px;
    padding-left: 500px;
    white-space: pre-line;
    line-height: 1.1;
  }
  #navbar_home_button{
    color: gray;
    cursor: pointer;
    font-weight: bold;
    padding-right: 25px;
  }
  .navbar_button{
    display: flex;
    align-items: end;
    color: white;
    cursor: pointer;
    padding-right: 25px;
  }
  .navbar_pfeil{
    width: 10px;
    height: 10px;
    padding-left: 2px;
  }
  #navbar_img{
    position: absolute;
    right: 0;
    padding-right: 500px;
  }
  #header_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 150px;
  }
  #header_content_oben{
    display: flex;
    justify-content: center;
  }
  #typewriter{
    position: absolute;
    border-right: 8px solid white;
  }
  #schreibmaschine{
    color: white;
    font-size: 75px;
    font-weight: bold;
    padding: 100px;
    padding-top: 0;
    padding-right: 500px;
  }
  #header_content_oben_txt{
    display: flex;
    align-items: baseline;
    color: white;
    font-size: 30px;
    width: 650px;
  }
  .horizontale-line {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 2500px;
    height: 2px;
    background-color: #a855f7;
    box-shadow: 0 0 10px #a855f7, 0 0 20px #9333ea;
    margin-top: 150px;
  }
  #header_content_unten{
    display: flex;
    padding-top: 250px;
    padding-left: 500px;
  }
  #header_content_unten_img{
    border-radius: 50px;
    width: 800px;
    height: 500px;
    box-shadow: 0 0 40px white, 0 0 60px white;
    transition: box-shadow 0.3s ease-in-out;
  }
  #header_infos{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 250px;
  }
  #header_infos_first_headline{
    display:flex;
    justify-content:center;
    font-size:50px;
    color: white;
    padding-bottom: 50px;
  }
  #header_infos_container{
    display:flex;
    justify-content:center;
    text-align: center;
  }
  .scroll-fade {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-out;
    padding: 200px;
    padding-top: 50px;
  }
  .scroll-fade.visible {
    opacity: 1;
    transform: translateY(0);
  } 
  .header_infos_headline{
    font-size:30px;
    color: white;
    font-weight: bold;
  }
  .header_infos_txt{
    font-size:25px;
    max-width:500px;
    color:white;
  }
  #header_content_unten_rechts{ 
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #header_content_unten_rechts_inhalt{
      color: black;
      background-color: white;
      border: 3px solid black;
      border-radius: 50px;
      width: 650px;
      height: 400px;
      margin-right: 100px;
      padding: 25px;
      box-shadow: 0 0 20px white, 0 0 30px white;
      transition: box-shadow 0.3s ease-in-out;
    }
    #header_content_unten_rechts_headline{
      font-size: 25px;
      font-weight: bold;
      padding-bottom: 15px;
    }
    .header_content_unten_rechts_txt{
      font-size: 20px;
      padding-bottom: 15px;
    }
  .button {
      --black-700: hsla(0 0% 12% / 1);
      --border_radius: 9999px;
      --transtion: 0.3s ease-in-out;
      --offset: 2px;

      cursor: pointer;
      position: relative;

      display: flex;
      align-items: center;

      transform-origin: center;

      padding: 1rem 2rem;
      background-color: transparent;

      border: none;
      border-radius: var(--border_radius);
      transform: scale(calc(1 + (var(--active, 0) * 0.1)));

      transition: transform var(--transtion);
    }

    .button::before {
      content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    width: 100%;
    height: 100%;
    background-color: var(--black-700);
  
    border-radius: var(--border_radius);
    box-shadow: inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%),
      0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
      0 0 0 calc(var(--active, 0) * 0.375rem) hsla(236, 97%, 50%, 0.75);
  
    transition: all var(--transtion);
    z-index: 0;
    }

    .button::after {
      content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    width: 100%;
    height: 100%;
    background-color: hsla(236, 97%, 50%, 0.75);
    background-image: radial-gradient(
        at 51% 89%,
        rgb(167, 159, 219) 0px,
        transparent 50%
      ),
      radial-gradient(at 100% 100%, rgb(121, 116, 190) 0px, transparent 50%),
      radial-gradient(at 22% 91%, rgb(119, 116, 190) 0px, transparent 50%);
    background-position: top;
  
    opacity: var(--active, 0);
    border-radius: var(--border_radius);
    transition: opacity var(--transtion);
    z-index: 2;
    }

    .button:is(:hover, :focus-visible) {
      --active: 1;
    }
    .button:active {
      transform: scale(1);
    }

    .button .dots_border {
      --size_border: calc(100% + 2px);

      overflow: hidden;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: var(--size_border);
      height: var(--size_border);
      background-color: transparent;

      border-radius: var(--border_radius);
      z-index: -10;
    }

    .button .dots_border::before {
      content: "";
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-origin: left;
      transform: rotate(0deg);

      width: 100%;
      height: 2rem;
      background-color: white;

      mask: linear-gradient(transparent 0%, white 120%);
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }

    .button .sparkle {
      position: relative;
      z-index: 10;

      width: 1.75rem;
    }

    .button .sparkle .path {
      fill: currentColor;
      stroke: currentColor;

      transform-origin: center;

      color: hsl(0, 0%, 100%);
    }

    .button:is(:hover, :focus) .sparkle .path {
      animation: path 1.5s linear 0.5s infinite;
    }

    .button .sparkle .path:nth-child(1) {
      --scale_path_1: 1.2;
    }
    .button .sparkle .path:nth-child(2) {
      --scale_path_2: 1.2;
    }
    .button .sparkle .path:nth-child(3) {
      --scale_path_3: 1.2;
    }

    @keyframes path {
      0%,
      34%,
      71%,
      100% {
        transform: scale(1);
      }
      17% {
        transform: scale(var(--scale_path_1, 1));
      }
      49% {
        transform: scale(var(--scale_path_2, 1));
      }
      83% {
        transform: scale(var(--scale_path_3, 1));
      }
    }

    .button .text_button {
      position: relative;
      z-index: 10;
    font-weight: bold;

      background-image: linear-gradient(
        90deg,
        hsla(0 0% 100% / 1) 0%,
        hsla(0 0% 100% / var(--active, 0)) 120%
      );
      background-clip: text;

      font-size: 20px;
      color: transparent;
    }

  /*
  ---
  1920px
  ---
  */
  @media (max-width: 1920px) {
    #header{
      background: linear-gradient(to right, #000000, #002983);
      height: 2000px;
    }
    #navbar{
      display: flex;
      justify-content: left;
      align-items: baseline;
      padding-top: 10px;
    }
    #navbar_headline_txt{
      color: white;
      font-weight: bold;
      padding-right: 50px;
      padding-left: 100px;
    }
    #navbar_img{
      position: absolute;
      right: 0;
      padding-right: 100px;
    }
    #schreibmaschine{
      color: white;
      font-size: 100px;
      font-weight: bold;
      padding: 100px;
      padding-top: 0;
      padding-right: 300px;
    }
    #header_content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 100px;
    }
    #header_content_oben_txt{
      display: flex;
      align-items: baseline;
      color: white;
      font-size: 20px;
      width: 450px;
    }
    .horizontale-line {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 1500px;
      height: 2px;
      background-color: #a855f7;
      box-shadow: 0 0 10px #a855f7, 0 0 20px #9333ea;
      margin-top: 250px;
    }
    #header_content_unten{
      display: flex;
      justify-content: space-between;
      padding-top: 200px;
      padding-left: 100px;
    }
    #header_content_unten_rechts{ 
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #header_content_unten_rechts_inhalt{
      color: black;
      background-color: white;
      border: 3px solid black;
      border-radius: 50px;
      width: 650px;
      height: 400px;
      margin-right: 100px;
      padding: 25px;
      box-shadow: 0 0 20px white, 0 0 30px white;
      transition: box-shadow 0.3s ease-in-out;
    }
    #header_content_unten_rechts_headline{
      font-size: 25px;
      font-weight: bold;
      padding-bottom: 15px;
    }
    .header_content_unten_rechts_txt{
      font-size: 20px;
      padding-bottom: 15px;
    }
    .scroll-fade {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease-out;
      padding: 50px;
      padding-top: 50px;
    }
    #header_infos{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 150px;
    }
    .header_infos_txt{
      font-size:  20px;
      width:  400px;
      color:white;
    }
    #header_content_unten_img{
      border-radius: 50px;
      width: 650px;
      height: 400px;
      box-shadow: 0 0 20px white, 0 0 30px white;
      transition: box-shadow 0.3s ease-in-out;
    }
    .button {
      --black-700: hsla(0 0% 12% / 1);
      --border_radius: 9999px;
      --transtion: 0.3s ease-in-out;
      --offset: 2px;

      cursor: pointer;
      position: relative;

      display: flex;
      align-items: center;

      transform-origin: center;

      padding: 1rem 2rem;
      background-color: transparent;

      border: none;
      border-radius: var(--border_radius);
      transform: scale(calc(1 + (var(--active, 0) * 0.1)));

      transition: transform var(--transtion);
    }

    .button::before {
      content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    width: 100%;
    height: 100%;
    background-color: var(--black-700);
  
    border-radius: var(--border_radius);
    box-shadow: inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%),
      0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
      0 0 0 calc(var(--active, 0) * 0.375rem) hsla(236, 97%, 50%, 0.75);
  
    transition: all var(--transtion);
    z-index: 0;
    }

    .button::after {
      content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    width: 100%;
    height: 100%;
    background-color: hsla(236, 97%, 50%, 0.75);
    background-image: radial-gradient(
        at 51% 89%,
        rgb(167, 159, 219) 0px,
        transparent 50%
      ),
      radial-gradient(at 100% 100%, rgb(121, 116, 190) 0px, transparent 50%),
      radial-gradient(at 22% 91%, rgb(119, 116, 190) 0px, transparent 50%);
    background-position: top;
  
    opacity: var(--active, 0);
    border-radius: var(--border_radius);
    transition: opacity var(--transtion);
    z-index: 2;
    }

    .button:is(:hover, :focus-visible) {
      --active: 1;
    }
    .button:active {
      transform: scale(1);
    }

    .button .dots_border {
      --size_border: calc(100% + 2px);

      overflow: hidden;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: var(--size_border);
      height: var(--size_border);
      background-color: transparent;

      border-radius: var(--border_radius);
      z-index: -10;
    }

    .button .dots_border::before {
      content: "";
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-origin: left;
      transform: rotate(0deg);

      width: 100%;
      height: 2rem;
      background-color: white;

      mask: linear-gradient(transparent 0%, white 120%);
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }

    .button .sparkle {
      position: relative;
      z-index: 10;

      width: 1.75rem;
    }

    .button .sparkle .path {
      fill: currentColor;
      stroke: currentColor;

      transform-origin: center;

      color: hsl(0, 0%, 100%);
    }

    .button:is(:hover, :focus) .sparkle .path {
      animation: path 1.5s linear 0.5s infinite;
    }

    .button .sparkle .path:nth-child(1) {
      --scale_path_1: 1.2;
    }
    .button .sparkle .path:nth-child(2) {
      --scale_path_2: 1.2;
    }
    .button .sparkle .path:nth-child(3) {
      --scale_path_3: 1.2;
    }

    @keyframes path {
      0%,
      34%,
      71%,
      100% {
        transform: scale(1);
      }
      17% {
        transform: scale(var(--scale_path_1, 1));
      }
      49% {
        transform: scale(var(--scale_path_2, 1));
      }
      83% {
        transform: scale(var(--scale_path_3, 1));
      }
    }

    .button .text_button {
      position: relative;
      z-index: 10;
    font-weight: bold;

      background-image: linear-gradient(
        90deg,
        hsla(0 0% 100% / 1) 0%,
        hsla(0 0% 100% / var(--active, 0)) 120%
      );
      background-clip: text;

      font-size: 20px;
      color: transparent;
    }
  }
    
  /*
  ---
  1670px
  ---
  */
  @media (max-width: 1670px) {
    #header{
      background: linear-gradient(to right, #000000, #002983);
      height: 1650px;
    }
    #navbar_headline_txt{
      color: white;
      font-weight: bold;
      font-size: 15px;
      padding-right: 75px;
      padding-left: 25px;
    }
    #navbar_home_button{
      color: gray;
      cursor: pointer;
      font-weight: bold;
      padding-right: 25px;
      font-size: 15px;
    }
    .navbar_button{
      display: flex;
      align-items: end;
      color: white;
      cursor: pointer;
      padding-right: 25px;
      font-size: 15px;
    }
    .horizontale-line {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 1250px;
      height: 2px;
      background-color: #a855f7;
      box-shadow: 0 0 10px #a855f7, 0 0 20px #9333ea;
      margin-top: 100px;
    }
    #header_content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 100px;
    }
    #header_infos_first_headline{
      display:flex;
      justify-content:center;
      font-size:30px;
      color: white;
      padding-bottom: 50px;
    }
    #header_content_unten{
      display: flex;
      padding-top: 200px;
      padding-left: 100px;
    }
    #header_content_unten_rechts_inhalt{
      color: black;
      background-color: white;
      border: 3px solid black;
      border-radius: 50px;
      width: 550px;
      height: 350px;
      margin-right: 100px;
      padding: 25px;
      box-shadow: 0 0 20px white, 0 0 30px white;
      transition: box-shadow 0.3s ease-in-out;
    }
    #header_content_unten_rechts_headline{
      font-size: 18px;
      font-weight: bold;
      padding-bottom: 10px;
    }
    .header_content_unten_rechts_txt{
      font-size: 17px;
    }
    #header_content_unten_img{
      border-radius: 50px;
      width: 550px;
      height: 350px;
      box-shadow: 0 0 20px white, 0 0 30px white;
      transition: box-shadow 0.3s ease-in-out;
    }
    .scroll-fade {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease-out;
      padding: 50px;
      padding-top: 30px;
    }
    .header_infos_headline{
      font-size:25px;
      color: white;
      font-weight: bold;
      padding-bottom: 15px;
    }
    .header_infos_txt{
      font-size:  20px;
      width:  300px;
      color:white;
    }
    .button {
      --black-700: hsla(0 0% 12% / 1);
      --border_radius: 9999px;
      --transtion: 0.3s ease-in-out;
      --offset: 2px;

      cursor: pointer;
      position: relative;

      display: flex;
      align-items: center;
      transform-origin: center;

      padding: 1rem 2rem;
      background-color: transparent;

      border: none;
      border-radius: var(--border_radius);
      transform: scale(calc(1 + (var(--active, 0) * 0.1)));

      transition: transform var(--transtion);
    }

    .button::before {
      content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    width: 100%;
    height: 100%;
    background-color: var(--black-700);
  
    border-radius: var(--border_radius);
    box-shadow: inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%),
      0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
      0 0 0 calc(var(--active, 0) * 0.375rem) hsla(236, 97%, 50%, 0.75);
  
    transition: all var(--transtion);
    z-index: 0;
    }

    .button::after {
      content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    width: 100%;
    height: 100%;
    background-color: hsla(236, 97%, 50%, 0.75);
    background-image: radial-gradient(
        at 51% 89%,
        rgb(167, 159, 219) 0px,
        transparent 50%
      ),
      radial-gradient(at 100% 100%, rgb(121, 116, 190) 0px, transparent 50%),
      radial-gradient(at 22% 91%, rgb(119, 116, 190) 0px, transparent 50%);
    background-position: top;
  
    opacity: var(--active, 0);
    border-radius: var(--border_radius);
    transition: opacity var(--transtion);
    z-index: 2;
    }

    .button:is(:hover, :focus-visible) {
      --active: 1;
    }
    .button:active {
      transform: scale(1);
    }

    .button .dots_border {
      --size_border: calc(100% + 2px);

      overflow: hidden;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: var(--size_border);
      height: var(--size_border);
      background-color: transparent;

      border-radius: var(--border_radius);
      z-index: -10;
    }

    .button .dots_border::before {
      content: "";
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-origin: left;
      transform: rotate(0deg);

      width: 100%;
      height: 2rem;
      background-color: white;

      mask: linear-gradient(transparent 0%, white 120%);
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }

    .button .sparkle {
      position: relative;
      z-index: 10;

      width: 1.75rem;
    }

    .button .sparkle .path {
      fill: currentColor;
      stroke: currentColor;

      transform-origin: center;

      color: hsl(0, 0%, 100%);
    }

    .button:is(:hover, :focus) .sparkle .path {
      animation: path 1.5s linear 0.5s infinite;
    }

    .button .sparkle .path:nth-child(1) {
      --scale_path_1: 1.2;
    }
    .button .sparkle .path:nth-child(2) {
      --scale_path_2: 1.2;
    }
    .button .sparkle .path:nth-child(3) {
      --scale_path_3: 1.2;
    }

    @keyframes path {
      0%,
      34%,
      71%,
      100% {
        transform: scale(1);
      }
      17% {
        transform: scale(var(--scale_path_1, 1));
      }
      49% {
        transform: scale(var(--scale_path_2, 1));
      }
      83% {
        transform: scale(var(--scale_path_3, 1));
      }
    }

    .button .text_button {
      position: relative;
      z-index: 10;
    font-weight: bold;

      background-image: linear-gradient(
        90deg,
        hsla(0 0% 100% / 1) 0%,
        hsla(0 0% 100% / var(--active, 0)) 120%
      );
      background-clip: text;

      font-size: 15px;
      color: transparent;
    }
  }
</style>

<script setup>


  const navbar_headline_js = ref('<Inland \n Code>')

  const showSinglepack = ref(false)

onMounted(() => {
//Schreibmaschine
  const text = "Unser Code. Ihr Erfolg.";
  const speed = 150;
  const pause = 2000;
  let i = 0;
  let deleting = false;

  function typeWriter() {
    const element = document.getElementById("typewriter");
    if (!element) return;

    if (!deleting) {
      element.innerHTML = text.substring(0, i + 1);
      i++;
      if (i === text.length) {
        setTimeout(() => {
          deleting = true;
          typeWriter();
        }, pause);
        return;
      }
    } else {
      element.innerHTML = text.substring(0, i - 1);
      i--;
      if (i === 0) {
        deleting = false;
      }
    }

    setTimeout(typeWriter, speed);
  }

  typeWriter();

//Scrolleffekt Smooth
  const fadeElements = document.querySelectorAll(".scroll-fade");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => {
    observer.observe(el);
  });
});
</script>
