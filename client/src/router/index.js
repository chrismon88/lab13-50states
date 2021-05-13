import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from "@/components/StateList";
import AboutSite from "@/components/AboutSite";
import StateMap from "@/components/StateMap";
import NotFound from "@/components/NotFound"

//make code from router available to other files in app
export default createRouter({
    history: createWebHashHistory(),
    //routes array, inside array object with properties
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            //object path
            path:'/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            //path including state, whichever stateMap component will recognize and show map for designated state
            path: '/map/:state',
            name: 'StateMap',
            component:StateMap
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})