<script>

</script>

<template>
    
    <div class="container" id="row">
        <div class="col-md col-md-offset-3">
            <!-- card-body -->  
            <div id="icon">
                <router-link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                    </svg>
                </router-link>
            </div>
            <div class="card-body" id="data">
                <nav>
                    <form id="msform">
                        <!-- progressbar -->
                        <ul id="progressbar">
                        <li class="active text-primary">Personal Information</li>
                        <li class="active text-primary">Family Background</li>
                        <li class="active text-primary">Educational Background</li>
                        <li class="active text-primary">Civil Service Eligibility</li>
                        <li class="active text-primary">Work Experience</li>
                        <li class="active text-primary">Other Information</li>
                        </ul>
                    </form>     
                </nav>
                <div class="card-body" id="data">
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
                      <td class="text-secondary"><input type="text" class="form-control"  placeholder=""></td> 
                      <td class="text-secondary"><input type="text" class="form-control"  placeholder=""></td> 
                      <td class="text-secondary"><input type="text" class="form-control"  placeholder=""></td>   
                    </tr>
                  </tbody>
                 </table>
                 <hr>
                 <div id="update">
                    <router-link to="/add-work-experience">
                        <button id="prv" type="button" class="btn btn-secondary">Previous</button>
                    </router-link>  
                    <router-link to="">
                        <button type="submit" class="btn btn-success">Add</button>
                    </router-link>                  
                </div>
                </div>
            </div> 
            </div>
        </div>
    </div>
 <!-- /.MultiStep Form -->   
    
</template>

<style scoped>

#btn {
    margin-left: 10px;
    margin-top: 5px;
}

#prv {
    margin-right: 5px;
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

#progressbar li:nth-child(5n+4):after {
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