<template>
    <div class="news">
        <MyHeader/>
        <main class="main">
            <div class="main__contents">
                <div class="main__contentsTitle">
                    <h2>お知らせ</h2>
                </div>
            </div>
            <div class="main__contents">
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
                    <p>あけましておめでとうございます。<br>今年も地域の皆様に寄り添ったケアをしていきますので、よろしくお願いいたします。</p>
                </div>
                <div class="main__newsItem">
                    <h3>2021.09.21 皮膚科の治療機器が新しくなりました</h3>
                    <p>皮膚科のレーザー治療で使用していた機器をこの度新調いたしました。<br>従来の治療よりも短い期間で効果を出すことができるものになっております。<br>ご質問等ございましたら気軽に問い合わせていただければと思います。</p>
                </div>
                <div class="main__newsItem">
                    <h3>2021.06.06 webサイトが開設しました</h3>
                    <p>この度当院のwebサイトを開設いたしました。お知らせの発信なども行っていきますので、ぜひご利用ください。</p>
                </div>
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
    @include mq('max','md') {
        width: 100%;
    }
    &__title{
        h2{
            width: 85%;
            margin: 0 auto;
            text-align: left;
            font-size: 25px;
            color: $titleColor;
            @include mq('max','md') {
                font-size: 20px;
            }
        }
    }
    &__kv{
        height: 430px;
        display: flex;
        align-items: center;
        background-color: #fff;
        padding-left: 0;
        @include mq('max','md') {
            width: 100%;
            height: 250px;
            font-size: 12px;
        }
    }
    &__summery{
        h2{
            font-size: 20px;
            color: $fontColor;
            @include mq('max','md') {
                margin-left: auto;
                margin-right: 45px;
                font-size: 20px;
            }          
        }
        p{
            font-size: 15px;
            color: $fontColor;
            @include mq('max','md') {
                margin-left: auto;
                margin-right: 45px;
                font-size: 20px;
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
        background-color: #fffbe8;
        p{
            font-size: 16px;
            line-height: 1.2em;
            @include mq('max','md') {
                font-size: 12px;
            }
        }
    }
    &__medicaltreatment{
        width: 100%;
        margin: 0 auto;
        p{
            font-size: 16px;
            line-height: 1.8em;
            @include mq('max','md') {
                font-size: 12px;
                line-height: 1.2em;
            }
        }
        ul{
            font-size: 18px;
            line-height: 1.6em;
            @include mq('max','md') {
                font-size: 14px;
                line-height: 1.0em;
            }
        }         
    }
    &__examinationtime{
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        @include mq('max','md') {
        }
        p{
            font-size: 17px;
            line-height: 1.8em;
            @include mq('max','md') {
                font-size: 12px;
            }
        }
        table,th,td{
            border: 1px solid $titleColor; 
            text-align: center;
            margin-left: 20px;
            padding: 10px;
            font-size: 16px;
            @include mq('max','md') {
                font-size: 12px;
            }
        }
        th{
            background-color: $linkColor;
            @include mq('max','md') {
            }
        }
    }
    &__medicalcheck{
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
            color: #f00;
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
            color: #00f;
            @include mq('max','md') {
            }
            &:hover{
                background: $hoverColor;
                @include mq('max','md') {
                }
            }
        }
        table,th,td{
            border: 1px solid $lineColor; 
            text-align: center;
            margin-left: 20px;
            padding: 10px;
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
    &__newsItem{
        padding: 30px;
        margin-bottom: 20px;
        background-color: #fffbe8;
        @include mq('max','md') {
        }
        h3{
            padding-left: 20px;
            font-size: 18px;
            line-height: 1.8em;
            border-bottom: 1px dashed $lineColor;
            color: $titleColor;
            @include mq('max','md') {
                font-size: 16px;
            }
        }
        p{
            font-size: 16px;
            line-height: 1.2em;
            @include mq('max','md') {
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
        }     
    }
    &__consultation{
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        @include mq('max','md') {
        }
        h2{
            font-size: 18px;
            padding-left: 20px;
            color: $titleColor;
            @include mq('max','md') {
                font-size: 16px;
            }
        }
        ul{
            @include mq('max','md') {
                font-size: 15px;
            }               
        }
    }
}
.service{
    margin: 10px auto 100px;
    padding: 20px 20px 100px;
    background-color: $subColor;
    @include mq('max','md') {
        width: 100%;
        margin: 5px auto 50px;
        padding: 10px 10px 50px;
    }
    &__message{
        margin-bottom: 60px;
        @include mq('max','md') {
            margin-bottom: 30px;
        }
        h2{
            font-size: 20px;
            text-align: center;
            color: $titleColor;
            @include mq('max','md') {
                font-size: 16px;
            }              
        }
        p{
            width: 67%;
            margin: 10px auto 0;
            font-size: 16px;
            text-align: center;
            line-height: 2.2;
            letter-spacing: 2px;
            @include mq('max','md') {
                width: 100%;
                font-size: 12px;
                text-align: center;
                line-height: 1.8;
                letter-spacing: 2px;
            }             
        }
    }
    &__column{
        display: flex;
        justify-content: center;
        @include mq('max','md') {
        }
    }
    &__columnItems{
        text-align: center;
        border: 1px solid $lineColor;
        @include mq('max','md') {
            margin: 5px;
            padding: 5px;
        }
        img{
            width: 250px;
            height: 150px;
            @include mq('max','md') {
            } 
        }
        h3{
            margin: 50px 0 30px 0;
            font-size: 18px;
            text-align: center;
            @include mq('max','md') {
                margin: 15px 0 15px 0;
                font-size: 15px;
                text-align: center;
            }                    
        }
        p{
            font-size: 15px;
            @include mq('max','md') {
                font-size: 11px;
                margin: 5px;
                padding: 5px;
            }                     
        }
        a{
            display: block;
            @include mq('max','md') {
                font-size: 11px;
            }
            &:hover{
                background: $hoverColor;
                @include mq('max','md') {
                }
            }
        } 
    }
}
.news{
    width: 85%; /*固定幅*/
    margin: 10px auto;
    padding: 0 20px;
    @include mq('max','md') {
        width: 100%;
        padding: 0 5px;
    }
    &__item{
        display: flex;
        @include mq('max','md') {
        }
    }
    &__day{
        width: 265px;
        display: flex;
        align-items: center;
        margin-right: 32px;
        @include mq('max','md') {
            width: 90px;
            margin-right: 5px;
        }
    }
    &__data{
        line-height: 1.8;
        @include mq('max','md') {
            line-height: 1.2;
            margin-left: 5px;
        }
    }
    &__more{
        text-align: right;
        @include mq('max','md') {
            font-size: 12px;
        }
        a{
            &:hover{
                background: $hoverColor;
                @include mq('max','md') {
                    font-size: 10px;
                }
            }
        }
    }
    &__title{
        margin-bottom: 16px;
        font-size: 20px;
        h2{
            font-size: 25px;
            padding-left: 20px;
            @include mq('max','md') {
                font-size: 20px;
            }
        }
        @include mq('max','md') {
            margin-bottom: 8px;
            font-size: 16px;
        }
    }
    &__list{
        padding: 20px 12px;
        // border-top: 1px solid $lineColor;
        @include mq('max','md') {
            padding: 10px 5px;
        }
        li{
            border-bottom: 1px solid $lineColor;
            @include mq('max','md') {
                font-size: 12px;
                margin: 5px;
                padding: 10px;
            }
            &:first-child{
                border-top: 1px solid $lineColor;
                @include mq('max','md') {
                }
            }
            a{
                display: block;
                padding: 30px 10px;
                display:block;
                @include mq('max','md') {
                    margin: 5px;
                    padding: 5px;
                }
                &:hover{
                    background: $hoverColor;
                    @include mq('max','md') {
                    }
                }                  
            }
        }
    }
}
</style>
