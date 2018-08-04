<template>
  <f7-page class="myCenter">
    <f7-navbar title="我的" class="text-center"></f7-navbar>
    <f7-block-title class="myinfo-title">我的信息</f7-block-title>
    <f7-block >
      <div class="list-item-info" v-for="item in basInfo">
        <span class="label-left">{{item.name}}</span>
        <span class="content-right">{{item.value}}</span>
      </div>
    </f7-block>

    <f7-block-title class="myinfo-title">出入库统计</f7-block-title>
    <f7-block >
      <div class="list-item-info" v-for="item in count">
        <span class="label-left">{{item.name}}</span>
        <span class="content-right">
          <span class="color-num">{{item.value}}</span> 
          {{item.unit}}
        </span>
      </div>
    </f7-block>

    <f7-button class="button button-fill button-big logout-btn">退出登陆</f7-button>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      basInfo: [
        { name: '姓 名', value: '张三' },
        { name: '岗 位', value: '仓库管理员' },
        { name: '电 话', value: '13888888822' }
      ],
      count: [
        { name: '入库统计', value: '102', unit: '件' },
        { name: '出库统计', value: '103', unit: '件' }
      ]
    }
  }
}
</script>
<style lang="less">
  .myCenter{
    .myinfo-title{
      color: @theme-color;
      font-weight: 500;
      font-size: 20px;
      line-height: 1.5;
      margin-top: 20px;
    }
    .list-item-info{
      display: flex;
      color: #333;
      font-size: 16px;
      line-height: 1.8;
      .label-left{
        width: 80px;
        padding-left: 10px;
      }
      .color-num{
        color: @theme-color;
        font-weight: 500;
      }
    }
    .button.button-fill.logout-btn{
      background: @theme-color;
      border-color: @theme-color;
      margin: 50px 15px 20px;
      color: #fff;
      font-weight: 600;
    }
  }
</style>
