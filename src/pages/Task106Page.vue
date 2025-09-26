<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <!-- 页面标题 -->
        <div class="text-center q-mb-lg">
          <h1 class="text-h4 q-mb-sm">Task 106 - 模板引用与日志系统</h1>
          <p class="text-subtitle1 text-grey-6">useTemplateRef 的使用和自定义操作日志</p>
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

        <!-- 计数器控制区域 -->
        <q-card class="q-mb-lg">
          <q-card-section>
            <div class="text-h6 q-mb-md">
              <q-icon name="calculate" class="q-mr-sm" />
              计数器控制
            </div>

            <!-- 计数器显示 -->
            <div class="text-center q-mb-lg">
              <div class="text-h2 text-primary q-mb-md" ref="counterDisplay">
                {{ count }}
              </div>
            </div>

            <!-- 操作按钮 -->
            <div class="row justify-center q-gutter-md q-mb-lg">
              <q-btn
                color="positive"
                icon="add"
                label="增加"
                @click="increment"
                size="lg"
                class="q-px-xl"
              />
              <q-btn
                color="negative"
                icon="remove"
                label="减少"
                @click="decrement"
                size="lg"
                class="q-px-xl"
              />
              <q-btn
                color="warning"
                icon="refresh"
                label="重置"
                @click="reset"
                size="lg"
                class="q-px-xl"
              />
            </div>

            <!-- 模板引用演示 -->
            <div class="q-mt-lg">
              <div class="text-subtitle1 q-mb-md">模板引用演示</div>
              <div class="row q-gutter-md">
                <q-btn
                  color="primary"
                  icon="highlight"
                  label="高亮计数器"
                  @click="highlightCounter"
                  size="sm"
                />
                <q-btn
                  color="secondary"
                  icon="info"
                  label="获取元素信息"
                  @click="getElementInfo"
                  size="sm"
                />
                <q-btn
                  color="accent"
                  icon="animation"
                  label="添加动画"
                  @click="animateCounter"
                  size="sm"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- 操作日志 -->
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">
              <q-icon name="list_alt" class="q-mr-sm" />
              操作日志
            </div>

            <q-list separator>
              <q-item v-for="(log, index) in logs" :key="index">
                <q-item-section avatar>
                  <q-avatar :color="getLogColor(log.type)" text-color="white" size="sm">
                    <q-icon :name="getLogIcon(log.type)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ log.message }}</q-item-label>
                  <q-item-label caption>{{ log.timestamp }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

            <div v-if="logs.length === 0" class="text-center text-grey-5 q-py-lg">
              <q-icon name="inbox" size="2rem" class="q-mb-md" />
              <div>暂无操作日志</div>
            </div>

            <div class="q-mt-md">
              <q-btn color="grey" icon="clear_all" label="清空日志" size="sm" @click="clearLogs" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// 个人信息
const personalInfo = reactive({
  name: '金传体',
  id: '23211860115',
})

// 计数器
const count = ref(0)

// 模板引用
const counterDisplay = ref(null)

// 操作日志
const logs = ref([])

// 添加日志
const addLog = (type, message) => {
  const timestamp = new Date().toLocaleTimeString()
  logs.value.unshift({
    type,
    message,
    timestamp,
  })

  // 只保留最近15条日志
  if (logs.value.length > 15) {
    logs.value.pop()
  }
}

// 计数器操作
const increment = () => {
  count.value++
  addLog('increment', `计数器增加到 ${count.value}`)
}

const decrement = () => {
  count.value--
  addLog('decrement', `计数器减少到 ${count.value}`)
}

const reset = () => {
  count.value = 0
  addLog('reset', '计数器重置为 0')
}

// 模板引用操作
const highlightCounter = () => {
  if (counterDisplay.value) {
    counterDisplay.value.style.backgroundColor = '#ffeb3b'
    counterDisplay.value.style.transition = 'background-color 0.3s'

    setTimeout(() => {
      counterDisplay.value.style.backgroundColor = ''
    }, 1000)

    addLog('template', '计数器元素已高亮显示')
  }
}

const getElementInfo = () => {
  if (counterDisplay.value) {
    const rect = counterDisplay.value.getBoundingClientRect()
    const info = `元素位置: (${Math.round(rect.left)}, ${Math.round(rect.top)}), 大小: ${Math.round(rect.width)}x${Math.round(rect.height)}`

    $q.notify({
      type: 'info',
      message: info,
      position: 'top',
    })

    addLog('template', `获取元素信息: ${info}`)
  }
}

const animateCounter = () => {
  if (counterDisplay.value) {
    counterDisplay.value.style.transform = 'scale(1.2) rotate(5deg)'
    counterDisplay.value.style.transition = 'transform 0.3s'

    setTimeout(() => {
      counterDisplay.value.style.transform = ''
    }, 300)

    addLog('template', '计数器元素添加动画效果')
  }
}

// 获取日志颜色
const getLogColor = (type) => {
  switch (type) {
    case 'increment':
      return 'positive'
    case 'decrement':
      return 'negative'
    case 'reset':
      return 'warning'
    case 'template':
      return 'primary'
    default:
      return 'grey'
  }
}

// 获取日志图标
const getLogIcon = (type) => {
  switch (type) {
    case 'increment':
      return 'add'
    case 'decrement':
      return 'remove'
    case 'reset':
      return 'refresh'
    case 'template':
      return 'code'
    default:
      return 'info'
  }
}

// 清空日志
const clearLogs = () => {
  logs.value = []
  addLog('system', '日志已清空')
}

onMounted(() => {
  addLog('system', '页面初始化完成')
})
</script>
