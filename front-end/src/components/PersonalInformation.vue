<script>
import axios from 'axios';

export default {
name: 'PersonalInformation',
data() {
return {
    employees: {
    f_name: '',
    l_name: ''
  }
  }
},

methods: {
    async getEmployee(employeeId) {
    await axios
      .get(`http://localhost:9999/employees/${employeeId}`)
      .then((response) => {
        console.log(response.data)
        this.employees = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    },

},

mounted(){
  this.getEmployee(this.$route.params.id);
  //console.log(this.$route.params.id);

}
     
};  


</script>

<template> 
        
    <div class="container" id="profile">
        <div id="icon">
          <router-link to="/employee-data-table">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
          </router-link>
        </div>
        <div id="card">
        <div class="card">
            <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                    <div class="mt-3">
                      <h4> {{ employees.f_name }} {{ employees.l_name }}</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
            <div class="card-body" id="data">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active text-primary" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Personal Information</a>
                        <router-link :to="{path: '/family-background/'+employees.id}">
                          <a class="nav-item nav-link text-primary" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Family Background</a>
                        </router-link>
                        <router-link :to="{path: '/educational-background/'+employees.id}">
                          <a class="nav-item nav-link text-primary" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Educational Background</a>
                        </router-link>
                        <router-link :to="{path: '/civil-service-eligibility/'+employees.id}">
                          <a class="nav-item nav-link text-primary" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Civil Service Eligibility</a>
                        </router-link>
                        <router-link :to="{path: '/work-experience/'+employees.id}">
                          <a class="nav-item nav-link text-primary" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Work Experience</a>
                        </router-link>
                        <router-link :to="{path: '/other-information/'+employees.id}">
                          <a class="nav-item nav-link text-primary" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Other Information</a>
                        </router-link>
                        
                    </div>
                    
                </nav>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">First Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{ employees.f_name }}
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Last Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{ employees.l_name }}
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Id No.</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      555-55555-55
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      fip@jukmuh.al
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Date of Birth</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      January 1, 1999
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Sex</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Male
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Citizenship</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Filipino
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Civil Status</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Single
                    </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9">Residential Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    Atherton
                  </div>
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9">Zip Code</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    90210
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9">Permanent Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    Bay Area, San Francisco, CA
                  </div>
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9">Zip Code</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    90210
                  </div>
                </div>
                <hr>
            </div>      
    </div>
</template>

<style scoped>
#profile {
    display: flex;
    max-width: 1800px;
    margin-top: 25px;
    margin-left: 20px;
}

#card {
    margin-top: 20px;
    
}
</style>