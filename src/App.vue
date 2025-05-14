<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const cachedList = ['AboutView', 'HomeView']
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>

  <main>
    <RouterView v-slot="{ Component }">
      <KeepAlive :include="cachedList">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </main>
</template>

<style scoped lang="scss">
header {
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  border-bottom: 1px solid #eee;

  a {
    padding: 8px 16px;
    border-radius: 8px;
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;

    &.router-link-exact-active {
      background-color: #42b983;
      color: white;
    }
  }
}

main {
  padding: 16px;
}
</style>
