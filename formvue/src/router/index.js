import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/test'
import Form from '@/view/Form'
import Test from '@/view/TestForm'
import Test1 from '@/view/test1'
import CForm from '@/view/CForm'
import Test2 from '@/view/test2'

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
        },
        {
            path: '/Test1',
            name: 'Test1',
            component: Test1
        },
        {
            path: '/cform',
            name: 'CForm',
            component: CForm
        },
        {
            path: '/test2',
            name: 'test2',
            component : Test2
        }
    ]
})
