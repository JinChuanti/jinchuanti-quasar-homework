<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md q-ma-md">
      <q-card-section>
        <div class="text-h6">Task 101 (金传体 23211860115)</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="text-h5 q-mb-md">
          当前计数值:
          <span class="text-primary text-bold q-ml-sm">{{ count }}</span>
          <!-- 创新功能：使用q-chip美化状态显示 -->
          <q-chip dense :color="statusColor" text-color="white" class="q-ml-md" :label="numberStatus" />
        </div>

        <!-- 创新功能：使用q-input美化输入框 -->
        <q-input
          outlined
          type="number"
          v-model.number="count"
          label="可以直接设置计数值"
          class="q-mb-md"
          style="max-width: 250px"
        />

        <!-- 使用q-btn美化所有按钮 -->
        <div class="q-gutter-sm">
          <q-btn color="primary" label="Increase" @click="countUp()" />
          <q-btn color="secondary" label="Decrease" @click="countDown()" />
          <q-btn color="negative" label="Reset" @click="resetCount()" />
        </div>
        <div class="q-gutter-sm q-mt-sm">
          <q-btn color="accent" label="平方" @click="square()" />
          <q-btn color="deep-orange" label="乘以 2" @click="double()" />
        </div>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(0);

function countUp() { count.value++; }
function countDown() { count.value--; }
function resetCount() { count.value = 0; }
function square() { count.value = count.value * count.value; }
function double() { count.value = count.value * 2; }

const numberStatus = computed(() => {
  if (count.value > 0) return '正数';
  if (count.value < 0) return '负数';
  return '零';
});

// 创新功能：为状态芯片提供动态颜色
const statusColor = computed(() => {
  if (count.value > 0) return 'positive';
  if (count.value < 0) return 'negative';
  return 'grey';
});
</script>