import { createStore } from 'vuex';

export default createStore({
  state: {
    productWidgets: [],
  },
  mutations: {
    setProductWidgets(state, productWidgets) {
      state.productWidgets = productWidgets;
    },
  },
  actions: {
    async fetchProductWidgets({ commit }) {
      try {
        const response = await fetch('https://api.mocki.io/v2/016d11e8/product-widgets');
        const data = await response.json();
        commit('setProductWidgets', data);
      } catch (error) {
        console.error('There was an error fetching the product widgets:', error);
      }
    },
  },
});
