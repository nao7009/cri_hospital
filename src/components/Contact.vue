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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
            margin: 30px auto 5px;
        } 
        h2{
            font-size: 20px;
            color: $fontColor;
            @include mq('max','md') {
                font-size: 16px;
            }
        }           
    }
}
.form{
    width: 85%;
    margin: 0 auto;
    @include mq('max','md') {
    }
    table{
        @include mq('max','md') {
        }
        td{
            padding-bottom: 30px;
            @include mq('max','md') {
            }
        }
        input{
            border: 1px solid $titleColor;
            background-color: #fff;
            border-radius: 5px; 
            width:250px;
            height:25px;
            @include mq('max','md') {
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
            }
        }
    }
    &__button{
        display: block;
        background-color: $linkColor;
        border-style: none;
        border-radius: 15%;
        @include mq('max','md') {
        }
    }
}
</style>
