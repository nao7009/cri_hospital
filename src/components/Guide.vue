<template>
    <main class="main">
        <MyHeader/>
        <div class="guide">
            <div class="guide__contents">
                <div class="guide__contentsTitle">
                    <h2>当院を初めてご利用の方へ</h2>
                </div>
                <div class="guide__consultation">
                    <h2>当院の診察について</h2>
                    <ul>
                        <li>(1) 診察をご希望の際は予約または直接お越しください。<br>（予約は電話のみ承っております。）</li>
                        <li>(2) 診察券、保険証を受付までご提示ください。<br>（初診の方は保険証のみ）</li>
                        <li>(3) 診察後はお近くの薬局に処方箋をご提出ください。</li>
                    </ul>
                </div>
            </div>
            <div class="guide__contents">
                <div class="guide__contentsTitle">
                    <h2>診察時間について</h2>
                </div>
                <div class="guide__examinationtime">
                    <p>※診察時間は下記の時間帯になります。<br>※土曜日は混雑が予想されますので、お時間に余裕をもってお越しください。</p>
                    <table>
                        <tr>
                            <th></th>
                            <th>月</th>
                            <th>火</th>
                            <th>水</th>
                            <th>木</th>
                            <th>金</th>
                            <th>土</th>
                            <th>日</th>
                        </tr>
                        <tr>
                            <th>午前（9:30～12:30）</th>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>休診</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>休診</td>
                        </tr>
                        <tr>
                            <th>午後（15:00～18:00）</th>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>休診</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>休診</td>
                        </tr>
                    </table>
                </div>
            </div> 
        </div>
        <MyFooter/>
    </main>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'FirstGuide',
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss" scoped>
.guide{
    width: 85%;
    margin: 0 auto;
    background-color: $subColor;
    @include mq('max','lg') {
        width: 100%;
    }
    &__contents{
        width: 85%;
        margin: 0 auto;
        padding: 0;
        @include mq('max','md') {
        }
    }
    &__contentsTitle{
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
    &__consultation{
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        background-color: #fffbe8;
        h2{
            font-size: 18px;
            color: $titleColor;
            @include mq('max','md') {
                font-size: 15px;
            }
        }
        p{
            font-size: 16px;
            line-height: 1.2em;
            @include mq('max','md') {
                font-size: 12px;
            }
        }
        ul{
            @include mq('max','md') {
            }
            li{
                @include mq('max','md') {
                    font-size: 12px;
                }
            }
        }
    }
    &__examinationtime{
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        @include mq('max','md') {
            padding: 5px;
        }
        p{
            font-size: 18px;
            line-height: 1.8em;
            @include mq('max','md') {
                font-size: 12px;
            }
        }
        th,td{
            border: 1px solid $titleColor; 
            text-align: center;
            margin-left: 20px;
            padding: 10px;
            font-size: 16px;
            color: $titleColor;
            @include mq('max','md') {
                font-size: 12px;
            }
            @include mq('max','sm') {
                font-size: 10px;
                padding: 5px;
            }
        }
        th{
            background-color: $linkColor;
            @include mq('max','md') {
            }
        }
    }
}
</style>