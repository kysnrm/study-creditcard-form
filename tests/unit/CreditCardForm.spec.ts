import { mount } from '@vue/test-utils';
import CreditCardForm from '@/components/CreditCardForm.vue';

describe('Input', () => {
  test('is not number', () => {
    const cardNumber = '1234a'
    const wrapper = mount(CreditCardForm);
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe(
      '数値を入力してください'
    )
  }),
  test('is number', () => {
    const cardNumber = '1234'
    const wrapper = mount(CreditCardForm);
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe('')
  })
})