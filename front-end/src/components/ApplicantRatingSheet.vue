<script>

  export default {
    name: 'Add',
    data() {
    return {
      step: 1,
      totalSteps: 2,
 
      
      
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
            alert('Successfully Done!');
        }

  
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
                <h1>Rating Sheet</h1>
                <hr>
                <div class="row">                 
                    <div class="col">
                      <h6 class="mb-0 col-sm-9">Position Applied:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">             
                      <input  type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Salary:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                     
                      <input  type="text" class="form-control"  placeholder="">
                    </div>
                  </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Date Published:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                     
                      <input type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Date of Written Examination:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                      
                        <input type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Date of Interview:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                      
                        <input  type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0 col-sm-9">Date of HRMPSB Deliberation:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">                      
                        <input  type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <br>
                <table class="table">    
                    <tr>
                      <th class="h6">AREAS</th>
                      <th class="h6">WEIGHT</th>
                      <th class="h6" id="th">RATING</th>
                    </tr>       
                    <tr>
                      <th><h6></h6></th>
                      <th><h6></h6></th>
                      <th><h6>G.Francisco</h6></th>
                      <th><h6>A.Saavedra</h6></th>
                      <th><h6>N.Mani</h6></th>
                      <th><h6>Ave.</h6></th>       
                    </tr>                                   
                    <tr>                    
                     <td><h6  class=" font-weight-bold">QUALIFICATION STANDARDS <div class="h6">Sub-total:</div></h6></td>     
                     <td><h6>30%</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                    </tr>
                    <tr>                     
                     <td><h6 class="mb-0 col-sm-9">Education:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>                     
                     <td><h6 class="mb-0 col-sm-9">Experience:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Training:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Eligibility:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9 text-danger">RESEARCH OUTPUT/PRESENTATION/PUBLICATION:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>                    
                     <td><h6 class=" font-weight-bold">CORE COMPETENCIES <div class="h6">(demonstrated by all employees regardless of position and unit)</div><div class="h6">Sub-total:</div></h6></td>     
                     <td><h6>15%</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                    </tr>
                    <tr>                     
                     <td><h6 class="mb-0 col-sm-9">Communication:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>                     
                     <td><h6 class="mb-0 col-sm-9">Ethics and Integrity:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Professionalism:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Stress Management:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Teamwork:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>                    
                     <td><h6 class="font-weight-bold">JOB LEVEL <div class="h6">Sub-total:</div></h6></td>     
                     <td><h6>20%</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                    </tr>
                    <tr>                     
                     <td><h6 class="mb-0 col-sm-9">Critical thinking and Decision-making:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>                     
                     <td><h6 class="mb-0 col-sm-9">Planning, Leading, Organizing and Controlling:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Innovation and Change:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Networking and Collaboration:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">People management and Development:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Adaptability and Flexibility:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Creativity and Innovation:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Initiative and Resourcefulness:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Service Orientation:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                  </table>
                <hr>
                </section>
              
                <section v-if="step == 2">
                  <table class="table">    
                    <tr>
                      <th class="h6">AREAS</th>
                      <th class="h6">WEIGHT</th>
                      <th class="h6" id="th">RATING</th>
                    </tr>       
                    <tr>
                      <th><h6></h6></th>
                      <th><h6></h6></th>
                      <th><h6>G.Francisco</h6></th>
                      <th><h6>A.Saavedra</h6></th>
                      <th><h6>N.Mani</h6></th>
                      <th><h6>Ave.</h6></th>       
                    </tr>                                   
                    <tr>                    
                     <td><h6  class=" font-weight-bold">TECHNICAL <div class="h6">Sub-total:</div></h6></td>     
                     <td><h6>30%</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                    </tr>
                    <tr>                     
                     <td><h6 class="mb-0 col-sm-9">Computer Literacy:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>                     
                     <td><h6 class="mb-0 col-sm-9">Attention to detail:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Documentation Management:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Monitoring and Evaluation:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Quality Assurance:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Research and Data Analysis:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Technical Writing:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Presentation Skills:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>                    
                     <td><h6 class=" font-weight-bold">INTERVIEW<div class="h6">Sub-total:</div></h6></td>     
                     <td><h6>5%</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                     <td><h6>#DIV/0!</h6></td>
                    </tr>
                    <tr>                     
                     <td><h6 class="mb-0 col-sm-9">Character:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>                     
                     <td><h6 class="mb-0 col-sm-9">Leadership:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Added value of the person/Plus Factor:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9">Background Check:</h6></td>
                     <td class="text-secondary"><input  type="text" class="form-control"  placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                     <td class="text-secondary"><input  type="text" class="form-control" placeholder=""></td>
                    </tr>
                    <tr>
                     <td><h6 class="mb-0 col-sm-9 font-weight-bold">Overall Total</h6></td>
                     <td class=""><h6 class="font-weight-bold">100%</h6></td>
                     <td class=""><h6 class="font-weight-bold">#DIV/0!</h6></td>
                     <td class=""><h6 class="font-weight-bold">#DIV/0!</h6></td>
                     <td class=""><h6 class="font-weight-bold">#DIV/0!</h6></td>
                     <td class=""><h6 class="font-weight-bold bg-info">#DIV/0!</h6></td>
                    </tr>
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
                       
                    <router-link to="/applicant-data-table">
                    <button v-if="step ==2" @click="add" v-on:click="addEmployee()" type="button" class="btn btn-success">
                      Done
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