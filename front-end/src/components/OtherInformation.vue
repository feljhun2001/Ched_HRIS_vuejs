<script>
 import axios from 'axios';

export default {
name: 'OtherInformation',
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
                      <h4>John Doe</h4>
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
                        <router-link :to="{path: '/profile/'+employees.id}">
                          <a class="nav-item nav-link text-primary" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Personal Information</a>
                        </router-link>
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
                        <a class="nav-item nav-link active text-primary" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Other Information</a>                        
                    </div>
                </nav>
                <div class="table-responsive">
                <table class="table">    
                    <thead>
                    <tr>
                      <th class="h6">Special Skills and Hobbies</th>
                      <th class="h6">Non-Academic Distinctions/Recognition</th>
                      <th class="h6">Membership in Association/Organization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>                      
                      <td class="text-secondary">N/A</td> 
                      <td class="text-secondary">N/A</td>
                      <td class="text-secondary">N/A</td>  
                    </tr>
                  </tbody>
                 </table>
                 <hr>
                </div>
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