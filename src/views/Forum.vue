<style scoped>
.el-radio{
  white-space: unset;
  margin-right: unset;
  height: unset;
  margin-bottom: 10px;
  width: 100%;
}
.radio_row:deep(.el-radio){
  width: unset !important;
}
.el-checkbox{
  white-space: unset;
  margin-right: unset;
  height: unset;
  width: 100%;
  margin-bottom: 10px;
}
.radio_row{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 92%;
}
.radio_column{
  display: flex;
  flex-direction: column;
}
.radio_item{
  align-items: center;
  padding-bottom: 10px;
}
.top_1_tag{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  top: 50px;
  z-index: 1500;
}
.light_emphasize{
  /*font-weight: 600;*/
  text-align: center;
  font-size: 18px;
}
.emphasize{
  font-weight: 900;
  font-size: 24px;
  text-align: center;
}
.top_2{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.padding-10{
  padding: 0px 10px 20px 10px;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: var(--background-image-url);
  width: 100%;
  height: 500px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.el-row{
  width: 100%;
  align-items: center;
}
.top_3{
  display: flex;
  flex-direction: row;
  width: 100%;
}
@media only screen and (max-width: 520px) {
  .top{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: var(--detail-top-bg-color);
    border-radius: 30px;
    box-shadow: 0 2.8px 2.2px rgba(0,0,0,.034), 0 6.7px 5.3px rgba(0,0,0,.048), 0 12.5px 10px rgba(0,0,0,.06), 0 22.3px 17.9px rgba(0,0,0,.072), 0 41.8px 33.4px rgba(0,0,0,.086), 0 100px 80px rgba(0,0,0,.12);
    letter-spacing: 2px;
    padding: 20px;
    box-sizing: unset;
    width: 100%;
  }
  .font-10-size{
    font-size: 10px !important;
  }
  .font-12-size {
    font-size: 12px !important;
  }
  .log{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-start;
  }
  .log_item{
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    align-items: center;
  }
  .log_item_1{
    width: 400px;
  }
  .log_detail_item{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .log_detail_item_1{
    width: 120px;
  }
  .log_detail_item_2{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
@media only screen and (min-width: 520px){
  .top_left{
    width: 25%;
    position: sticky;
    top: 150px;
    z-index: 1000;
    height: calc(100vh - 150px);
    overflow-y: auto;
  }
  .top_right{
    width: 25%;
  }
  .top{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: var(--detail-top-bg-color);
    border-radius: 30px;
    box-shadow: var(--box-shadow-color);
    letter-spacing: 2px;
    padding: 20px;
    width: 50%;
    box-sizing: unset;
  }
  .font-10-size{
    font-size: 15px !important;
  }
  .font-12-size {
    font-size: 17px !important;
  }
  .log{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-start;
  }
  .log_item{
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    align-items: center;
  }
  .log_item_1{
    width: 400px;
  }
  .log_detail_item{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .log_detail_item_1{
    width: 120px;
  }
  .log_detail_item_2{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
.top_left_item{
  padding: 50px;
  font-weight: 600;
}
.navbar {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.icon{
  width: 30px;
  height: 30px;
}
</style>
<template>
  <div class="padding-10 margin-40-top">
    <div class="top_2">
      <text class="margin-40-top emphasize">{{ company_name}}</text>      <Tag :tag="credit_score_text" number="60" color="yellow"></Tag>
      <el-rate v-model="starValue" clearable />
      <el-descriptions title="" :column="3" border class="margin-20-top">
        <el-descriptions-item label="法定代表人" width="150px" label-align="left" align="left" label-class-name="my-label" class-name="my-content">刘贵斌</el-descriptions-item>
        <el-descriptions-item label="经营状态"  width="150px" label-align="left" align="left">开业</el-descriptions-item>
        <el-descriptions-item label="登记状态"  width="150px" label-align="left" align="left">注销企业</el-descriptions-item>
        <el-descriptions-item label="成立日期"  width="150px" label-align="left" align="left">2019-12-06</el-descriptions-item>
        <el-descriptions-item label="人员规模"  width="150px" label-align="left" align="left">50人</el-descriptions-item>
        <el-descriptions-item label="注册资本"  width="150px" label-align="left" align="left">100万</el-descriptions-item>
        <el-descriptions-item label="社会信用代码"  width="150px" label-align="left" align="left">{{credit_code}}</el-descriptions-item>
        <el-descriptions-item label="组织机构代码"  width="150px" label-align="left" align="left">MA3R5KGF-3</el-descriptions-item>
        <el-descriptions-item label="纳税人识别号"  width="150px" label-align="left" align="left">{{credit_code}}</el-descriptions-item>
        <el-descriptions-item label="登记机关"  width="150px" label-align="left" align="left">临沂市兰山区市场监督管理局</el-descriptions-item>
        <el-descriptions-item label="手机号码"  width="150px" label-align="left" align="left">13625393317</el-descriptions-item>
        <el-descriptions-item label="详细地址"  width="150px" label-align="left" align="left">山东省临沂市兰山区义堂镇大芝房村</el-descriptions-item>
        <el-descriptions-item label="经营范围"  :span="3" label-align="left" align="left">加工销售：木制线条、木方、木制品、刨花木墩、单板、木皮、胶合板、多层板、建筑模版、装饰板</el-descriptions-item>
      </el-descriptions>
      <el-carousel height="100px" direction="vertical" :autoplay="true">
        <el-carousel-item v-for="(item,index) in activities" :key="index">
          <div v-for="(item1,index1) in item.content" :key="index1">
            <h3 text="2xl" justify="center">{{item.timestamp}} {{ item1.key }}{{item1.value}}</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
<!--    <div class="top_1_tag margin-20-top">-->
<!--      <template v-for="(item,index) in list.arr" :key="index">-->
<!--        <Tag :tag="item.goods_title" number="60" :color="index == 0?'dark_blue_reinforce':'dark_blue'"></Tag>-->
<!--      </template>-->
<!--    </div>-->
<!--    <div class="criteria margin-20-top">-->
<!--      <el-row :gutter="12">-->
<!--        <el-col :span="6">-->
<!--          <el-card shadow="always" class="top_card">-->
<!--            <text class="font-8-size font-60-weight">胶合板等级</text>-->
<!--            <text class="font-5-size margin-10-top">需求与实际交付匹配度</text>-->
<!--            <text class="font-10-size margin-10-top">50%</text>-->
<!--            <el-timeline class="margin-20-top">-->
<!--              <el-timeline-item timestamp="2023-03-04" class="font-5-size">买家需要AA/BB级胶合板，实际交付是BB/BB级胶合板</el-timeline-item>-->
<!--              <el-timeline-item timestamp="2020-02-01" class="font-5-size">初始值是100%</el-timeline-item>-->
<!--            </el-timeline>-->
<!--          </el-card>-->
<!--        </el-col>-->
<!--        <el-col :span="6">-->
<!--          <el-card shadow="always" class="top_card">-->
<!--            <text class="font-8-size font-60-weight">胶合板耐水性</text>-->
<!--            <text class="font-5-size margin-10-top">需求与实际交付匹配度</text>-->
<!--            <text class="font-10-size margin-10-top">50%</text>-->
<!--            <el-timeline class="margin-20-top">-->
<!--              <el-timeline-item timestamp="2023-03-04" class="font-5-size">买家需要耐水性高适合潮湿环境使用的胶合板，实际交付使用80天之后，发霉</el-timeline-item>-->
<!--              <el-timeline-item timestamp="2020-02-01" class="font-5-size">初始值是100%</el-timeline-item>-->
<!--            </el-timeline>-->
<!--          </el-card>-->
<!--        </el-col>-->
<!--        <el-col :span="6">-->
<!--          <el-card shadow="always" class="top_card">-->
<!--            <text class="font-8-size font-60-weight">胶合板胶合度</text>-->
<!--            <text class="font-5-size margin-10-top">需求与实际交付匹配度</text>-->
<!--            <text class="font-10-size margin-10-top">50%</text>-->
<!--            <el-timeline class="margin-20-top">-->
<!--              <el-timeline-item timestamp="2023-03-04" class="font-5-size">买家收到后，发现有50%的胶合板都有分层、破损以及脱胶现象</el-timeline-item>-->
<!--              <el-timeline-item timestamp="2020-02-01" class="font-5-size">初始值是100%</el-timeline-item>-->
<!--            </el-timeline>-->
<!--          </el-card>-->
<!--        </el-col>-->
<!--        <el-col :span="6">-->
<!--          <el-card shadow="always" class="top_card">-->
<!--            <text class="font-8-size font-60-weight">规格尺寸偏差</text>-->
<!--            <text class="font-5-size margin-10-top">需求与实际交付匹配度</text>-->
<!--            <text class="font-10-size margin-10-top">50%</text>-->
<!--            <el-timeline class="margin-20-top">-->
<!--              <el-timeline-item timestamp="2023-03-04" class="font-5-size">买家需要124mmx120mmx100mm，实际交付有10mm尺寸偏差</el-timeline-item>-->
<!--              <el-timeline-item timestamp="2020-02-01" class="font-5-size">初始值是100%</el-timeline-item>-->
<!--            </el-timeline>-->
<!--          </el-card>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->
    <div class="top_3 margin-20-top">
      <div class="top_left">
          <div class="top_left_item dark_blue_btn" v-show="tabDetailStore.current != 0" @click="handleItemClick(0)">
            <div>
              <svg t="1683685276764" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25505" width="200" height="200"><path d="M869.084233 187.133028l-0.822738 472.610898-171.140799-0.297782c-11.939937-0.021489-23.394826 2.27481-34.3309 6.904247-10.936073 4.630461-20.73423 11.253298-29.396517 19.84907l-121.602545 121.17992L389.615137 685.774789c-3.971451-4.656043-8.450463-8.643867-13.402241-11.963473-4.969175-3.317559-10.103102-5.968945-15.399735-7.986905-5.315052-1.998517-10.93812-3.672646-16.906042-4.985548-5.948479-1.331321-11.935843-2.010797-17.925255-2.038426l-171.123402-0.298805 0.822738-472.610898 713.366194 1.24127L869.084233 187.133028zM889.121592 97.607038 135.973346 96.296183c-19.22997-0.033769-35.667338 6.567579-49.295729 19.813255-13.627369 13.246699-20.458961 29.481452-20.491707 48.711422L65.290517 679.186743c-0.033769 19.232017 6.740518 35.505655 20.321838 48.79124s29.996175 19.952424 49.227168 19.986193l191.023638 0.330528 172.844603 174.410262c3.287883 3.316535 7.609305 4.988618 12.910031 4.998851 1.338485 0.002047 2.659573-0.321318 3.980661-0.970094l7.966439-3.984754 173.435051-173.808558 191.022615 0.332575c19.232017 0.032746 35.669384-6.576789 49.298799-19.813255 13.626345-13.238512 20.456914-29.488615 20.48966-48.720631l0.896416-514.364861c0.032746-19.22997-6.741541-35.489282-20.320814-48.783053-13.58132-13.292748-29.997198-19.952424-49.228191-19.98517L889.121592 97.606015zM245.818103 421.330978c0.028653-16.255219 5.860475-30.18344 17.496489-41.769312 11.615549-11.594059 25.41074-17.377786 41.331337-17.350157 6.621814 0.01228 12.93459 1.026376 18.900465 3.02694 5.948479 2.00875 11.425214 4.840238 16.411785 8.495488 4.968152 3.663436 9.284457 7.975649 12.912078 12.948917 3.609201 4.972245 6.421246 10.458189 8.438183 16.45067 1.997494 5.982248 2.980891 12.298094 2.952238 18.918885-0.042979 24.530696-11.343349 42.086537-33.939997 52.65729-7.966439 3.975545-16.600073 5.959735-25.898857 5.944386-15.902178-0.027629-29.677926-5.859451-41.252543-17.485233C251.573177 451.534883 245.789451 437.586197 245.818103 421.330978L245.818103 421.330978zM452.760293 422.206928c0.020466-11.271718 2.697435-21.388123 8.03193-30.334889 5.297656-8.945743 12.456706-16.070001 21.420869-21.355377 8.964162-5.294586 18.917862-7.927553 29.881564-7.90811 10.945283 0.01842 20.891819 2.686179 29.836539 8.011464 8.964162 5.325285 16.080234 12.465916 21.364587 21.430078 5.285377 8.965186 7.927553 19.080567 7.90811 30.361495-0.027629 15.920598-5.859451 29.667693-17.493419 41.261753-11.634991 11.585873-25.575492 17.368576-41.821501 17.339924-16.264429-0.027629-30.18344-5.859451-41.776476-17.485233C458.515367 451.895087 452.733687 438.117292 452.760293 422.206928L452.760293 422.206928zM661.715325 422.054455c0.027629-16.254196 5.859451-30.18344 17.494443-41.769312 11.632945-11.594059 25.41074-17.376763 41.331337-17.349133 11.252275 0.019443 21.379936 2.696412 30.325679 8.021697 8.946766 5.316076 16.060791 12.464893 21.347191 21.430078 5.302773 8.964162 7.92653 19.080567 7.907087 30.352285-0.027629 15.920598-5.860475 29.668717-17.476023 41.262776-11.633968 11.584849-25.574469 17.368576-41.838897 17.339924-16.264429-0.019443-30.184463-5.851265-41.778522-17.486256-11.593036-11.634991-17.359366-25.574469-17.330714-41.829687L661.715325 422.054455zM661.715325 422.054455" fill="var(--selected-left-color)" p-id="25506"></path></svg>
            </div>
            <text style="color:var(--selected-left-color)">评论区</text>
          </div>
          <div class="top_left_item dark_blue_reinforce_btn" v-show="tabDetailStore.current == 0">
              <div>
                <svg t="1683685276764" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25505" width="200" height="200"><path d="M869.084233 187.133028l-0.822738 472.610898-171.140799-0.297782c-11.939937-0.021489-23.394826 2.27481-34.3309 6.904247-10.936073 4.630461-20.73423 11.253298-29.396517 19.84907l-121.602545 121.17992L389.615137 685.774789c-3.971451-4.656043-8.450463-8.643867-13.402241-11.963473-4.969175-3.317559-10.103102-5.968945-15.399735-7.986905-5.315052-1.998517-10.93812-3.672646-16.906042-4.985548-5.948479-1.331321-11.935843-2.010797-17.925255-2.038426l-171.123402-0.298805 0.822738-472.610898 713.366194 1.24127L869.084233 187.133028zM889.121592 97.607038 135.973346 96.296183c-19.22997-0.033769-35.667338 6.567579-49.295729 19.813255-13.627369 13.246699-20.458961 29.481452-20.491707 48.711422L65.290517 679.186743c-0.033769 19.232017 6.740518 35.505655 20.321838 48.79124s29.996175 19.952424 49.227168 19.986193l191.023638 0.330528 172.844603 174.410262c3.287883 3.316535 7.609305 4.988618 12.910031 4.998851 1.338485 0.002047 2.659573-0.321318 3.980661-0.970094l7.966439-3.984754 173.435051-173.808558 191.022615 0.332575c19.232017 0.032746 35.669384-6.576789 49.298799-19.813255 13.626345-13.238512 20.456914-29.488615 20.48966-48.720631l0.896416-514.364861c0.032746-19.22997-6.741541-35.489282-20.320814-48.783053-13.58132-13.292748-29.997198-19.952424-49.228191-19.98517L889.121592 97.606015zM245.818103 421.330978c0.028653-16.255219 5.860475-30.18344 17.496489-41.769312 11.615549-11.594059 25.41074-17.377786 41.331337-17.350157 6.621814 0.01228 12.93459 1.026376 18.900465 3.02694 5.948479 2.00875 11.425214 4.840238 16.411785 8.495488 4.968152 3.663436 9.284457 7.975649 12.912078 12.948917 3.609201 4.972245 6.421246 10.458189 8.438183 16.45067 1.997494 5.982248 2.980891 12.298094 2.952238 18.918885-0.042979 24.530696-11.343349 42.086537-33.939997 52.65729-7.966439 3.975545-16.600073 5.959735-25.898857 5.944386-15.902178-0.027629-29.677926-5.859451-41.252543-17.485233C251.573177 451.534883 245.789451 437.586197 245.818103 421.330978L245.818103 421.330978zM452.760293 422.206928c0.020466-11.271718 2.697435-21.388123 8.03193-30.334889 5.297656-8.945743 12.456706-16.070001 21.420869-21.355377 8.964162-5.294586 18.917862-7.927553 29.881564-7.90811 10.945283 0.01842 20.891819 2.686179 29.836539 8.011464 8.964162 5.325285 16.080234 12.465916 21.364587 21.430078 5.285377 8.965186 7.927553 19.080567 7.90811 30.361495-0.027629 15.920598-5.859451 29.667693-17.493419 41.261753-11.634991 11.585873-25.575492 17.368576-41.821501 17.339924-16.264429-0.027629-30.18344-5.859451-41.776476-17.485233C458.515367 451.895087 452.733687 438.117292 452.760293 422.206928L452.760293 422.206928zM661.715325 422.054455c0.027629-16.254196 5.859451-30.18344 17.494443-41.769312 11.632945-11.594059 25.41074-17.376763 41.331337-17.349133 11.252275 0.019443 21.379936 2.696412 30.325679 8.021697 8.946766 5.316076 16.060791 12.464893 21.347191 21.430078 5.302773 8.964162 7.92653 19.080567 7.907087 30.352285-0.027629 15.920598-5.860475 29.668717-17.476023 41.262776-11.633968 11.584849-25.574469 17.368576-41.838897 17.339924-16.264429-0.019443-30.184463-5.851265-41.778522-17.486256-11.593036-11.634991-17.359366-25.574469-17.330714-41.829687L661.715325 422.054455zM661.715325 422.054455" fill="var(--no-selected-left-color)" p-id="25506"></path></svg>
              </div>
              <text style="color:var(--no-selected-left-color)">评论区</text>
          </div>
        <div class="top_left_item dark_blue_btn margin-20-top" v-show="tabDetailStore.current != 3" @click="handleItemClick(3)">
          <div>
            <svg t="1683703804762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27600" width="200" height="200"><path d="M768 90.666667H256A186.666667 186.666667 0 0 0 69.333333 277.333333v383.936l0.085334 5.504A186.666667 186.666667 0 0 0 256 847.936l37.632-0.021333 8.149333 40.725333 0.810667 3.242667 0.533333 1.834666 1.109334 3.2a48 48 0 0 0 54.037333 29.376l3.008-0.746666 1.706667-0.490667 2.944-0.981333 3.669333-1.578667a48 48 0 0 0 3.541333-1.856l123.925334-72.725333 270.933333 0.021333a186.666667 186.666667 0 0 0 186.666667-186.666667V277.333333A186.666667 186.666667 0 0 0 768 90.666667z m-512 74.666666h512c61.866667 0 112 50.133333 112 112v383.936c0 61.866667-50.133333 112-112 112H486.912l-3.968 0.213334a37.333333 37.333333 0 0 0-14.933333 4.906666l-100.352 58.88-6.784-33.984a37.333333 37.333333 0 0 0-36.608-30.016H256a112 112 0 0 1-112-112V277.333333c0-61.866667 50.133333-112 112-112z" fill="var(--selected-left-color)" p-id="27601"></path><path d="M510.933333 580.266667a40.533333 40.533333 0 1 0 0 81.066666 40.533333 40.533333 0 0 0 0-81.066666zM510.976 256c-31.872 0-61.994667 12.586667-84.821333 35.370667a126.122667 126.122667 0 0 0-36.821334 89.834666v6.378667l0.128 2.026667c1.450667 14.933333 13.44 26.24 27.797334 26.24 13.781333 0 25.322667-10.389333 27.52-24.149334l0.362666-2.986666 0.042667-7.466667 0.106667-3.456c1.813333-32.725333 30.656-58.88 65.685333-58.88 36.309333 0 65.770667 28.053333 65.770667 62.293333 0 22.912-13.525333 44.096-34.88 54.933334l-7.722667 3.669333a90.133333 90.133333 0 0 0-35.925333 34.026667c-9.962667 16.512-15.253333 36.416-15.253334 56.810666v14.058667l0.128 1.770667c1.002667 5.632 5.184 9.6 10.24 9.6h35.114667l1.685333-0.170667a11.242667 11.242667 0 0 0 8.682667-11.2v-15.061333l0.128-3.114667c0.981333-13.376 8.768-25.28 19.754667-30.08 44.864-19.754667 73.834667-64.981333 73.834666-115.242667a125.76 125.76 0 0 0-36.736-89.813333A119.061333 119.061333 0 0 0 510.976 256z" fill="var(--selected-left-color)" p-id="27602"></path></svg>
          </div>
          <text style="color:var(--selected-left-color)" class="margin-20-top">问答区</text>
        </div>
        <div class="top_left_item dark_blue_reinforce_btn margin-20-top" v-show="tabDetailStore.current == 3">
          <div>
            <svg t="1683703804762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27600" width="200" height="200"><path d="M768 90.666667H256A186.666667 186.666667 0 0 0 69.333333 277.333333v383.936l0.085334 5.504A186.666667 186.666667 0 0 0 256 847.936l37.632-0.021333 8.149333 40.725333 0.810667 3.242667 0.533333 1.834666 1.109334 3.2a48 48 0 0 0 54.037333 29.376l3.008-0.746666 1.706667-0.490667 2.944-0.981333 3.669333-1.578667a48 48 0 0 0 3.541333-1.856l123.925334-72.725333 270.933333 0.021333a186.666667 186.666667 0 0 0 186.666667-186.666667V277.333333A186.666667 186.666667 0 0 0 768 90.666667z m-512 74.666666h512c61.866667 0 112 50.133333 112 112v383.936c0 61.866667-50.133333 112-112 112H486.912l-3.968 0.213334a37.333333 37.333333 0 0 0-14.933333 4.906666l-100.352 58.88-6.784-33.984a37.333333 37.333333 0 0 0-36.608-30.016H256a112 112 0 0 1-112-112V277.333333c0-61.866667 50.133333-112 112-112z" fill="#ffffff" p-id="27601"></path><path d="M510.933333 580.266667a40.533333 40.533333 0 1 0 0 81.066666 40.533333 40.533333 0 0 0 0-81.066666zM510.976 256c-31.872 0-61.994667 12.586667-84.821333 35.370667a126.122667 126.122667 0 0 0-36.821334 89.834666v6.378667l0.128 2.026667c1.450667 14.933333 13.44 26.24 27.797334 26.24 13.781333 0 25.322667-10.389333 27.52-24.149334l0.362666-2.986666 0.042667-7.466667 0.106667-3.456c1.813333-32.725333 30.656-58.88 65.685333-58.88 36.309333 0 65.770667 28.053333 65.770667 62.293333 0 22.912-13.525333 44.096-34.88 54.933334l-7.722667 3.669333a90.133333 90.133333 0 0 0-35.925333 34.026667c-9.962667 16.512-15.253333 36.416-15.253334 56.810666v14.058667l0.128 1.770667c1.002667 5.632 5.184 9.6 10.24 9.6h35.114667l1.685333-0.170667a11.242667 11.242667 0 0 0 8.682667-11.2v-15.061333l0.128-3.114667c0.981333-13.376 8.768-25.28 19.754667-30.08 44.864-19.754667 73.834667-64.981333 73.834666-115.242667a125.76 125.76 0 0 0-36.736-89.813333A119.061333 119.061333 0 0 0 510.976 256z" fill="#ffffff" p-id="27602"></path></svg>
          </div>
          <text class="margin-20-top">问答区</text>
        </div>
          <div class="top_left_item dark_blue_btn margin-20-top" v-show="tabDetailStore.current != 1" @click="handleItemClick(1)">
            <div>
              <svg t="1682576007016" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="55393" width="200" height="200"><path d="M827.733333 512l157.866667-157.866667c42.666667-42.666667 42.666667-110.933333 0-149.333333L819.2 38.4c-38.4-38.4-110.933333-38.4-149.333333 0L512 196.266667 354.133333 38.4C315.733333 0 243.2 0 204.8 38.4L38.4 204.8c-42.666667 42.666667-42.666667 110.933333 0 149.333333L196.266667 512 128 576c-12.8 12.8-21.333333 25.6-25.6 42.666667L8.533333 878.933333c-12.8 34.133333-4.266667 68.266667 12.8 93.866667 21.333333 25.6 51.2 42.666667 85.333334 42.666667 12.8 0 21.333333 0 34.133333-4.266667l260.266667-93.866667c17.066667-4.266667 29.866667-12.8 42.666666-25.6l64-64 157.866667 157.866667c21.333333 21.333333 46.933333 29.866667 76.8 29.866667s55.466667-12.8 76.8-29.866667l166.4-166.4c42.666667-42.666667 42.666667-110.933333 0-149.333333L827.733333 512z m-81.066666-422.4c4.266667 0 12.8 4.266667 17.066666 4.266667l166.4 166.4c8.533333 8.533333 8.533333 21.333333 0 29.866666l-59.733333 59.733334-196.266667-196.266667 59.733334-59.733333s4.266667-4.266667 12.8-4.266667zM200.533333 396.8l76.8-76.8c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0L153.6 349.866667 98.133333 294.4c-8.533333-8.533333-8.533333-21.333333 0-29.866667l166.4-166.4c4.266667-4.266667 8.533333-4.266667 17.066667-4.266666s12.8 4.266667 17.066667 4.266666L452.266667 256 256 452.266667 200.533333 396.8z m187.733334 439.466667s-4.266667 4.266667-8.533334 4.266666l-260.266666 93.866667c-8.533333 4.266667-17.066667 0-21.333334-8.533333-4.266667-4.266667-4.266667-8.533333-4.266666-17.066667l93.866666-260.266667c0-4.266667 4.266667-4.266667 4.266667-8.533333l93.866667-93.866667 256-256 85.333333-85.333333 196.266667 196.266667-85.333334 85.333333-256 256-93.866666 93.866667z m537.6-76.8l-166.4 166.4c-8.533333 8.533333-21.333333 8.533333-29.866667 0l-55.466667-55.466667 76.8-76.8c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0l-76.8 76.8-55.466667-55.466667 196.266667-196.266667 157.866667 157.866667c8.533333 8.533333 8.533333 21.333333 0 29.866667z" fill="var(--selected-left-color)" p-id="55394"></path></svg>
            </div>
            <text style="color:var(--selected-left-color)" class="margin-20-top">定制</text>
          </div>
          <div class="top_left_item dark_blue_reinforce_btn margin-20-top" v-show="tabDetailStore.current == 1">
            <div>
              <svg t="1682490904384" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2743" width="200" height="200"><path d="M827.733333 512l157.866667-157.866667c42.666667-42.666667 42.666667-110.933333 0-149.333333L819.2 38.4c-38.4-38.4-110.933333-38.4-149.333333 0L512 196.266667 354.133333 38.4C315.733333 0 243.2 0 204.8 38.4L38.4 204.8c-42.666667 42.666667-42.666667 110.933333 0 149.333333L196.266667 512 128 576c-12.8 12.8-21.333333 25.6-25.6 42.666667L8.533333 878.933333c-12.8 34.133333-4.266667 68.266667 12.8 93.866667 21.333333 25.6 51.2 42.666667 85.333334 42.666667 12.8 0 21.333333 0 34.133333-4.266667l260.266667-93.866667c17.066667-4.266667 29.866667-12.8 42.666666-25.6l64-64 157.866667 157.866667c21.333333 21.333333 46.933333 29.866667 76.8 29.866667s55.466667-12.8 76.8-29.866667l166.4-166.4c42.666667-42.666667 42.666667-110.933333 0-149.333333L827.733333 512z m-81.066666-422.4c4.266667 0 12.8 4.266667 17.066666 4.266667l166.4 166.4c8.533333 8.533333 8.533333 21.333333 0 29.866666l-59.733333 59.733334-196.266667-196.266667 59.733334-59.733333s4.266667-4.266667 12.8-4.266667zM200.533333 396.8l76.8-76.8c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0L153.6 349.866667 98.133333 294.4c-8.533333-8.533333-8.533333-21.333333 0-29.866667l166.4-166.4c4.266667-4.266667 8.533333-4.266667 17.066667-4.266666s12.8 4.266667 17.066667 4.266666L452.266667 256 256 452.266667 200.533333 396.8z m187.733334 439.466667s-4.266667 4.266667-8.533334 4.266666l-260.266666 93.866667c-8.533333 4.266667-17.066667 0-21.333334-8.533333-4.266667-4.266667-4.266667-8.533333-4.266666-17.066667l93.866666-260.266667c0-4.266667 4.266667-4.266667 4.266667-8.533333l93.866667-93.866667 256-256 85.333333-85.333333 196.266667 196.266667-85.333334 85.333333-256 256-93.866666 93.866667z m537.6-76.8l-166.4 166.4c-8.533333 8.533333-21.333333 8.533333-29.866667 0l-55.466667-55.466667 76.8-76.8c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0l-76.8 76.8-55.466667-55.466667 196.266667-196.266667 157.866667 157.866667c8.533333 8.533333 8.533333 21.333333 0 29.866667z" fill="var(--no-selected-left-color)" p-id="2744"></path></svg>
            </div>
            <text style="color:var(--no-selected-left-color)" class="margin-20-top">定制</text>
          </div>

          <div class="top_left_item dark_blue_btn margin-20-top" v-show="tabDetailStore.current != 2" @click="handleItemClick(2)">
            <div>
              <svg t="1682575613391" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="51818" width="200" height="200"><path d="M567.936 889.344l295.808-169.088a64 64 0 0 0 32.256-55.552V374.4a16 16 0 0 0-23.936-13.888L576.256 529.6a64 64 0 0 0-32.256 55.552v290.304a16 16 0 0 0 23.936 13.888zM480 875.456V585.152a64 64 0 0 0-32.256-55.552l-103.808-59.328A16 16 0 0 0 320 484.16v123.456a16 16 0 0 1-23.168 14.336l-23.168-11.584A32 32 0 0 1 256 581.696V438.592a32 32 0 0 0-16.128-27.776l-87.936-50.304A16 16 0 0 0 128 374.4v290.304a64 64 0 0 0 32.256 55.552l295.808 169.088a16 16 0 0 0 23.936-13.888zM64 739.136v-391.68a64 64 0 0 1 32.256-55.616l384-219.392a64 64 0 0 1 63.488 0l384 219.392A64 64 0 0 1 960 347.52v391.296a0.448 0.448 0 0 1-0.32 0.448l-415.936 237.632a64 64 0 0 1-63.488 0l-415.616-237.44a3.008 3.008 0 0 0-0.64-0.32z m416.256-592.96L217.28 296.32a16 16 0 0 0 0 27.776l262.976 150.272a64 64 0 0 0 63.488 0l262.976-150.272a16 16 0 0 0 0-27.776L543.744 146.176a64 64 0 0 0-63.488 0z" p-id="51819" fill="var(--selected-left-color)"></path></svg>
            </div>
            <text style="color:var(--selected-left-color)" class="margin-20-top">现货</text>
          </div>
          <div class="top_left_item dark_blue_reinforce_btn margin-20-top" v-show="tabDetailStore.current == 2">
            <div>
              <svg t="1682575647275" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="52001" width="200" height="200"><path d="M567.936 889.344l295.808-169.088a64 64 0 0 0 32.256-55.552V374.4a16 16 0 0 0-23.936-13.888L576.256 529.6a64 64 0 0 0-32.256 55.552v290.304a16 16 0 0 0 23.936 13.888zM480 875.456V585.152a64 64 0 0 0-32.256-55.552l-103.808-59.328A16 16 0 0 0 320 484.16v123.456a16 16 0 0 1-23.168 14.336l-23.168-11.584A32 32 0 0 1 256 581.696V438.592a32 32 0 0 0-16.128-27.776l-87.936-50.304A16 16 0 0 0 128 374.4v290.304a64 64 0 0 0 32.256 55.552l295.808 169.088a16 16 0 0 0 23.936-13.888zM64 739.136v-391.68a64 64 0 0 1 32.256-55.616l384-219.392a64 64 0 0 1 63.488 0l384 219.392A64 64 0 0 1 960 347.52v391.296a0.448 0.448 0 0 1-0.32 0.448l-415.936 237.632a64 64 0 0 1-63.488 0l-415.616-237.44a3.008 3.008 0 0 0-0.64-0.32z m416.256-592.96L217.28 296.32a16 16 0 0 0 0 27.776l262.976 150.272a64 64 0 0 0 63.488 0l262.976-150.272a16 16 0 0 0 0-27.776L543.744 146.176a64 64 0 0 0-63.488 0z" p-id="52002" fill="var(--no-selected-left-color)"></path></svg>
            </div>
            <text style="color:var(--no-selected-left-color)" class="margin-20-top">现货</text>
          </div>
      </div>
      <div class="top" v-show="tabDetailStore.current == 0">
        <CommentList
            :company-info-id="company_info_id_text"
        >
        </CommentList>
      </div>
      <div class="top" v-show="tabDetailStore.current == 3">
        <QuestionList
            :company-info-id="company_info_id_text"
        >
        </QuestionList>
      </div>
      <div class="top_right margin-20-top" v-show="tabDetailStore.current == 0 || tabDetailStore.current == 3">
        <div class="top_right_space margin-20-top">
          <text class="top_right_title font-8-size font-60-weight">附近商家</text>
          <router-link class="left" to="/forum" v-for="(item, index) in nearbyList" :key="index">
            <div class="left_1">
              <CreditScore :credit-score="item.score" credit-score-text="信用分" :font-size="10" :font-size1="10" height="50" :width="150"></CreditScore>
              <div class="left_1_2">
                <template v-if="item.id&&item.id!='0'&&item.id!=0&&item.id!='-1'&&item.id!=-1&&item.id.length>0">
                  <text class="font-10-size font-60-weight margin-10-left">{{ item.company_name }}</text>
                </template>
                <template v-else>
                  <el-link type="info" :underline="false" @click.stop="hasNoItemIdTips"><text class="font-18-size font-60-weight margin-10-left">{{ item.company_name }}</text></el-link>
                </template>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="top" v-show="tabDetailStore.current == 1">
        <div class="small_tag">
          <text class="font-60-weight font-15-size">杨木胶合板</text>
          <Tag tag="定制" number="30" color="black"></Tag>
        </div>
        <el-input class="margin-20-top" v-model="purpose" placeholder="请描述你想买杨木胶合板的具体用途，越详细有助于买到理想的货" />
        <div class="log margin-20-top">
          <div>
            <text class="font-12-size">1、</text>
            <text class="font-10-size">原木选择【从左到右，成本从低到高】:</text>
          </div>
          <el-checkbox-group v-model="checkedLog" class="radio_row margin-20-top margin-20-left">
            <el-checkbox v-for="(item,index) in log" :key="index" :label="item">{{
                item
              }}</el-checkbox>
          </el-checkbox-group>
          <el-radio-group v-model="LogMethod" class="radio_column margin-20-top">
            <el-radio label="1" border>
              <div class="font-15-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1">按层混合：</text>
                <div class="log_detail_item_2">
                  <div class="margin-10-top">
                    <text>表面层选择西洋杨单板,西洋杨具有较好的强度和稳定性，同时其表面光滑，颜色均匀，较适合作为胶合板的表面层。虽然成本较高，但作为表面层的需求量相对较小，对整体成本的影响较小。</text>
                  </div>
                  <div class="margin-10-top">
                    <text>中间层选择使用毛白杨和江杨单板。这两种杨树品种的成本相对较低，虽然性能可能略逊于西洋杨，但在中间层中，其性能已经足够满足大部分应用需求。使用毛白杨和江杨作为中间层可以降低整体成本。</text>
                  </div>
                  <div class="margin-20-top">
                    <text>外</text>
                    <el-input-number class="margin-20-left" v-model="outerLayers" :precision="0" :step="1" :min="2" />
                    <text class="margin-20-left">层</text>
                    <text class="margin-20-left">西洋杨</text>
                  </div>
                  <div>
                    <text>内</text>
                    <el-input-number class="margin-20-left" v-model="innerLayers" :precision="0" :step="1" :min="3"></el-input-number>
                    <text class="margin-20-left">层</text>
                    <text class="margin-20-left">毛白杨</text>
                  </div>
                  <div>
                    <text>总</text>
                    <el-input-number class="margin-20-left" v-model="totalLayers" :disabled="true"></el-input-number>
                    <text class="margin-20-left">层</text>
                  </div>
                </div>
              </div>
            </el-radio>
            <el-radio label="2" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">按比例混合：</text>
                <div class="log_detail_item_2">
                    <text>在制作胶合板时，可以按一定比例混合使用不同杨树品种的单板。例如，可以将毛白杨、江杨和西洋杨按1:1:1或其他比例混合使用。</text>
                    <text>这样可以平衡各种杨树品种的性能特点，使胶合板具有更好的综合性能。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="3" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">按需求定制：</text>
                <div class="log_detail_item_2">
                  <text>根据客户的具体需求，可以灵活调整不同杨树品种的使用比例和方式。</text>
                  <text>如果客户需要较高的强度和稳定性，可以适当增加性能较好的杨树品种的比例；</text>
                  <text>如果客户更关注成本，则可以优先选择成本较低的品种。</text>
                </div>
              </div>
            </el-radio>
          </el-radio-group>
        </div>
        <div class="log margin-20-top">
          <div>
            <text class="font-12-size">2、</text>
            <text class="font-10-size">原木剥皮，切割获得单板：</text>
          </div>
          <el-radio-group v-model="cuttingMethod" class="radio_column margin-20-top">
            <el-radio label="1" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">旋切法：</text>
                <div class="log_detail_item_2">
                  <text>适用于直径较小、纹理较直的原木(如桉树、杨树等)，可以获得较大宽度的单板，利用率较高。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="2" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">平切法：</text>
                <div class="log_detail_item_2">
                  <text>适用于直径较大、纹理较复杂的原木(如橡木、胡桃木等)，可以获得规整的单板，易于拼接，但利用率相对较低。</text>
                </div>
              </div>
            </el-radio>
          </el-radio-group>
        </div>
        <div class="log margin-20-top">
          <div>
            <text class="font-12-size">3、</text>
            <text class="font-10-size">修剪单板,可提供的修剪形状：</text>
          </div>
          <el-radio-group v-model="shape" class="radio_column margin-20-top">
            <el-radio label="1" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">矩形：</text>
                <div class="log_detail_item_2">
                  <text>最常见的修剪形状，适用于多数家具和装饰制品。</text>
                  <text>需要提供长度、宽度和厚度，统一以毫米为单位。</text>
                  <div class="margin-20-top">
                    <div>
                      <text>长度</text>
                      <el-input-number class="margin-20-left" v-model="rectangleLong" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div>
                      <text>宽度</text>
                      <el-input-number class="margin-20-left" v-model="rectangleWidth" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div>
                      <text>厚度</text>
                      <el-input-number class="margin-20-left" v-model="rectangleThickness" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                  </div>
                  <div class="margin-20-top">
                    <text>数量</text>
                    <el-input-number class="margin-20-left" v-model="rectangleCount" :precision="2" :step="0.1" :min="1" />
                    <text class="margin-20-left">方</text>
                  </div>
                </div>
              </div>
            </el-radio>
            <el-radio label="2" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">正方形：</text>
                <div class="log_detail_item_2">
                  <text>正方形的单板适用于拼接或镶嵌设计，如地板、墙面装饰等。</text>
                  <text>需要提供边长、厚度，统一以毫米为单位。</text>
                  <div class="margin-20-top">
                    <div>
                      <text>边长</text>
                      <el-input-number class="margin-20-left" v-model="squareLengthOfSide" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div>
                      <text>厚度</text>
                      <el-input-number class="margin-20-left" v-model="squareThickness" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                  </div>
                  <div class="margin-20-top">
                    <text>数量</text>
                    <el-input-number class="margin-20-left" v-model="squareCount" :precision="2" :step="0.1" :min="1" />
                    <text class="margin-20-left">方</text>
                  </div>
                </div>
              </div>
            </el-radio>
            <el-radio label="3" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">圆形：</text>
                <div class="log_detail_item_2">
                  <text>制作圆形的家具，如桌子、镜框等。</text>
                  <text>需要提供直径，统一以毫米为单位。</text>
                  <div class="margin-20-top">
                    <div>
                      <text>直径</text>
                      <el-input-number class="margin-20-left" v-model="roundDiameter" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div>
                      <text>厚度</text>
                      <el-input-number class="margin-20-left" v-model="roundThickness" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                  </div>
                  <div class="margin-20-top">
                    <text>数量</text>
                    <el-input-number class="margin-20-left" v-model="roundCount" :precision="2" :step="0.1" :min="1" />
                    <text class="margin-20-left">方</text>
                  </div>
                </div>
              </div>
            </el-radio>
            <el-radio label="4" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">椭圆形：</text>
                <div class="log_detail_item_2">
                  <text>制作椭圆形的家具，如桌子、镜框等</text>
                  <text>需要提供长轴、短轴和厚度，统一以毫米为单位。</text>
                  <div class="margin-20-top">
                    <div>
                      <text>长轴</text>
                      <el-input-number class="margin-20-left" v-model="ovalLongAxis" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div>
                      <text>短轴</text>
                      <el-input-number class="margin-20-left" v-model="ovalMinorAxis" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div>
                      <text>厚度</text>
                      <el-input-number class="margin-20-left" v-model="ovalThickness" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div class="margin-20-top">
                      <text>数量</text>
                      <el-input-number class="margin-20-left" v-model="ovalCount" :precision="2" :step="0.1" :min="1" />
                      <text class="margin-20-left">方</text>
                    </div>
                  </div>
                </div>
              </div>
            </el-radio>
            <el-radio label="5" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">楔形：</text>
                <div class="log_detail_item_2">
                  <text>用于特殊的家具设计，如圆形拼接的桌面或装饰面板。</text>
                  <div>
                    <el-image src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_7e2290c4-bdc6-466c-b9b4-819ac17a96aa.png"/>
                  </div>
                  <div class="margin-20-top">
                    <div>
                      <text>底部矩形长 a</text>
                      <el-input-number class="margin-20-left" v-model="ovalLongAxis" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div>
                      <text>底部矩形宽 b</text>
                      <el-input-number class="margin-20-left" v-model="ovalMinorAxis" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div>
                      <text>平行于a的顶层边缘长度 c</text>
                      <el-input-number class="margin-20-left" v-model="ovalThickness" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div>
                      <text>底层矩形到顶层边缘的高度 h</text>
                      <el-input-number class="margin-20-left" v-model="ovalThickness" :precision="2" :step="0.1" :min="0" />
                      <text class="margin-20-left">mm</text>
                    </div>
                    <div class="margin-20-top">
                      <text>数量</text>
                      <el-input-number class="margin-20-left" v-model="ovalCount" :precision="2" :step="0.1" :min="1" />
                      <text class="margin-20-left">方</text>
                    </div>
                  </div>
                </div>
              </div>
            </el-radio>
            <el-radio label="6" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">不规则形状：</text>
                <div class="log_detail_item_2">
                  <text>用于特殊的设计需求，如拼接艺术品、装饰品等，这类形状需要根据客户的具体需求进行定制</text>
                  <div class="margin-20-top">
                    <AddComment
                        placeholder-text="不规则形状发布需求"
                        cancel-text="取消发布"
                        confirm-text="发布需求"
                        @toFatherQuestionList="receiveChildAddComment"
                        :company-info-id="companyInfoId"
                        addType="shape"
                        questionType="shape"
                    >
                      <template #clickDrawer>
                        <div class="days-left">
                          填写不规则形状需求
                        </div>
                      </template>
                    </AddComment>
                  </div>
                </div>
              </div>
            </el-radio>
          </el-radio-group>
        </div>
        <div class="log margin-20-top">
          <div>
            <text class="font-12-size">4、</text>
            <text class="font-10-size">单板修光：为了让单板表面平整光滑，便于后续的胶涂和组装。选择较粗砂纸即可。</text>
          </div>
          <el-radio-group v-model="roughSandpaper" class="radio_row margin-20-top">
            <el-radio label="1">40</el-radio>
            <el-radio label="2">50</el-radio>
            <el-radio label="3">60</el-radio>
            <el-radio label="4">80</el-radio>
            <el-radio label="5">100</el-radio>
            <el-radio label="6">120</el-radio>
          </el-radio-group>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">粗砂光：</text>
            <div class="log_detail_item_2">
              <text>使用40-80目砂纸进行处理。</text>
              <text>适用于对光滑度要求不高的场景，如初步去除毛刺、凹凸不平等表面缺陷。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">中砂光：</text>
            <div class="log_detail_item_2">
              <text>使用100-120目砂纸进行处理。</text>
              <text>适用于一般家具和木工制品的表面处理，以达到适中的光滑度。</text>
            </div>
          </div>
        </div>
        <div class="log margin-20-top">
          <div class="log_item">
            <div class="log_item_1">
              <text class="font-12-size">5、</text>
              <text class="font-10-size">干燥过程的含水率：</text>
            </div>
          </div>
          <el-radio-group v-model="moistureContent" class="radio_column margin-20-top">
            <el-radio label="1" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">8%～10%：</text>
                <div class="log_detail_item_2">
                  <text>家具制造、室内装饰以及其他对木材稳定性要求较高的应用场景。</text>
                  <text>这种含水率较低，有助于减少木材收缩、膨胀和变形的可能性。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="2" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">10%-12%：</text>
                <div class="log_detail_item_2">
                  <text>一般室内建筑用途，如地板、门、窗等。</text>
                  <text>含水率适中，适合大部分室内环境。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="3" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">12%-15%：</text>
                <div class="log_detail_item_2">
                  <text>一些对木材稳定性要求较低的场景，如托盘、包装箱等。</text>
                  <text>这种含水率相对较高，但在一定程度上可以降低干燥成本。</text>
                </div>
              </div>
            </el-radio>
          </el-radio-group>
        </div>
        <div class="log margin-20-top">
          <div class="log_item">
            <div>
              <text class="font-12-size">6、</text>
              <text class="font-10-size">胶涂：选用合适的胶水均匀地涂抹在单板的表面，涂胶的厚度和均匀度会影响胶合板的粘接强度和质量。</text>
            </div>
          </div>
          <el-radio-group v-model="glue" class="radio_row margin-20-top">
            <el-radio label="1">3M Super 77</el-radio>
            <el-radio label="2">三棵树白乳胶</el-radio>
          </el-radio-group>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">儿童家具</text>
            <div class="log_detail_item_2">
              <text>对于儿童家具，环保性能和安全性至关重要。因此，建议使用环保等级较高的胶水，如E0级异氰酸酯胶（MDI）、无醛胶（就是不含甲醛的胶水）、E0聚氨酯胶、E0级白乳胶。</text>
              <text>这类胶水的甲醛释放量非常低，有利于保护儿童健康。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">室内家具，衣柜、书柜</text>
            <div class="log_detail_item_2">
              <text>对于一般室内家具（如衣柜、书柜等），可以使用环保等级为E1级的脲醛树脂胶（UF）。</text>
              <text>这类胶水具有较好的粘合性能，且甲醛释放量较低，符合室内环境要求。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">厨房和浴室</text>
            <div class="log_detail_item_2">
              <text>对于可能接触水分的厨房和浴室家具，建议使用耐水性能较好的胶水，如酚醛树脂胶（PF）,异氰酸酯胶（PUR）。</text>
              <text>这类胶水具有很好的耐水性能，能够保证家具在潮湿环境中的使用寿命。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">户外家具</text>
            <div class="log_detail_item_2">
              <text>户外家具需要具备较强的耐候性和耐水性能。</text>
              <text>建议使用酚醛树脂胶（PF）或更耐候的聚氨酯胶。这些胶水类型能够在户外环境中保持良好的粘合强度，确保家具的稳定性和使用寿命。</text>
            </div>
          </div>
        </div>
        <div class="log margin-20-top">
          <div class="log_item">
            <div>
              <text class="font-12-size">7、</text>
              <text class="font-10-size">叠放，按照预定的厚度，将涂好胶水的单板叠放在一起。</text>
            </div>
          </div>
          <el-radio-group v-model="stackingMode" class="radio_column margin-20-top">
            <el-radio label="1" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">交错叠放</text>
                <div class="log_detail_item_2">
                  <text>这是一种常见的叠放方式，将单板按照纹理方向交错摆放，即一个单板的纹理方向与其相邻的单板纹理方向垂直。</text>
                  <text>这样可以提高胶合板的稳定性和强度，防止因纹理方向一致导致的变形或开裂。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="2" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">同向叠放</text>
                <div class="log_detail_item_2">
                  <text>在这种叠放方式中，所有单板的纹理方向相同。</text>
                  <text>这种方式可能会降低胶合板的稳定性和抗变形能力，但在某些特殊应用场景下（如弯曲胶合板制作）可能是合适的选择。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="3" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">随机叠放</text>
                <div class="log_detail_item_2">
                  <text>在这种叠放方式中，单板之间的纹理方向没有固定规律。</text>
                  <text>这种方式可能导致胶合板性能不稳定，但在一些低要求的应用场景下可以考虑使用。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="4" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">对称叠放</text>
                <div class="log_detail_item_2">
                  <text>在这种叠放方式中，单板的叠放方式呈现对称的形式，即中间单板的纹理方向与其两侧的单板纹理方向相反。</text>
                  <text>这种叠放方式可以提高胶合板的稳定性，适用于对平整度和稳定性要求较高的场景。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="5" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">混合叠放</text>
                <div class="log_detail_item_2">
                  <text>这种叠放方式结合了不同种类或质量的单板，如将硬木单板与软木单板交错叠放，或将不同树种的单板混合叠放。</text>
                  <text>这样可以在一定程度上平衡胶合板的性能和成本，适用于对性能和成本要求均衡的场景。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="6" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">夹芯叠放</text>
                <div class="log_detail_item_2">
                  <text>在这种叠放方式中，可以在单板之间加入其他材料作为夹芯，如泡沫、细木工板或其他轻质材料。</text>
                  <text>这种叠放方式可以降低胶合板的重量，提高隔音、隔热性能，适用于特殊应用场景。</text>
                </div>
              </div>
            </el-radio>
          </el-radio-group>
        </div>
        <div class="log margin-20-top">
          <div class="log_item">
            <div>
              <text class="font-12-size">8、</text>
              <text class="font-10-size">热压：</text>
            </div>
          </div>
          <el-radio-group v-model="hotPressing" class="radio_column margin-20-top">
            <el-radio label="1" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">单次热压工艺</text>
                <div class="log_detail_item_2">
                  <text>由于单次热压工艺可能导致胶合板强度、稳定性和表面质量较低，这种胶合板更适用于对性能要求不高的环境。</text>
                  <text>例如，家具制作（尤其是非承重部分）、室内装修、展示柜等场景。这些环境通常不需要高强度和耐候性，因此单次热压胶合板可以满足需求。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="2" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">二次热压工艺</text>
                <div class="log_detail_item_2">
                  <text>二次热压工艺使胶合板具有更高的强度、稳定性和表面质量。这使得这种胶合板更适用于要求较高的环境，例如户外建筑、高强度家具（如承重部分）、船舶制造、车辆制造等。</text>
                  <text>在这些场景中，胶合板需要具有较高的耐候性、抗湿性和耐磨性，因此双次热压胶合板更适合这些应用。</text>
                </div>
              </div>
            </el-radio>
          </el-radio-group>
        </div>
        <div class="log margin-20-top">
          <div>
            <text class="font-12-size">9、</text>
            <text class="font-10-size">冷却与定型：</text>
          </div>
          <el-radio-group v-model="cooling" class="radio_row margin-20-top">
            <el-radio label="1">自然冷却</el-radio>
            <el-radio label="2">强制冷却</el-radio>
          </el-radio-group>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">生产规模：</text>
            <div class="log_detail_item_2">
              <text>对于大规模生产的企业，采用强制冷却方式更为合适。因为强制冷却可以提高冷却速度，加快生产效率，满足高产量的需求。</text>
              <text>对于小规模生产或者家庭作坊式生产，自然冷却可能更为适用，因为它成本较低，操作简单。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">胶合板类型：</text>
            <div class="log_detail_item_2">
              <text>不同类型的胶合板对冷却方式的要求可能不同。例如，对于一些对温度敏感的高级胶合板，可能需要采用强制冷却以确保产品质量。</text>
              <text>而对于一些普通胶合板，自然冷却可能就足够了。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="font-15-size log_detail_item_1">生产环境：</text>
            <div class="log_detail_item_2">
              <text>生产环境的温度、湿度等因素也会影响冷却方式的选择。</text>
              <text>在高温、高湿度的环境下，自然冷却可能效果不佳，这时采用强制冷却能更好地保证产品质量。而在温度适中、通风良好的环境下，自然冷却可能就能满足要求。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="font-15-size log_detail_item_1">能源成本：</text>
            <div class="log_detail_item_2">
              <text>强制冷却需要消耗一定的能源，如电力等。</text>
              <text>在能源成本较高的地区，自然冷却可能更为经济。但如果强制冷却能明显提高生产效率，降低其他成本，那么采用强制冷却仍然是值得的。</text>
            </div>
          </div>
        </div>
        <div class="log margin-20-top">
          <div class="log_item">
            <div>
              <text class="font-12-size">10、</text>
              <text class="font-10-size">冷却后修边：对胶合板边缘处理，去除胶合板边缘可能多余的胶水、毛刺或不整齐现象</text>
            </div>
          </div>
          <el-radio-group v-model="coolTrimEdges" class="radio_column margin-20-top">
            <el-radio label="1" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="font-15-size log_detail_item_1">手工修边：</text>
                <div class="log_detail_item_2">
                  <text>使用手工工具（如砂纸、锉刀等）进行修边。</text>
                  <text>适用于小规模生产或特殊尺寸的胶合板，成本较低，但效率较慢。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="2" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="font-15-size log_detail_item_1">机械修边：</text>
                <div class="log_detail_item_2">
                  <text>使用修边机进行修边，可以快速去除胶合板边缘多余的部分，提高生产效率。</text>
                  <text>适用于大规模生产或标准尺寸的胶合板。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="3" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="font-15-size log_detail_item_1">数控修边：</text>
                <div class="log_detail_item_2">
                  <text>使用数控修边机进行修边，可以精确地按照预定的尺寸和形状进行修边。</text>
                  <text>适用于对精度要求高的场景，如高档家具制作、复杂形状的胶合板等。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="4" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="font-15-size log_detail_item_1">激光修边：</text>
                <div class="log_detail_item_2">
                  <text>使用激光切割机进行修边，可以实现无接触、高精度的修边处理。</text>
                  <text>适用于对切割质量要求极高的场景，如航空航天、高精密零部件制造等。</text>
                </div>
              </div>
            </el-radio>
          </el-radio-group>
        </div>
        <div class="log margin-20-top">
          <div class="log_item">
            <div>
              <text class="font-12-size">11、</text>
              <text class="font-10-size">冷却后修光：提高胶合板的外观质量，去除热压过程中可能产生的表面凹凸不平、胶水溢出等缺陷。选择细砂光。</text>
            </div>
          </div>
          <el-radio-group v-model="roughSandpaper" class="radio_row margin-20-top">
            <el-radio label="1">150</el-radio>
            <el-radio label="2">180</el-radio>
            <el-radio label="3">220</el-radio>
            <el-radio label="4">280</el-radio>
            <el-radio label="5">320</el-radio>
            <el-radio label="6">400</el-radio>
            <el-radio label="6">500</el-radio>
            <el-radio label="6">600</el-radio>
          </el-radio-group>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">中等细砂光：</text>
            <div class="log_detail_item_2">
              <text>通常使用150-180目砂纸进行处理。</text>
              <text>去除轻微的表面缺陷和磨平胶合板表面。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">细砂光：</text>
            <div class="log_detail_item_2">
              <text>通常使用220-240目砂纸进行处理。</text>
              <text>提高胶合板表面的光滑度和质感。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">超细砂光：</text>
            <div class="log_detail_item_2">
              <text>通常使用320-400目砂纸进行处理。</text>
              <text>适用于特殊场景，如乐器制造、高档装饰材料等，要求表面光滑程度极高。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">镜面砂光：</text>
            <div class="log_detail_item_2">
              <text>使用更高精度的砂纸（如400目及以上）进行处理。</text>
              <text>使木材表面达到镜面般的光滑度。通常用于高端艺术品、雕塑等特殊场景。</text>
            </div>
          </div>
        </div>
        <div class="log margin-20-top">
          <div class="log_item">
            <div>
              <text class="font-12-size">12、</text>
              <text class="font-10-size">检验等级</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">外观质量：</text>
            <div class="log_detail_item_2">
              <text>优等品：表面光滑、无瑕疵，适用于高档家具、装饰和建筑应用。</text>
              <text>一等品：表面质量较好，允许较小的瑕疵，适用于一般家具和装饰。</text>
              <text>二等品：表面质量较低，允许较多的瑕疵，适用于包装和其他低要求场合。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">甲醛释放量：</text>
            <div class="log_detail_item_2">
              <text>E0级：符合E0级甲醛排放标准，适用于室内家具和装饰。</text>
              <text>E1级：符合E1级甲醛排放标准，适用于室内家具和装饰。</text>
              <text>E2级：符合E2级甲醛排放标准，适用于包装和其他低要求场合。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">含水率：</text>
            <div class="log_detail_item_2">
              <text>低含水率：含水率较低，适用于干燥环境。</text>
              <text>中等含水率：含水率适中，适用于一般潮湿环境。</text>
              <text>高含水率：含水率较高，适用于潮湿环境。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">耐水性：</text>
            <div class="log_detail_item_2">
              <text>MR（Moisture Resistant）级：也称为内部用胶合板，主要用于室内环境，具有一定的耐潮湿性能，但不适合长时间暴露在水中或高湿度环境。这种胶合板适用于家具制作、室内装饰和建筑应用。</text>
              <text>WBP（Water and Boil Proof）级：这种胶合板具有良好的耐水性能，可用于潮湿环境和户外应用。WBP级胶合板的胶合剂可以承受多次的水浸泡和煮沸测试，不会出现胶合层分离现象。这种胶合板适用于户外家具、露天建筑、船舶制造等场景。</text>
              <text>MARINE（海洋）级：这是最高等级的胶合板，具有极高的耐水性和耐腐蚀性能。MARINE级胶合板主要用于船舶建造、港口工程、海上平台等严苛环境，要求胶合板具备长期抵抗海水浸泡、高温、高湿度和强烈紫外线等恶劣条件的能力。</text>
            </div>
          </div>
          <div class="font-10-size margin-10-top margin-20-left log_detail_item">
            <text class="log_detail_item_1 font-15-size">胶合强度：</text>
            <div class="log_detail_item_2">
              <text>I级胶合板：这种胶合板具有最高的胶合强度，使用高质量的胶合剂。I级胶合板的各层单板紧密结合，胶合层不易分离，适用于高强度、高耐用性要求的场景，如船舶制造、重型机械、户外建筑等。</text>
              <text>II级胶合板：这种胶合板的胶合强度略低于I级，但仍具有较好的结构性能。II级胶合板适用于一般建筑、家具制作和室内装饰等场景，其胶合层也具有较好的耐水性能。</text>
              <text>III级胶合板：这种胶合板的胶合强度相对较低，主要用于室内环境和不承受较大载荷的场景。III级胶合板使用的胶合剂可能没有I级和II级那么高质量，但在一定程度上仍具有耐潮湿性能。</text>
              <text>IV级胶合板：这是胶合度最低的胶合板，主要用于室内家具、装饰材料和包装等场景。IV级胶合板的胶合强度和耐水性能较差，不适合承受较大载荷或暴露在潮湿环境中。</text>
            </div>
          </div>
        </div>
        <div class="log margin-20-top">
          <div class="log_item">
            <div>
              <text class="font-12-size">13、</text>
              <text class="font-10-size">裁剪：对于小批量、简单形状的裁剪需求，可以选择手工裁剪或圆锯裁剪；而对于大批量、高精度、复杂形状的裁剪需求，可以选择数控切割、激光切割或水刀切割。</text>
            </div>
          </div>
          <el-radio-group v-model="finalCut" class="radio_column margin-20-top">
            <el-radio label="1" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">手工裁剪：</text>
                <div class="log_detail_item_2">
                  <text>使用手动工具（如手锯、木工刨等）进行裁剪。</text>
                  <text>手工裁剪成本较低，但速度较慢，精度可能受到操作者技能的影响。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="2" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">圆锯裁剪：</text>
                <div class="log_detail_item_2">
                  <text>使用圆锯机进行裁剪，适用于直线切割。</text>
                  <text>圆锯裁剪速度较快，精度较高，但可能不适用于复杂的曲线切割。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="3" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">数控切割：</text>
                <div class="log_detail_item_2">
                  <text>使用数控切割机（如CNC机床）进行裁剪，可以实现高精度、复杂形状的切割。</text>
                  <text>数控切割成本较高，但适用于高精度、大批量的生产需求。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="4" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">激光切割：</text>
                <div class="log_detail_item_2">
                  <text>使用激光切割机进行裁剪，适用于高精度、复杂形状的切割。</text>
                  <text>激光切割速度快、精度高，但成本较高，且可能对胶合板表面产生烧伤。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="5" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">水刀切割：</text>
                <div class="log_detail_item_2">
                  <text>使用高压水流进行裁剪，适用于复杂形状的切割。</text>
                  <text>水刀切割无热影响，精度较高，但成本较高，且可能对胶合板表面产生水印。</text>
                </div>
              </div>
            </el-radio>
          </el-radio-group>
        </div>
        <div class="log margin-20-top">
          <div class="log_item">
            <div>
              <text class="font-12-size">14、</text>
              <text class="font-10-size">装饰面层：将选定的装饰面层贴附或涂覆在胶合板表面。</text>
            </div>
          </div>
          <el-radio-group v-model="architecturalSurface" class="radio_column margin-20-top">
            <el-radio label="1" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">饰面单板：</text>
                <div class="log_detail_item_2">
                  <text>特点：自然木纹，美观大方，提升产品档次。</text>
                  <text>细分种类：橡木、胡桃木、枫木、樱桃木、桃花心木等。</text>
                  <text>价格范围：根据树种、产地和质量的不同，价格在每平方米 30-300 元不等。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="2" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">木皮贴面：</text>
                <div class="log_detail_item_2">
                  <text>特点：天然木纹，增加家具的档次感。</text>
                  <text>细分种类：胡桃木、橡木、桃花心木、枫木等。</text>
                  <text>价格范围：每平方米 50-200 元不等。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="3" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">水性漆：</text>
                <div class="log_detail_item_2">
                  <text>价格范围：每平方米 30-100 元不等。</text>
                  <text>适用于一般家具、门窗、橱柜等室内装修场景，因其成本较低且颜色多样，可以满足各种风格的装修需求。</text>
                  <text>油漆是一种常见的涂料，可以涂在杨木胶合板表面，提供光滑、亮丽的外观。油漆具有一定的耐磨性和耐候性，但可能需要定期维护和补漆。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="4" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">PVC膜：</text>
                <div class="log_detail_item_2">
                  <text>价格范围：每平方米 30-80 元不等。</text>
                  <text>适用于橱柜、衣柜、浴室家具等潮湿环境中的家具制品，因其较好的防水性能和多样化的颜色选择，尤其适用于防潮性能要求较高的场景。</text>
                  <text>细分种类：木纹PVC、纯色PVC、石纹PVC等。，可以贴在杨木胶合板表面，提供多样化的颜色和纹理选择。PVC膜具有较好的耐磨性、耐候性和易清洁性能，但可能受到高温和阳光暴晒的影响。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="5" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">火石板贴面：</text>
                <div class="log_detail_item_2">
                  <text>价格范围：每平方米 200-500 元不等。</text>
                  <text>特点：防火、耐磨、质感好，适用于高档装修场景。</text>
                  <text>细分种类：天然火石板、仿火石板等。</text>
                </div>
              </div>
            </el-radio>
            <el-radio label="6" border>
              <div class="font-10-size margin-10-top margin-20-left log_detail_item radio_item">
                <text class="log_detail_item_1 font-15-size">轻质石材装饰材料：</text>
                <div class="log_detail_item_2">
                  <text>希望为胶合板添加一种石材效果，不适合选用重的人造石。选择一些轻便的替代品可以模拟石材的纹理和外观</text>
                  <text>特点：防火、耐磨、环保，适用于高档装修场景</text>
                </div>
              </div>
            </el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="top_right margin-20-top" v-show="tabDetailStore.current == 1">
        <div class="top_right_space margin-20-top">
          <text class="top_right_title font-8-size font-60-weight">定制明细</text>
          <div class="top_right_total font-10-size margin-10-top">
            <div class="top_right_total_item">
              <text>总工期</text>
              <text>16天</text>
            </div>
            <div class="top_right_total_item margin-10-top">
              <text>总价格</text>
              <text>¥1500.65</text>
            </div>
          </div>
          <div class="top_right_shop">
            <svg t="1682575413488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="49443" width="200" height="200"><path d="M756 657.1l-373.1-1L326 309.9c-4.1-32.1-31.6-56.3-63.9-56.3h-54.7c-17.9 0-32.3 14.5-32.3 32.3 0 17.9 14.5 32.3 32.3 32.3l54.6 1 57 346.3c4.1 32.1 31.6 56.3 63.9 56.3H756c17.9 0 32.3-14.5 32.3-32.3 0.1-17.9-14.4-32.4-32.3-32.4z m-41.3 85.8c-22.8 0-41.2 18.5-41.2 41.2 0 22.8 18.5 41.2 41.2 41.2s41.2-18.5 41.2-41.2c0.1-22.7-18.4-41.2-41.2-41.2z m-299 0c-22.8 0-41.2 18.5-41.2 41.2 0 22.8 18.5 41.2 41.2 41.2 22.8 0 41.2-18.5 41.2-41.2 0-22.7-18.5-41.2-41.2-41.2z" fill="var(--selected-left-color)" p-id="49444"></path><path d="M834 321.3c-12.3-14.6-30.3-23-49.4-23H397.5c-17.9 0-32.3 14.5-32.3 32.3 0 17.9 14.5 32.3 32.3 32.3l387.1-1-36.8 183.5H438.7c-17.9 0-32.3 14.5-32.3 32.3 0 17.9 14.5 32.3 32.3 32.3h309.1c31.3 0 58-22.4 63.3-52.5l37-183.7c3.3-18.7-1.8-37.9-14.1-52.5z" fill="var(--selected-left-color)" p-id="49445"></path><path d="M512.1 0C229.8 0 0.2 229.6 0.2 511.9c0 282.3 229.6 511.9 511.9 511.9 282.3 0 511.9-229.6 511.9-511.9C1024 229.6 794.4 0 512.1 0z m0 959.1c-246.6 0-447.2-200.6-447.2-447.2S265.5 64.6 512.1 64.6s447.3 200.6 447.3 447.3c0 246.6-200.7 447.2-447.3 447.2z" fill="var(--selected-left-color)" p-id="49446"></path></svg>
<!--            <svg t="1682563226524" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6121" width="200" height="200"><path d="M711.168 352.886c9.728 0 17.132 1.3 22.528 3.939a25.876 25.876 0 0 1 11.5 9.728c2.285 3.938 3.309 7.877 3.072 12.327-0.236 4.45-0.787 8.153-1.772 11.303l-6.695 19.417-10.989 32.295-12.288 34.935c-3.82 11.54-6.892 20.716-8.94 27.293-4.647 13.903-10.24 23.63-17.172 29.145a39.345 39.345 0 0 1-25.324 8.152h-272.62l7.916 47.262H661.74c16.66 0 25.128 7.09 25.128 21.504 0 7.09-1.812 13.154-5.16 18.117-3.072 5.002-9.688 7.64-19.456 7.64H390.42a30.405 30.405 0 0 1-17.408-4.726 40.606 40.606 0 0 1-11.54-12.367 69.553 69.553 0 0 1-7.68-16.541 189.44 189.44 0 0 1-4.332-16.778l-2.875-15.242-5.908-30.208-7.404-40.448-8.192-44.898-22.528-118.154H263.64a20.283 20.283 0 0 1-12.8-3.939 33.989 33.989 0 0 1-13.312-21.267 68.214 68.214 0 0 1-1.221-11.5c0-7.09 2.284-12.84 6.931-17.33a26.663 26.663 0 0 1 18.905-6.853h52.54a37.022 37.022 0 0 1 16.62 3.151c4.095 2.087 7.443 4.726 10.003 7.877 2.324 3.15 4.096 6.577 5.12 9.964l2.52 8.94c0.788 2.876 1.3 6.814 2.049 11.816l2.087 15.478 3.072 19.968h355.052z m-87.316 298.26c6.656 0 13.037 1.339 18.944 3.702 6.144 2.363 11.264 5.75 15.636 10.24 4.332 4.45 7.916 9.452 10.476 15.478a47.655 47.655 0 0 1 0 37.81 49.743 49.743 0 0 1-26.112 25.993c-5.907 2.639-12.288 3.939-18.904 3.939-6.42 0-12.84-1.3-18.708-3.939a45.292 45.292 0 0 1-15.124-10.515 49.703 49.703 0 0 1-10.476-15.479 47.734 47.734 0 0 1 0-37.809c2.56-6.026 6.105-11.028 10.476-15.478 4.096-4.49 9.256-7.877 15.124-10.24 5.908-2.363 12.288-3.702 18.668-3.702z m-215.788-1.024a49.664 49.664 0 0 1 34.304 13.903c4.332 4.45 7.956 9.452 10.24 15.478a48.167 48.167 0 0 1 0 37.809c-2.284 6.065-5.908 11.028-10.24 15.518a53.17 53.17 0 0 1-15.596 10.476c-5.908 2.639-12.052 3.938-18.708 3.938-6.892 0-13.312-1.3-18.944-3.938a55.493 55.493 0 0 1-15.36-10.476 45.095 45.095 0 0 1-10.24-15.518 48.128 48.128 0 0 1 0-37.81c2.284-6.025 5.908-11.027 10.24-15.477 4.608-4.45 9.728-7.877 15.36-10.24 5.632-2.363 12.052-3.663 18.944-3.663zM512 1004.308C240.089 1004.308 19.692 783.91 19.692 512S240.09 19.692 512 19.692 1004.308 240.09 1004.308 512 783.91 1004.308 512 1004.308z m0-39.385c250.132 0 452.923-202.791 452.923-452.923S762.132 59.077 512 59.077 59.077 261.868 59.077 512 261.868 964.923 512 964.923z" fill="#2ab1e6" p-id="6122"></path></svg>-->
            <Tag tag="加入购物车，无需商家校验，我的定制符合我的需求" number="60" color="dark_blue"></Tag>
          </div>
          <div class="top_right_shop">
            <svg t="1682574124793" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8229" width="200" height="200"><path d="M936.16128 716.40064c-23.07072-38.46144-22.70208-39.1936-22.70208-39.1936s-79.67232 22.34368-94.51008-54.02624c-46.14656 0-46.14656 0-46.14656 0s-12.73856 76.48256-94.14144 53.84704c-23.54176 39.2192-24.33536 40.448-24.35584 40.46848 0.03072 0.0256 63.7184 44.51328 0 104.94464 24.72448 40.65792 24.72448 40.65792 24.72448 40.65792s70.3488-30.35136 93.39904 52.56192c46.6944 0 46.6944 0 46.6944 0s14.65856-76.19072 93.76768-53.66272c22.52288-38.46144 22.89664-38.81984 22.89664-38.81984S876.0576 771.66592 936.16128 716.40064zM794.86976 823.26528c-29.74208 0-53.85728-24.11008-53.85728-53.84704 0-29.7472 24.1152-53.84704 53.85728-53.84704 29.73696 0 53.85216 24.09984 53.85216 53.84704C848.72192 799.1552 824.60672 823.26528 794.86976 823.26528z" fill="var(--selected-left-color)" p-id="8230"></path><path d="M924.96896 339.22048c-22.47168-53.12-54.6304-100.81792-95.58016-141.7728-40.96-40.96-88.65792-73.1136-141.77792-95.58016-55.00928-23.26528-113.42848-35.06176-173.63456-35.06176s-118.62016 11.79648-173.62944 35.06176c-53.12 22.46656-100.81792 54.62528-141.7728 95.58016-40.96 40.95488-73.1136 88.65792-95.58016 141.7728-23.26528 55.00416-35.06688 113.42336-35.06688 173.63456 0 60.20608 11.79648 118.62016 35.06688 173.63456 22.46656 53.12 54.62528 100.81792 95.58016 141.76768 40.95488 40.96 88.6528 73.11872 141.7728 95.58016 55.00928 23.2704 113.42336 35.072 173.62944 35.072 58.29632 0 114.88256-11.16672 168.36096-32.98816-14.03904-11.71968-26.37312-25.40032-36.57728-40.64256-41.23648 14.6688-85.57056 22.72768-131.78368 22.72768-217.89184 0-395.15648-177.26976-395.15648-395.15136 0-217.89184 177.26464-395.15648 395.15648-395.15648 104.97024 0 200.43264 41.22112 271.26784 108.22144-182.71744 92.2368-298.46528 366.27456-298.46528 366.27456L415.232 456.81664l-147.58912 87.34208c62.58176 21.8624 152.04864 91.7504 228.02432 183.4496 53.6576-96.06144 219.09504-292.61312 299.56608-310.07744-31.03744-69.36064-13.66016-125.824-9.04192-190.70464 75.648 72.02816 122.94144 173.57824 122.94144 286.0288 0 34.048-4.33664 67.10272-12.47744 98.64704 16.10752 8.8576 30.81216 19.96288 43.66336 32.91648 13.09184-42.39872 19.70688-86.4768 19.70688-131.5584C960.03072 452.64384 948.22912 394.22464 924.96896 339.22048z" fill="var(--selected-left-color)" p-id="8231"></path></svg>
            <Tag tag="加入购物车，等待商家校验，给出我需求的最佳方案" number="60" color="dark_blue"></Tag>
          </div>
          <el-steps direction="vertical" class="margin-20-top">
            <el-step title="原木选择" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>毛白杨，西洋杨</text>
                    <text>按层混合，总层数7层</text>
                    <text>外2层西洋杨</text>
                    <text>里5层毛白杨</text>
                  </div>
                  <text>1天</text>
                </div>
              </template>
            </el-step>
            <el-step title="原木剥皮，切割获得单板" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>旋切法</text>
                  </div>
                  <text>2天</text>
                </div>
              </template>
            </el-step>
            <el-step title="修剪单板" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>矩形</text>
                    <text>长 1mm x 宽 1mm x 厚 1mm</text>
                    <text>数量 1 方</text>
                  </div>
                  <text>1.5天</text>
                </div>
              </template>
            </el-step>
            <el-step title="单板修光" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>40目砂纸</text>
                  </div>
                  <text>1天</text>
                </div>
              </template>
            </el-step>
            <el-step title="干燥" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>含水率 8%～10%</text>
                  </div>
                  <text>2天</text>
                </div>
              </template>
            </el-step>
            <el-step title="胶涂" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>3M Supper 77</text>
                  </div>
                  <text>2天</text>
                </div>
              </template>
            </el-step>
            <el-step title="叠放" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>混合叠放</text>
                  </div>
                  <text>1天</text>
                </div>
              </template>
            </el-step>
            <el-step title="热压" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>单次热压工艺</text>
                  </div>
                  <text>1天</text>
                </div>
              </template>
            </el-step>
            <el-step title="冷却与定型" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>自然冷却</text>
                  </div>
                  <text>2天</text>
                </div>
              </template>
            </el-step>
            <el-step title="冷却后修边" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>手工修边</text>
                  </div>
                  <text>2天</text>
                </div>
              </template>
            </el-step>
            <el-step title="冷却后修光" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>150目砂纸</text>
                  </div>
                  <text>2天</text>
                </div>
              </template>
            </el-step>
            <el-step title="检验等级" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text></text>
                  </div>
                  <text>2天</text>
                </div>
              </template>
            </el-step>
            <el-step title="裁剪" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>手工裁剪</text>
                  </div>
                  <text>2天</text>
                </div>
              </template>
            </el-step>
            <el-step title="装饰面层" status="process">
              <template #description>
                <div class="top_right_item">
                  <div class="top_right_1">
                    <text>饰面单板</text>
                  </div>
                  <text>4天</text>
                </div>
              </template>
            </el-step>
          </el-steps>
        </div>
      </div>
      <div class="top_3-2_top margin-20-left" v-show="tabDetailStore.current == 2">
        <el-row :gutter="24" style="width:unset">
          <el-col :span="24" :md="12">
            <div class="top_3-2_item">
              <div class="small_tag">
                <text class="font-60-weight font-15-size">杨木胶合板</text>
                <Tag tag="现货" number="30" color="black"></Tag>
              </div>
              <el-input class="margin-20-top" v-model="purpose" placeholder="请描述你想买杨木胶合板的具体用途，越详细有助于买到理想的货" />
              <el-table :data="tableData" style="width: 100%" height="250">
                <el-table-column fixed prop="date" label="规格参数" width="150" />
                <el-table-column prop="name" label="" width="330" />
              </el-table>
              <div class="top_right_total font-10-size margin-10-top">
                <Tag class="margin-10-top" tag="商家说：商品不适用于厨房和浴室家具，胶水防水性不够。" number="60" color="orange"></Tag>
                <Tag tag="买家需求 [ 给孩子坐个桌子，买来当桌面 ] ,商家校验结果：商品不适用于儿童家具，甲醛释放等级为E2。" number="60" color="orange"></Tag>
              </div>

              <div class="top_right_shop">
                <svg t="1682575413488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="49443" width="200" height="200"><path d="M756 657.1l-373.1-1L326 309.9c-4.1-32.1-31.6-56.3-63.9-56.3h-54.7c-17.9 0-32.3 14.5-32.3 32.3 0 17.9 14.5 32.3 32.3 32.3l54.6 1 57 346.3c4.1 32.1 31.6 56.3 63.9 56.3H756c17.9 0 32.3-14.5 32.3-32.3 0.1-17.9-14.4-32.4-32.3-32.4z m-41.3 85.8c-22.8 0-41.2 18.5-41.2 41.2 0 22.8 18.5 41.2 41.2 41.2s41.2-18.5 41.2-41.2c0.1-22.7-18.4-41.2-41.2-41.2z m-299 0c-22.8 0-41.2 18.5-41.2 41.2 0 22.8 18.5 41.2 41.2 41.2 22.8 0 41.2-18.5 41.2-41.2 0-22.7-18.5-41.2-41.2-41.2z" fill="var(--selected-left-color)" p-id="49444"></path><path d="M834 321.3c-12.3-14.6-30.3-23-49.4-23H397.5c-17.9 0-32.3 14.5-32.3 32.3 0 17.9 14.5 32.3 32.3 32.3l387.1-1-36.8 183.5H438.7c-17.9 0-32.3 14.5-32.3 32.3 0 17.9 14.5 32.3 32.3 32.3h309.1c31.3 0 58-22.4 63.3-52.5l37-183.7c3.3-18.7-1.8-37.9-14.1-52.5z" fill="var(--selected-left-color)" p-id="49445"></path><path d="M512.1 0C229.8 0 0.2 229.6 0.2 511.9c0 282.3 229.6 511.9 511.9 511.9 282.3 0 511.9-229.6 511.9-511.9C1024 229.6 794.4 0 512.1 0z m0 959.1c-246.6 0-447.2-200.6-447.2-447.2S265.5 64.6 512.1 64.6s447.3 200.6 447.3 447.3c0 246.6-200.7 447.2-447.3 447.2z" fill="var(--selected-left-color)" p-id="49446"></path></svg>
                <!--            <svg t="1682563226524" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6121" width="200" height="200"><path d="M711.168 352.886c9.728 0 17.132 1.3 22.528 3.939a25.876 25.876 0 0 1 11.5 9.728c2.285 3.938 3.309 7.877 3.072 12.327-0.236 4.45-0.787 8.153-1.772 11.303l-6.695 19.417-10.989 32.295-12.288 34.935c-3.82 11.54-6.892 20.716-8.94 27.293-4.647 13.903-10.24 23.63-17.172 29.145a39.345 39.345 0 0 1-25.324 8.152h-272.62l7.916 47.262H661.74c16.66 0 25.128 7.09 25.128 21.504 0 7.09-1.812 13.154-5.16 18.117-3.072 5.002-9.688 7.64-19.456 7.64H390.42a30.405 30.405 0 0 1-17.408-4.726 40.606 40.606 0 0 1-11.54-12.367 69.553 69.553 0 0 1-7.68-16.541 189.44 189.44 0 0 1-4.332-16.778l-2.875-15.242-5.908-30.208-7.404-40.448-8.192-44.898-22.528-118.154H263.64a20.283 20.283 0 0 1-12.8-3.939 33.989 33.989 0 0 1-13.312-21.267 68.214 68.214 0 0 1-1.221-11.5c0-7.09 2.284-12.84 6.931-17.33a26.663 26.663 0 0 1 18.905-6.853h52.54a37.022 37.022 0 0 1 16.62 3.151c4.095 2.087 7.443 4.726 10.003 7.877 2.324 3.15 4.096 6.577 5.12 9.964l2.52 8.94c0.788 2.876 1.3 6.814 2.049 11.816l2.087 15.478 3.072 19.968h355.052z m-87.316 298.26c6.656 0 13.037 1.339 18.944 3.702 6.144 2.363 11.264 5.75 15.636 10.24 4.332 4.45 7.916 9.452 10.476 15.478a47.655 47.655 0 0 1 0 37.81 49.743 49.743 0 0 1-26.112 25.993c-5.907 2.639-12.288 3.939-18.904 3.939-6.42 0-12.84-1.3-18.708-3.939a45.292 45.292 0 0 1-15.124-10.515 49.703 49.703 0 0 1-10.476-15.479 47.734 47.734 0 0 1 0-37.809c2.56-6.026 6.105-11.028 10.476-15.478 4.096-4.49 9.256-7.877 15.124-10.24 5.908-2.363 12.288-3.702 18.668-3.702z m-215.788-1.024a49.664 49.664 0 0 1 34.304 13.903c4.332 4.45 7.956 9.452 10.24 15.478a48.167 48.167 0 0 1 0 37.809c-2.284 6.065-5.908 11.028-10.24 15.518a53.17 53.17 0 0 1-15.596 10.476c-5.908 2.639-12.052 3.938-18.708 3.938-6.892 0-13.312-1.3-18.944-3.938a55.493 55.493 0 0 1-15.36-10.476 45.095 45.095 0 0 1-10.24-15.518 48.128 48.128 0 0 1 0-37.81c2.284-6.025 5.908-11.027 10.24-15.477 4.608-4.45 9.728-7.877 15.36-10.24 5.632-2.363 12.052-3.663 18.944-3.663zM512 1004.308C240.089 1004.308 19.692 783.91 19.692 512S240.09 19.692 512 19.692 1004.308 240.09 1004.308 512 783.91 1004.308 512 1004.308z m0-39.385c250.132 0 452.923-202.791 452.923-452.923S762.132 59.077 512 59.077 59.077 261.868 59.077 512 261.868 964.923 512 964.923z" fill="#2ab1e6" p-id="6122"></path></svg>-->
                <Tag tag="加入购物车，无需商家校验，该现货参数符合我的需求" number="60" color="dark_blue"></Tag>
              </div>
              <div class="top_right_shop">
                <svg t="1682574124793" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8229" width="200" height="200"><path d="M936.16128 716.40064c-23.07072-38.46144-22.70208-39.1936-22.70208-39.1936s-79.67232 22.34368-94.51008-54.02624c-46.14656 0-46.14656 0-46.14656 0s-12.73856 76.48256-94.14144 53.84704c-23.54176 39.2192-24.33536 40.448-24.35584 40.46848 0.03072 0.0256 63.7184 44.51328 0 104.94464 24.72448 40.65792 24.72448 40.65792 24.72448 40.65792s70.3488-30.35136 93.39904 52.56192c46.6944 0 46.6944 0 46.6944 0s14.65856-76.19072 93.76768-53.66272c22.52288-38.46144 22.89664-38.81984 22.89664-38.81984S876.0576 771.66592 936.16128 716.40064zM794.86976 823.26528c-29.74208 0-53.85728-24.11008-53.85728-53.84704 0-29.7472 24.1152-53.84704 53.85728-53.84704 29.73696 0 53.85216 24.09984 53.85216 53.84704C848.72192 799.1552 824.60672 823.26528 794.86976 823.26528z" fill="var(--selected-left-color)" p-id="8230"></path><path d="M924.96896 339.22048c-22.47168-53.12-54.6304-100.81792-95.58016-141.7728-40.96-40.96-88.65792-73.1136-141.77792-95.58016-55.00928-23.26528-113.42848-35.06176-173.63456-35.06176s-118.62016 11.79648-173.62944 35.06176c-53.12 22.46656-100.81792 54.62528-141.7728 95.58016-40.96 40.95488-73.1136 88.65792-95.58016 141.7728-23.26528 55.00416-35.06688 113.42336-35.06688 173.63456 0 60.20608 11.79648 118.62016 35.06688 173.63456 22.46656 53.12 54.62528 100.81792 95.58016 141.76768 40.95488 40.96 88.6528 73.11872 141.7728 95.58016 55.00928 23.2704 113.42336 35.072 173.62944 35.072 58.29632 0 114.88256-11.16672 168.36096-32.98816-14.03904-11.71968-26.37312-25.40032-36.57728-40.64256-41.23648 14.6688-85.57056 22.72768-131.78368 22.72768-217.89184 0-395.15648-177.26976-395.15648-395.15136 0-217.89184 177.26464-395.15648 395.15648-395.15648 104.97024 0 200.43264 41.22112 271.26784 108.22144-182.71744 92.2368-298.46528 366.27456-298.46528 366.27456L415.232 456.81664l-147.58912 87.34208c62.58176 21.8624 152.04864 91.7504 228.02432 183.4496 53.6576-96.06144 219.09504-292.61312 299.56608-310.07744-31.03744-69.36064-13.66016-125.824-9.04192-190.70464 75.648 72.02816 122.94144 173.57824 122.94144 286.0288 0 34.048-4.33664 67.10272-12.47744 98.64704 16.10752 8.8576 30.81216 19.96288 43.66336 32.91648 13.09184-42.39872 19.70688-86.4768 19.70688-131.5584C960.03072 452.64384 948.22912 394.22464 924.96896 339.22048z" fill="var(--selected-left-color)" p-id="8231"></path></svg>
                <Tag tag="加入购物车，等待商家校验，判断该现货是否符合需求" number="60" color="dark_blue"></Tag>
              </div>
              <text class="font-60-weight font-15-size margin-20-top">商品生产过程明细</text>
              <el-steps direction="vertical" class="margin-20-top">
                <el-step title="原木选择" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>毛白杨，西洋杨</text>
                        <text>按层混合，总层数7层</text>
                        <text>外2层西洋杨</text>
                        <text>里5层毛白杨</text>
                      </div>
                      <text>1天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="原木剥皮，切割获得单板" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>旋切法</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="修剪单板" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>矩形</text>
                        <text>长 1mm x 宽 1mm x 厚 1mm</text>
                        <text>数量 1 方</text>
                      </div>
                      <text>1.5天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="单板修光" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>40目砂纸</text>
                      </div>
                      <text>1天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="干燥" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>含水率 8%～10%</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="胶涂" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>3M Supper 77</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="叠放" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>混合叠放</text>
                      </div>
                      <text>1天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="热压" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>单次热压工艺</text>
                      </div>
                      <text>1天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="冷却与定型" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>自然冷却</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="冷却后修边" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>手工修边</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="冷却后修光" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>150目砂纸</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="检验等级" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text></text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="裁剪" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>手工裁剪</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="装饰面层" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>饰面单板</text>
                      </div>
                      <text>4天</text>
                    </div>
                  </template>
                </el-step>
              </el-steps>
            </div>
          </el-col>
          <el-col :span="24" :md="12">
            <div class="top_3-2_item">
              <div class="small_tag">
                <text class="font-60-weight font-15-size">杨木胶合板</text>
                <Tag tag="现货" number="30" color="black"></Tag>
              </div>
              <el-input class="margin-20-top" v-model="purpose" placeholder="请描述你想买杨木胶合板的具体用途，越详细有助于买到理想的货" />
              <el-table :data="tableData" style="width: 100%" height="250">
                <el-table-column fixed prop="date" label="规格参数" width="150" />
                <el-table-column prop="name" label="" width="330" />
              </el-table>
              <div class="top_right_total font-10-size margin-10-top">
                <Tag class="margin-10-top" tag="商家说：商品不适用于厨房和浴室家具，胶水防水性不够。" number="60" color="orange"></Tag>
                <Tag tag="买家需求 [ 给孩子坐个桌子，买来当桌面 ] ,商家校验结果：商品不适用于儿童家具，甲醛释放等级为E2。" number="60" color="orange"></Tag>
              </div>

              <div class="top_right_shop">
                <svg t="1682575413488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="49443" width="200" height="200"><path d="M756 657.1l-373.1-1L326 309.9c-4.1-32.1-31.6-56.3-63.9-56.3h-54.7c-17.9 0-32.3 14.5-32.3 32.3 0 17.9 14.5 32.3 32.3 32.3l54.6 1 57 346.3c4.1 32.1 31.6 56.3 63.9 56.3H756c17.9 0 32.3-14.5 32.3-32.3 0.1-17.9-14.4-32.4-32.3-32.4z m-41.3 85.8c-22.8 0-41.2 18.5-41.2 41.2 0 22.8 18.5 41.2 41.2 41.2s41.2-18.5 41.2-41.2c0.1-22.7-18.4-41.2-41.2-41.2z m-299 0c-22.8 0-41.2 18.5-41.2 41.2 0 22.8 18.5 41.2 41.2 41.2 22.8 0 41.2-18.5 41.2-41.2 0-22.7-18.5-41.2-41.2-41.2z" fill="var(--selected-left-color)" p-id="49444"></path><path d="M834 321.3c-12.3-14.6-30.3-23-49.4-23H397.5c-17.9 0-32.3 14.5-32.3 32.3 0 17.9 14.5 32.3 32.3 32.3l387.1-1-36.8 183.5H438.7c-17.9 0-32.3 14.5-32.3 32.3 0 17.9 14.5 32.3 32.3 32.3h309.1c31.3 0 58-22.4 63.3-52.5l37-183.7c3.3-18.7-1.8-37.9-14.1-52.5z" fill="var(--selected-left-color)" p-id="49445"></path><path d="M512.1 0C229.8 0 0.2 229.6 0.2 511.9c0 282.3 229.6 511.9 511.9 511.9 282.3 0 511.9-229.6 511.9-511.9C1024 229.6 794.4 0 512.1 0z m0 959.1c-246.6 0-447.2-200.6-447.2-447.2S265.5 64.6 512.1 64.6s447.3 200.6 447.3 447.3c0 246.6-200.7 447.2-447.3 447.2z" fill="var(--selected-left-color)" p-id="49446"></path></svg>
                <!--            <svg t="1682563226524" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6121" width="200" height="200"><path d="M711.168 352.886c9.728 0 17.132 1.3 22.528 3.939a25.876 25.876 0 0 1 11.5 9.728c2.285 3.938 3.309 7.877 3.072 12.327-0.236 4.45-0.787 8.153-1.772 11.303l-6.695 19.417-10.989 32.295-12.288 34.935c-3.82 11.54-6.892 20.716-8.94 27.293-4.647 13.903-10.24 23.63-17.172 29.145a39.345 39.345 0 0 1-25.324 8.152h-272.62l7.916 47.262H661.74c16.66 0 25.128 7.09 25.128 21.504 0 7.09-1.812 13.154-5.16 18.117-3.072 5.002-9.688 7.64-19.456 7.64H390.42a30.405 30.405 0 0 1-17.408-4.726 40.606 40.606 0 0 1-11.54-12.367 69.553 69.553 0 0 1-7.68-16.541 189.44 189.44 0 0 1-4.332-16.778l-2.875-15.242-5.908-30.208-7.404-40.448-8.192-44.898-22.528-118.154H263.64a20.283 20.283 0 0 1-12.8-3.939 33.989 33.989 0 0 1-13.312-21.267 68.214 68.214 0 0 1-1.221-11.5c0-7.09 2.284-12.84 6.931-17.33a26.663 26.663 0 0 1 18.905-6.853h52.54a37.022 37.022 0 0 1 16.62 3.151c4.095 2.087 7.443 4.726 10.003 7.877 2.324 3.15 4.096 6.577 5.12 9.964l2.52 8.94c0.788 2.876 1.3 6.814 2.049 11.816l2.087 15.478 3.072 19.968h355.052z m-87.316 298.26c6.656 0 13.037 1.339 18.944 3.702 6.144 2.363 11.264 5.75 15.636 10.24 4.332 4.45 7.916 9.452 10.476 15.478a47.655 47.655 0 0 1 0 37.81 49.743 49.743 0 0 1-26.112 25.993c-5.907 2.639-12.288 3.939-18.904 3.939-6.42 0-12.84-1.3-18.708-3.939a45.292 45.292 0 0 1-15.124-10.515 49.703 49.703 0 0 1-10.476-15.479 47.734 47.734 0 0 1 0-37.809c2.56-6.026 6.105-11.028 10.476-15.478 4.096-4.49 9.256-7.877 15.124-10.24 5.908-2.363 12.288-3.702 18.668-3.702z m-215.788-1.024a49.664 49.664 0 0 1 34.304 13.903c4.332 4.45 7.956 9.452 10.24 15.478a48.167 48.167 0 0 1 0 37.809c-2.284 6.065-5.908 11.028-10.24 15.518a53.17 53.17 0 0 1-15.596 10.476c-5.908 2.639-12.052 3.938-18.708 3.938-6.892 0-13.312-1.3-18.944-3.938a55.493 55.493 0 0 1-15.36-10.476 45.095 45.095 0 0 1-10.24-15.518 48.128 48.128 0 0 1 0-37.81c2.284-6.025 5.908-11.027 10.24-15.477 4.608-4.45 9.728-7.877 15.36-10.24 5.632-2.363 12.052-3.663 18.944-3.663zM512 1004.308C240.089 1004.308 19.692 783.91 19.692 512S240.09 19.692 512 19.692 1004.308 240.09 1004.308 512 783.91 1004.308 512 1004.308z m0-39.385c250.132 0 452.923-202.791 452.923-452.923S762.132 59.077 512 59.077 59.077 261.868 59.077 512 261.868 964.923 512 964.923z" fill="#2ab1e6" p-id="6122"></path></svg>-->
                <Tag tag="加入购物车，无需商家校验，该现货参数符合我的需求" number="60" color="dark_blue"></Tag>
              </div>
              <div class="top_right_shop">
                <svg t="1682574124793" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8229" width="200" height="200"><path d="M936.16128 716.40064c-23.07072-38.46144-22.70208-39.1936-22.70208-39.1936s-79.67232 22.34368-94.51008-54.02624c-46.14656 0-46.14656 0-46.14656 0s-12.73856 76.48256-94.14144 53.84704c-23.54176 39.2192-24.33536 40.448-24.35584 40.46848 0.03072 0.0256 63.7184 44.51328 0 104.94464 24.72448 40.65792 24.72448 40.65792 24.72448 40.65792s70.3488-30.35136 93.39904 52.56192c46.6944 0 46.6944 0 46.6944 0s14.65856-76.19072 93.76768-53.66272c22.52288-38.46144 22.89664-38.81984 22.89664-38.81984S876.0576 771.66592 936.16128 716.40064zM794.86976 823.26528c-29.74208 0-53.85728-24.11008-53.85728-53.84704 0-29.7472 24.1152-53.84704 53.85728-53.84704 29.73696 0 53.85216 24.09984 53.85216 53.84704C848.72192 799.1552 824.60672 823.26528 794.86976 823.26528z" fill="var(--selected-left-color)" p-id="8230"></path><path d="M924.96896 339.22048c-22.47168-53.12-54.6304-100.81792-95.58016-141.7728-40.96-40.96-88.65792-73.1136-141.77792-95.58016-55.00928-23.26528-113.42848-35.06176-173.63456-35.06176s-118.62016 11.79648-173.62944 35.06176c-53.12 22.46656-100.81792 54.62528-141.7728 95.58016-40.96 40.95488-73.1136 88.65792-95.58016 141.7728-23.26528 55.00416-35.06688 113.42336-35.06688 173.63456 0 60.20608 11.79648 118.62016 35.06688 173.63456 22.46656 53.12 54.62528 100.81792 95.58016 141.76768 40.95488 40.96 88.6528 73.11872 141.7728 95.58016 55.00928 23.2704 113.42336 35.072 173.62944 35.072 58.29632 0 114.88256-11.16672 168.36096-32.98816-14.03904-11.71968-26.37312-25.40032-36.57728-40.64256-41.23648 14.6688-85.57056 22.72768-131.78368 22.72768-217.89184 0-395.15648-177.26976-395.15648-395.15136 0-217.89184 177.26464-395.15648 395.15648-395.15648 104.97024 0 200.43264 41.22112 271.26784 108.22144-182.71744 92.2368-298.46528 366.27456-298.46528 366.27456L415.232 456.81664l-147.58912 87.34208c62.58176 21.8624 152.04864 91.7504 228.02432 183.4496 53.6576-96.06144 219.09504-292.61312 299.56608-310.07744-31.03744-69.36064-13.66016-125.824-9.04192-190.70464 75.648 72.02816 122.94144 173.57824 122.94144 286.0288 0 34.048-4.33664 67.10272-12.47744 98.64704 16.10752 8.8576 30.81216 19.96288 43.66336 32.91648 13.09184-42.39872 19.70688-86.4768 19.70688-131.5584C960.03072 452.64384 948.22912 394.22464 924.96896 339.22048z" fill="var(--selected-left-color)" p-id="8231"></path></svg>
                <Tag tag="加入购物车，等待商家校验，判断该现货是否符合需求" number="60" color="dark_blue"></Tag>
              </div>
              <text class="font-60-weight font-15-size margin-20-top">商品生产过程明细</text>
              <el-steps direction="vertical" class="margin-20-top">
                <el-step title="原木选择" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>毛白杨，西洋杨</text>
                        <text>按层混合，总层数7层</text>
                        <text>外2层西洋杨</text>
                        <text>里5层毛白杨</text>
                      </div>
                      <text>1天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="原木剥皮，切割获得单板" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>旋切法</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="修剪单板" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>矩形</text>
                        <text>长 1mm x 宽 1mm x 厚 1mm</text>
                        <text>数量 1 方</text>
                      </div>
                      <text>1.5天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="单板修光" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>40目砂纸</text>
                      </div>
                      <text>1天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="干燥" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>含水率 8%～10%</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="胶涂" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>3M Supper 77</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="叠放" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>混合叠放</text>
                      </div>
                      <text>1天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="热压" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>单次热压工艺</text>
                      </div>
                      <text>1天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="冷却与定型" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>自然冷却</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="冷却后修边" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>手工修边</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="冷却后修光" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>150目砂纸</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="检验等级" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text></text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="裁剪" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>手工裁剪</text>
                      </div>
                      <text>2天</text>
                    </div>
                  </template>
                </el-step>
                <el-step title="装饰面层" status="process">
                  <template #description>
                    <div class="top_right_item">
                      <div class="top_right_1">
                        <text>饰面单板</text>
                      </div>
                      <text>4天</text>
                    </div>
                  </template>
                </el-step>
              </el-steps>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style scoped>
.el-timeline{
  align-self: flex-start;
  padding-left: 0px;
}
.padding-10:deep(.el-card__body) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 20px;
}
.top_card{
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-sizing: unset;
  border: unset;
}
.criteria{
  width: 1000px;
}
.app-container{
  background-color: var(--app-container-bg-color) !important;
}
.el-carousel--vertical{
  width: 100%;
}
.padding-10:deep(.el-carousel__item h3){
  color: #475669;
  opacity: 0.75;
  line-height: 100px;
  margin: 0;
  text-align: center;
}
.padding-10:deep(.el-carousel__item:nth-child(2n)){
  background-color: #99a9bf;
}

.padding-10:deep(.el-carousel__item:nth-child(2n + 1)){
  background-color: #d3dce6;
}
.small_tag{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.top_3-2_top{
  width: 75%;
}
.top_3-2_item{
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0 2.8px 2.2px rgba(0,0,0,.034), 0 6.7px 5.3px rgba(0,0,0,.048), 0 12.5px 10px rgba(0,0,0,.06), 0 22.3px 17.9px rgba(0,0,0,.072), 0 41.8px 33.4px rgba(0,0,0,.086), 0 100px 80px rgba(0,0,0,.12);
  letter-spacing: 2px;
  padding: 20px;
  box-sizing: unset;
}
.padding-10:deep(.el-radio.is-bordered.is-checked) {
  border-color: #000;
  background: #fff;
}
.padding-10{
  --el-color-primary: #000;
}
.padding-10:deep(.el-radio__input.is-checked+.el-radio__label){
  color: #000;
}
.radio_row:deep(.el-radio__input.is-checked+.el-radio__label){
  color: #000;
}
.top_right_shop{
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  font-size: 10px;
}
.top_right_total{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.top_right_total_item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.top_right_item{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 20px 0;
}
.top_right_title{
  align-self: center;
}
.el-steps{
  width: 100%;
}
.top_right_space{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: sticky;
  background: #ffffff;
  top: 150px;
  z-index: 1000;
  opacity: 0.8;
  margin: 0;
  padding:20px 5% 20px 10%;
  color: #000000;
}
.top_right_1{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 13px;
}
.padding-10:deep(.el-step__description){
  padding-right: 0px !important;
}
.padding-10:deep(.el-descriptions__body) {
  background-color: var(--table-fill-color);
}
.el-descriptions{
  --el-descriptions-table-border: 1px solid var(--descriptions-table-border);
}
.padding-10:deep(.el-descriptions__content.el-descriptions__cell.is-bordered-content){
  color: var(--descriptions-bordered-content-color);
}
.padding-10:deep(.el-descriptions__label.el-descriptions__cell.is-bordered-label){
  color: var(--descriptions-bordered-label-color);
  background: var(--descriptions-bordered-label-bg-color);
  font-weight: 500;
}
</style>
<script setup>
import "../assets/comment.scss"
import { ref,onMounted,reactive,computed } from 'vue'
import { useRoute } from 'vue-router'
import QuestionList from "../components/QuestionList.vue";
import CommentList from '../components/CommentList.vue';
import GoodsList from "../components/GoodsList.vue";
import AddComment from "../components/AddComment.vue";
import "../assets/tag.css"
import {goodsListApi} from "../api/goods.js";
import CreditScore from "../components/CreditScore.vue";
import {shopDetailApi} from "../api/shopDetail.js";
import { useUserStore } from "../pinia/user.js";
import { useTabDetailStore } from "../pinia/tabDetail.js"
import Tag from "../components/Tag.vue"
import SellerInfo from "../components/SellerInfo.vue";
import {getIndexDataApi} from "../api/list.js";

// 数据列表
const nearbyList = ref([])
getIndexDataApi({
  is_show_recommend: 1,
  is_show_franchisee: 1,
  is_show_blacklist: 1,
  page: 1,
  page_size: 10,
  score_asc: 0,
}).then(res => {
  nearbyList.value = res.data.data;
})
const userStore = useUserStore();
const tabDetailStore = useTabDetailStore();
//
const text = ref('')
const company_info_id_text = ref(null);
// company_info_id_text.value = useRoute().query.company_info_id;
company_info_id_text.value = 18;
const company_info_id = ref(null);
company_info_id.value = 2644899;
// company_info_id.value = useRoute().query.company_info_id
const starValue = ref(5)
const activities = [
  {
    content: [{
      key: '经营状态变更：',
      value: '从在业变更为注销',
    }],
    timestamp: '2022-06-30',
  },
  {
    content: [{
      key: '新增行政许可：',
      value: '允许备案'
    }],
    timestamp: '2018-04-13',
  },
]
const tableData = [
  {
    date: '总价格',
    name: '¥1500.65',
  },
  {
    date: '总层数',
    name: '总7层，外2层西洋杨,里5层毛白杨',
  },
  {
    date: '矩形',
    name: '长 1mm x 宽 1mm x 厚 1mm',
  },
  {
    date: '数量',
    name: '24方',
  },
  {
    date: '生产日期',
    name: '2022-12-30',
  },
]
//多项选择开始
const purpose = ref('')
const checkedLog = ref(['毛白杨', '西洋杨'])
const log = ['毛白杨', '江杨', '西洋杨']
const LogMethod = ref('1')
const outerLayers = ref('2')
const innerLayers = ref('5')
const totalLayers = computed(() => outerLayers.value + innerLayers.value)
//选择裁切法还是平切法
const cuttingMethod = ref('1')
//形状
const shape = ref('1')
  //矩形
const rectangleLong = ref('1')
const rectangleWidth = ref('1')
const rectangleThickness = ref('1')
const rectangleCount = ref('1')
  //正方形
const squareLengthOfSide = ref('0')
const squareThickness = ref('0')
const squareCount = ref('1')
   //圆形
const roundDiameter = ref('0')
const roundThickness = ref('0')
const roundCount = ref('1')
  //椭圆形长轴
const ovalLongAxis = ref('0')
  //椭圆形短轴
const ovalMinorAxis = ref('0')
  //椭圆形厚度
const ovalThickness = ref('0')
const ovalCount = ref('1')
//粗砂光
const roughSandpaper = ref('1')
//含水率
const moistureContent = ref('1')
//叠放方式
const stackingMode = ref('1')
//胶水
const glue = ref('1')
//冷却方式
const cooling = ref('1');
//冷却后修边方式
const coolTrimEdges = ref('1');
//热压方式
const hotPressing = ref('1');
//最终切割
const finalCut = ref('1');
//装饰面层
const architecturalSurface = ref('1');

//多项选择结束

//导航栏切换开始
const handleItemClick = (index) => {
  tabDetailStore.current = index;
}
//导航栏切换结束
const list = reactive({
  arr: []
});
const company_info = ref({})
const wood_name = ref([])
const company_name = ref('')
const credit_score = ref('')
const credit_score_text = ref('')
const credit_code = ref('')
const isFranchisee = ref(0)
const date = ref(0)
const date_text = ref('')

onMounted(() => {
  shopDetailApi({company_info_id:company_info_id.value}).then(async(res) => {
    console.log(res);
    company_info.value = res.data.company_info;
    company_name.value = res.data.company_info.company_name
    credit_score.value = res.data.company_info.credit_score
    credit_score_text.value = '信用分 '+ credit_score.value
    credit_code.value = res.data.company_info.credit_code
    isFranchisee.value = res.data.isFranchisee
    date.value = res.data.date
    date_text.value = '入驻真木网'+ date.value + '天'
  })
  goodsListApi({company_info_id:company_info_id.value}).then(async(res) => {
    list.arr =  res.data;
    console.log(res.data);
    wood_name.value = res.data.map((item) => {
      return item = item.wood_name
    })
    wood_name.value = Array.from(new Set(wood_name.value));
  })
})
</script>
