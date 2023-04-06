<template>
  <div class="padding-10 margin-10-top margin-60-top">
    <div class="top_1_tag">
      <Tag v-if="isFranchisee" tag="加盟商" number="60" color="orange"></Tag>
      <Tag :tag="credit_score_text" number="60" color="yellow"></Tag>
      <Tag tag="入驻真木网" number="60" color="purple"></Tag>
      <template v-for="(item,index) in wood_name" :key="index">
        <Tag :tag="item" number="60" color="blue"></Tag>
      </template>
    </div>
    <div class="top_2 margin-20-top">
      <div class="margin-10-top top_2_1">
        <!--          <text>我们是</text>-->
        <div class="svg_hello">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path fill="#EF9645" d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625c-.793-1.129-.519-2.686.611-3.478z"/><path fill="#FFDC5D" d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"/><g fill="#5DADEC"><path d="M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z"/><path d="M7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zM24 2c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z"/><path d="M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z"/></g>
          </svg>
        </div>
      </div>
      <text class="margin-20-top emphasize">{{ company_name}}</text>
      <text class="margin-20-top">社会统一信用代码：</text>
      <text class="margin-20-top emphasize">{{credit_code}}</text>
    </div>
    <el-row :gutter="24">
      <el-col :span="24" :md="12" class="top_1_parent">
        <div class="top margin-20-top">
          <CreditScore
              :credit-score="credit_score"
              height="200"
              width="300px">
          </CreditScore>
        </div>
      </el-col>
      <el-col :span="24" :md="12">
        <div class="top margin-20-top">
          <div class="top_2">
            <div class="margin-20-top top_tip">
              <text>我们在真木网平台上经营的主要有：</text>
              <div class="margin-20-top top_tip_2">
                <div class="svg_happy">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"/><path fill="#664500" d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"/><path fill="#FFF" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"/><path fill="#E95F28" d="M15.682 4.413l-4.542.801L8.8.961C8.542.492 8.012.241 7.488.333c-.527.093-.937.511-1.019 1.039l-.745 4.797-4.542.801c-.535.094-.948.525-1.021 1.064s.211 1.063.703 1.297l4.07 1.932-.748 4.812c-.083.536.189 1.064.673 1.309.179.09.371.133.562.133.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145c.49.232 1.074.123 1.446-.272.372-.395.446-.984.185-1.459L13.625 9.73l3.165-3.208c.382-.387.469-.977.217-1.459-.254-.482-.793-.743-1.325-.65zm4.636 0l4.542.801L27.2.961c.258-.469.788-.72 1.312-.628.526.093.936.511 1.018 1.039l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812c.083.536-.189 1.064-.673 1.309-.179.09-.371.133-.562.133-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145c-.49.232-1.074.123-1.446-.272-.372-.395-.446-.984-.185-1.459l2.348-4.267-3.165-3.208c-.382-.387-.469-.977-.217-1.459.255-.482.794-.743 1.326-.65z"/></svg>
                </div>
                <div class="font-18-size top_tip_2_2">
                  <template v-for="(item,index) in wood_name" :key="index">
                    <text v-if="index === 0" class="emphasize">{{item}}</text>
                    <text v-else class="margin-10-top emphasize">{{item}}</text>
                  </template>
                </div>
              </div>
            </div>
            <text class="margin-20-top font-12-size">用我们名字或社会统一信用代码可以在ZMW精准搜索到我们哦~</text>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <el-container direction="vertical" :gutter="18" class="margin-20-top">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
      <el-tab-pane label="公司首页" name="first">
          <GoodsList :list="list.arr" :is-grey="1" :size="300"></GoodsList>
          <div class="goods_show">
          <div id="background">
            <div id="circle">
              <div id="circle-glow"></div>
              <div id="circle-inner"></div>
            </div>
          </div>
          <div id="app1">
            <div id="profiles">
              <div class="profile none_background">
                <div class="profile-content">
                  <div class="profile-pic">
                    <img class="profile-pic-image" src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_eb3f9a85-bbb5-43da-b5f0-dac7d315f327.png?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp" />
                  </div>
<!--                  <h4 class="profile-name">发布商品</h4>-->
                </div>
              </div>
              <div class="profile white_color">
                <div class="text_profile">
                  <text class="profile-name font-60-weight font-28-size flex-end">ZMW</text>
                  <div class="font8-size font-column">
                    <div class="font-item flex-end">
                      <text>微信扫扫</text>
                      <text class="font15-size font-60-weight">左</text>
                      <text>边的</text>
                    </div>
                    <div class="font-item flex-end">
                      <text>真木网</text>
                      <text class="font15-size font-60-weight">商家版</text>
                      <text>小程序</text>
                    </div>
                    <div class="font-item flex-end">
                      <text class="font15-size font-60-weight">上传商品</text>
                      <text>后会同步显示在当前页面以及买木头小程序</text>
                    </div>
                  </div>
                  <div class="text_profile_3">
                    <svg t="1680599843213" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4405" width="200" height="200"><path d="M497.664 971.434667A456.704 456.704 0 1 1 955.733333 514.730667a457.045333 457.045333 0 0 1-458.069333 456.704z m0-845.141334A388.437333 388.437333 0 1 0 887.466667 514.730667 388.778667 388.778667 0 0 0 497.664 126.293333z" fill="#ffffff" p-id="4406"></path><path d="M571.392 716.8a34.133333 34.133333 0 0 1-23.893333-9.898667l-167.253334-166.912a34.133333 34.133333 0 0 1-9.898666-24.234666 34.133333 34.133333 0 0 1 9.898666-24.234667L546.133333 323.584a34.133333 34.133333 0 0 1 48.128 48.128l-143.018666 143.018667 143.018666 143.018666a34.133333 34.133333 0 0 1 0 48.128 34.133333 34.133333 0 0 1-22.869333 10.922667z" fill="#ffffff" p-id="4407"></path></svg>
                  </div>
                </div>
              </div>
              <div class="profile white_color">
                <div class="text_profile">
                  <text class="profile-name font-60-weight font-28-size">ZMW</text>
                  <div class="font8-size font-column">
                    <div class="font-item">
                      <text>微信扫扫</text>
                      <text class="font15-size font-60-weight">右</text>
                      <text>边的</text>
                    </div>
                    <div class="font-item">
                      <text>真木网</text>
                      <text class="font15-size font-60-weight">买家版</text>
                      <text>小程序</text>
                    </div>
                    <div class="font-item">
                      <text class="font15-size font-60-weight">购买商品</text>
                      <text>计算详细运费，保障支付安全，和售后服务</text>
                    </div>
                  </div>
                  <div class="text_profile_3 flex-end">
                    <svg t="1680601198716" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1117" width="200" height="200"><path d="M518.144 971.434667a456.704 456.704 0 1 1 456.704-456.704 457.045333 457.045333 0 0 1-456.704 456.704z m0-845.141334a388.437333 388.437333 0 1 0 388.437333 388.437334A388.778667 388.778667 0 0 0 518.144 126.293333z" fill="#ffffff" p-id="1118"></path><path d="M443.733333 716.8a34.133333 34.133333 0 0 1-24.234666-9.898667 34.133333 34.133333 0 0 1 0-48.128l143.018666-143.018666-143.018666-143.018667a34.133333 34.133333 0 0 1 0-48.128 34.133333 34.133333 0 0 1 48.469333 0l166.912 166.912a34.133333 34.133333 0 0 1 9.898667 24.234667 34.133333 34.133333 0 0 1-9.898667 24.234666l-166.912 166.912A34.133333 34.133333 0 0 1 443.733333 716.8z" fill="#ffffff" p-id="1119"></path></svg>
                  </div>
                </div>
              </div>
              <div class="profile none_background">
                <div class="profile-content">
                  <div class="profile-pic">
                    <img class="profile-pic-image" src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_49245cea-3db4-483a-be40-709faff7c2f9.png?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp" />
                  </div>
<!--                  <h4 class="profile-name">购买商品</h4>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-row :gutter="24">
          <el-col :span="24" :md="12">
            <!--        评论列表开始-->
            <CommentList
                :company-info-id="company_info_id_text"
                :margin="20"
            >
            </CommentList>
          </el-col>
          <el-col :span="24" :md="12">
            <QuestionList
                :company-info-id="company_info_id_text">
            </QuestionList>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="商品" name="second" lazy>
        <GoodsList :list="list.arr" :size="300"></GoodsList>
        <div class="goods_show">
          <div id="background">
            <div id="circle">
              <div id="circle-glow"></div>
              <div id="circle-inner"></div>
            </div>
          </div>
          <div id="app1">
            <div id="profiles">
              <div class="profile none_background">
                <div class="profile-content">
                  <div class="profile-pic">
                    <img class="profile-pic-image" src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_eb3f9a85-bbb5-43da-b5f0-dac7d315f327.png?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp" />
                  </div>
                  <!--                  <h4 class="profile-name">发布商品</h4>-->
                </div>
              </div>
              <div class="profile white_color">
                <div class="text_profile">
                  <text class="profile-name font-60-weight font-28-size flex-end">ZMW</text>
                  <div class="font8-size font-column">
                    <div class="font-item flex-end">
                      <text>微信扫扫</text>
                      <text class="font15-size font-60-weight">左</text>
                      <text>边的</text>
                    </div>
                    <div class="font-item flex-end">
                      <text>真木网</text>
                      <text class="font15-size font-60-weight">商家版</text>
                      <text>小程序</text>
                    </div>
                    <div class="font-item flex-end">
                      <text class="font15-size font-60-weight">上传商品</text>
                      <text>后会同步显示在当前页面以及买木头小程序</text>
                    </div>
                  </div>
                  <div class="text_profile_3">
                    <svg t="1680599843213" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4405" width="200" height="200"><path d="M497.664 971.434667A456.704 456.704 0 1 1 955.733333 514.730667a457.045333 457.045333 0 0 1-458.069333 456.704z m0-845.141334A388.437333 388.437333 0 1 0 887.466667 514.730667 388.778667 388.778667 0 0 0 497.664 126.293333z" fill="#ffffff" p-id="4406"></path><path d="M571.392 716.8a34.133333 34.133333 0 0 1-23.893333-9.898667l-167.253334-166.912a34.133333 34.133333 0 0 1-9.898666-24.234666 34.133333 34.133333 0 0 1 9.898666-24.234667L546.133333 323.584a34.133333 34.133333 0 0 1 48.128 48.128l-143.018666 143.018667 143.018666 143.018666a34.133333 34.133333 0 0 1 0 48.128 34.133333 34.133333 0 0 1-22.869333 10.922667z" fill="#ffffff" p-id="4407"></path></svg>
                  </div>
                </div>
              </div>
              <div class="profile white_color">
                <div class="text_profile">
                  <text class="profile-name font-60-weight font-28-size">ZMW</text>
                  <div class="font8-size font-column">
                    <div class="font-item">
                      <text>微信扫扫</text>
                      <text class="font15-size font-60-weight">右</text>
                      <text>边的</text>
                    </div>
                    <div class="font-item">
                      <text>真木网</text>
                      <text class="font15-size font-60-weight">买家版</text>
                      <text>小程序</text>
                    </div>
                    <div class="font-item">
                      <text class="font15-size font-60-weight">购买商品</text>
                      <text>计算详细运费，保障支付安全，和售后服务</text>
                    </div>
                  </div>
                  <div class="text_profile_3 flex-end">
                    <svg t="1680601198716" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1117" width="200" height="200"><path d="M518.144 971.434667a456.704 456.704 0 1 1 456.704-456.704 457.045333 457.045333 0 0 1-456.704 456.704z m0-845.141334a388.437333 388.437333 0 1 0 388.437333 388.437334A388.778667 388.778667 0 0 0 518.144 126.293333z" fill="#ffffff" p-id="1118"></path><path d="M443.733333 716.8a34.133333 34.133333 0 0 1-24.234666-9.898667 34.133333 34.133333 0 0 1 0-48.128l143.018666-143.018666-143.018666-143.018667a34.133333 34.133333 0 0 1 0-48.128 34.133333 34.133333 0 0 1 48.469333 0l166.912 166.912a34.133333 34.133333 0 0 1 9.898667 24.234667 34.133333 34.133333 0 0 1-9.898667 24.234666l-166.912 166.912A34.133333 34.133333 0 0 1 443.733333 716.8z" fill="#ffffff" p-id="1119"></path></svg>
                  </div>
                </div>
              </div>
              <div class="profile none_background">
                <div class="profile-content">
                  <div class="profile-pic">
                    <img class="profile-pic-image" src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_49245cea-3db4-483a-be40-709faff7c2f9.png?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp" />
                  </div>
                  <!--                  <h4 class="profile-name">购买商品</h4>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="大众评论" name="third" lazy>
        <CommentList
            :company-info-id="company_info_id_text"
            :margin="20"
        ></CommentList>
      </el-tab-pane>
      <el-tab-pane label="问大家" name="fourth" lazy>
        <QuestionList :company-info-id="company_info_id_text"></QuestionList>
      </el-tab-pane>

      <el-tab-pane label="联系公司&我要投诉" name="fifth" lazy>
        <div class="fifth_1">
          <SellerInfo :item="company_info"></SellerInfo>
          <div class="margin-40-top fifth_1_2 font-28-size">
          <AddComment
                placeholder-text="我要投诉"
                cancel-text="取消投诉"
                confirm-text="提交证据"
                :company-info-id="company_info_id_text"
                add-type="complaint"
                comment-type="complaint"
                v-if="userStore.userId > 0"
            >
              <template #clickDrawer>
                <svg t="1680747027530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15975" width="200" height="200">
                  <path d="M796.444444 796.444444h-233.870222L312.888889 1000.732444V995.555556c-18.318222 0-25.230222-6.883556-27.591111-13.852445V967.111111s-0.512 1.649778-0.853334 4.039111V796.444444H227.555556a170.666667 170.666667 0 0 1-170.666667-170.666666V170.666667a56.888889 56.888889 0 0 1 56.888889-56.888889h796.444444a56.888889 56.888889 0 0 1 56.888889 56.888889v455.111111a170.666667 170.666667 0 0 1-170.666667 170.666666zM512 455.111111a227.271111 227.271111 0 0 0-202.268444 123.648l61.667555 7.395556a170.296889 170.296889 0 0 1 281.201778 0l61.696-7.395556A227.356444 227.356444 0 0 0 512 455.111111z m-227.555556 568.888889v-46.506667a19.399111 19.399111 0 0 0 0.853334 4.209778v41.585778L284.444444 1024z" fill="#000000" p-id="15976"></path>
                  <path d="M796.444444 796.444444h-233.870222L312.888889 1000.732444V995.555556c-18.318222 0-25.230222-6.883556-27.591111-13.852445V967.111111s-0.512 1.649778-0.853334 4.039111V796.444444H227.555556a170.666667 170.666667 0 0 1-170.666667-170.666666V170.666667a56.888889 56.888889 0 0 1 56.888889-56.888889h796.444444a56.888889 56.888889 0 0 1 56.888889 56.888889v455.111111a170.666667 170.666667 0 0 1-170.666667 170.666666zM512 455.111111a227.271111 227.271111 0 0 0-202.268444 123.648l61.667555 7.395556a170.296889 170.296889 0 0 1 281.201778 0l61.696-7.395556A227.356444 227.356444 0 0 0 512 455.111111z m-227.555556 568.888889v-46.506667a19.399111 19.399111 0 0 0 0.853334 4.209778v41.585778L284.444444 1024z" fill="#000000" p-id="15977"></path>
                </svg>
                <Tag tag="我要投诉" number="60" color="yellow"></Tag>
                <svg t="1680747027530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15975" width="200" height="200">
                  <path d="M796.444444 796.444444h-233.870222L312.888889 1000.732444V995.555556c-18.318222 0-25.230222-6.883556-27.591111-13.852445V967.111111s-0.512 1.649778-0.853334 4.039111V796.444444H227.555556a170.666667 170.666667 0 0 1-170.666667-170.666666V170.666667a56.888889 56.888889 0 0 1 56.888889-56.888889h796.444444a56.888889 56.888889 0 0 1 56.888889 56.888889v455.111111a170.666667 170.666667 0 0 1-170.666667 170.666666zM512 455.111111a227.271111 227.271111 0 0 0-202.268444 123.648l61.667555 7.395556a170.296889 170.296889 0 0 1 281.201778 0l61.696-7.395556A227.356444 227.356444 0 0 0 512 455.111111z m-227.555556 568.888889v-46.506667a19.399111 19.399111 0 0 0 0.853334 4.209778v41.585778L284.444444 1024z" fill="#000000" p-id="15976"></path>
                  <path d="M796.444444 796.444444h-233.870222L312.888889 1000.732444V995.555556c-18.318222 0-25.230222-6.883556-27.591111-13.852445V967.111111s-0.512 1.649778-0.853334 4.039111V796.444444H227.555556a170.666667 170.666667 0 0 1-170.666667-170.666666V170.666667a56.888889 56.888889 0 0 1 56.888889-56.888889h796.444444a56.888889 56.888889 0 0 1 56.888889 56.888889v455.111111a170.666667 170.666667 0 0 1-170.666667 170.666666zM512 455.111111a227.271111 227.271111 0 0 0-202.268444 123.648l61.667555 7.395556a170.296889 170.296889 0 0 1 281.201778 0l61.696-7.395556A227.356444 227.356444 0 0 0 512 455.111111z m-227.555556 568.888889v-46.506667a19.399111 19.399111 0 0 0 0.853334 4.209778v41.585778L284.444444 1024z" fill="#000000" p-id="15977"></path>
                </svg>
              </template>
            </AddComment>
            <router-link to="/login" v-else>
              <svg t="1680747027530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15975" width="200" height="200">
                <path d="M796.444444 796.444444h-233.870222L312.888889 1000.732444V995.555556c-18.318222 0-25.230222-6.883556-27.591111-13.852445V967.111111s-0.512 1.649778-0.853334 4.039111V796.444444H227.555556a170.666667 170.666667 0 0 1-170.666667-170.666666V170.666667a56.888889 56.888889 0 0 1 56.888889-56.888889h796.444444a56.888889 56.888889 0 0 1 56.888889 56.888889v455.111111a170.666667 170.666667 0 0 1-170.666667 170.666666zM512 455.111111a227.271111 227.271111 0 0 0-202.268444 123.648l61.667555 7.395556a170.296889 170.296889 0 0 1 281.201778 0l61.696-7.395556A227.356444 227.356444 0 0 0 512 455.111111z m-227.555556 568.888889v-46.506667a19.399111 19.399111 0 0 0 0.853334 4.209778v41.585778L284.444444 1024z" fill="#000000" p-id="15976"></path>
                <path d="M796.444444 796.444444h-233.870222L312.888889 1000.732444V995.555556c-18.318222 0-25.230222-6.883556-27.591111-13.852445V967.111111s-0.512 1.649778-0.853334 4.039111V796.444444H227.555556a170.666667 170.666667 0 0 1-170.666667-170.666666V170.666667a56.888889 56.888889 0 0 1 56.888889-56.888889h796.444444a56.888889 56.888889 0 0 1 56.888889 56.888889v455.111111a170.666667 170.666667 0 0 1-170.666667 170.666666zM512 455.111111a227.271111 227.271111 0 0 0-202.268444 123.648l61.667555 7.395556a170.296889 170.296889 0 0 1 281.201778 0l61.696-7.395556A227.356444 227.356444 0 0 0 512 455.111111z m-227.555556 568.888889v-46.506667a19.399111 19.399111 0 0 0 0.853334 4.209778v41.585778L284.444444 1024z" fill="#000000" p-id="15977"></path>
              </svg>
              <Tag tag="我要投诉" number="60" color="yellow"></Tag>
              <svg t="1680747027530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15975" width="200" height="200">
                <path d="M796.444444 796.444444h-233.870222L312.888889 1000.732444V995.555556c-18.318222 0-25.230222-6.883556-27.591111-13.852445V967.111111s-0.512 1.649778-0.853334 4.039111V796.444444H227.555556a170.666667 170.666667 0 0 1-170.666667-170.666666V170.666667a56.888889 56.888889 0 0 1 56.888889-56.888889h796.444444a56.888889 56.888889 0 0 1 56.888889 56.888889v455.111111a170.666667 170.666667 0 0 1-170.666667 170.666666zM512 455.111111a227.271111 227.271111 0 0 0-202.268444 123.648l61.667555 7.395556a170.296889 170.296889 0 0 1 281.201778 0l61.696-7.395556A227.356444 227.356444 0 0 0 512 455.111111z m-227.555556 568.888889v-46.506667a19.399111 19.399111 0 0 0 0.853334 4.209778v41.585778L284.444444 1024z" fill="#000000" p-id="15976"></path>
                <path d="M796.444444 796.444444h-233.870222L312.888889 1000.732444V995.555556c-18.318222 0-25.230222-6.883556-27.591111-13.852445V967.111111s-0.512 1.649778-0.853334 4.039111V796.444444H227.555556a170.666667 170.666667 0 0 1-170.666667-170.666666V170.666667a56.888889 56.888889 0 0 1 56.888889-56.888889h796.444444a56.888889 56.888889 0 0 1 56.888889 56.888889v455.111111a170.666667 170.666667 0 0 1-170.666667 170.666666zM512 455.111111a227.271111 227.271111 0 0 0-202.268444 123.648l61.667555 7.395556a170.296889 170.296889 0 0 1 281.201778 0l61.696-7.395556A227.356444 227.356444 0 0 0 512 455.111111z m-227.555556 568.888889v-46.506667a19.399111 19.399111 0 0 0 0.853334 4.209778v41.585778L284.444444 1024z" fill="#000000" p-id="15977"></path>
              </svg>
            </router-link>
          </div>
          <text class="margin-20-top">如果商家被投诉次数达到上限，会被列入黑名单，以下是黑名单样例</text>
        </div>

        <div class="all">
        <el-row class="margin-20-top next" :gutter="24">
            <el-col :span="24" :md="12">
              <div class="third">
                <img src="https://zhenmuwang.oss-cn-beijing.aliyuncs.com/sell_answer_img__miniapp_39c423de-1fc6-4d7d-be1e-6804ddc119ff.png" />
              </div>
            </el-col>
            <el-col :span="24" :md="12">
              <div class="fourth">
                <text class="second font-18-size">为什么成为黑名单？</text>
                <el-steps direction="vertical" class="margin-20-top" :space="150">
                  <el-step title="原因1**************" description="经真木网平台审核，用户提交证据和信息属实" status="process"/>
                  <el-step title="原因2**************" description="经真木网平台审核，用户提交证据和信息属实" status="process"/>
                  <el-step title="原因3**************" description="经真木网平台审核，用户提交证据和信息属实" status="process"/>
                  <el-step title="原因4**************" description="经真木网平台审核，用户提交证据和信息属实" status="process"/>
                  <el-step title="加入真木网的黑名单" description="" status="process"/>
                </el-steps>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-container>
</template>
<script setup>
import { ref,onMounted,reactive } from 'vue'
import { useRoute } from 'vue-router'
import QuestionList from "../components/QuestionList.vue";
import CommentList from '../components/CommentList.vue';
import GoodsList from "../components/GoodsList.vue";
import "../assets/tag.css"
import "../assets/showMiniApp.scss"
import {goodsListApi} from "../api/goods.js";
import CreditScore from "../components/CreditScore.vue";
import {shopDetailApi} from "../api/shopDetail.js";
import { useUserStore } from "../pinia/user.js";
import Tag from "../components/Tag.vue"
import SellerInfo from "../components/SellerInfo.vue";
const userStore = useUserStore();
//
const text = ref('')
const company_info_id_text = ref(null);
// company_info_id_text.value = useRoute().query.company_info_id;
company_info_id_text.value = 18;
const company_info_id = ref(null);
// company_info_id.value = 2644899;
company_info_id.value = useRoute().query.company_info_id
//导航栏切换开始
const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
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

onMounted(() => {
  shopDetailApi({company_info_id:company_info_id.value}).then(async(res) => {
    company_info.value = res.data.company_info;
    company_name.value = res.data.company_info.company_name
    credit_score.value = res.data.company_info.credit_score
    credit_score_text.value = '信用分 '+ credit_score.value
    credit_code.value = res.data.company_info.credit_code
    isFranchisee.value = res.data.isFranchisee
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
<style scoped>
.all{
  display: flex;
  flex-direction: column;
}
.third{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fourth{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.second{
  align-self: center;
  font-weight: 600;
  letter-spacing: 2px;
}
.fifth_1_2{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.fifth_1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.top_1_tag{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.el-col{
  margin-bottom: 10px;
}
.icon{
  width: 30px;
  height: 30px;
}
.top_1_parent{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.el-container:deep(.el-tabs__header) {
  position: -webkit-sticky;
  position: sticky;
  background: #fff;
  top: 50px;
  z-index: 1000;
  opacity: 0.8;
  margin: 0;
}
.el-container:deep(.el-tabs__nav-wrap) {
  padding: 0 20px;
  letter-spacing: 2px;
}
.el-container:deep(.el-tabs__nav-scroll) {
  overflow-x: auto;
}
.el-descriptions{
  padding:0 10px;
}
.el-container:deep(.el-tabs__nav-scroll::-webkit-scrollbar) {
  display: none;
}
.el-container:deep(.el-tabs__nav-wrap::after) {
  background-color: unset !important;
}
.el-container:deep(.el-tabs__item.is-active) {
  color: #000;
}
.el-container:deep(.el-tabs__active-bar) {
  background-color: #000;
}
.el-container:deep(.el-tabs__item:hover) {
  color:#000;
}
.el-container:deep(.el-descriptions__header) {
  margin-bottom: 0;
  padding: 10px 0px;
}
.top_tip_2{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.top_tip_2_2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.svg_happy{
  width: 50px;
  height: 50px;
}
.top_tip{
  width: 90%;
  padding: 15px;
  color: #11269a;
  background-image: linear-gradient(109.6deg, rgb(156, 252, 248) 11.2%, rgb(110, 123, 251) 91.1%);
  /*border-radius: 62% 47% 82% 35%/45% 45% 80% 66%;*/
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
.top_2_1{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.light_emphasize{
  font-weight: 600;
  text-align: center;
}
.emphasize{
  font-weight: 900;
  font-size: 24px;
  text-align: center;
}
.top{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /*background-color: #151515;*/
  /*color: #fff;*/
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 2.8px 2.2px rgba(0,0,0,.034), 0 6.7px 5.3px rgba(0,0,0,.048), 0 12.5px 10px rgba(0,0,0,.06), 0 22.3px 17.9px rgba(0,0,0,.072), 0 41.8px 33.4px rgba(0,0,0,.086), 0 100px 80px rgba(0,0,0,.12);
  letter-spacing: 2px;
  padding: 20px;
  width: 90%;
  box-sizing: unset;
}
.top_2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.svg_hello{
  height: 2em !important;
  width: 2em !important;
}

.padding-10{
  padding: 0 10px 20px 10px;
  letter-spacing: 2px;
}
.el-container >>> .el-tabs__content {
  background-color: #f3f6fd;
}
</style>
