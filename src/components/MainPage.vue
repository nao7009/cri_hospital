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
                <div class="service__image">
                  <img src="../assets/images/medical_list_01.jpg">
                </div>
                <div class="service__text">
                  <h3>診療項目</h3>
                  <p>一般内科<br>整形外科<br>皮膚科</p>
                  <li><router-link to="/medicaltreatment">詳しくはこちら</router-link></li>
                </div>
              </div>
              <div class="service__columnItems">
                <div class="service__image">
                  <img src="../assets/images/medical_list_02.jpg">
                </div>
                <div class="service__text">
                  <h3>訪問診察</h3>
                  <p>通院が難しい方のために<br>訪問診察を行っております。</p>
                  <li><router-link to="/visitmedical">詳しくはこちら</router-link></li>
                </div>
              </div>
              <div class="service__columnItems">
                <div class="service__image">
                  <img src="../assets/images/medical_list_03.jpg">
                </div>
                <div class="service__text">
                  <h3>各種健診</h3>
                  <p>特定健診、一般健診を<br>行っております。</p>
                  <li><router-link to="/medicalcheck">詳しくはこちら</router-link></li>
                </div>
              </div>
          </div>
      </section>
      <section class="news">
        <div class="news__title">
          <h2>お知らせ</h2>
        </div>
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
            margin: 0 auto;
            font-size: 12px;
            flex: 1;
        }
        img{
            @include mq('max','md') {
                width: 250px;
        }
        }
    }
    &__summery{
        @include mq('max','md') {
        }
        h2{
            font-size: 20px;
            color: $fontColor;
            @include mq('max','md') {
                font-size: 15px;
            }          
        }
        p{
            font-size: 15px;
            color: $fontColor;
            @include mq('max','md') {
                font-size: 10px;
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
}
.service{
    width: 85%;
    margin: 10px auto 50px;
    padding: 20px 20px 50px;
    background-color: $subColor;
    @include mq('max','md') {
        width: 100%;
        margin: 0 auto;
        padding: 10px;
    }
    &__message{
        margin-bottom: 60px;
        @include mq('max','md') {
            margin-bottom: 10px;
        }
        h2{
            font-size: 20px;
            text-align: center;
            color: $titleColor;
            @include mq('max','md') {
                font-size: 15px;
            }              
        }
        p{
            margin: 10px auto 0;
            font-size: 16px;
            text-align: center;
            line-height: 2.2;
            letter-spacing: 2px;
            @include mq('max','md') {
                width: 100%;
                font-size: 10px;
                line-height: 1.8;
            }             
        }
    }
    &__column{
        display: flex;
        justify-content: center;
        @include mq('max','md') {
            flex-direction: column;
        }
    }
    &__columnItems{
        text-align: center;
        border: 1px solid $lineColor;
        @include mq('max','md') {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 5px;
            padding: 5px;
        }
    }
    &__image{
        img{
            width: 250px;
            height: 150px;
            @include mq('max','md') {
                width: 180px;
                height: 120px;
            } 
        }
    }
    &__text{
        h3{
            margin: 50px 0 30px 0;
            font-size: 18px;
            text-align: center;
            @include mq('max','md') {
                margin: 10px 0 10px 0;
                font-size: 15px;
            }                    
        }
        p{
            font-size: 15px;
            line-height: 1.5em;
            @include mq('max','md') {
                font-size: 12px;
                margin: 5px;
                padding: 5px;
            }                     
        }
        a{
            display: block;
            @include mq('max','md') {
                font-size: 11px;
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
.news{
    width: 85%;
    margin: 10px auto;
    padding: 0 20px;
    @include mq('max','md') {
        width: 100%;
        padding: 0 5px;
    }
    &__title{
        margin-bottom: 16px;
        @include mq('max','md') {
            margin-bottom: 8px;
        }
        h2{
            font-size: 25px;
            color: $titleColor;
            @include mq('max','md') {
                margin: 5px;
                padding: 5px;
                font-size: 15px;
            }
        }
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
    &__list{
        padding: 20px 12px;
        @include mq('max','md') {
            padding: 10px 5px;
        }
        li{
            border-bottom: 1px solid $lineColor;
            @include mq('max','md') {
                font-size: 12px;
                margin: 5px;
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
