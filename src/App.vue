<template>
  <div id="app">
    <input type="text" @keyup="search" v-model="searchParams.keyword" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchParams: {
        keyword: "",
        timer: null
      }
    };
  },
  methods: {
    search() {
      this.debounce(this.output, 1000)();
    },
    debounce(fn, delay) {
      clearTimeout(this.timer);
      return () => {
        this.timer = setTimeout(() => {
          fn.apply(this);
        }, delay);
      };
    },
    output() {
      console.log("debounce success");
    }
  }
};
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
