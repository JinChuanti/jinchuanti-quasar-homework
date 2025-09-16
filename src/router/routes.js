const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      { path: 'task101', component: () => import('pages/Task101Page.vue') },
      { path: 'task102', component: () => import('pages/Task102Page.vue') },
      { path: 'task103', component: () => import('pages/Task103Page.vue') },
      { path: 'task104', component: () => import('pages/Task104Page.vue') }
      // 将来 Task 105, 106 等也添加在这里...
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
