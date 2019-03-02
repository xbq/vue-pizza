<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 -->
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
            <a href class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
            <a href class="list-group-item list-group-item-action">历史订单</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'orderGuideLink'}">
            <a href class="list-group-item list-group-item-action">点菜文档</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
            <a href class="list-group-item list-group-item-action">快递信息</a>
          </router-link>
        </div>
      </div>
      <div class="col-8 nav-link">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
