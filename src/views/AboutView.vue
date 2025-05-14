<script setup lang="ts">
import { onActivated, onDeactivated } from 'vue'
import { KFrame } from '@/components/KFrame'

defineOptions({
  name: 'AboutView',
})

onActivated(() => {
  console.log('about activated')
})
onDeactivated(() => {
  console.log('about deactivated')
})
</script>

<template>
  <div class="about">
    <div>KFrame表单</div>
    <KFrame src="/form.html" style="width: 100%; height: 200px"></KFrame>

    <div style="margin-top: 16px">KFrame表单 not keepAlive</div>
    <KFrame src="/form.html" :keepAlive="false" style="width: 100%; height: 200px"></KFrame>
  </div>
</template>
