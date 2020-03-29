import { mount } from '@vue/test-utils';
import CreditCardForm from '@/components/CreditCardForm.vue';

describe('Input', () => {
  const wrapper = mount(CreditCardForm)
  test('is not number', () => {
    const cardNumber = '1234a'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe(
      '数値を入力してください'
    )
  }),
  test('is number', () => {
    const cardNumber = '1234'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe('')
  }),
  test('is Visa', () => {
    const cardNumber = '4242424242424242'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).cardBrand).toBe('Visa')
  }),
  test('is Amex', () => {
    const cardNumber = '378282246310005'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).cardBrand).toBe('Amex')
  }),
  test('is Diners', () => {
    const cardNumber = '3056930009020004'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).cardBrand).toBe('Diners')
  })
})