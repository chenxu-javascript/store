<template>
  <f7-page class="storage">
    <f7-navbar>
      <f7-nav-left  class="back-btn">
        <i class="icon f7-icons" @click="$f7router.back()">chevron_left</i> 
      </f7-nav-left>
      <f7-nav-title>确认入库</f7-nav-title>
    </f7-navbar>
    <f7-block class="storageDetail">
      <div class="list-item-info" v-for="item in basInfo">
        <span class="label-left">{{item.name}}:</span>
        <span class="content-right">{{item.value}}</span> 
      </div>
      <div class="list-item-info">
        <span class="label-left">样品货架号:</span>
        <input class="content-right search-input" type="text" placeholder="请输入货架号/11.2.32">
        <f7-icon class="icon f7-icons search-icon">radio</f7-icon>
      </div>
    </f7-block>
    <f7-block class="storageDetail">
      <div class="list-item-info" v-for="item in storageDetail">
        <span class="label-left">{{item.name}}:</span>
        <span class="content-right">{{item.value}}</span> 
      </div>
    </f7-block>

    <f7-toolbar class="footer-toolbar">
      <f7-button fill class="button button-fill button-big">确认入库</f7-button>
    </f7-toolbar>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      basInfo: [
        { name: '主样编码', value: '52024324234' },
        { name: '样品土壤', value: '表层土壤' },
        { name: '样品库名称', value: '云南省昆明市流转中心' }
      ],
      storageDetail: [
        { name: '样品编号', value: '52024324234' },
        { name: '用地方式', value: '耕地' },
        { name: '采样地址', value: 'E111.254321, N13.123456' },
        { name: '采样深度', value: '10-30cm' },
        { name: '采样单位', value: '云南省地质局环境检测院' },
        { name: '采样人员', value: '张三, 李四' },
        { name: '采样时间', value: '2018-01-02 12:00:00' },
        { name: '打印时间', value: '2018-01-02 12:00:00' },
      ]
    }
  }
}
</script>
<style lang="less">
  .storage{
    .storageDetail{
      margin: 0 20px;
      padding: 20px 0;
      position: relative;
      .hairline(top, #ccc)
    }
    .search-input{
      border: 1px solid @theme-color;
      width: 3.8rem;
      padding: 0 8px;
      height: 28px;
    }
    .search-icon{
      color: @theme-color;
      margin-left: .2rem;
    }
    .list-item-info{
      display: flex;
      align-items:center;
      color: #333;
      font-size: 16px;
      line-height: 1.8;
      .label-left{
        width: 100px;
        color: @theme-color;
        font-weight: 500;
      }
      .color-num{
        color: @theme-color;
        font-weight: 500;
      }
    }
    .footer-toolbar{
      &::before{
        display: none;
      }
      .toolbar-inner{
        padding: 0;
        .button{
          width: 100%;
          border-radius: 0;
          background: @theme-color;
          color: #fff;
          font-weight: 500;
        }
      }
    }
  }
</style>
