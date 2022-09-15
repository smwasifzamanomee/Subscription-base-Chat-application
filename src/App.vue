<template>
    <div class="">
        <header>
            <!--<div v-if="!cookie">-->
            <div class="d-flex flex-column flex-md-row align-items-center  py-2 px-5 border-bottom" v-if="this.$cookies.isKey('token')">
                <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
                    <span class="fs-4">Chat Application Service </span>
                </a>
                <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <router-link class="nav-link active"  to="/home">Home</router-link> 
                    <router-link class="nav-link" to="/about">About</router-link>
                    <!-- <router-link class="nav-link" to="/notes">Notes</router-link> -->
                    <router-link class="nav-link" to="/users">Users</router-link>
                    <router-link class="nav-link" to="/chatboxs">ChatBox</router-link>
                    <!-- <router-link class="nav-link" to="/authentications">Login/Signup</router-link> -->
                    <!--<span v-if="$cookies.get('token')">
                        <router-link class="nav-link" to="/logout">Logout</router-link>
                    </span>-->
                    <router-link class="nav-link" to="/logouts">Logout</router-link>
                </nav>
            </div>
        </header>

        <main>
                
                <router-view />
        </main>
        <!-- <footer class="footer">
            <div class="container">
                <span class="text-muted">CRUD Application is basic and initial program for a developer who want to work with database.</span>
            </div>
        </footer>   -->


    </div>
</template>
<script>
    export default {
        name: 'App',
        inject: ['apiBasePath'],

        
    }
</script>
<style>
    .top-bar{
        position: absolute;
    }

    .border-top {
        border-top: 1px solid #e5e5e5;
    }
    .border-bottom {
        border-bottom: 1px solid #e5e5e5;
    }

    .box-shadow {
        box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
    }

    .footer {
        
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #f5f5f5;
    }
</style> 
