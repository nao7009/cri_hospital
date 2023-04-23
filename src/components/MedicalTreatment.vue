<template>
    <main class="main">
        <MyHeader/>
        <div class="medicalTreatment">
            <div class="medicalTreatment__title">
                <h2>各種診療項目</h2>
            </div>
            <div class="medicalTreatment__contents">
                <div class="medicalTreatment__contentsTitle">
                    <h2>一般内科</h2>
                </div>
                <div class="medicalTreatment__about">
                    <p>かぜ、発熱などの急な症状から生活習慣病などの慢性的な症状の診察も行っています。<br>下記のような症状にも対応しております。</p>
                    <ul>
                        <li>・高血圧</li>
                        <li>・メタボリック症候群</li>
                        <li>・糖尿病</li>
                        <li>・喘息</li>
                    </ul>
                    <p>必要に応じて検査も行いますので、お気軽にご相談ください。</p>               
                </div>
            </div>
            <div class="medicalTreatment__contents">
                <div class="medicalTreatment__contentsTitle">
                    <h2>整形外科</h2>
                </div>
                <div class="medicalTreatment__about">
                    <p>骨折の治療やリハビリ、肩こりや腰痛の診察などを行っております。</p>
                    <p>近年ではテレワークが増えた影響で身体の不調を感じる方が増えてきています。<br>手や腰の痛み、肩こりなど少しでも違和感を感じる場合はご相談ください。</p>
                </div>
            </div>
            <div class="medicalTreatment__contents">
                <div class="medicalTreatment__contentsTitle">
                    <h2>皮膚科</h2>
                </div>
                <div class="medicalTreatment__about">
                    <p>傷やにきびの治療など様々な肌トラブルの診療を行っています。<br>主な治療法は下記のものになります。</p>
                    <ul>
                        <li>外用薬：症状に合わせた軟膏などの薬を処方します。</li>
                        <li>液体窒素：いぼの治療に使用します。</li>
                        <li>レーザー治療：にきびやしみの改善に使用します。</li>
                    </ul>
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
  name: 'MedicalTreatment',
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss" scoped>
.medicalTreatment{
    width: 85%;
    margin: 0 auto;
    background-color: $subColor;
    @include mq('max','md') {
        width: 100%;
    }
    &__title{
        width: 85%;
        margin: 0 auto;    
        @include mq('max','md') {
        }
        h2{
            font-size: 25px;
            color: $titleColor;
            @include mq('max','md') {
                margin: 5px;
                padding: 5px;
                font-size: 18px;
            }
        }
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
    &__about{
        width: 100%;
        margin: 0 auto;
        @include mq('max','md') {
        }
        p{
            font-size: 16px;
            line-height: 1.8em;
            @include mq('max','md') {
                font-size: 12px;
                line-height: 1.2em;
            }
        }
        ul{
            @include mq('max','md') {
            }
            li{
                font-size: 16px;
                line-height: 1.2em;
                color: $accentColor;
                @include mq('max','md') {
                font-size: 12px;
                line-height: 0.2em;
            }     
            }
        }         
    }
}
</style>
