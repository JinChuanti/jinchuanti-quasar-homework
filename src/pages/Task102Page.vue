<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md q-ma-md">
      <q-card-section>
        <div class="text-h6">Task 102 (金传体 23211860115)</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="row q-col-gutter-md">
          <!-- 左侧：信息展示与编辑 -->
          <div class="col-12 col-md-6">
            <div class="text-subtitle1 q-mb-sm">个人信息</div>
            <!-- 创新功能：使用q-input进行双向绑定 -->
            <q-input outlined v-model="tom.name" label="姓名" class="q-mb-sm" />
            <q-input outlined type="number" v-model.number="tom.age" label="年龄" />

            <div class="q-gutter-sm q-mt-md">
              <q-btn dense color="primary" label="姓名尾部加'~~'" @click="modifyName()" />
              <q-btn dense color="secondary" label="年龄+1" @click="modifyAge()" />
            </div>
            <div class="q-gutter-sm q-mt-sm">
              <q-btn dense color="grey-7" label="重置1 (字段赋值)" @click="reset()" />
              <q-btn dense color="orange" label="重置2 (断开响应)" @click="reset2()" />
              <q-btn dense color="positive" label="重置3 (推荐)" @click="reset3()" />
            </div>
          </div>

          <!-- 右侧：操作日志 -->
          <div class="col-12 col-md-6">
            <!-- 创新功能：使用q-list美化操作日志 -->
            <q-list bordered separator>
              <q-item-label header>操作日志</q-item-label>
              <q-item v-if="logMessages.length === 0">
                <q-item-section>
                  <q-item-label caption>暂无操作</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="(log, index) in logMessages" :key="index">
                <q-item-section avatar>
                  <q-icon color="primary" name="history" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ log }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'

const logMessages = ref([])
const addLog = (message) => {
  logMessages.value.unshift(message)
  if (logMessages.value.length > 5) {
    logMessages.value.pop()
  }
}

let tom = reactive({ name: 'Tom', age: 5 })
addLog(`初始化: name=${tom.name}, age=${tom.age}`)

function modifyName() {
  tom.name += '~~'
  addLog(`修改姓名: 新名字为 ${tom.name}`)
}
function modifyAge() {
  tom.age++
  addLog(`修改年龄: 新年龄为 ${tom.age}`)
}
function reset() {
  tom.name = 'Tom'
  tom.age = 5
  addLog('执行重置1 (字段赋值)')
}
function reset2() {
  tom = reactive({ name: 'Tom', age: 5 })
  addLog('执行重置2 (重定向), UI响应已断开!')
  console.log('tom 变量已被重定向, UI可能不会再更新', tom)
}
function reset3() {
  Object.assign(tom, { name: 'Tom', age: 5 })
  addLog('执行重置3 (Object.assign)')
}
</script>
