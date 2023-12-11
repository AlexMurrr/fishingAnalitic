
const routes = [
  {
    path: '/',
    component: () => import('layouts/mainLayout.vue'),
    children: [
       { path: 'reg', component: () => import('pages/regBA.vue') },
       { path: 'main', component: () => import('pages/mainPage.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
