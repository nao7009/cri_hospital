<template>
  <main class="main">
      <section class="main__kv">
          <img src="../assets/images/main.jpg">
          <div class="main__summery">
              <h2>患者様の未来を守ります。</h2>
              <p>当院では、<br>「一人ひとりに寄り添ったケア」を<br>大事にしています。</p>
              <p>患者様が家のように安心して通える、<br>そんなクリニックを目指しております。</p>
          </div>
      </section>
      <section class="service">
          <div class="service__message" id="service">
              <h2>当院のご案内</h2>
              <p>当院の診察内容をご紹介します。<br>
              一人一人に合わせたケアを行っていきますのでお気軽にご相談ください。</p>
          </div>
          <div class="service__column">
              <div class="service__columnItems">
                  <img src="../assets/images/medical_list_01.jpg">
                  <h3>診療項目</h3>
                  <p>一般内科</p>
                  <p>整形外科</p>
                  <p>皮膚科</p>
                  <li><router-link to="/medicaltreatment">詳しくはこちら</router-link></li>
              </div>
              <div class="service__columnItems">
                  <img src="../assets/images/medical_list_02.jpg">
                  <h3>訪問診察</h3>
                  <p>通院が難しい方のために<br>訪問診察を行っております。</p>
                  <li><router-link to="/visitmedical">詳しくはこちら</router-link></li>
              </div>
              <div class="service__columnItems">
                  <img src="../assets/images/medical_list_03.jpg">
                  <h3>各種健診</h3>
                  <p>特定健診、一般健診を<br>行っております。</p>
                  <li><router-link to="/medicalcheck">詳しくはこちら</router-link></li>
              </div>
          </div>
      </section>
      <section class="news">
          <h2 class="news__title">お知らせ</h2>
          <ul class="news__list">
              <li>
                <a href="">
                  <dl class="news__item">
                      <dt class="news__day">2022.03.14</dt>
                      <dd class="news__data">新型コロナウイルスのワクチン接種の予約受付開始</dd>
                  </dl>
                </a>
              </li>
              <li>
                <a href="">
                  <dl class="news__item">
                      <dt class="news__day">2022.02.28</dt>
                      <dd class="news__data">発熱外来専用ダイヤル設置</dd>
                  </dl>
                </a>
              </li>
              <li>
                <a href="">
                  <dl class="news__item">
                      <dt class="news__day">2022.01.04</dt>
                      <dd class="news__data">新年のご挨拶</dd>
                  </dl>
                </a>
              </li>
          </ul>
          <div class="news__more">
              <li><router-link to="/news">もっと見る</router-link></li>
          </div>
      </section>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
