<template>
<div class="container mb-5">
    <router-link class="btn btn-primary my-3"  to="/users">Back To All Users</router-link> 
    <div class="card">
        <form @submit.prevent="addUser">
            <div class="card-header">
                Add User
            </div>
            <div class="card-body overflow-auto" >
                <UserForm :user="user_data" />
            </div>

            <div class="card-footer">
                <button type="submit"  class="btn btn-info mx-1 text-white">Save</button>   or 
                <router-link class="btn btn-danger text-white"  to="/users">Cancel</router-link>  
            </div>
        </form>
    </div>
</div>
<!-- <div v-else>{{this.$router.push('/')}}</div> -->
</template>
<script>
    import UserForm from '@/views/users/UserForm.vue';

    export default {
        name: 'App',
        data() {
            return{
                user_data: {},
                successMessage: "",
                errorMessage: ""

            };
        },
        inject: ['apiBasePath'],
        methods: {
            addUser() {
                this.axios.post(this.apiBasePath + 'users/store/', this.user_data)
                        .then((res) => {

                            if (res.status === 200 && res.data.code == 200) {
                                console.log(res);
                                this.successMessage = res.data.adduser;
                                this.$router.push("/users");
                            } 
                            // else {
                            //     this.errorMessage = res.data.message;
                            // }
                        });
            },
        },

        components: {
            UserForm
        }
    }
</script>