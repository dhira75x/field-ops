import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpCenter from '../pages/HelpCenter.vue'
import InstallationReport from '../pages/InstallationReport.vue'
import AddSplicePlan from '../pages/AddSplicePlan.vue'
import ViewConfirmationResquest from '../pages/ViewConfirmationRequest.vue'
import ViewConfirmationRequests from '../pages/ViewConfirmationRequestProvisioning.vue'
import NoFaultConfirmation from '../pages/NoFaultConfirmation.vue'
import YesFaultConfirmation from '../pages/YesFaultConfirmation.vue'
import SurveyReport from '../pages/SurveyReport.vue'
import ResourceRouteWork from '../pages/ResourceRouteWork.vue'
import ResourceSplicePlan from '../pages/ResourceSplicePlan.vue'
import ResourceWorkOrder from '../pages/ResourceWorkOrder.vue'
import Obligation from '../pages/Obligation.vue'
import ObligationConfirmation from '../pages/ObligationConfirmation.vue'
import ObligationConfirmations from '../pages/ObligationConfirmationProvisioning.vue'
import ObligationSchedule from '../pages/ObligationSchedule.vue'
import ResourceReport from '../pages/index.vue'
import ActivationResolutionReport from '../pages/ActivationResolutionReport.vue'
import FaultResolutionReport from '../pages/FaultResolutionReport.vue'
import NoFault from '../components/NoFault.vue'
import TestPage from '../pages/TestPage.vue'
// import SideBar from '../components/SideBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/pages/ViewConfirmationRequestProvisioning',
      name: 'ViewConfirmationResquests',
      component: ViewConfirmationRequests
    },

    {
      path: '/pages/ViewConfirmationRequest',
      name: 'ViewConfirmationResquest',
      component: ViewConfirmationResquest
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
      path: '/pages/Obligation',
      name: 'Obligation',
      component: Obligation
    },

    {
      path: '/pages/ObligationConfirmationProvisioning',
      name: 'ObligationConfirmations',
      component: ObligationConfirmations
    },

    {
      path: '/pages/ObligationConfirmation',
      name: 'ObligationConfirmation',
      component: ObligationConfirmation
    },

    {
      path: '/components/NoFault',
      name: 'NoFault',
      component: NoFault
    },
    // {
    //   path: '/components/SideBar',
    //   name: 'SideBar',
    //   component: SideBar
    // },

    {
      path: '/pages/YesFaultConfirmation',
      name: 'YesFaultConfirmation',
      component: YesFaultConfirmation
    },

    {
      path: '/pages/index',
      name: 'ResourceReport',
      component: ResourceReport
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
