import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import ProductWidget from '../widget/ProductWidget.vue';
import { nextTick } from 'vue';

// Creating a Vuex store for testing
const store = createStore({
  state: {
    productWidgets: [] 
  },
  actions: {
    // Defining an async action fetch product widgets
    fetchProductWidgets: async ({ commit }) => {
      const mockData = [{
        id: 1,
        type: 'tree',
        amount: 10,
        action: 'plants',
        active: false,
        linked: false,
        selectedColor: 'green'
      }];
      commit('setProductWidgets', mockData);
    }
  },
  mutations: {
    setProductWidgets(state, productWidgets) {
      state.productWidgets = productWidgets;
    }
  }
});

describe('ProductWidget', () => {
  it('renders correctly', async () => {
    const wrapper = mount(ProductWidget, {
      global: {
        plugins: [store] 
      }
    });

    // Dispatching the action to fetch product widgets
    await store.dispatch('fetchProductWidgets');

    await nextTick();
    
    // Expecting the rendered text to contain specific content indicating correct rendering
    expect(wrapper.text()).toContain('This product plants');
  });
});
