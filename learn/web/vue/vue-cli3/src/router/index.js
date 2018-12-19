import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Events from '@/components/Events'
import FormInput from '@/components/FormInput'
import Watch from '@/components/Watch'
import Style from '@/components/Style'
import parentComponent from '@/components/parentComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/formInput',
      name: 'FormInput',
      component: FormInput
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/style',
      name: 'Style',
      component: Style
    },
    {
      path: '/parent',
      name: 'parentComponent',
      component: parentComponent
    }
  ]
})
