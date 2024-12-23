const routes = [
  {
    path: "/",
    component: () => import("layouts/mainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/authorizationBA.vue") },
      { path: "reg", component: () => import("pages/regBA.vue") },
      { path: "main", component: () => import("pages/mainPage.vue") },
      { path: "statistic", component: () => import("pages/statisticBA.vue") },
      { path: "add", component: () => import("pages/addParams.vue") },
    ],
  },

  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }
];

export default routes;
