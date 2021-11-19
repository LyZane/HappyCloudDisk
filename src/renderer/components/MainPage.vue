<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo"><img src="build/icons/logo.png" />好嗨哟~</div>
      <a-menu
        mode="inline"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
      >
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" />subnav 1</span>
          <a-menu-item key="1"> option1 </a-menu-item>
          <a-menu-item key="2"> option2 </a-menu-item>
          <a-menu-item key="3"> option3 </a-menu-item>
          <a-menu-item key="4"> option4 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="laptop" />subnav 2</span>
          <a-menu-item key="5"> option5 </a-menu-item>
          <a-menu-item key="6"> option6 </a-menu-item>
          <a-menu-item key="7"> option7 </a-menu-item>
          <a-menu-item key="8"> option8 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="notification" />subnav 3</span>
          <a-menu-item key="9">
            <router-link :to="{ path: '/qiniu-setting' }">
              qiniu-setting
            </router-link>
          </a-menu-item>
          <a-menu-item key="10"> option10 </a-menu-item>
          <a-menu-item key="11"> option11 </a-menu-item>
          <a-menu-item key="12"> option12 </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header
        :style="{ background: '#fff', padding: 0, height: '70px' }"
      />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial','min-height':'700px' }">
        <div
          :style="{ padding: '24px', background: '#fff'}"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<style lang="scss">
.logo {
  font-size: 19px;
  color: wheat;
  font-weight: bold;

  img {
    max-height: 50px;
  }
}
#components-layout-demo-fixed-sider {
  background-color: white;
  .logo {
    height: 50px;

    margin: 10px;
  }
}
</style>
