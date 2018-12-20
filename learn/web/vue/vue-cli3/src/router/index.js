import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/helloWorld'
import Events from '@/components/events'
import FormInput from '@/components/formInput'
import Watch from '@/components/watch'
import Style from '@/components/style'
import ParentComponent from '@/components/childparent/ParentComponent'
import Parent from '@/components/slots/parent'
import Big from '@/components/compkeep/big'
import Animates from '@/components/animate/animates'
import Directives from '@/components/directives'

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
      name: 'ParentComponent',
      component: ParentComponent
    },
    {
      path: '/slot',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/big',
      name: 'Big',
      component: Big
    },
    {
      path: '/animates',
      name: 'Animates',
      component: Animates
    },
    {
      path: '/directives',
      name: 'Directives',
      component: Directives
    }
  ]
})
