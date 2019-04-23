import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import HelloWorld from '@/components/helloWorld'
import Events from '@/components/events'
import FormInput from '@/components/formInput'
import Watch from '@/components/watch'
import Style from '@/components/style'
import ParentComponent from '@/components/childparent/ParentComponent'
import Parent from '@/components/slots/parent'
import KeepAlive from '@/components/keepalive/big'
import Animates from '@/components/animate/animates'
import Directives from '@/components/directives'
import Filters from '@/components/filters'
import UseAxios from '@/components/useaxios/axios'
import MockJS from '@/components/usemock/mockjs'

import Routers from '@/components/routers/routers'
import ChildRouters1 from '@/components/routers/childRouters1'
import ChildRouters2 from '@/components/routers/childRouters2'
import ChildRouters3 from '@/components/routers/childRouters3'

import dataBalance from '@/components/dataBalance/index'
import MarqueeComponent from '@/components/marquee/marqueeComponent'
import PieChart from '@/components/customPieChart/piechart'
import ExcelComponent from '@/components/excel/excelComponent'

Vue.use(VueRouter)

const routes = [
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
    name: 'Parent',
    component: ParentComponent
  },
  {
    path: '/slot',
    name: 'Slot',
    component: Parent
  },
  {
    path: '/cache',
    name: 'Cache',
    component: KeepAlive
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
  },
  {
    path: '/filters',
    name: 'Filters',
    component: Filters
  },
  {
    path: '/axios',
    name: 'UseAxios',
    component: UseAxios
  },
  {
    path: '/mockjs',
    name: 'MockJS',
    component: MockJS
  },
  {
    path: '/routers',
    name: 'Routers',
    component: Routers,
    redirect: '/routers/child1/200',
    children: [
      {
        path: 'child1/:price',
        name: 'ChildRouters1',
        component: ChildRouters1
      },
      {
        path: 'child2/:num',
        name: 'ChildRouters2',
        component: ChildRouters2
      },
      {
        path: 'child3/:id',
        name: 'ChildRouters3',
        component: ChildRouters3
      }
    ]
  },
  {
    path: '/databalance',
    name: 'dataBalance',
    component: dataBalance
  },
  {
    path: '/marquee',
    name: 'UseMarquee',
    component: MarqueeComponent
  },
  {
    path: '/piechart',
    name: 'PieChart',
    component: PieChart
  },
  {
    path: '/excel',
    name: 'Excel',
    component: ExcelComponent
  }
]

const router = new VueRouter({ routes })

export default router
