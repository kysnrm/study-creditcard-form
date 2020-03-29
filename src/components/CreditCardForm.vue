<template>
  <div>
    <div>{{ creditCardNumber }}</div>
    <input type="text" v-model="creditCardNumber">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      creditCardNumber: '0',
    };
  },
});
</script>
