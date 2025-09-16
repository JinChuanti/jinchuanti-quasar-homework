<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md q-ma-md" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
      <q-card-section>
        <div class="text-h6 text-white">Task 103 (金传体 23211860115)</div>
        <div class="text-subtitle2 text-white">联系人搜索系统</div>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md q-ma-md">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="contacts" color="primary" size="md" class="q-mr-sm" />
          联系人管理
        </div>

        <!-- 搜索输入框 - 双向绑定Ref对象 -->
        <q-input
          outlined
          v-model="filterRef"
          label="搜索联系人 (姓名或电话)"
          placeholder="输入姓名或电话号码进行搜索..."
          class="q-mb-md"
          clearable
          color="purple"
        >
          <template v-slot:prepend>
            <q-icon name="search" color="purple" />
          </template>
        </q-input>

        <!-- 创新功能：统计信息 -->
        <div class="row q-col-gutter-md q-mb-md">
          <div class="col-4">
            <q-chip color="primary" text-color="white" icon="group">
              总联系人: {{ contacts.length }}
            </q-chip>
          </div>
          <div class="col-4">
            <q-chip color="secondary" text-color="white" icon="search">
              搜索结果: {{ filteredData.length }}
            </q-chip>
          </div>
          <div class="col-4">
            <q-chip color="accent" text-color="white" icon="filter_list">
              过滤比例: {{ filterPercentage }}%
            </q-chip>
          </div>
        </div>

        <!-- 创新功能：快速筛选按钮 -->
        <div class="q-mb-md">
          <q-btn-group>
            <q-btn 
              :color="quickFilter === 'all' ? 'primary' : 'grey-5'" 
              label="全部" 
              @click="setQuickFilter('all')"
            />
            <q-btn 
              :color="quickFilter === 'mobile' ? 'primary' : 'grey-5'" 
              label="手机号" 
              @click="setQuickFilter('mobile')"
            />
            <q-btn 
              :color="quickFilter === 'landline' ? 'primary' : 'grey-5'" 
              label="座机" 
              @click="setQuickFilter('landline')"
            />
          </q-btn-group>
        </div>

        <!-- 联系人列表显示 -->
        <q-list bordered separator class="rounded-borders">
          <q-item-label header class="text-primary">
            <q-icon name="list" class="q-mr-sm" />
            联系人列表 ({{ filteredData.length }} 条记录)
          </q-item-label>
          
          <q-item 
            v-for="(contact, index) in filteredData" 
            :key="index"
            clickable
            v-ripple
            class="contact-item"
          >
            <q-item-section avatar>
              <q-avatar :color="getAvatarColor(index)" text-color="white" :icon="getContactIcon(contact.phone)" />
            </q-item-section>
            
            <q-item-section>
              <q-item-label class="text-weight-medium">{{ contact.name }}</q-item-label>
              <q-item-label caption>{{ contact.phone }}</q-item-label>
            </q-item-section>
            
            <q-item-section side>
              <q-btn 
                flat 
                round 
                color="primary" 
                icon="call" 
                size="sm"
                @click="callContact(contact)"
              />
            </q-item-section>
          </q-item>
          
          <!-- 空状态显示 -->
          <q-item v-if="filteredData.length === 0">
            <q-item-section class="text-center">
              <q-icon name="search_off" size="3em" color="grey-5" />
              <div class="text-grey-6 q-mt-sm">
                {{ filterRef ? '未找到匹配的联系人' : '暂无联系人数据' }}
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

// 双向绑定的Ref对象
const filterRef = ref('')
const quickFilter = ref('all')

// 使用Array.from()生成联系人数据 - 掌握Array.from()的使用方法
const contacts = Array.from({ length: 12 }, (_, i) => {
  const names = ['张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十', '郑十一', '王十二', '刘十三', '陈十四']
  const phoneTypes = ['138', '139', '150', '151', '188', '189', '010', '021']
  const phoneType = phoneTypes[i % phoneTypes.length]
  const phoneNumber = phoneType.startsWith('0') 
    ? `${phoneType}-${Math.floor(Math.random() * 90000000) + 10000000}`
    : `${phoneType}${Math.floor(Math.random() * 90000000) + 10000000}`
  
  return {
    name: names[i] || `联系人${i + 1}`,
    phone: phoneNumber
  }
})

// 使用计算属性和filter()方法进行过滤
const filteredData = computed(() => {
  let result = contacts
  
  // 快速筛选
  if (quickFilter.value === 'mobile') {
    result = result.filter(contact => !contact.phone.includes('-'))
  } else if (quickFilter.value === 'landline') {
    result = result.filter(contact => contact.phone.includes('-'))
  }
  
  // 文本搜索过滤
  if (filterRef.value) {
    result = result.filter(contact => 
      contact.name.toLowerCase().includes(filterRef.value.toLowerCase()) ||
      contact.phone.includes(filterRef.value)
    )
  }
  
  return result
})

// 计算过滤百分比
const filterPercentage = computed(() => {
  if (contacts.length === 0) return 0
  return Math.round((filteredData.value.length / contacts.length) * 100)
})

// 创新功能：获取头像颜色
function getAvatarColor(index) {
  const colors = ['primary', 'secondary', 'accent', 'positive', 'negative', 'info', 'warning']
  return colors[index % colors.length]
}

// 创新功能：根据电话类型获取图标
function getContactIcon(phone) {
  return phone.includes('-') ? 'phone' : 'smartphone'
}

// 创新功能：拨打电话
function callContact(contact) {
  // 这里可以添加实际的拨打电话功能
  console.log(`拨打电话给 ${contact.name}: ${contact.phone}`)
}

// 快速筛选功能
function setQuickFilter(type) {
  quickFilter.value = type
}
</script>

<style scoped>
.contact-item:hover {
  background-color: #f5f5f5;
}
</style>