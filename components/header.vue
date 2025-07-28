<template>
  <div id="header">
    <div id="header_background">
      <div id="navbar">
        <p id="navbar_headline_txt">{{ navbar_headline_js }}</p>
        <button id="navbar_home_button">Home</button>
        <button class="navbar_button" onclick="">Dienstleistungen</button>
        <button class="navbar_button" onclick="">Über Mich</button>
        <button class="navbar_button" onclick="">Kontaktdaten</button>
      </div>
      <div id="header_content">
        <div id="schreibmaschine">
          <h2 id="typewriter"></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #header{
    background: linear-gradient(to right, #000000, #001e60);
    height: 1250px;
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
  }
  #navbar_headline_txt{
    color: white;
    font-weight: bold;
    padding-right: 250px;
    padding-left: 500px;
  }
  #navbar_home_button{
    color: gray;
    cursor: pointer;
    font-weight: bold;
    padding-right: 25px;
  }
  .navbar_button{
    color: white;
    cursor: pointer;
    padding-right: 25px;
  }
  #header_content{
    display: flex;
    justify-content: center;
  }
  #schreibmaschine{
    color: white;
    font-size: 50px;
    font-weight: bold;
    padding: 100px;
  }
</style>

<script setup>
import { onMounted, ref } from 'vue'

const navbar_headline_js = ref('<Inland Code>')

//Schreibmaschine
onMounted(() => {
  const text = "Ihre Website. Unser Code. Ihr Erfolg.";
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
})
</script>

