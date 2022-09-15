<template>
<div class="container mb-5" > <!--v-if="this.$cookies.isKey('token')"-->
    <h1 class="mt-5"> Dashboard</h1>
    <div class="card">
        <div class="card-body p-3">
            <p>Wasif Zaman Omee</p> 
            <!--<p>
            <router-link class="nav-link" to="/users">Go To CRUD Application</router-link>
            </p>-->
            <p> Token number {{$cookies.get('token')}} </p>
        </div>
    </div>
</div>
<!-- <div v-else>{{this.$router.push('/')}}</div> -->
</template>