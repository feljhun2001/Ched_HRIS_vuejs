<script>


  export default {
  name: 'Update',
  data() {
  return {
    step: 1,
    totalSteps: 6,
      employees: {
      f_name: '',
      l_name: ''
    }
    }
  },

  methods: {
      previousStep:function(){
        this.step--;
      },

      nextStep:function(){  
          
        this.step++;
      },

      Update:function(){
          alert('Updated Successfully!')
      },

     


  },

  mounted(){
    this.getEmployee(this.$route.params.id);
    //console.log(this.$route.params.id);

  }
       
};  


</script>

</script>

<template> 
     
    <div class="container" id="profile">
      <div id="icon">
          <router-link to="/applicant-data-table">
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
                      <h4></h4>
                      <form>
                        <div class="form-group" id="file">
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                        </div>
                      </form>
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
              <form>
                <section v-if="step == 1">
                <h1>Personal Information</h1>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">First Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Last Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Id No.</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Date of Birth</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Sex</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Citizenship</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Civil Status</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9">Residential Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" value="">
                  </div>
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9">Zip Code</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" value="">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9">Permanent Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" value="">
                  </div>
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9">Zip Code</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" value="">
                  </div>
                </div>
                <hr>
               
                </section>

                <section v-if="step == 2" id="fb">
                <h1>Family Background</h1>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Spouse's Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Occupation</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Employer/Business Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Business Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Mobile No.</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Father's Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Mother's Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="">
                    </div>
                </div>
                <hr>               
                <table class="table">    
                    <tr>
                      <th class="h6">Name of Children</th>
                      <th class="h6">Date of Birth</th>
                    </tr>
                    <tr>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                    <tr>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                    <tr>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                 </table>                    
                <hr>
                </section>

                <section v-if="step == 3">
                  <h1>Educational Background</h1>
                  <table class="table">    
                    <thead>
                    <tr>
                      <th class="h6"></th>
                      <th class="h6">Name of School</th>
                      <th class="h6">Basic Education/Degree/Course</th>
                      <th class="h6">Period of Attendance</th>
                      <th class="h6">Highest Level/Unit Earned</th>
                      <th class="h6">Year Graduated</th>
                      <th class="h6">Scholarship/Academic Honors Received</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="h6">Elementary</td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                    <tr>
                      <td class="h6">Secondary</td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                    <tr>
                      <td class="h6">Vocational</td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                    <tr>
                      <td class="h6">College</td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                    <tr>
                      <td class="h6">Graduate Studies</td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                  </tbody>
                 </table> 
                 <hr>
                </section>

                <section v-if="step == 4">
                  <h1>Civil Service Eligibility</h1>
                  <table class="table">    
                    <thead>
                    <tr>
                      <th class="h6">
                        CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER SPECIAL LAWS/ CES/ CSEE BARANGAY ELIGIBILITY / DRIVER'S LICENSE
                      </th>
                      <th class="h6">Rating</th>
                      <th class="h6">Date of Examination/Conferment</th>
                      <th class="h6">Place of Examination/Conferment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>                      
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                    <tr>                    
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                    <tr>                     
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                    <tr>                     
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                    <tr>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>                 
                    </tr>
                  </tbody>
                 </table>
                 <hr>
                 <table class="table">    
                    <tr>
                      <th class="h6"></th>
                      <th class="h6">Number</th>
                      <th class="h6">Date of Validity</th>
                    </tr>
                    <tr>
                      <td class="h6">License</td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                     <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                 </table>                    
                <hr>
                </section>

                <section v-if="step == 5">
                  <h1>Work Experience</h1>
                  <table class="table">    
                    <tr>
                      <th class="h6"></th>
                      <th class="h6">From</th>
                      <th class="h6">To</th>
                    </tr>
                    <tr>
                      <td class="h6">Inclusive Dates</td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                 </table>                    
                <hr>
                
                <table class="table">    
                    <thead>
                    <tr>
                      <th class="h6">
                        Position Title
                      </th>
                      <th class="h6">Department/Agency/Office/Company</th>
                      <th class="h6">Monthly Salary</th>
                      <th class="h6">SALARY/ JOB/ PAY GRADE (if applicable)& STEP (Format "00-0")/ From INCREMENT</th>
                      <th class="h6">Status of Appointment</th>
                      <th class="h6">Government Service (Y/N)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>                      
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                      <td class="text-secondary"><input type="text" class="form-control" value=""></td>
                    </tr>
                  </tbody>
                 </table>
                 <hr>
                </section>

                <section v-if="step == 6">
                  <h1>Other Information</h1>
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
                      <td class="text-secondary"><input type="text" class="form-control" value=" "></td> 
                      <td class="text-secondary"><input type="text" class="form-control" value=" "></td> 
                      <td class="text-secondary"><input type="text" class="form-control" value=" "></td>   
                    </tr>
                  </tbody>
                 </table>
                 <hr>
                </section>

                <div id="btn">
                  <button v-if="step !=1" @click="previousStep" type="button" class="btn btn-secondary mr-md-1">
                    Previous
                  </button>

                  <button v-if="step !=totalSteps" @click="nextStep" type="button" class="btn btn-primary">
                    Next
                  </button>
                  
                  <router-link to="/applicant-data">
                  <button v-if="step == 6" @click="Update" type="button" class="btn btn-success" v-on:click="updateEmployee(employees.id, employees.f_name, employees.l_name)">Update
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
                  </svg>
                  </button>
                  </router-link>
                </div>
              </form> 
            </div>     
    </div>
</template>

<style scoped>
#profile {
    display: flex;
    max-width: 1800px;
    margin-top: 25px;
    
}

#card {
    margin-top: 20px;
    
    
}

#file {
  width: 180px;
  height: 15px;
}
</style>