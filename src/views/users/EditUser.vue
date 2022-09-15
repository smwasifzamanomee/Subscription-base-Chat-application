<template>
<div class="container mb-5" >
    <router-link class="btn btn-primary my-3"  to="/users">Back To All Users</router-link> 
    <div class="card">
        <form @submit.prevent="updateUser"> 
            <div class="card-header">
                Edit User
            </div>
            <div class="card-body">
                <UserForm :user="user_data"  />
            </div>
            <div class="card-footer">
                <button type="submit"  class="btn btn-info mx-1 text-white">Update</button>   or 
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
            }
        },
        inject: ['apiBasePath'],
        created: function ()
        {
            this.fetchItem();
        },

        methods: {
            fetchItem()
            {
                this.axios.get(this.apiBasePath + 'users/show/' + this.$route.params.id, {
                }).then(res => {
                    // console.log(res);
                    this.user_data = res.data;
                }).catch(err => {
                    console.log(err.response); 
                });
            },
            updateUser() {
                this.axios.post(this.apiBasePath + 'users/update/' + this.$route.params.id, this.user_data)
                        .then((res) => {
                            if (res.status === 200 && res.data.code === 200) {
                                console.log(res);
                                this.successMessage = res.data.message;
                                this.$router.push('/users');
                            } else {
                                this.errorMessage = res.data.message;
                            }
                        });
            }
        },
        components: {
            UserForm
        }
    }
</script>