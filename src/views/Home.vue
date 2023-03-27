// Home.vue
<template>
  <div class="home">
    <MyHeader/>
    <MainPage/>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MainPage from '@/components/MainPage.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'HomePage',
  components: {
    MyHeader,
    MainPage,
    MyFooter,
  }
}
</script>