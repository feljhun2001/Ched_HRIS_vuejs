import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import HomeView from '../views/HomeView.vue'
import EmployeeProfileView from '../views/EmployeeProfileView.vue'
import AddUserView from '../views/AddUserView.vue'
import UpdateUserView from '../views/UpdateUserView.vue'
import FamilyBackgroundView from '../views/pds/FamilyBackgroundView.vue'
import EducationalBackgroundView from '../views/pds/EducationalBackgroundView.vue'
import CivilServiceEligibilityView from '../views/pds/CivilServiceEligibilityView.vue'
import WorkExperienceView from '../views/pds/WorkExperienceView.vue'
import OtherInformationView from '../views/pds/OtherInformationView.vue'
import EmployeeDataTableView from '../views/EmployeeDataTableView.vue'
import UpdateFamilyBackgroundView from '../views/update pds/UpdateFamilyBackgroundView.vue'
import UpdateEducationalBackgroundView from '../views/update pds/UpdateEducationalBackgroundView.vue'
import UpdateCivilServiceEligibilityView from '../views/update pds/UpdateCivilServiceEligibilityView.vue'
import UpdateWorkExperienceView from '../views/update pds/UpdateWorkExperienceView.vue'
import UpdateOtherInformationView from '../views/update pds/UpdateOtherInformationView.vue'
import AddFamilyBackgroundView from '../views/add employee/AddFamilyBackgroundView.vue'
import AddEducationalBackgroundView from '../views/add employee/AddEducationalBackgroundView.vue'
import AddCivilServiceEligibilityView from '../views/add employee/AddCivilServiceEligibilityView.vue'
import AddWorkExperienceView from '../views/add employee/AddWorkExperienceView.vue'
import AddOtherInformationView from '../views/add employee/AddOtherInformationView.vue'
import ApplicantDataTableView from '../views/ApplicantDataTableView.vue'
import AddApplicantView from '../views/AddApplicantView.vue'
import ApplicantProfileView from '../views/ApplicantProfileView.vue'
import UpdateApplicantView from '../views/UpdateApplicantView.vue'
import ApplicantRatingSheetView from '../views/ApplicantRatingSheetView.vue'

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/employee-data-table',
      name: 'employee-data-table',
      component: EmployeeDataTableView
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: EmployeeProfileView
    },
    {
      path: '/family-background/:id',
      name: 'family-background',
      component: FamilyBackgroundView
    },
    {
      path: '/educational-background/:id',
      name: 'educational-background',
      component: EducationalBackgroundView
    },
    {
      path: '/civil-service-eligibility/:id',
      name: 'civil-service-eligibility',
      component: CivilServiceEligibilityView
    },             
    {
      path: '/work-experience/:id',
      name: 'work-experience',    
      component: WorkExperienceView
    },
    {
      path: '/other-information/:id',
      name: 'other-information',
      component: OtherInformationView
    }, 
    
    {
      path: '/update/:id',
      name: 'update',
      component: UpdateUserView
    },
    {
      path: '/update-family-background',
      name: 'update-family-background',
      //component: UpdateFamilyBackgroundView
    },
    {
      path: '/update-educational-background',
      name: 'update-educational-background',
      //component: UpdateEducationalBackgroundView
    },
    {
      path: '/update-civil-service-eligibility',
      name: 'update-civil-service-eligibility',
      //component: UpdateCivilServiceEligibilityView
    },
    {
      path: '/update-work-experience',
      name: 'update-work-experience',
      //component: UpdateWorkExperienceView
    },
    {
      path: '/update-other-information',
      name: 'update-other-information',
      //component: UpdateOtherInformationView
    },
    
    {
      path: '/add',
      name: 'add',
      component: AddUserView
    },
    {
      path: '/add-family-background',
      name: 'add-family-background',
      //component: AddFamilyBackgroundView
    },
    {
      path: '/add-educational-background',
      name: 'add-educational-background',
      //component: AddEducationalBackgroundView
    },
    {
      path: '/add-civil-service-eligibility',
      name: 'add-civil-service-eligibility',
      //component: AddCivilServiceEligibilityView
    },
    {
      path: '/add-work-experience',
      name: 'add-work-experience',
      //component: AddWorkExperienceView
    },
    {
      path: '/add-other-information',
      name: 'add-other-information',
      //component: AddOtherInformationView
    },
    {
      path: '/applicant-data-table',
      name: 'applicant-data-table',
      component: ApplicantDataTableView
    },
    {
      path: '/add-applicant',
      name: 'add-applicant',
      component: AddApplicantView
    },
    {
      path: '/applicant-profile',
      name: 'applicant-profile',
      component: ApplicantProfileView
    },
    {
      path: '/update-applicant',
      name: 'update-applicant',
      component: UpdateApplicantView
    },
    {
      path: '/applicant-rating-sheet',
      name: 'applicant-rating-sheet',
      component: ApplicantRatingSheetView
    },          
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
