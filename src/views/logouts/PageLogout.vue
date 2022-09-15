<template>
<div v-if="$cookies.isKey('token')">
<span style="color: transparent">{{$cookies.remove("token")}}</span> <!--cookies distroy --> 
<!-- <div class="container mb-5">
<h1>Thank You for using this system. You are singing out now...</h1>
</div> -->
<meta http-equiv="refresh" content="0;url=/" />
</div>
<div v-else>{{$router.push('/')}}</div>
</template>

