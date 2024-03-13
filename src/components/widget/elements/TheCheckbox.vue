<template>
  <div class="mr-2">
    <input class="checkbox" type="checkbox" v-model="isChecked">
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  widgetLinked: Boolean,
});

const isChecked = ref(props.widgetLinked);

watch(() => props.widgetLinked, (newValue) => {
  isChecked.value = newValue;
});
</script>
