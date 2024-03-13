<template>
  <div>
    <div v-for="widget in productWidgets" :key="widget.id">
      {{widget}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

interface Widget {
  id: number;
  type: string;
  amount: number;
  action: string;
  active: boolean;
  linked: boolean;
  selectedColor: string;
}

const productWidgets = ref<Widget[]>([]);

onMounted(() => {
  const store = useStore();
  store.dispatch('fetchProductWidgets').then(() => {
    productWidgets.value = store.state.productWidgets;
  });
});


</script>
