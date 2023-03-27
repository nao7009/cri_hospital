<template>
    <main class="main">
        <MyHeader/>
        <div class="access">
            <div class="access__title">
                <h2>アクセス</h2>
            </div>
            <div class="access__items">
                <div class="access__info">
                    <ul>
                    <li>〒123-4567<br>東京都世田谷区北沢1-2-3</li>
                    <li>※京王井の頭線・小田急線<br>下北沢駅東口より徒歩3分</li>
                    <li>TEL：123-4567</li>
                    </ul>
                </div>
                <div class="access__map"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31677.421501896173!2d139.6884647344543!3d35.67013475122418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2z5p2x5Lqs6YO9!3m2!1d35.6761919!2d139.65031059999998!5e0!3m2!1sja!2sjp!4v1646986384502!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
            </div>
        </div>
        <MyFooter/>
    </main>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'AccessInfo',
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss" scoped>
.access{
    width: 85%;
    margin: 0 auto;
    background-color: $subColor;
    @include mq('max','md') {
        width: 100%;
    }
    &__title{
    width: 85%;
    margin: 0 auto;    
    color: $titleColor;
    }
    &__items{
        width: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        @include mq('max','md') {
            width: 100%;
            flex-direction: column;
        }
    }
    &__info{
        padding: 0;
        @include mq('max','md') {
        }
        ul{
            @include mq('max','md') {
                margin-top: 25px;
                font-size: 12px;
            }
            li{
                @include mq('max','md') {
                    margin: 5px;
                    padding: 5px;
                    line-height: 1.2;
                }              
            }
        }
    }
    &__map{
        @include mq('max','md') {
            margin: 0 auto;
        }
        iframe{
            width: 500px;
            height: 400px;
            @include mq('max','md') {
                width: 300px;
                height: 250px;
            }             
        }
    }
}
</style>
