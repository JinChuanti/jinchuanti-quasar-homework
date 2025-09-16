<template>
  <q-page class="q-pa-lg">
    <div class="row justify-center">
      <div class="col-12 col-md-8 col-lg-6">
        <!-- 项目标题 -->
        <div class="text-center q-mb-xl">
          <q-icon name="code" size="4rem" color="primary" class="q-mb-md" />
          <h1 class="text-h3 text-weight-bold q-mb-md">Vue 3 移动应用开发作业</h1>
          <p class="text-h6 text-grey-7">基于 Quasar Framework 的响应式系统学习项目</p>
        </div>

        <!-- 项目介绍 -->
        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mb-md">
              <q-icon name="info" class="q-mr-sm" />
              项目介绍
            </div>
            <p class="text-body1 q-mb-md">
              这是一个基于 Vue 3 和 Quasar Framework 开发的移动应用学习项目，主要展示了 Vue 3 响应式系统的核心概念和实际应用。
            </p>
            <div class="q-mb-md">
              <div class="text-h6 q-mb-sm">项目特色：</div>
              <ul class="q-pl-md">
                <li>响应式设计，完美适配移动端</li>
                <li>Vue 3 Composition API 实战演示</li>
                <li>现代化 UI 设计</li>
              </ul>
            </div>
          </q-card-section>
        </q-card>

        <!-- GitHub项目推广 -->
        <q-card class="q-mb-lg" flat bordered>
          <q-card-section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div class="text-h5 q-mb-md">
              <q-icon name="school" class="q-mr-sm" />
              推荐项目：单词记忆助手
            </div>
            <p class="text-body1 q-mb-md">
              正在使用"不背单词"等软件背单词？这个网站是你的完美辅助工具！专门解决词根记忆法难记、覆盖不全的问题，为每个单词提供生动有趣的故事记忆法！
            </p>

            <div class="q-mb-md">
              <div class="text-subtitle1 q-mb-sm">✨ 核心优势：</div>
              <ul class="q-pl-md text-body2">
                <li>📚 完美辅助"不背单词"等主流背单词软件</li>
                <li>📖 每个单词都有专属故事，告别枯燥词根记忆</li>
                <li>🎭 生动有趣的记忆故事，印象更深刻</li>
                <li>🔍 快速查词功能，学习过程无缝衔接</li>
                <li>📱 移动端优化，随时随地辅助记忆</li>
              </ul>
            </div>

            <div class="row q-gutter-md">
              <q-btn
                color="white"
                text-color="primary"
                icon="launch"
                label="立即体验"
                @click="openWebsite"
                class="q-px-lg"
              />
              <q-btn
                color="white"
                text-color="primary"
                icon="star"
                label="GitHub Star"
                @click="openGithub"
                class="q-px-lg"
              />
            </div>

            <div class="q-mt-md text-caption">
              如果这个辅助工具对你的单词学习有帮助，请为项目点个 ⭐ Star，让更多同学受益！
            </div>
          </q-card-section>
        </q-card>

        <!-- 快速导航 -->
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h5 q-mb-md">
              <q-icon name="explore" class="q-mr-sm" />
              快速导航
            </div>
            <div class="row q-gutter-md">
              <div class="col-12 col-sm-6">
                <q-btn
                  color="primary"
                  icon="looks_one"
                  label="Task 101 - Ref 计数器"
                  to="/task101"
                  class="full-width q-py-md"
                  flat
                />
              </div>
              <div class="col-12 col-sm-6">
                <q-btn
                  color="secondary"
                  icon="looks_two"
                  label="Task 102 - Reactive 对象"
                  to="/task102"
                  class="full-width q-py-md"
                  flat
                />
              </div>
              <div class="col-12 col-sm-6">
                <q-btn
                  color="accent"
                  icon="looks_3"
                  label="Task 103 - 联系人搜索"
                  to="/task103"
                  class="full-width q-py-md"
                  flat
                />
              </div>
              <div class="col-12 col-sm-6">
                <q-btn
                  color="positive"
                  icon="looks_4"
                  label="Task 104 - 响应式系统"
                  to="/task104"
                  class="full-width q-py-md"
                  flat
                />
              </div>
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
.bg-gradient-to-r {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
