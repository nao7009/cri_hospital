<template>
  <header class="header">
    <div class="header__logo">
        <router-link to="/">
            <img src="../assets/images/medical_logo.png">
        </router-link>
    </div>
    <div class="header__menu">
      <ul>
        <li><router-link to="/guide">初めての方へ</router-link></li>
        <li><router-link to="/access">アクセス</router-link></li>
        <li><router-link to="/contact">お問い合わせ</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
}
</script>

<style lang="scss" scoped>
.header {
    width: 85%;
    height: 140px;
    margin: 10px auto;
    background-color: $subColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include mq('max','md') {
        width: 100%;
        height: 100px;
    }
    &__logo{
        width: 150px;
        height: 150px;
        @include mq('max','md') {
            width: 120px;
            height: 120px;
        }
        a{
            margin: 5px;
            padding: 5px;
            display: block;
            img{
                width: 100%;
                @include mq('max','md') {
                }               
            }
        }
    }
    &__menu{
        @include mq('max','md') {
            margin: 5px;
            padding: 5px;
        }
        ul{
            margin: 5px;
            padding: 5px;
            display: flex;
            justify-content: center;
            @include mq('max','md') {
                margin: 5px;
                padding: 5px;
            }
            li{
                font-size: 15px;
                @include mq('max','md') {
                    margin: 5px;
                    padding: 5px;
                    font-size: 12px;
                }
                a{
                    display: block;
                    width: 100%;
                    text-align: center;
                    @include mq('max','md') {
                        margin: 5px;
                        padding: 5px;
                    }
                    &:hover{
                        background: $linkColor;
                        @include mq('max','md') {
                        }
                    }                 
                }             
            }
        }         
    }
}
</style>
