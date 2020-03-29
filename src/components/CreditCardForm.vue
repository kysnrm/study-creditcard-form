<template>
  <div>
    <div>{{ cardNumber }}</div>
    <input type="text" v-model="cardNumber">
    <div>{{ cardBrand }}</div>
    <div>{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      cardNumber: '',
    };
  },
  computed: {
    isNumber(): boolean {
      return /^[0-9]*$/.test(this.cardNumber);
    },
    errorMessage(): string {
      if (!this.isNumber) {
        return '数値を入力してください';
      }
      if (!this.luhnAlgorithm) {
        return '有効なカード番号ではありません';
      }
      return '';
    },
    cardBrand(): string {
      const isAmex = /^37|^34/;
      const isDiners = /^30[0-5]|^3095|^36|^38|^39/;
      const isJCB = /^352[8-9]|^35[3-8][0-9]/;
      const isVisa = /^4/;
      const isMaster = /^5/;
      const isDiscover = /^6011|^64[4-9]|^65/;
      if (isAmex.test(this.cardNumber)) {
        return 'Amex';
      }
      if (isDiners.test(this.cardNumber)) {
        return 'Diners';
      }
      if (isJCB.test(this.cardNumber)) {
        return 'JCB';
      }
      if (isVisa.test(this.cardNumber)) {
        return 'Visa';
      }
      if (isMaster.test(this.cardNumber)) {
        return 'Master';
      }
      if (isDiscover.test(this.cardNumber)) {
        return 'Discover';
      }
      return '';
    },
    isFilled(): boolean {
      switch (this.cardBrand) {
        case 'Amex':
          return this.cardNumber.length === 15;
        case 'Diners':
          return this.cardNumber.length === 14;
        default:
          return this.cardNumber.length === 16;
      }
    },
    luhnAlgorithm(): boolean {
      if (!this.isFilled) {
        return true;
      }
      let sum = 0;
      const reversed = this.cardNumber.split('').reverse();
      const doubled = reversed.map((x, index) => {
        if (index % 2 === 1) {
          return Number(x) * 2;
        }
        return Number(x);
      });
      const added = doubled.map((x) => {
        if (x > 9) {
          return x - 9;
        }
        return x;
      });
      for (let i = 0; i < added.length; i += 1) {
        sum += added[i];
      }
      if (sum % 10 === 0) {
        return true;
      }
      return false;
    },
  },
});
</script>
