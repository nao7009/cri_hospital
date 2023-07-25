<template>
    <div class="news">
        <MyHeader/>
        <main class="main">
            <div class="main__contents">
                <div class="main__contentsTitle">
                    <h2>お知らせ</h2>
                </div>
            </div>
            <div class="main__newsItem">
                <h3>2022.03.14 新型コロナウイルスのワクチン接種の予約受付開始</h3>
                <p>ワクチン3回目接種推奨に伴い、予約受付を開始しました。<br>
                ワクチンの数には限りがございますので、早めの予約をお勧めいたします。</p>
                <p>対象者：接種券をお持ちの方<br>予約方法：電話予約のみ<br>当日の持ち物：予診票、保険証、接種券</p>
            </div>
            <div class="main__newsItem">
                <h3>2022.02.28 発熱外来専用ダイヤル設置</h3>
                <p>発熱、頭痛、のどの痛みなどの呼吸器症状が表れた際にご使用いただける専用ダイヤルを設置しました。</p>
                <h4>発熱外来専用ダイヤル：080-123-4567</h4>
                <p>受付時間：午前10:00～12:00 午後：15:30～17:00<br>詳しく症状をお聞きし、来院時間をご案内いたします。</p>
            </div>
            <div class="main__newsItem">
                <h3>2022.01.04 新年のご挨拶</h3>
                <p>あけましておめでとうございます。<br>今年も地域の皆様に寄り添ったケアを行っていきます。<br>本年もどうぞよろしくお願いいたします。</p>
            </div>
            <div class="main__newsItem">
                <h3>2021.09.21 皮膚科の治療機器が新しくなりました</h3>
                <p>皮膚科のレーザー治療で使用していた機器を新調いたしました。<br>従来の治療よりも短い期間で効果を出すことができるます。<br>ご質問等ございましたら気軽にお問い合わせください。</p>
            </div>
            <div class="main__newsItem">
                <h3>2021.06.06 webサイトが開設しました</h3>
                <p>この度当院のwebサイトを開設いたしました。<br>お知らせの発信なども行っていきますので、ぜひご利用ください。</p>
            </div>
        </main>
        <MyFooter/>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'HospitalNews',
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss" scoped>
.main{
    width: 85%;
    margin: 0 auto;
    background-color: $subColor;
    @include mq('max','lg') {
        width: 100%;
    }
    &__contents{
        margin: 0 auto;
        padding: 0;
        @include mq('max','md') {
        }
    }
    &__contentsTitle{
        border-bottom: 1px solid $lineColor;
        @include mq('max','md') {
            margin: 10px auto 5px;
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
    &__newsItem{
        margin: 0 auto 20px;
        padding: 30px;
        background-color: #fffbe8;
        @include mq('max','md') {
            padding: 15px;
        }
        h3{
            padding-left: 20px;
            font-size: 18px;
            line-height: 1.8em;
            border-bottom: 1px dashed $lineColor;
            color: $titleColor;
            @include mq('max','md') {
                padding-left: 10px;
                font-size: 15px;
            }
            @include mq('max','sm') {
                padding-left: 10px;
                font-size: 12px;
            }
        }
        h4{
            padding-left: 20px;
            font-size: 16px;
            color: #f00;
            @include mq('max','md') {
                font-size: 12px;
            }
            @include mq('max','sm') {
                font-size: 10px;
            }
        } 
        p{
            font-size: 16px;
            line-height: 1.8em;
            @include mq('max','md') {
                font-size: 12px;
            }
            @include mq('max','sm') {
                font-size: 10px;
            }
        } 
    }
}
</style>
