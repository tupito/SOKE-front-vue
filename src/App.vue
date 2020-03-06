<template>
  <div id="app">
    <header>
      <TheHeader />
    </header>
    <nav>
      <router-link to="/">Alkuun</router-link>
    </nav>
    <section>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </section>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
export default { components: { TheFooter, TheHeader } };
</script>

<style>
body {
  background-color: #373737;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 80%;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #eef4f7;
  color: #0a244d;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* transition */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
