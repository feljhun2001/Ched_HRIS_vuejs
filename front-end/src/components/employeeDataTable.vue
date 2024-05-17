<script>
import axios from 'axios';

const baseUrl='http://localhost:9999/employees/';

export default {
  name: 'Data',
  data() {
    return {
      employees: [],
      search: ''
      
    }
  },
  methods: {
    async getEmployee() { 
      await axios
        .get(baseUrl)
        .then((response) => {
          this.employees = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async deleteEmployee(id) {
      await axios
        .delete(baseUrl+id)
        .then((response) => {
          console.log(response);
          this.getEmployee();
        })
        .catch((error) => {
          console.log(error);
        });
    }

  },

  searchFilter() {
    this.$http.get('http://localhost:9999/employees').then(function(data){
      this.employees = data.body.slice(0,10);
    })
  },

  computed: {
    filteredEmployees: function() {
      return this.employees.filter((emp => 
        emp.l_name.toLowerCase().includes(this.search.toLowerCase())
      ));
    }
  },

  mounted() {
    this.getEmployee();
  }
};
</script>

<template>
  <div class="container" id="data">
    <router-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-arrow-left-circle " viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
          </router-link>
    <h2 class="font-weight-bold">CHED's Employees</h2>
    <div id="search-bar">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-1" type="search" v-model="search" placeholder="Search for lastname" aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </form>
    </div>
    <div id="person-fill-add">
      <router-link to="/add" active-class="active">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="blue" class="bi bi-person-fill-add" viewBox=" 0 0 16 16">
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
        </svg>
      </a>
      </router-link>
    </div>
    <table class="table table-striped text-center table-responsive-sm">
      <thead>
        <tr class="h5">
          <th scope="col" class="font-weight-bold">No.</th>
          <th scope="col" class="font-weight-bold">First Name</th>
          <th scope="col" class="font-weight-bold">Last Name</th>
          <th scope="col" class="font-weight-bold"></th>
          <th scope="col" class="font-weight-bold">Activity</th>
        </tr>
      </thead>
      <tbody class="employee">
        <tr v-for="emp of filteredEmployees" v-bind:key="emp.id">
          <td scope="row" class="font-weight-bold">{{ emp.id }}</td>
          <td>{{ emp.f_name }}</td>
          <td>{{ emp.l_name }}</td>
          <td id="show">
            <router-link :to="{path: '/profile/'+emp.id}" active-class="active">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox=" 0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                </svg>
              </a>
            </router-link>
          </td>
          <td>
            <div class="mb-2">
              <router-link :to="{path: '/update/'+emp.id}">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-pencil-square" viewBox="0 0 15 15">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
              </a>
              </router-link>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash" viewBox="0 0 15 15 " v-on:click="deleteEmployee(emp.id)" role="button">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </td>
        </tr>
        
      </tbody>
    </table>
    <router-view/>
  </div>
</template>

<style scoped>
 #data {
    margin-top: 20px;
    max-width: 1900px;
  }

  table {
    margin-top: 20px;
  }

  #button{
    margin-left: 50px;
    margin-top: 10px;
  }

 #person-fill-add{
  margin-left: 35px;
  margin-top: 20px;
 }
 

</style>
