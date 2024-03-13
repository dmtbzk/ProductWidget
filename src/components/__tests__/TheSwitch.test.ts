import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TheSwitch from '../widget/elements/TheSwitch.vue';

describe('TheSwitch', () => {
  it('renders correctly based on props', () => {
    const wrapper = mount(TheSwitch, {
      props: {
        widgetActivated: false, 
        widgetId: 1 
      }
    });
    const checkbox = wrapper.find('input[type="checkbox"]');

    // Check if the checkbox is initially unchecked
    expect((checkbox.element as HTMLInputElement).checked).toBe(false);
  });

  it('updates state on click and emits an event', async () => {
    const wrapper = mount(TheSwitch, {
      props: {
        widgetActivated: false, 
        widgetId: 1 
      }
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    
    // click on the checkbox
    await checkbox.setValue(true); 

    // Check if the update:activated event is emitted with the correct value
    expect(wrapper.emitted()).toHaveProperty('update:activated');
    expect(wrapper.emitted()['update:activated'][0]).toEqual([true]);
  });

  it('reflects the change when prop is updated externally', async () => {
    const wrapper = mount(TheSwitch, {
      props: {
        widgetActivated: false, 
        widgetId: 1 
      }
    });
    
    await wrapper.setProps({ widgetActivated: true });
    const checkbox = wrapper.find('input[type="checkbox"]');

    // Check if the checkbox is checked after prop update
    expect((checkbox.element as HTMLInputElement).checked).toBe(true);

  });
});
