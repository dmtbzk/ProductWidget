import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TheCheckbox from '../widget/elements/TheCheckbox.vue';

describe('TheCheckbox', () => {
  it('toggles checkbox state on click', async () => {
    const wrapper = mount(TheCheckbox, {
      props: {
        widgetLinked: false,
      },
    });
    
    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.trigger('click'); 
    // Expecting the checkbox to be checked after the click
    expect((checkbox.element as HTMLInputElement).checked).toBe(true);

    await checkbox.trigger('click'); 
    // Expecting the checkbox to be unchecked after the second click
    expect((checkbox.element as HTMLInputElement).checked).toBe(false); 
  });
});
