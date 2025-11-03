<template>
  <div id="uebermich_ziel"></div>
  <div class="bg-gradient-to-r from-black to-[#002983]">
    <div id="background_uebermich">
      <!-- Hauptbereich -->
      <div
        class="hauptklasse flex flex-col xl:flex-row pt-[250px] justify-center items-center xl:items-start gap-[50px]"
      >
        <!-- Bild -->
        <div class="flex justify-center">
          <img
            class="main_images rounded-[50px] w-[250px] xl:w-[300px] mb-[50px] xl:mb-0"
            src="../public/images/ich.jpeg"
            alt="Bild von Moritz"
          />
        </div>

        <!-- Text rechts daneben bei XL -->
        <div
          class="main_links flex flex-col items-center xl:items-start text-center xl:text-left"
        >
          <p
            class="main_headline font-bold text-white text-[20px] xl:text-[35px] mb-[20px]"
          >
            Über Mich
          </p>
          <p
            class="main_text text-white text-[15px] xl:text-[20px] max-w-[700px]"
          >
            Ich bin Moritz – Gründer von Inland Code, einem jungen Unternehmen
            mit klarem Fokus: maßgeschneiderte Internetseiten für Unternehmen,
            die nicht nur gut aussehen, sondern vor allem Ergebnisse liefern.
            Schon in jungen Jahren habe ich meine Leidenschaft fürs
            Programmieren entdeckt. Besonders fasziniert mich dabei saubere und
            performante Weblösungen zu programmieren. Mit Inland Code helfe ich
            Unternehmen dabei, online sichtbar zu werden, mehr Kunden zu
            erreichen und einen professionellen Auftritt zu schaffen, der
            Vertrauen aufbaut. Meine Vision ist es, so vielen Firmen wie möglich
            zu einer starken, klar strukturierten und benutzerfreundlichen
            Internetseite zu verhelfen – individuell, leistungsstark und
            zielgerichtet.
            <br /><br />Ich weiß, dass der erste Eindruck zählt – und dieser
            findet heutzutage meist digital statt.
          </p>
        </div>
      </div>
     
<div class="flex justify-center">
  <p class="text-white text-[50px] font-bold mb-[50px] mt-[250px]">Kontakte</p>
</div>

      <section class="w-full py-20 mt-0 pt-0">
  <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

    <!-- Left Text -->
    <div>
      <h2 class="text-4xl font-bold text-white mb-4">
        Ich bin hier, um Ihre Firma online sichtbar zu machen.
      </h2>
      <p class="text-white mb-8">
        Ihre Website. Unser Code. Ihr Erfolg.
      </p>

      <!-- Öffnungszeiten Box -->
      <div class="bg-purple-700 text-white p-6 rounded-2xl w-full max-w-sm">
        <p>
          Sie haben Fragen oder möchten eine neue oder die erste Internetseite
          für Ihr Unternehmen umsetzen lassen? Dann schreiben Sie mich gerne
          direkt per E-Mail an. Ich freue mich auf Ihre Nachricht
          und antworte Ihnen zeitnah.
        </p>
      </div>
    </div>

    <!-- Kontaktbereich (ohne Formular) -->
    <div class="bg-gray-100 p-8 rounded-2xl shadow-sm">
      <h3 class="text-xl font-semibold mb-6 text-black">Kontaktdaten</h3>

      <div class="space-y-4 text-gray-700">
        <p><span class="font-medium text-black">Name:</span> Moritz Ganser - Inland Code</p>
        <p><span class="font-medium text-black">E-Mail:</span> info@inlandcode.de</p>
      </div>

      <!-- Email Button -->
      <a 
        href="mailto:info@inlandcode.de"
        class="mt-6 inline-block bg-purple-700 text-white font-medium py-3 px-6 rounded-full hover:bg-purple-900 transition">
        E-Mail senden
      </a>
    </div>

  </div>
</section>

    </div>
  </div>

  
</template>

<style scoped>
#background_uebermich {
  background-image: url("../public/images/Muster.png");
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
