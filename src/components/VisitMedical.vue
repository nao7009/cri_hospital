<template>
    <main class="main">
        <MyHeader/>
        <div class="visitMedical">
            <div class="visitMedical__contents">
                <div class="visitMedical__contentsTitle">
                    <h2>訪問診察について</h2>
                </div>
                <div class="visitMedical__examinationtime">
                    <p>ご自宅が遠いため通院が難しい方にむけて、当院は訪問診察を行っております。<br>電話にて訪問診察を受けたい旨を伝え、予約をとっていただくようお願いいたします。</p>
                    <p>訪問診察は下記の「〇」の時間帯で対応しております。</p>
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
                            <td>-</td>
                            <td>〇</td>
                            <td>休診</td>
                            <td>〇</td>
                            <td>-</td>
                            <td>休診</td>
                        </tr>
                        <tr>
                            <th>午後（15:00～18:00）</th>
                            <td>〇</td>
                            <td>-</td>
                            <td>-</td>
                            <td>休診</td>
                            <td>〇</td>
                            <td>-</td>
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
  name: 'VisistMedical',
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss" scoped>
.visitMedical{
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
    &__examinationtime{
        width: 100%;
        margin: 0 auto;
        @include mq('max','md') {
        }
        p{
            font-size: 18px;
            line-height: 1.8em;
            @include mq('max','md') {
                margin: 5px;
                padding: 5px;
                font-size: 12px;
            }
        }
        th,td{
            border: 1px solid $titleColor; 
            text-align: center;
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
