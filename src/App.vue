<template>
  <div id="app">
    <div>
      <span>
        <p>Counter: {{ counter }}</p>
      </span>
      <span>
        <p>Half Counter: {{ halfCounter }}</p>
      </span>
      <button @click="incCounter(1)">Counter Increment</button>
      <button @click="incCounter(2)">Counter Increment x2</button>
      <button @click="decCounter">Counter Decrement</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      'incCounter',
      'decCounter'
    ])

    // action incCounter (with a parameter)
    // incCounter(amount) {
    //   this.$store.dispatch('incCounter', amount);
    // },
    
    // action decCounter
    // decCounter() {
    //   this.$store.dispatch('decCounter');
    // }
  },
  computed: {
    ...mapGetters([
      'counter',
      'halfCounter'
    ])

    // getter counter
    // counter() {
    //   return this.$store.getters.counter;
    // },

    // getter halfCounter
    // halfCounter() {
    //   return this.$store.getters.halfCounter;
    // }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
