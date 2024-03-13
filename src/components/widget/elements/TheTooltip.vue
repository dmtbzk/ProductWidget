<template>
  <div class="relative group z-50" @mouseleave="closeTooltip">
    <button @mouseover="openTooltip" class="pl-1">
      <img src="@/assets/tooltip.svg" class="w-4 h-4">
    </button>
    <transition
      enter-active-class="transition-opacity ease-linear duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="absolute top-full left-1/2 transform -translate-x-1/2 text-center w-60 p-4 bg-white rounded-lg shadow-md"
        v-if="isTooltipOpen"
        @mouseenter="keepTooltip">
        <p class="text-sm text-[#212121] text-center pb-2">
          This widget links directly to your public profile so 
          that you can easily share your impact with your customers. 
          Turn it off here if you do not want the badge to link to it.
        </p>
        <a 
          href="/public-profile" 
          class="text-green hover:text-green/80 text-center font-bold"
        >
          View Public Profile
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isTooltipOpen = ref(false);

const openTooltip = () => {
  isTooltipOpen.value = true;
};

const closeTooltip = () => {
  isTooltipOpen.value = false;
};

const keepTooltip = () => {
  isTooltipOpen.value = true;
};
</script>

