<template>
  <footer class="footer">
    <div class="footer__copyright">© CRIclinic 2022</div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
}
</script>

<style lang="scss" scoped>
.footer{
    width: 85%;
    margin: 10px auto;
    background-color: $subColor;
    @include mq('max','lg') {
      width: 100%;
    }
    &__copyright{
        color: $copylightColor;
        font-size: 15px;
        text-align: center;
        @include mq('max','md') {
            font-size: 12px;
            margin-top: 15px;
        }
    }
}
</style>
