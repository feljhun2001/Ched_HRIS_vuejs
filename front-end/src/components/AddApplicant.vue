<script>
 

  export default {
    name: 'Add',
    data() {
    return {
      step: 1,
      totalSteps: 6,
      fname: '',
      lname: ''
      
      
    }
  },

    methods: {
        previousStep:function(){
          this.step--;
        },

        nextStep:function(){  
            
          this.step++;
        },

        add:function(){
            alert('Added Successfully!')
        },

  
    },

    mounted(){
    
    }
         
  };  


</script>

<template>
    <div class="container" id="row">
    <div class="col-md col-md-offset-3">
        <!-- card-body -->
        <div id="icon">
          <router-link to="/applicant-data-table">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-arrow-left-circle " viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
          </router-link>
        </div>  
        <div class="card-body" id="data">
                <form id="add">        
                <section v-if="step == 1">
                <h1>Personal Information</h1>
                <hr>
                <div class="row">                 
                    <div class="col">
                      <h6 class="mb-0 col-sm-9">First Name:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">             
                      <input  type="text"  class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Last Name:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                     
                      <input  type="text"  class="form-control"  placeholder="">
                    </div>
                  </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Id No:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                     
                      <input type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Email:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                      
                        <input required  for="email" type="email" name="email" class="form-control"  placeholder="sample@gmail.com">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Phone:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                      
                        <input  type="text" class="form-control"  placeholder="+(535) 535-5335">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Mobile:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                      
                        <input  type="text" class="form-control"  placeholder="+639123456789">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Address:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                      
                        <input  type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Date of Birth:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                
                      <input  type="date" class="form-control" placeholder="">                  
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Sex:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <select   class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option value="1">Male</option>
                        <option value="2">Female</option>                         
                      </select>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Citizenship:</h6>
                      <div class="text-success mb-0 col-sm-9 font-normal" style="font-size: 13px;">*If holder of dual citizenship, please indicate the details.</div>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <select  class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option value="1">Filipino</option>
                        <option value="2">Dual Citizenship (by birth)</option>
                        <option value="3">Dual Citizenship (by naturalization)</option>                           
                      </select>
                      <input type="text" class="form-control mt-md-2" placeholder="Please indicate country">            
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Civil Status:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <select  class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option value="1">Single</option>
                        <option value="2">Married</option>
                        <option value="3">Widowed</option>
                        <option value="4">Separated</option>                          
                      </select>
                    </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9">Residential Address:</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    
                    <input  type="text" class="form-control"  placeholder="">
                  </div>
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9">Zip Code:</h6>
                  </div>
                  <div class="col-sm-9 text-secondary mt-md-2">
                    
                    <input  type="text" class="form-control"  placeholder="">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9 ">Permanent Address:</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    
                    <input  type="text" class="form-control"  placeholder="">
                  </div>
                  <div class="col-sm-3">
                    <h6 class="mb-0 col-sm-9 ">Zip Code:</h6>
                  </div>
                  <div class="col-sm-9 text-secondary mt-md-2">
                    
                    <input  type="text" class="form-control"  placeholder="">
                  </div>
                </div>
                <hr>
                </section>
                
                <section v-if="step == 2">
                  <h1>Family Background</h1>
                  <div class="mb-0 col-sm-9 font-italic" style="font-size: 13px;">*N/A if not applicable, not available, not assessed, or no answer</div>
                 
                <hr>
                <div class="row">
                    <div class="col">
                      <h6 class="mb-0 col-sm-9">Spouse's Full Name:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Occupation:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Employer/Business Name:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Business Address:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Mobile No.:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="+639123456789">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Father's Full Name:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Mother's Full Name:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <table class="table">    
                    <tr>
                      <th class="h6">Name of Children</th>
                      <th class="h6">Date of Birth</th>
                    </tr>
                    <tr>
                      <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                      <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                      <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                      <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                      <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                      <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                    </tr>
                 </table>
                <hr>
                </section>
                
                <section v-if="step == 3"> 
                    <h1>Educational Background</h1>
                    <div class="mb-0 col-sm-9 font-italic" style="font-size: 13px;">*N/A if not applicable, not available, not assessed, or no answer</div>
                   
                    <hr>
                <div class="row">
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9">Name of School:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Elementary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Secondary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Vocational">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="College">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Graduate Studies">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Basic Education/Degree/Course:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="Elementary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Secondary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Vocational">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="College">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Graduate Studies">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Period of Attendance:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="Elementary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Secondary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Vocational">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="College">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Graduate Studies">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Highest Level/Unit Earned:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="Elementary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Secondary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Vocational">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="College">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Graduate Studies">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Year Graduated:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="Elementary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Secondary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Vocational">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="College">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Graduate Studies">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Scholarship/Academic Honors Received:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input  type="text" class="form-control"  placeholder="Elementary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Secondary">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Vocational">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="College">
                    </div>
                    <div class="col-sm-3 mt-md-2">
                      <h6 class="mb-0 col-sm-9"></h6>
                    </div>
                    <div class="col-sm-9 text-secondary mt-md-2">
                        <input  type="text" class="form-control"  placeholder="Graduate Studies">
                    </div>
                </div>
                <hr>
                </section>

                <section v-if="step == 4">
                  <h1>Civil Service Eligibility</h1>
                  <div class="mb-0 col-sm-9 font-italic" style="font-size: 13px;">*N/A if not applicable, not available, not assessed, or no answer</div>
                 
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
                  <br>
                    <div class="ml-4">
                      <input type="file" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                  <br>
                  <tbody>
                    <tr>                      
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                    </tr>
                    <tr>                    
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                    </tr>
                    <tr>                     
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                    </tr>
                    <tr>                     
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                    </tr>
                    <tr>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>                 
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
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                      <td class="h6">License</td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                      <td class="h6">License</td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                    </tr>
                  </table>                    
                  <hr>
                </section>

                <section v-if="step == 5">
                  <h1>Work Experience</h1>
                  <div class="mb-0 col-sm-9 font-italic" style="font-size: 13px;">*N/A if not applicable, not available, not assessed, or no answer</div>
                 
                  <table class="table">    
                    <tr>
                      <th class="h6"></th>
                      <th class="h6">From</th>
                      <th class="h6">To</th>
                    </tr>
                    <tr>
                      <td class="h6">Inclusive Dates</td>
                      <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
                      <td class="text-secondary"><input  type="date" class="form-control" placeholder=""></td>
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
                      <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                      <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                      <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                      <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                      <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                      <td class="text-secondary">
                        <select  class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                          <option value="1">YES</option>
                          <option value="2">NO</option>                         
                        </select>
                      </td>
                    </tr>
                  </tbody>
                 </table>
                 <hr>
                </section>

                <section v-if="step == 6">                 
                  <h1>Other Information</h1>
                  <div class="mb-0 col-sm-9 font-italic" style="font-size: 13px;">*N/A if not applicable, not available, not assessed, or no answer</div>
                 
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
                      <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td> 
                      <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td> 
                      <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>   
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
                    <button v-if="step ==6" @click="add" v-on:click="addEmployee()" type="button" class="btn btn-success">
                      Add
                    </button>
                    </router-link>                                    
                </div>
              </form>
            </div>
    </div>
</div>
<!-- /.MultiStep Form -->   
    
</template>

<style scoped>

#btn {
    margin-left: 10px;
    margin-top: 5px;
    gap: 20px 50px;
}

#profile {
    display: flex;
    max-width: 1800px;
    margin-top: 25px;
    margin-left: 20px;
}

#card {
    margin-top: 20px;
    
    
}

#file {
  width: 180px;
  height: 15px;
}
/*basic reset*/

body {
    font-family: montserrat, arial, verdana;
    background: transparent;
}
/*form styles*/
#msform {
    text-align: center;
    position: relative;
    margin-top: 30px;
}

#msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
    padding: 20px 30px;
    box-sizing: border-box;
    width: 80%;
    margin: 0 10%;

    /*stacking fieldsets above each other*/
    position: relative;
}

/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
    display: none;
}

/*inputs*/
#msform input, #msform textarea {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    
    color: #2C3E50;
    font-size: 13px;
}

#msform input:focus, #msform textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid blue;
    outline-width: 0;
    transition: All 0.5s ease-in;
    -webkit-transition: All 0.5s ease-in;
    -moz-transition: All 0.5s ease-in;
    -o-transition: All 0.5s ease-in;
}

/*buttons*/
#msform .action-button {
    width: 100px;
    
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}

#msform .action-button:hover, #msform .action-button:focus {
    box-shadow:  0 0 0 2px hsla(160, 100%, 37%, 1);
}

#msform .action-button-previous {
    width: 100px;
    background: #C5C5F1;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}

#msform .action-button-previous:hover, #msform .action-button-previous:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #C5C5F1;
}

/*headings*/
.fs-title {
    font-size: 18px;
    text-transform: uppercase;
    color: #2C3E50;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-weight: bold;
}

.fs-subtitle {
    font-weight: normal;
    font-size: 13px;
    color: #666;
    margin-bottom: 20px;
}

/*progressbar*/
#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    /*CSS counters to number the steps*/
    counter-reset: step;
}

#progressbar li {
    list-style-type: none;
    color: white;
    font-size: 15px;
    width: 33.33%;
    float: left;
    position: relative;
    letter-spacing: 1px;
}

#progressbar li:before {
    content: counter(step);
    counter-increment: step;
    width: 24px;
    height: 24px;
    line-height: 26px;
    display: block;
    font-size: 12px;
    color: #333;
    background: white;
    border-radius: 25px;
    margin: 0 auto 10px auto;
}

/*progressbar connectors*/
#progressbar li:after {
    content: '';
    width: 100%;
    height: 2px;
    background: white;
    position: absolute;
    left: -50%;
    top: 9px;
    z-index: -1; /*put it behind the numbers*/
}

#progressbar li:first-child:after {
    /*connector not needed before the first step*/
    content: none;
}

/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before, #progressbar li.active:after {
    background: blue;
    color: white;
}


/* Not relevant to this form */
.dme_link {
    margin-top: 30px;
    text-align: center;
}
.dme_link a {
    background: #FFF;
    font-weight: bold;
    color: blue;
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 5px 25px;
    font-size: 12px;
}

.dme_link a:hover, .dme_link a:focus {
    background: #C5C5F1;
    text-decoration: none;
}
</style>