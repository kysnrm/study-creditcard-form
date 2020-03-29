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
      const isVisa = /^4/;
      if (isVisa.test(this.cardNumber)) {
        return 'Visa';
      }
      return '';
    },
  },
});
</script>
