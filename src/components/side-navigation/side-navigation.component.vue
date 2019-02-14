<template>
<div id="sideNavigation"> 
  <el-menu
      :router="true"
      default-active="activeLink"
      class="side-nav-bar">
      <el-menu-item index="dashboard">
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="list"> 
        <span>List</span>
      </el-menu-item>
    </el-menu>
</div>

</template>
 <script src="./side-navigation.component.js"></script>
  <style src="./side-navigation.component.css"></style>
