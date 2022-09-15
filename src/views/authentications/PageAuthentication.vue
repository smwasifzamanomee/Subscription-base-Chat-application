<template>
    <!-- <div class="row"> -->
    <div class="col-md-6 mx-auto p-0">
        <div class="card-body">
            <div class="login-box">
                <div class="login-snip">
                    <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1"
                        class="tab">Login</label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign
                        Up</label>
                    <div class="login-space">
                        <div class="login">
                            <form @submit.prevent="login" method="POST">
                            <div class="group">
                                <label for="user_name" class="label">Username</label>
                                <input name="user_name" v-model="user_name" type="text" class="input" placeholder="Enter your username">
                            </div>
                            <div class="group">
                                <label for="password" class="label">Password</label>
                                <input name="password" v-model="password" type="password" class="input" data-type="password"
                                    placeholder="Enter your password">
                            </div>


                            <div class="group">
                                <input id="check" type="checkbox" class="check" checked>
                                <label for="check"><span class="icon"></span> Keep me Signed in</label>
                            </div>
                            <div class="group">
                                <button type="submit" class="button" value="Log In">Log In</button>
                                <!-- <span>{{ msg }}</span>-->
                            </div>
                            <div class="hr"></div>
                            <div class="foot">
                                <a href="#">Forgot Password?</a>
                            </div>
                            </form>
                        </div>


                        <div class="sign-up-form">
                            <form @submit.prevent="registration" method="POST">
                                <div class="group">
                                    <label for="name" class="label">Name</label>
                                    <input name="name" v-model="name" type="text" class="input" 
                                        placeholder="Enter your Name" required>
                                </div>
                                <div class="group">
                                    <label for="user_name" class="label">Username</label>
                                    <input name="user_name" v-model="user_name" type="text" class="input" 
                                        placeholder="Enter your username" required>
                                </div>
                                <div class="group">
                                    <label for="email" class="label">Email</label>
                                    <input name="email" v-model="email" type="email" class="input" 
                                        placeholder="Enter your email" required>
                                </div>
                                <div class="group">
                                    <label for="password" class="label">Password</label>
                                    <input name="password" v-model="password" type="password" class="input" 
                                         placeholder="Enter your password" required>
                                </div>
                                <div class="group">
                                    <label for="contract_number" class="label">Contact No</label>
                                    <input name="contract_number" v-model="contract_number" type="text" class="input" 
                                    placeholder="Enter your contact" required>
                                </div>

                                <div class="group">
                                    <button type="submit" class="button" value="Sign Up">Sign Up </button>
                                    <!-- <span>{{ msg }}</span> -->
                                    

                                </div>

                                <div class="hr"></div>
                                <!-- <div class="foot">
									<label for="tab-1">Already Member?</label>
								</div> -->
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->

</template>

<style>
@import '@/CSS/style.css';
</style>


<script>

    export default {
        name: 'App',
        data() {
            return{
            name: "",
            user_name: "",
            email: "",
            password: "",
            contract_number: "",
            token: "",
            //msg: ""
            };
        },
        inject: ['apiBasePath'],
        methods: {
            registration() {
                this.axios.post(this.apiBasePath + 'users/store/',  {
                    name: this.name,
                    user_name: this.user_name,
                    contract_number: this.contract_number,
                    email:this.email,
                    password:this.password,
            })
                        .then((res) => {

                            if (res.status === 200 && res.data.code == 200) {
                                this.$toast.success(res.data.registration); //return data from usercontroller
                                setTimeout( () => location.reload(), 3000);
                                //this.$router.push("/authentications");
                            } else {
                                this.$toast.error("Registration Failed");
                                
                            }
                        });
            },
            login() {
                this.$cookies.remove('token');
                this.axios.post(this.apiBasePath + 'users/login/',  {
                    user_name: this.user_name,
                    password: this.password
            })
                        .then((res) => {

                            if (res.status === 200 && res.data != "no") {
                                //console.log(res.data)
                                document.cookie = "token="+res.data; //Unique id as token
                                // this.msg = alert("Login Success");
                                this.$toast.success("Login Success");
                                setTimeout( () => location.reload(), 3000);
                                this.$router.push('/chatboxs');
                            } else {
                                //this.msg = alert("Invalid Username or Password. Try again with correct information");
                                this.$toast.error("Invalid Username or Password. Try again with correct information");
                                                               
                            }
                        });
            },


        },



    }
</script>