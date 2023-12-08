
const routes = [
  {
    path: '/',
    component: () => import(''),
    children: [
      { path: '', component: () => import('') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
