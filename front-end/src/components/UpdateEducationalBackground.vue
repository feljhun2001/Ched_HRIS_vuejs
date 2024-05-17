<script>
 
</script>

<template> 
        
    <div class="container" id="profile">
      <div id="icon">
          <router-link to="/">
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
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <router-link to="/update">
                          <a class="nav-item nav-link text-primary" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Personal Information</a>
                        </router-link>
                        <router-link to="/update-family-background">
                          <a class="nav-item nav-link text-primary" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Family Background</a>
                        </router-link>
                        <a class="nav-item nav-link active text-primary" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Educational Background</a>
                        <router-link to="/update-civil-service-eligibility">
                          <a class="nav-item nav-link text-primary" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Civil Service Eligibility</a>
                        </router-link>
                        <router-link to="/update-work-experience">
                          <a class="nav-item nav-link text-primary" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Work Experience</a>
                        </router-link>
                        <router-link to="/-update-other-information">
                          <a class="nav-item nav-link text-primary" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Other Information</a>
                        </router-link>
                    </div>
                </nav>
                <div class="table-responsive">
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
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                    </tr>
                    <tr>
                      <td class="h6">Secondary</td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                    </tr>
                    <tr>
                      <td class="h6">Vocational</td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                    </tr>
                    <tr>
                      <td class="h6">College</td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                    </tr>
                    <tr>
                      <td class="h6">Graduate Studies</td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                      <td class="text-secondary"><input type="text" class="form-control" value="N/A"></td>
                    </tr>
                  </tbody>
                 </table> 
                 <hr>
                 <div id="update">
                  <button type="button" class="btn btn-primary">Update
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
                  </svg>
                </button>
                </div>
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

#file {
  width: 180px;
  height: 15px;
}
</style>