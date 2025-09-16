<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md q-ma-md" style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);">
      <q-card-section>
        <div class="text-h6 text-white">Task 104 (金传体 23211860115)</div>
        <div class="text-subtitle2 text-white">Ref响应式系统演示</div>
      </q-card-section>
    </q-card>

    <div class="row q-col-gutter-md">
      <!-- 左侧：计数器显示 -->
      <div class="col-12 col-md-6">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6 q-mb-md">
              <q-icon name="analytics" color="primary" size="md" class="q-mr-sm" />
              计数器状态显示
            </div>

            <!-- Ref对象计数器（基本变量） -->
            <q-item class="q-pa-none q-mb-sm">
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white" icon="counter_1" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Ref计数器 (响应式)</q-item-label>
                <q-item-label caption>count.value = {{ count }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-chip :color="count > 0 ? 'positive' : count < 0 ? 'negative' : 'grey'" text-color="white">
                  {{ count }}
                </q-chip>
              </q-item-section>
            </q-item>

            <!-- 基本变量计数器 -->
            <q-item class="q-pa-none q-mb-sm">
              <q-item-section avatar>
                <q-avatar color="secondary" text-color="white" icon="counter_2" />
              </q-item-section>
              <q-item-section>
                <q-item-label>基本变量计数器 (非响应式)</q-item-label>
                <q-item-label caption>nonRefCount = {{ nonRefCount }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-chip :color="nonRefCount > 0 ? 'positive' : nonRefCount < 0 ? 'negative' : 'grey'" text-color="white">
                  {{ nonRefCount }}
                </q-chip>
              </q-item-section>
            </q-item>

            <!-- Ref对象（值是对象） -->
            <q-item class="q-pa-none q-mb-sm">
              <q-item-section avatar>
                <q-avatar color="accent" text-color="white" icon="counter_3" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Ref对象.count字段</q-item-label>
                <q-item-label caption>objRef.count = {{ objRef.count }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-chip :color="objRef.count > 0 ? 'positive' : objRef.count < 0 ? 'negative' : 'grey'" text-color="white">
                  {{ objRef.count }}
                </q-chip>
              </q-item-section>
            </q-item>

            <!-- Ref数组 -->
            <q-item class="q-pa-none q-mb-sm">
              <q-item-section avatar>
                <q-avatar color="warning" text-color="white" icon="counter_4" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Ref数组[0]元素</q-item-label>
                <q-item-label caption>arrayRef[0] = {{ arrayRef[0] }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-chip :color="arrayRef[0] > 0 ? 'positive' : arrayRef[0] < 0 ? 'negative' : 'grey'" text-color="white">
                  {{ arrayRef[0] }}
                </q-chip>
              </q-item-section>
            </q-item>

            <!-- 创新功能：总计显示 -->
            <q-separator class="q-my-md" />
            <q-item class="q-pa-none">
              <q-item-section avatar>
                <q-avatar color="deep-purple" text-color="white" icon="calculate" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">所有计数器总和</q-item-label>
                <q-item-label caption>响应式计算属性</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-chip color="deep-purple" text-color="white" size="lg">
                  {{ totalCount }}
                </q-chip>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>

        <!-- 创新功能：响应式演示 -->
        <q-card class="q-pa-md q-mt-md">
          <q-card-section>
            <div class="text-subtitle1 q-mb-md">
              <q-icon name="visibility" color="info" class="q-mr-sm" />
              响应式变化观察
            </div>
            <q-linear-progress 
              :value="Math.abs(count) / 100" 
              color="primary" 
              size="20px" 
              class="q-mb-sm"
            >
              <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="primary" :label="`Ref: ${count}`" />
              </div>
            </q-linear-progress>
            <q-linear-progress 
              :value="Math.abs(nonRefCount) / 100" 
              color="secondary" 
              size="20px"
            >
              <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="secondary" :label="`非Ref: ${nonRefCount}`" />
              </div>
            </q-linear-progress>
          </q-card-section>
        </q-card>
      </div>

      <!-- 右侧：操作按钮 -->
      <div class="col-12 col-md-6">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6 q-mb-md">
              <q-icon name="touch_app" color="primary" size="md" class="q-mr-sm" />
              操作按钮区域
            </div>

            <!-- 按钮1：更新Ref计数器 -->
            <q-btn
              color="primary"
              label="Ref计数器 +1"
              icon="add"
              class="full-width q-mb-sm"
              @click="countUp()"
            />

            <!-- 按钮2：更新基本变量计数器 -->
            <q-btn
              color="secondary"
              label="基本变量 +1 (不响应)"
              icon="add_circle_outline"
              class="full-width q-mb-sm"
              @click="nonRefCountUp()"
            />

            <!-- 按钮3：同时更新两个计数器 -->
            <q-btn
              color="accent"
              label="同时更新两个计数器"
              icon="double_arrow"
              class="full-width q-mb-sm"
              @click="countUpBoth()"
            />

            <!-- 按钮4：直接调用.value++ -->
            <q-btn
              color="positive"
              label="直接 count.value++"
              icon="trending_up"
              class="full-width q-mb-sm"
              @click="count.value++"
            />

            <!-- 按钮5：访问Ref对象的count字段 -->
            <q-btn
              color="warning"
              label="objRef.count++"
              icon="account_tree"
              class="full-width q-mb-sm"
              @click="objRef.count++"
            />

            <!-- 按钮6：访问Ref数组的第0个元素 -->
            <q-btn
              color="info"
              label="arrayRef[0]++"
              icon="format_list_numbered"
              class="full-width q-mb-sm"
              @click="arrayRef[0]++"
            />

            <!-- 创新功能：重置按钮 -->
            <q-separator class="q-my-md" />
            <div class="row q-col-gutter-sm">
              <div class="col-6">
                <q-btn
                  color="negative"
                  label="重置所有"
                  icon="refresh"
                  class="full-width"
                  @click="resetAll()"
                />
              </div>
              <div class="col-6">
                <q-btn
                  color="grey-7"
                  label="随机值"
                  icon="shuffle"
                  class="full-width"
                  @click="randomizeAll()"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- 创新功能：操作历史 -->
        <q-card class="q-pa-md q-mt-md">
          <q-card-section>
            <div class="text-subtitle1 q-mb-md">
              <q-icon name="history" color="deep-orange" class="q-mr-sm" />
              操作历史
            </div>
            <q-scroll-area style="height: 200px;">
              <q-list>
                <q-item 
                  v-for="(log, index) in operationLogs" 
                  :key="index"
                  dense
                >
                  <q-item-section avatar>
                    <q-icon :name="log.icon" :color="log.color" size="sm" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>{{ log.message }}</q-item-label>
                    <q-item-label caption class="text-grey-5">{{ log.time }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item v-if="operationLogs.length === 0">
                  <q-item-section class="text-center text-grey-5">
                    暂无操作记录
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

// 定义Ref对象的计数器（Ref值是基本变量）
const count = ref(0)

// 定义基本变量的计数器
let nonRefCount = 1

// 定义Ref对象（Ref值是对象），count字段指向Ref计数器
const objRef = ref({
  count: 3
})

// 定义Ref数组，数组元素是Ref计数器
const arrayRef = ref([ref(0)])

// 创新功能：操作日志
const operationLogs = ref([])

// 计算属性：总计数
const totalCount = computed(() => {
  return count.value + nonRefCount + objRef.value.count + arrayRef.value[0].value
})

// 点击事件更新Ref计数器
function countUp() {
  count.value++
  addLog('Ref计数器 +1', 'add', 'primary')
}

// 点击事件更新基本变量计数器（观察UI变化）
function nonRefCountUp() {
  nonRefCount++
  addLog('基本变量 +1 (UI不会更新)', 'add_circle_outline', 'secondary')
  console.log('基本变量计数器值:', nonRefCount, '(UI不会自动更新)')
}

// 点击事件同时更新Ref计数器和基本变量计数器（观察UI变化）
function countUpBoth() {
  count.value++
  nonRefCount++
  addLog('同时更新两个计数器', 'double_arrow', 'accent')
  console.log('同时更新 - Ref:', count.value, ', 基本变量:', nonRefCount)
}

// 创新功能：重置所有计数器
function resetAll() {
  count.value = 0
  nonRefCount = 0
  objRef.value.count = 0
  arrayRef.value[0].value = 0
  addLog('重置所有计数器', 'refresh', 'negative')
}

// 创新功能：随机化所有计数器
function randomizeAll() {
  count.value = Math.floor(Math.random() * 100) - 50
  nonRefCount = Math.floor(Math.random() * 100) - 50
  objRef.value.count = Math.floor(Math.random() * 100) - 50
  arrayRef.value[0].value = Math.floor(Math.random() * 100) - 50
  addLog('随机化所有计数器', 'shuffle', 'grey-7')
}

// 添加操作日志
function addLog(message, icon, color) {
  const now = new Date()
  operationLogs.value.unshift({
    message,
    icon,
    color,
    time: now.toLocaleTimeString()
  })
  
  // 只保留最近10条记录
  if (operationLogs.value.length > 10) {
    operationLogs.value.pop()
  }
}
</script>

<style scoped>
.q-linear-progress {
  border-radius: 10px;
}

.q-btn {
  text-transform: none;
}
</style>