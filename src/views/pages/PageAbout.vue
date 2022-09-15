<template>
<div class="container mb-5" >  <!--v-if="this.$cookies.isKey('token')" -->
    <h1 class="mt-5"> About Us</h1>
    <div class="card">
        <div class="card-body p-3">
            <p>Address: Telecom Bhaban (Level - 7) 53/1 Box Nagar, Zoo Road,Mirpur, Dhaka-1216.</p>
            <p>Phone:+88 02 44 80 20 81</p>
            <p>Email: gc@grameen.org</p>
            
            <!-- <a href="" target="_blank">Click</a>  -->
            <!-- <span v-if="$cookies.get('token')">yes</span> -->
        </div>
    </div>
</div>
<!-- <div v-else>{{this.$router.push('/')}}</div> -->
</template>
<script>

    export default {
        name: 'App',
        inject: ['apiBasePath'],
        
    }
</script>