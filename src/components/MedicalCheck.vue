<template>
    <main class="main">
        <MyHeader/>
        <div class="medicalCheck">
            <div class="medicalCheck__contents">
                <div class="medicalCheck__contentsTitle">
                    <h2>各種健診のご案内</h2>
                </div>
                <div class="medicalCheck__contentsText">
                    <p>※診察時間以内でしたらいつでも受診可能です。</p>
                    <p>※事前の予約が必要となりますので、お電話または窓口にてお申込みください。</p>
                    <p>※予約時間の15分前には必ずお越しください。</p>
                </div>
            </div>
            <div class="medicalCheck__contents">
                <div class="medicalCheck__contentsTitle">
                    <h2>一般健診</h2>
                </div>
                <div class="medicalCheck__about">
                    <h4>Aコース健診費用：¥12,000(税込)</h4>
                    <h4>Bコース健診費用：¥8,000(税込)</h4>
                    <table>
                        <p>健診内容は以下の通りです。</p>
                        <tr>
                            <th></th>
                            <th>問診</th>
                            <th>診察</th>
                            <th>身体計測</th>
                            <th>視力<br>聴力</th>
                            <th>血圧測定</th>
                            <th>尿検査</th>
                            <th>心電図</th>
                            <th>胸部Ｘ線</th>
                        </tr>
                        <tr>
                            <th>Aコース</th>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                        </tr>
                        <tr>
                            <th>Bコース</th>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </table>
                </div>
                <div class="medicalCheck__contentsTitle">
                    <h2>特定健診・長寿健診</h2>
                </div>
                <div class="medicalCheck__about">
                    <h4>特定健診：世田谷区国民保険に加入している40～74歳の方が対象となります。<br>（自己負担費用：500円）</h4>
                    <h4>長寿健診：後期高齢者医療制度に加入している方</h4>
                    <p>詳しくは世田谷区のホームページにてご確認ください。</p>
                    <p><a href="https://www.city.setagaya.lg.jp/mokuji/kurashi/003/002/006/d00127789.html">特定健診のご案内</a></p>
                    <p><a href="https://www.city.setagaya.lg.jp/mokuji/kurashi/003/003/d00022934.html">長寿健診のご案内</a></p>
                    <table>
                        <p>健診内容は以下の通りです。</p>
                        <tr>
                            <th></th>
                            <th>問診</th>
                            <th>診察</th>
                            <th>身体計測</th>
                            <th>血圧測定</th>
                            <th>尿検査</th>
                            <th>心電図</th>
                            <th>眼底検査</th>
                            <th>胸部Ｘ線</th>
                        </tr>
                        <tr>
                            <th>特定健診</th>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                        </tr>
                        <tr>
                            <th>長寿健診</th>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                            <td>〇</td>
                        </tr>
                    </table>
                    <p>当日の持ち物：受診券、受診票、保険証、自己負担費用</p>
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
    name: 'MedicalCheck',
    components: {
    MyHeader,
    MyFooter,
  }
}
</script>
    
<style lang="scss" scoped>
.medicalCheck{
    width: 85%;
    margin: 0 auto;
    background-color: $subColor;
    @include mq('max','md') {
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
    &__contentsText{
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        p{
            font-size: 16px;
            line-height: 1.2em;
            @include mq('max','md') {
                font-size: 12px;
            }
        }
    }
    &__about{
        width: 100%;
        margin: 0 auto;
        padding: 30px;
        @include mq('max','md') {
        }
        h3{
            padding-left: 20px;
            font-size: 18px;
            font-weight: 600;
            @include mq('max','md') {
            }
        }
        h4{
            margin-top: 10px;
            padding-left: 20px;
            font-size: 16px;
            line-height: 1.8em;
            color: $accentColor;
            @include mq('max','md') {
                font-size: 12px;
                line-height: 1.8em;
            }
        }
        p{
            font-size: 16px;
            line-height: 1.2em;
            @include mq('max','md') {
                font-size: 12px;
                line-height: 1.2em;
            }
        }
        a{
            color: $accentColor;
            @include mq('max','md') {
            }
            &:hover{
                background: $hoverColor;
                @include mq('max','md') {
                }
            }
        }
        th,td{
            border: 1px solid $lineColor; 
            text-align: center;
            padding: 7px;
            font-size: 16px;
            color: $titleColor;
            @include mq('max','md') {
                padding: 5px;
                font-size: 12px;
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
    