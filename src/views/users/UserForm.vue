<template>
<div class="container mb-5">
    <div class=""> 
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="formItem.name" type="text" class="form-control" id="name" placeholder="">
        </div>
        <div class="mb-3">
            <label for="user_name" class="form-label">User name</label>
            <input v-model="formItem.user_name" type="text" class="form-control" id="user_name" placeholder="">
        </div>

        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="formItem.password" type="text" class="form-control" id="password" placeholder="">
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <textarea v-model="formItem.email"  type="text" class="form-control" id="email" placeholder=""></textarea>
        </div>
        <div class="mb-3">
            <label for="contract_number" class="form-label">Contract Number</label>
            <input v-model="formItem.contract_number" type="text" class="form-control" id="contract_number" placeholder="">
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: "UserForm",
        props: ["user"], // declare the props
        computed: {
            formItem() {
                return this.user;
            }
        }

    }
</script>