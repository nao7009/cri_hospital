// index.js
import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/Home.vue'
import MedicalCheck  from '@/components/MedicalCheck'
import VisitMedical  from '@/components/VisitMedical'
import MedicalTreatment  from '@/components/MedicalTreatment'
import ContactForm  from '@/components/Contact'
import FirstGuide  from '@/components/Guide'
import AccessInfo  from '@/components/Access'
import HospitalNews  from '@/components/News'

Vue.use(VueRouter)

const routes = [
  // { path: '/home', component: HomePage },
  { path: '/', component: HomePage },
  { path: '/medicalcheck', component: MedicalCheck },
  { path: '/visitmedical', component: VisitMedical },
  { path: '/medicaltreatment', component: MedicalTreatment },
  { path: '/contact', component: ContactForm },
  { path: '/guide', component: FirstGuide },
  { path: '/access', component: AccessInfo },
  { path: '/news', component: HospitalNews }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === "development" ? process.env.BASE_URL : "/cri_hospital/",
  // base: "/cri_hospital/",
  routes
})
export default router