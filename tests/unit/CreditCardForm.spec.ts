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
  })
  test('is number', () => {
    const cardNumber = '1234'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe('')
  })
  test('is Visa', () => {
    const cardNumber = '4242424242424242'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).cardBrand).toBe('Visa')
    expect((wrapper.vm as any).errorMessage).toBe('')
  })
  test('is invalid Visa', () => {
    const cardNumber = '4242424242424224'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe(
      '有効なカード番号ではありません'
    )
  })
  test('is Amex', () => {
    const cardNumber = '378282246310005'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).cardBrand).toBe('Amex')
    expect((wrapper.vm as any).errorMessage).toBe('')
  })
  test('is invalid Amex', () => {
    const cardNumber = '378282246310050'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe(
      '有効なカード番号ではありません'
    )
  })
  test('is Diners', () => {
    const cardNumber = '36227206271667'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).cardBrand).toBe('Diners')
    expect((wrapper.vm as any).errorMessage).toBe('')
  })
  test('is invalid Diners', () => {
    const cardNumber = '36227206271676'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe(
      '有効なカード番号ではありません'
    )
  })
  test('is JCB', () => {
    const cardNumber = '3566002020360505'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).cardBrand).toBe('JCB')
    expect((wrapper.vm as any).errorMessage).toBe('')
  })
  test('is invalid JCB', () => {
    const cardNumber = '3566002020360550'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe(
      '有効なカード番号ではありません'
    )
  })
  test('is Master', () => {
    const cardNumber = '5555555555554444'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).cardBrand).toBe('Master')
    expect((wrapper.vm as any).errorMessage).toBe('')
  })
  test('is invalid Master', () => {
    const cardNumber = '5555555555554445'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe(
      '有効なカード番号ではありません'
    )
  })
  test('is Discover', () => {
    const cardNumber = '6011111111111117'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).cardBrand).toBe('Discover')
    expect((wrapper.vm as any).errorMessage).toBe('')
  })
  test('is invalid Discover', () => {
    const cardNumber = '6011111111111171'
    wrapper.setData({ cardNumber })
    expect((wrapper.vm as any).errorMessage).toBe(
      '有効なカード番号ではありません'
    )
  })
})