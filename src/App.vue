<template>
  <div id="app">
    <credit-card-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CreditCardForm from './components/CreditCardForm.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CreditCardForm,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
