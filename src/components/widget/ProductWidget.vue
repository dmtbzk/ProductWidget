<template>
  <div class="w-3/4 bg-gray-100 drop-shadow-[0_10px_10px_rgba(0,0,0,0.12)] p-9 rounded-lg divide-y-2 divide-gray">
    <h3 class="font-bold text-3xl pb-2">Per product widgets</h3>
    <div class="pt-4 space-x-8 flex flex-row justify-between">
      <div v-for="widget in styledWidgets" :key="widget.id" class="w-1/3">
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
              Linked to Public Profile  <TheTooltip />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import TheLogo from './elements/TheLogo.vue';
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

onMounted(() => {
  const store = useStore();
  store.dispatch('fetchProductWidgets').then(() => {
    productWidgets.value = store.state.productWidgets;
  });
});

const styledWidgets = computed(() => {
  return productWidgets.value.map(widget => ({
    ...widget,
    styles: getStylesForColor(widget.selectedColor)
  }));
});

</script>
