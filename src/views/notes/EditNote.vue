<template>
<div class="container mb-5">
    <router-link class="btn btn-primary my-3"  to="/notes">Back To All Notes</router-link> 
    <div class="card">
        <form @submit.prevent="updateNote"> 
            <div class="card-header">
                Edit Note
            </div>
            <div class="card-body">
                <NoteForm :item="item_data"  />
            </div>
            <div class="card-footer">
                <button type="submit"  class="btn btn-info mx-1 text-white">Update</button>   or 
                <router-link class="btn btn-danger text-white"  to="/notes">Cancel</router-link>  
            </div>
        </form>
    </div>
</div>
</template>
<script>

    import NoteForm from '@/views/notes/NoteForm.vue';

    export default {
        name: 'App',
        data() {
            return{
                item_data: {},
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
                this.axios.get(this.apiBasePath + 'notes/show/' + this.$route.params.id, {
                }).then(res => {
                    console.log(res);
                    this.item_data = res.data;
                }).catch(err => {
                    console.log(err.response);
                });
            },
            updateNote() {
                this.axios.post(this.apiBasePath + 'notes/update/' + this.$route.params.id, this.item_data)
                        .then((res) => {
                            if (res.status === 200 && res.data.code === 200) {
                                console.log(res);
                                this.successMessage = res.data.message;
                                this.$router.push('/notes');
                            } else {
                                this.errorMessage = res.data.message;
                            }
                        });
            }
        },
        components: {
            NoteForm
        }
    }
</script>