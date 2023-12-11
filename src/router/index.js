import { createRouter, createWebHistory } from 'vue-router'
import HelpCenter from '../pages/HelpCenter.vue'
import InstallationReport from '../pages/InstallationReport.vue'
import AddSplicePlan from '../pages/AddSplicePlan.vue'
import ViewConfirmationRequest from '../pages/ViewConfirmationRequest.vue'
import NoFaultConfirmation from '../pages/NoFaultConfirmation.vue'
import YesFaultConfirmation from '../pages/YesFaultConfirmation.vue'
import SurveyReport from '../pages/SurveyReport.vue'
import ResourceRouteWork from '../pages/ResourceRouteWork.vue'
import ResourceSplicePlan from '../pages/ResourceSplicePlan.vue'
import ResourceWorkOrder from '../pages/ResourceWorkOrder.vue'
import Obligation from '../pages/ObligationSchedule1.vue'
import ObligationConfirmations from '../pages/ObligationConfirmationProvisioning.vue'
import ObligationSchedule from '../pages/ObligationSchedule.vue'
import ActivationResolutionReport from '../pages/ActivationResolutionReport.vue'
import FaultResolutionReport from '../pages/FaultResolutionReport.vue'
import TestPage from '../pages/TestPage.vue'
import Login from '../pages/Login.vue'
import ResourceDiagnosis from '../pages/ResourceDiagnosis.vue'
import MyWorkPlace from '../pages/MyWorkPlace.vue'
import FaultDiagnosisReport from '../pages/FaultDiagnosisReport.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/pages/HelpCenter',
      name: 'HelpCenter',
      component: HelpCenter
    },
    {
      path: '/pages/AddSplicePlan',
      name: 'AddSplicePlan',
      component: AddSplicePlan
    },

    {
      path: '/pages/InstallationReport',
      name: 'InstallationReport',
      component: InstallationReport
    },

    {
      path: '/pages/ViewConfirmationRequest',
      name: 'ViewConfirmationRequest',
      component: ViewConfirmationRequest
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: 'scheduledvisits' */ '../pages/MyWorkPlace.vue')
    },
    {
      path: '/pages/NoFaultConfirmation',
      name: 'NoFaultConfirmation',
      component: NoFaultConfirmation
    },

    {
      path: '/pages/SurveyReport',
      name: 'SurveyReport',
      component: SurveyReport
    },
    {
      path: '/pages/MyWorkPlace',
      name: 'MyWorkPlace',
      component: MyWorkPlace
    },

    {
      path: '/pages/ResourceRouteWork',
      name: 'ResourceRouteWork',
      component: ResourceRouteWork
    },

    {
      path: '/pages/ResourceSplicePlan',
      name: 'ResourceSplicePlan',
      component: ResourceSplicePlan
    },

    {
      path: '/pages/ResourceWorkOrder',
      name: 'ResourceWorkOrder',
      component: ResourceWorkOrder
    },

    {
      path: '/pages/ObligationSchedule',
      name: 'ObligationSchedule',
      component: ObligationSchedule
    },

    {
      path: '/pages/ObligationSchedule1',
      name: 'Obligation',
      component: Obligation
    },

    {
      path: '/pages/ObligationConfirmationProvisioning',
      name: 'ObligationConfirmations',
      component: ObligationConfirmations
    },
    {
      path: '/pages/ResourceDiagnosis',
      name: 'ResourceDiagnosis',
      component: ResourceDiagnosis
    },
    {
      path: '/pages/FaultDiagnosisReport',
      name: 'FaultDiagnosisReport',
      component: FaultDiagnosisReport
    },
    {
      path: '/pages/YesFaultConfirmation',
      name: 'YesFaultConfirmation',
      component: YesFaultConfirmation
    },

    {
      path: '/pages/ActivationResolutionReport',
      name: 'ActivationResolutionReport',
      component: ActivationResolutionReport
    },

    {
      path: '/pages/FaultResolutionReport',
      name: 'FaultResolutionReport',
      component: FaultResolutionReport
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage
    }
  ]
})

export default router
