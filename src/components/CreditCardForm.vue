<template>
  <div>
    <div>{{ cardNumber }}</div>
    <input type="text" v-model="cardNumber">
    <div>Input is Number? {{ isNumber }}</div>
    <div>{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      cardNumber: '0',
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
  },
});
</script>
