<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <!-- 页面标题 -->
        <div class="text-center q-mb-lg">
          <h1 class="text-h4 q-mb-sm">Task 105 - 响应式对象对比</h1>
          <p class="text-subtitle1 text-grey-6">深入理解 Ref、Reactive 和 shallowRef 的区别</p>
        </div>

        <!-- 个人信息卡片 -->
        <q-card class="q-mb-lg">
          <q-card-section>
            <div class="text-h6 q-mb-md">
              <q-icon name="person" class="q-mr-sm" />
              个人信息
            </div>
            <div class="row q-gutter-md">
              <div class="col-12 col-sm-6">
                <q-input v-model="personalInfo.name" label="姓名" outlined dense />
              </div>
              <div class="col-12 col-sm-6">
                <q-input v-model="personalInfo.id" label="学号" outlined dense />
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- 响应式对象对比 -->
        <div class="row q-gutter-md">
          <!-- Ref 对象 -->
          <div class="col-12 col-md-4">
            <q-card class="full-height">
              <q-card-section class="bg-primary text-white">
                <div class="text-h6">
                  <q-icon name="looks_one" class="q-mr-sm" />
                  Ref 对象
                </div>
              </q-card-section>
              <q-card-section>
                <div class="q-mb-md">
                  <div class="text-subtitle2 q-mb-sm">计数: {{ deepRefCount }}</div>
                  <div class="row q-gutter-xs">
                    <q-btn color="primary" icon="add" size="sm" round @click="countUpRef" />
                    <q-btn color="negative" icon="remove" size="sm" round @click="deepRefCount--" />
                    <q-btn color="warning" icon="refresh" size="sm" round @click="resetRef" />
                  </div>
                </div>
                <q-separator class="q-my-md" />
                <div class="text-caption text-grey-7">
                  Ref 创建的响应式引用，适用于基本数据类型和对象
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Reactive 对象 -->
          <div class="col-12 col-md-4">
            <q-card class="full-height">
              <q-card-section class="bg-secondary text-white">
                <div class="text-h6">
                  <q-icon name="looks_two" class="q-mr-sm" />
                  Reactive 对象
                </div>
              </q-card-section>
              <q-card-section>
                <div class="q-mb-md">
                  <div class="text-subtitle2 q-mb-sm">计数: {{ reactiveObj.count }}</div>
                  <div class="row q-gutter-xs">
                    <q-btn color="secondary" icon="add" size="sm" round @click="countUpReactive" />
                    <q-btn
                      color="negative"
                      icon="remove"
                      size="sm"
                      round
                      @click="reactiveObj.count--"
                    />
                    <q-btn color="warning" icon="refresh" size="sm" round @click="resetReactive" />
                  </div>
                </div>
                <q-separator class="q-my-md" />
                <div class="text-caption text-grey-7">
                  Reactive 创建的响应式对象，适用于对象和数组
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- shallowRef 对象 -->
          <div class="col-12 col-md-4">
            <q-card class="full-height">
              <q-card-section class="bg-accent text-white">
                <div class="text-h6">
                  <q-icon name="looks_3" class="q-mr-sm" />
                  shallowRef 对象
                </div>
              </q-card-section>
              <q-card-section>
                <div class="q-mb-md">
                  <div class="text-subtitle2 q-mb-sm">计数: {{ shallowRefCount.value }}</div>
                  <div class="row q-gutter-xs">
                    <q-btn color="accent" icon="add" size="sm" round @click="countUpShallow" />
                    <q-btn
                      color="negative"
                      icon="remove"
                      size="sm"
                      round
                      @click="shallowRefCount.value--"
                    />
                    <q-btn color="warning" icon="refresh" size="sm" round @click="resetShallow" />
                  </div>
                </div>
                <q-separator class="q-my-md" />
                <div class="text-caption text-grey-7">shallowRef 只对 .value 的访问是响应式的</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- 对比说明 -->
        <q-card class="q-mt-lg">
          <q-card-section>
            <div class="text-h6 q-mb-md">
              <q-icon name="compare" class="q-mr-sm" />
              响应式对象对比说明
            </div>
            <div class="row q-gutter-md">
              <div class="col-12 col-md-4">
                <q-item>
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white" icon="looks_one" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-weight-bold">Ref</q-item-label>
                    <q-item-label caption>
                      深度响应式，适用于基本类型和对象，需要通过 .value 访问
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-md-4">
                <q-item>
                  <q-item-section avatar>
                    <q-avatar color="secondary" text-color="white" icon="looks_two" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-weight-bold">Reactive</q-item-label>
                    <q-item-label caption>
                      深度响应式，适用于对象和数组，直接访问属性
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-12 col-md-4">
                <q-item>
                  <q-item-section avatar>
                    <q-avatar color="accent" text-color="white" icon="looks_3" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-weight-bold">shallowRef</q-item-label>
                    <q-item-label caption> 浅层响应式，只有 .value 的访问是响应式的 </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- 操作记录 -->
        <q-card class="q-mt-lg">
          <q-card-section>
            <div class="text-h6 q-mb-md">
              <q-icon name="history" class="q-mr-sm" />
              操作记录
            </div>
            <q-list separator>
              <q-item v-for="(record, index) in operationHistory" :key="index">
                <q-item-section avatar>
                  <q-avatar :color="getRecordColor(record.type)" text-color="white" size="sm">
                    {{ index + 1 }}
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ record.action }}</q-item-label>
                  <q-item-label caption>{{ record.timestamp }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <div class="q-mt-md">
              <q-btn
                color="grey"
                icon="clear_all"
                label="清空记录"
                size="sm"
                @click="clearHistory"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive, shallowRef, onMounted } from 'vue'

// 个人信息
const personalInfo = reactive({
  name: '金传体',
  id: '23211860115',
})

// Ref 响应式数据
const deepRefCount = ref(0)

// Reactive 响应式对象
const reactiveObj = reactive({
  count: 0,
})

// shallowRef 响应式数据
const shallowRefCount = shallowRef({ value: 0 })

// 操作记录
const operationHistory = ref([])

// 添加操作记录
const addOperationRecord = (type, action) => {
  const timestamp = new Date().toLocaleTimeString()
  operationHistory.value.unshift({
    type,
    action,
    timestamp,
  })
  // 只保留最近10条记录
  if (operationHistory.value.length > 10) {
    operationHistory.value.pop()
  }
}

// Ref 操作方法
const countUpRef = () => {
  deepRefCount.value++
  addOperationRecord('ref', `Ref 计数增加到 ${deepRefCount.value}`)
}

const resetRef = () => {
  deepRefCount.value = 0
  addOperationRecord('ref', 'Ref 计数重置为 0')
}

// Reactive 操作方法
const countUpReactive = () => {
  reactiveObj.count++
  addOperationRecord('reactive', `Reactive 计数增加到 ${reactiveObj.count}`)
}

const resetReactive = () => {
  reactiveObj.count = 0
  addOperationRecord('reactive', 'Reactive 计数重置为 0')
}

// shallowRef 操作方法
const countUpShallow = () => {
  shallowRefCount.value.value++
  addOperationRecord('shallow', `shallowRef 计数增加到 ${shallowRefCount.value.value}`)
}

const resetShallow = () => {
  shallowRefCount.value = { value: 0 }
  addOperationRecord('shallow', 'shallowRef 计数重置为 0')
}

// 获取记录颜色
const getRecordColor = (type) => {
  switch (type) {
    case 'ref':
      return 'primary'
    case 'reactive':
      return 'secondary'
    case 'shallow':
      return 'accent'
    default:
      return 'grey'
  }
}

// 清空历史记录
const clearHistory = () => {
  operationHistory.value = []
  addOperationRecord('system', '操作记录已清空')
}

onMounted(() => {
  addOperationRecord('system', '页面初始化完成')
})
</script>
