<template>
  <div class="glow-wrapper">
    <!-- Laptop Rahmen -->
    <div class="relative mx-auto border-gray-800 bg-gray-500 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] glow-box">
      <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
        <!-- Du kannst hier dein Bild oder Inhalt einfügen -->
      </div>
    </div>

    <!-- Unterer Teil -->
    <div class="relative mx-auto bg-gray-700  rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
      <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
    </div>
  </div>
</template>

<style scoped>
.glow-box {
  background-color: white; /* Mittelgrau */
  box-shadow: 0 0 150px rgba(255, 255, 255, 0.95), 0 0 120px rgba(255, 255, 255, 0.85);
  transition: box-shadow 0.3s ease-in-out;
}
</style>
