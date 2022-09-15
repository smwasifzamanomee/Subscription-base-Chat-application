<template>
<div class="container mb-5" > <!--v-if="this.$cookies.isKey('token')"-->
    <router-link class="btn btn-primary my-3"  to="/users/add">Add User</router-link> 
    
    <div class="card">
        <div class="card-header">
            Users 
        </div>
        <div class="card-body">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Password</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contract Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
               <tbody>
                    <tr v-for="user in users" :key="user.id" >
                        <td>{{ user.name }}</td>
                        <td>{{ user.user_name }}</td>
                        <td>{{ user.password }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.contract_number }}</td>
                        <td>
                <router-link class="btn btn-info mx-1 text-white" :to="{ name: 'EditUser', params: { id: user.id } }"> Edit </router-link>  
                <button class="btn btn-danger text-white" @click="deleteUser(user.id)"> Delete </button>  
                       </td>
                </tr>
                </tbody>
            </table>

        </div>
    </div>
</div>
<!-- <div v-else>{{this.$router.push('/')}}</div> -->
</template>

<script>

    export default {
        data() {
            return{
                users: []
            }
        },
        inject: ['apiBasePath'],
        created: function ()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
                this.axios.get(this.apiBasePath + 'users', {
                }).then(res => {
                    console.log(res);
                    this.users = res.data;
                }).catch(err => {
                    console.log(err.response);
                });
            },
            deleteUser(id) {
                if (confirm("Do you confirm to delete this user")) {
                    this.axios.post(this.apiBasePath + 'users/delete/' + id)
                            .then(res => {
                                if (res.status === 200 && res.data.code === 200) {
                                    let i = this.users.map(data => data.id).indexOf(id);
                                    this.users.splice(i, 1)
                                }
                            });
                }

            }
        }
    }
</script>