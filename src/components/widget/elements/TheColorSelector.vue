<template>
  <div class="flex">
    <label v-for="(colorValue, colorName) in colors" :key="colorName" class="colorSelector space-x-2">
      <input
        type="radio"
        :value="colorValue"
        v-model="checkedColor"
        :id="colorName"
        name="color-selector"
        class="hidden"
        @change="updateColor(colorName)"
      />
      <div
        :style="{ backgroundColor: colorValue }"
        class="h-[18px] w-[18px] cursor-pointer"
        :class="{'ring-none border-gray border-2': checkedColor === colorName}"
      ></div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';


const props = defineProps({
  selectedColor: String,
});

const colors = {
  green: '#3B755F',
  blue: '#2E3A8C',
  beige: '#F2EBDB',
  white: '#FFFFFF',
  black: '#000000',
};

const checkedColor = ref(props.selectedColor);
const emits = defineEmits(['update:selectedColor']);

watch(() => props.selectedColor, (newValue) => {
  checkedColor.value = newValue;
});

const updateColor = (colorName: any) => {
  checkedColor.value = colorName;
  emits('update:selectedColor', colorName);
};
</script>


