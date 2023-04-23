<template>
    <main class="main">
        <MyHeader/>
        <div class="contact">
            <div class="contact__title">
                <h2>お問い合わせ</h2>
            </div>
            <div class="form">
                <p>分からないこと、不安なことなどがありましたらいつでもご相談ください。</p>
                <form action="" method="post">
                    <table>
                        <tr>
                            <td>
                                <label for="name">お名前<br>
                                    <input type="text" id="name" name="name">
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="email">メールアドレス<br>
                                    <input type="mail" id="email" name="email">
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="message">内容<br>
                                    <textarea id="message" name="message"></textarea>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button class="form__button">
                                    <p>送信する</p>
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        <MyFooter/>
    </main>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'ContactForm',
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss" scoped>
.contact{
    width: 85%;
    margin: 0 auto;
    background-color: $subColor;
    @include mq('max','md') {
        width: 100%;
    }
    &__title{
        width: 85%;
        margin: 0 auto;
        border-bottom: 1px solid $lineColor;
        @include mq('max','md') {
            margin: 20px auto 5px;
        } 
        h2{
            font-size: 20px;
            color: $fontColor;
            @include mq('max','md') {
                margin: 5px;
                padding: 5px;
                font-size: 15px;
            }
        }           
    }
}
.form{
    width: 85%;
    margin: 0 auto;
    @include mq('max','md') {
    }
    p{
        font-size: 16px;
        @include mq('max','md') {
            margin: 5px;
            padding: 5px;
            font-size: 12px;
        }
    }
    table{
        margin: 10px;
        padding: 10px;
        @include mq('max','md') {
            margin: 5px;
            padding: 5px;
        }
        td{
            padding-bottom: 30px;
            @include mq('max','md') {
                font-size: 12px;
            }
        }
        input{
            border: 1px solid $titleColor;
            background-color: #fff;
            border-radius: 5px; 
            width:250px;
            height:25px;
            @include mq('max','md') {
                height:20px;
            }
        }
        textarea{
            border: 1px solid $titleColor;
            background-color: #fff;
            border-radius: 10px;
            resize: none;
            width:400px;
            height:200px;
            @include mq('max','md') {
                width:300px;
                height:150px;
            }
        }
    }
    &__button{
        display: block;
        background-color: $linkColor;
        border-style: none;
        border-radius: 10%;
        @include mq('max','md') {
        }
    }
}
</style>
