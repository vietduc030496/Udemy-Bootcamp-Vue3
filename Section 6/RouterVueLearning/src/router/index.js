// DEFINE ROUTING RULE
import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../view/HomeView.vue';
import AboutView from '../view/AboutView.vue';
import CarView from '../view/CarView.vue';
import ContactView from '../view/ContactView.vue';
import NotFoundView from '../view/404View.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/cars/:id",
            name: "car",
            component: CarView,
            children: [
                {
                    path: "contact",
                    name: "car-contact",
                    component: ContactView
                }
            ]
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFoundView
        }
    ]
})

export default router;