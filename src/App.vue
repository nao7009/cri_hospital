<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.main {
        animation: main 2s;
        }
    @keyframes main {
        0% {
            opacity: 0;
            transition-duration: .7s;
        }
        100% {
            opacity: 1;
            transition-duration: 0.9s;
        }
    }
</style>
