<template>
    <div id="uebermich_ziel"></div>
    <div class="bg-gradient-to-r from-black to-[#002983]">
      <div id="background_uebermich">
        <!-- Hauptbereich -->
        <div class="hauptklasse flex flex-col xl:flex-row pt-[250px] justify-center items-center xl:items-start gap-[50px]">
  
          <!-- Bild -->
          <div class="flex justify-center">
            <img class="main_images rounded-[50px] w-[250px] xl:w-[300px] mb-[50px] xl:mb-0" src="../public/images/ich.jpeg" alt="Bild von Moritz">
          </div>
  
          <!-- Text rechts daneben bei XL -->
          <div class="main_links flex flex-col items-center xl:items-start text-center xl:text-left">
            <p class="main_headline font-bold text-white text-[20px] xl:text-[35px] mb-[20px]">Über Mich</p>
            <p class="main_text text-white text-[15px] xl:text-[20px] max-w-[700px]">
              Ich bin Moritz – Gründer von Inland Code, einem jungen Unternehmen mit klarem Fokus: maßgeschneiderte Internetseiten für Unternehmen, die nicht nur gut aussehen, sondern vor allem Ergebnisse liefern.
              Schon in jungen Jahren habe ich meine Leidenschaft fürs Programmieren entdeckt.
              Besonders fasziniert mich dabei saubere und performante Weblösungen zu programmieren. Mit Inland Code helfe ich Unternehmen dabei, online sichtbar zu werden,
              mehr Kunden zu erreichen und einen professionellen Auftritt zu schaffen, der Vertrauen aufbaut.
              Meine Vision ist es, so vielen Firmen wie möglich zu einer starken, klar strukturierten und benutzerfreundlichen Internetseite zu verhelfen – individuell, leistungsstark und zielgerichtet.
              <br><br>Ich weiß, dass der erste Eindruck zählt – und dieser findet heutzutage meist digital statt.
            </p>
          </div>
        </div>
  
        <!-- Kontaktbereich -->
        <div class="unten_main flex flex-col items-center text-white pb-[200px] pt-[250px] xl:pt-[150px] md:pt-[100px] sm:pt-[50px] max-w-[1144px] mx-auto">
          <div id="kontakte_ziel"></div>
          <p class="main_headline font-bold text-[20px] md:text-[25px] lg:text-[30px] xl:text-[45px] mt-[50px] pt-[150px] pb-[15px]">Kontaktdaten</p>
          <div class="flex items-center">
            <img class="w-[64px] h-[64px] mr-[25px]" src="../public/images/postfach_weiß.png" alt="Postfach">
            <a class="text-[25px] font-bold text-purple-700" href="mailto:info@inlandcode.de">info@inlandcode.de</a>
          </div>
          <p class="main_text_2 text-[15px] md:text-[30px] md:w-[950px] sm:w-[350px] text-center max-w-[650px] pt-[100px]">
            Sie haben Fragen oder möchten eine neue oder die erste Internetseite für Ihr Unternehmen umsetzen lassen?
            Dann schreiben Sie mich gerne direkt per E-Mail an:
            <a class="text-purple-700 font-bold" href="mailto:info@inlandcode.de">info@inlandcode.de</a>
            oder Sie klicken oben auf den Link. Ich freue mich auf Ihre Nachricht und antworte Ihnen zeitnah.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  #background_uebermich {
    background-image: url('../public/images/Muster.png');
    background-repeat: repeat;
    z-index: -1;
    height: 100%;
  }
  
  @media (max-width: 1279px) {
    .hauptklasse {
      flex-direction: column;
    }
  
    .main_links {
      padding-left: 0;
      align-items: center;
      text-align: center;
      margin-top: 40px;
    }
  
    .main_text {
      text-align: center;
      max-width: 90%;
    }
  
    .main_headline {
      font-size: 20px;
    }
  
    .main_text_2 {
      font-size: 15px;
      width: 90%;
      padding-top: 50px;
    }
  
    .unten_main {
      padding-top: 50px;
    }
  }
  </style>
  