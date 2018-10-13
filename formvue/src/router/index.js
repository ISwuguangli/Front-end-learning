import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/test'
import Form from '@/view/Form'
import Test from '@/view/TestForm'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'hello',
            component: HelloWorld
        },
        {
            path: '/Test',
            name: 'test',
            component: Test
        },
        {
            path: '/Form',
            name: 'Form',
            component: Form
        }
    ]
})
