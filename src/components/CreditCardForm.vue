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
      return '';
    },
    cardBrand(): string {
      const isAmex = /^37|^34/;
      const isDiners = /^30[0-5]|^3095|^36|^38|^39/;
      const isJCB = /^352[8-9]|^35[3-8][0-9]/;
      const isVisa = /^4/;
      const isMaster = /^5/;
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
      return '';
    },
  },
});
</script>
