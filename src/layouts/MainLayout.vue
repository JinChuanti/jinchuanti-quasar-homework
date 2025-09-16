<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Jinchuanti App - Quasar 作业
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- 侧边栏菜单 -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          金传体 - 我的作业
        </q-item-label>

        <!-- 首页链接 -->
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>首页</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Task 101 链接 -->
        <q-item clickable v-ripple to="/task101">
          <q-item-section avatar>
            <q-icon name="looks_one" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Task 101</q-item-label>
            <q-item-label caption>计数器 (Ref)</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Task 102 链接 -->
        <q-item clickable v-ripple to="/task102">
          <q-item-section avatar>
            <q-icon name="looks_two" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Task 102</q-item-label>
            <q-item-label caption>响应式对象 (Reactive)</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Task 103 链接 -->
        <q-item clickable v-ripple to="/task103">
          <q-item-section avatar>
            <q-icon name="looks_3" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Task 103</q-item-label>
            <q-item-label caption>联系人搜索 (Array.from & Filter)</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Task 104 链接 -->
        <q-item clickable v-ripple to="/task104">
          <q-item-section avatar>
            <q-icon name="looks_4" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Task 104</q-item-label>
            <q-item-label caption>Ref响应式系统 (Ref & Reactive)</q-item-label>
          </q-item-section>
        </q-item>

        <!-- 将来 Task 105, 106 等也添加在这里... -->

      </q-list>
    </q-drawer>

    <!-- 页面容器，用于显示路由匹配到的页面 -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>