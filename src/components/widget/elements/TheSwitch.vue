<template>
  <div
    class="toggle-container"
    :class="{ 'bg-green-500': widgetActivated, 'bg-gray-100': !widgetActivated }"
  >
    <input
      type="checkbox"
      :name="`toggle-${widgetId}`"
      :id="`toggle-${widgetId}`"
      :checked="widgetActivated"
      class="toggle-checkbox"
      @change="toggleSwitch"
    />
    <label
      :for="`toggle-${widgetId}`"
      class="toggle-label"
    ></label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  widgetActivated: boolean;
  widgetId: number;
}>();

const emits = defineEmits(['update:activated']);

const toggleSwitch = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emits('update:activated', input.checked);
};
</script>


