<template>
   <div class="max-w-screen xl:h-[1800px] md:h-[2400px] lg:h-[1800px] h-[2300px] bg-gradient-to-r from-black to-[#002983]">
    <div id="header_background">
      <div id="navbar" class="fixed top-0 w-full z-50 bg-gray-900 flex items-baseline sm:justify-between px-6 py-2">
        <p id="navbar_headline_txt">{{ navbar_headline_js }}</p>

        <!-- Desktop Navigation (nur sichtbar ab sm und größer) -->
        <div class="hidden sm:flex space-x-4">
          <button class="navbar_button" @click="scrollToDienstleistung">Dienstleistungen<img class="navbar_pfeil" src="../public/images/pfeil_nach_unten.png"></button>
          <button class="navbar_button" @click="scrollToUeberMich">Über Mich<img class="navbar_pfeil" src="../public/images/pfeil_nach_unten.png"></button>
          <button class="navbar_button" @click="scrollToKontakte">Kontakte<img class="navbar_pfeil" src="../public/images/pfeil_nach_unten.png"></button>
        </div>

        <!-- Mobile Dropdown Button (nur unter sm sichtbar) -->
        <button class="block sm:hidden ml-auto align-baseline text-white text-3xl" @click="isDropdownOpen = !isDropdownOpen">
          ☰
        </button>
      </div>

      <!-- Mobile Dropdown Menu (nur unter sm sichtbar) -->
      <transition name="fade">
        <div v-if="isDropdownOpen" class="sm:hidden fixed top-[50px] w-full bg-gray-900 text-white flex flex-col items-end px-6 py-4 space-y-2 z-40">
          <button @click="handleMobileNav(scrollToDienstleistung)">Dienstleistungen</button>
          <button @click="handleMobileNav(scrollToUeberMich)">Über Mich</button>
          <button @click="handleMobileNav(scrollToKontakte)">Kontakte</button>
        </div>
      </transition>

      <div>
        <div class="w-full flex flex-col items-center justify-center text-center py-[200px]">

<!-- Statischer Text -->
<p class="font-light text-white text-[clamp(30px,6vw,60px)] whitespace-nowrap">
  Ihre Website.
</p>

<!-- Schreibmaschine Wrapper (Höhe fix) -->
<div class="relative">
  <!-- Unsichtbarer Text-Platzhalter -->
  <h2 class="text-white font-bold text-[clamp(28px,6vw,60px)] opacity-0 whitespace-nowrap">
    Unser Code. Ihr Erfolg.
  </h2>

  <!-- Sichtbarer Schreibmaschinen-Text -->
  <h2 id="typewriter"
      class="absolute top-0 left-0 text-white font-bold text-[clamp(28px,6vw,60px)] whitespace-nowrap border-r-4 border-white">
  </h2>
</div>
</div>



        <div class="laptop_höhe w-2/3 mt-[250px] sm:mt-[25px] md:mt-[50px] lg:mt-[100px] xl:mt-[50px]">
          <laptop class="mt-24 mb-24 w-[100vw]" />
        </div>

        <div id="header_infos">
          <p id="header_infos_first_headline">Das zeichnet meine Internetseiten aus:</p>
          <div id="header_infos_container">
            <div class="scroll-fade">
              <p class="header_infos_headline">Übersichtlich & Einfach</p>
              <p class="header_infos_txt">Ich gestalte Internetseiten, die Ihre Besucher intuitiv durch Ihre Inhalte führen. So finden sich Ihre Kunden schnell zurecht und bekommen genau das, was sie suchen – ohne Umwege.</p>
            </div>
            <div class="scroll-fade">
              <p class="header_infos_headline">Schön & Ansprechend</p>
              <p class="header_infos_txt">Mit einem modernen, ästhetischen Look mache ich Ihre Website zum Hingucker. Harmonische Farben, stimmige Typografie und ein durchdachtes Layout sorgen für einen professionellen Auftritt, der im Gedächtnis bleibt.</p>
            </div>
            <div class="scroll-fade">
              <p class="header_infos_headline">Ideale Lösungen</p>
              <p class="header_infos_txt">Ich programmiere nicht nur einfach Internetseiten, sondern entwickle individuelle Online-Erlebnisse, die perfekt zu Ihrer Marke und Ihren Zielen passen. So heben Sie sich klar von der Konkurrenz ab.</p>
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
    padding-top: 5px;
    padding-bottom: 5px;
  }
  #navbar_headline_txt{
    color: white;
    font-weight: bold;
    padding-right: 75px;
    padding-left: 50px;
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
  #typewriter {
  border-right: 6px solid white;
}

  #schreibmaschine{
    color: white;
    font-size: 100px;
    font-weight: bold;
    padding-top: 0;
    padding-right: 500px;
    margin-bottom: 150px;
  }
  #header_content_oben_txt{
    display: flex;
    align-items: baseline;
    color: white;
    font-size: 30px;

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
    #schreibmaschine{
      color: white;
      font-size: 75px;
      font-weight: bold;
      padding: 100px;
      padding-top: 0;
      padding-right: 300px;
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

  @media (min-width: 1024px){
    .scroll-fade {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease-out;
      padding: 25px;
      padding-top: 30px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  .scroll-fade {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-out;
    padding-top: 25px;
  }

  #header_infos_container {
    display: flex;
    flex-direction: column;
  }
}


  @media (min-width: 640px) and (max-width: 767px) {
    .scroll-fade {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease-out;
      padding-top: 25px;
    }

    #header_infos_container{
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 740px){
    .navbar_button{
      font-size: 12px;
      padding: 0;
    }
    #navbar_home_button{
      font-size: 12px;
      padding: 0;
    }
    #navbar_headline_txt{
      font-size: 20px;
    }
  }

  @media (max-width: 639px) {
    #schreibmaschine{
      font-size: 20px;
    }
    .scroll-fade {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease-out;
      padding-top: 25px;
    }

    #header_infos_container{
      display: flex;
      flex-direction: column;
    }
    .laptop_höhe{
      margin-top: 15px;
    }
    #header_infos_first_headline{
    display:flex;
    text-align: center;
    font-size:35px;
    color: white;
    padding-bottom: 50px;
    }
    #schreibmaschine{
      padding: 0;
      font-size: 30px;
    }
    #header_content_oben{
      justify-content: left;
      padding-left: 15px;
    }
  }
</style>

<script setup>
  //Smooth scrolling buttons
  function scrollToDienstleistung() {
    const target = document.getElementById("dienstleistungen_ziel");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, ' ');
    }
  }
  function scrollToUeberMich() {
    const target = document.getElementById("uebermich_ziel");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, ' ');
    }
  }
  function scrollToKontakte() {
    const target = document.getElementById("kontakte_ziel");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, ' ');
    }
  }


  const navbar_headline_js = ref('<Inland Code>')

  const showSinglepack = ref(false)

onMounted(() => {
  const text = "Unser Code. Ihr Erfolg.";
const speed = 150;
const pause = 2000;
let i = 0;
let deleting = false;

function typeWriter() {
  const element = document.getElementById("typewriter");
  if (!element) return;

  if (!deleting) {
    element.textContent = text.substring(0, i + 1);
    i++;
    if (i === text.length) {
      setTimeout(() => {
        deleting = true;
        typeWriter();
      }, pause);
      return;
    }
  } else {
    element.textContent = text.substring(0, i - 1);
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


const isDropdownOpen = ref(false)


function handleMobileNav(scrollFn) {
  scrollFn()
  isDropdownOpen.value = false
}

onMounted(() => {
  // Schreibmaschine
  const text = "Unser Code. Ihr Erfolg."
  const speed = 150
  const pause = 2000
  let i = 0
  let deleting = false

  function typeWriter() {
    const element = document.getElementById("typewriter")
    if (!element) return

    if (!deleting) {
      element.innerHTML = text.substring(0, i + 1)
      i++
      if (i === text.length) {
        setTimeout(() => {
          deleting = true
          typeWriter()
        }, pause)
        return
      }
    } else {
      element.innerHTML = text.substring(0, i - 1)
      i--
      if (i === 0) {
        deleting = false
      }
    }
    setTimeout(typeWriter, speed)
  }
  typeWriter()

  // Scroll Fade Effekt
  const fadeElements = document.querySelectorAll(".scroll-fade")
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      } else {
        entry.target.classList.remove("visible")
      }
    })
  }, { threshold: 0.1 })

  fadeElements.forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

