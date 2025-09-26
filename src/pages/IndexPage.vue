<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-8">
        <!-- 简洁的标题区域 -->
        <div class="text-center q-mb-lg">
          <h1 class="text-h4 q-mb-sm">移动应用开发作业</h1>
          <p class="text-subtitle1 text-grey-6">Vue 3 + Quasar 响应式系统实践</p>
        </div>

        <!-- 作业任务导航 -->
        <q-card class="q-mb-lg">
          <q-card-section>
            <h2 class="text-h6 q-mb-md">作业任务</h2>
            <div class="row q-gutter-sm">
              <div class="col-6 col-sm-3">
                <q-btn
                  unelevated
                  color="primary"
                  icon="counter_1"
                  label="Task 101"
                  to="/task101"
                  class="full-width"
                  size="md"
                />
              </div>
              <div class="col-6 col-sm-3">
                <q-btn
                  unelevated
                  color="secondary"
                  icon="counter_2"
                  label="Task 102"
                  to="/task102"
                  class="full-width"
                  size="md"
                />
              </div>
              <div class="col-6 col-sm-3">
                <q-btn
                  unelevated
                  color="accent"
                  icon="counter_3"
                  label="Task 103"
                  to="/task103"
                  class="full-width"
                  size="md"
                />
              </div>
              <div class="col-6 col-sm-3">
                <q-btn
                  unelevated
                  color="positive"
                  icon="counter_4"
                  label="Task 104"
                  to="/task104"
                  class="full-width"
                  size="md"
                />
              </div>
              <div class="col-6 col-sm-3">
                <q-btn
                  unelevated
                  color="orange"
                  icon="counter_5"
                  label="Task 105"
                  to="/task105"
                  class="full-width"
                  size="md"
                />
              </div>
              <div class="col-6 col-sm-3">
                <q-btn
                  unelevated
                  color="purple"
                  icon="counter_6"
                  label="Task 106"
                  to="/task106"
                  class="full-width"
                  size="md"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- 项目说明 -->
        <q-card class="q-mb-lg">
          <q-card-section>
            <h2 class="text-h6 q-mb-md">项目说明</h2>
            <p class="text-body2 q-mb-sm">
              本项目展示了 Vue 3 响应式系统的核心概念，包括 Ref、Reactive、计算属性等特性的实际应用。
            </p>
            <div class="q-gutter-xs">
              <q-chip color="primary" text-color="white" size="sm">Vue 3</q-chip>
              <q-chip color="secondary" text-color="white" size="sm">Quasar</q-chip>
              <q-chip color="accent" text-color="white" size="sm">Composition API</q-chip>
              <q-chip color="positive" text-color="white" size="sm">响应式</q-chip>
            </div>
          </q-card-section>
        </q-card>

        <!-- 个人项目推荐 -->
        <q-card class="recommendation-card">
          <q-card-section class="bg-blue-6 text-white">
            <div class="row items-center q-mb-md">
              <q-icon name="bookmark" size="sm" class="q-mr-sm" />
              <span class="text-subtitle1">推荐项目</span>
            </div>
            <h3 class="text-h6 q-mb-sm">单词记忆助手</h3>
            <p class="text-body2 q-mb-md">
              专为"不背单词"用户设计的辅助工具，通过故事记忆法帮助记忆单词。
            </p>
            <div class="row q-gutter-sm">
              <q-btn
                outline
                color="white"
                icon="launch"
                label="体验"
                @click="openWebsite"
                size="sm"
              />
              <q-btn
                outline
                color="white"
                icon="star"
                label="Star"
                @click="openGithub"
                size="sm"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { openURL } from 'quasar'

const openWebsite = () => {
  openURL('https://meek-kitten-70bdfb.netlify.app/')
}

const openGithub = () => {
  openURL('https://github.com/JinChuanti/word-is-my-world')
}
</script>

<style scoped>
.recommendation-card {
  border-left: 4px solid #1976d2;
}
</style>
