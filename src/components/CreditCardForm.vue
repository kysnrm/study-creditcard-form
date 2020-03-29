<template>
  <div>
    <div>{{ cardNumber }}</div>
    <input type="text" v-model="cardNumber">
    <div>Input is Number? {{ isNumber }}</div>
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
  },
});
</script>
