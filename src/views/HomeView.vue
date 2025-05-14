<script setup lang="ts">
import { onActivated, onDeactivated } from 'vue'

defineOptions({
  name: 'HomeView',
})

onActivated(() => {
  console.log('home activated')
})
onDeactivated(() => {
  console.log('home deactivated')
})
</script>

<template>
  <div class="home">
    <div>默认表单</div>
    <form action="#">
      <input type="text" />
    </form>
    <div style="margin-top: 16px">iframe表单</div>
    <iframe src="/form.html" frameborder="0" style="width: 100%; height: 500px"></iframe>
  </div>
</template>

<style></style>
