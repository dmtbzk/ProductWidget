<template>
  <div class="w-full lg:w-4/5 bg-gray-100 drop-shadow-[0_10px_10px_rgba(0,0,0,0.12)] p-9 rounded-lg divide-y-2 divide-gray">
    <h3 class="font-bold text-3xl pb-2">Per product widgets</h3>
    <div v-if="isLoading" class="flex justify-center items-center pt-4">
      <span>Loading...</span>
    </div>
    <div v-else class="pt-4 space-y-6 lg:space-y-0 lg:space-x-8 flex flex-col lg:flex-row justify-between">
      <div v-for="widget in styledWidgets" :key="widget.id" class="w-full lg:w-1/3">
        <div :class="widget.styles.bgClass" class="rounded-md px-4 py-2.5 flex flex-row items-center space-x-4">
          <TheLogo :iconFillColor="widget.styles.logoFill" />
          <div>
            <p class="text-xs font-normal" :class="widget.styles.textClass">
              This product {{ widget.action }}
            </p>
            <p class="text-lg font-bold" :class="widget.styles.textClass">
              {{ widget.amount }} {{ widget.type }}
            </p>
          </div>
        </div>
        <div class="space-y-4 pt-4">
          <div class="flex items-center flex-row justify-between">
            <span class="text-green text-sm font-normal flex flex-row items-start">
              Linked to Public Profile  
              <TheTooltip />
            </span>
            <TheCheckbox 
              :widgetLinked="widget.linked" 
            />
          </div>
          <div class="flex items-center flex-row justify-between">
            <span class="text-green text-sm font-normal flex flex-row items-start">
              Badge colour
            </span>
            <TheColorSelector 
              :selectedColor="widget.selectedColor" 
              @update:selectedColor="color => updateWidgetColor(widget.id, color)" 
            />
          </div>
          <div class="flex items-center flex-row justify-between">
            <span class="text-green text-sm font-normal flex flex-row items-start">
              Activate badge
            </span>
            <TheSwitch 
              :widgetActivated="widget.active" 
              :widgetId="widget.id" 
              @update:activated="handleActivation(widget.id)" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import TheCheckbox from './elements/TheCheckbox.vue';
import TheColorSelector from './elements/TheColorSelector.vue';
import TheLogo from './elements/TheLogo.vue';
import TheSwitch from './elements/TheSwitch.vue';
import TheTooltip from './elements/TheTooltip.vue';
import { getStylesForColor, type WidgetColor } from '../../types/color';

interface Widget {
  id: number;
  type: string;
  amount: number;
  action: string;
  active: boolean;
  linked: boolean;
  selectedColor: WidgetColor;
}

const productWidgets = ref<Widget[]>([]);
const isLoading = ref(true); 

onMounted(async () => {
  const store = useStore();
  try {
    await store.dispatch('fetchProductWidgets');
    productWidgets.value = store.state.productWidgets;
  } catch (error) {
    console.error('Failed to load product widgets:', error);
  } finally {
    isLoading.value = false;
  }
});

const styledWidgets = computed(() => {
  return productWidgets.value.map(widget => ({
    ...widget,
    styles: getStylesForColor(widget.selectedColor)
  }));
});

const updateWidgetColor = (widgetId: number, color: WidgetColor) => {
  const widget = productWidgets.value.find(w => w.id === widgetId);
  if (widget) {
    widget.selectedColor = color;
  }
};

const handleActivation = (activatedWidgetId: number) => {
  productWidgets.value.forEach(widget => {
    widget.active = widget.id === activatedWidgetId;
  });
};

</script>
