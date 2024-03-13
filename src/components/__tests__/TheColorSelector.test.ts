import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ColorSelector from '../widget/elements/TheColorSelector.vue';

describe('ColorSelector', () => {
  it('renders a radio button for each color', () => {
    const wrapper = mount(ColorSelector, {
      props: {
        selectedColor: 'green', 
      }
    });
    const radioButtons = wrapper.findAll('input[type="radio"]');
    expect(radioButtons.length).toBe(5); 
  });

  it('emits update:selectedColor event on radio button change', async () => {
    const wrapper = mount(ColorSelector, {
      props: {
        selectedColor: 'green', 
      }
    });
    await wrapper.findAll('input[type="radio"]')[1].setValue(); 
    // Expecting the update:selectedColor event to be emitted
    expect(wrapper.emitted()['update:selectedColor']).toBeTruthy(); 

  });

});
