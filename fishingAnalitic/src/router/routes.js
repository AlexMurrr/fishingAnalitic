
const routes = [
  {
    path: '/',
    component: () => import('layouts/mainLayout.vue'),
    children: [
      // { path: '', component: () => import('') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
