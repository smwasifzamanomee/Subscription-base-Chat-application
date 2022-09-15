<template>
<div class="container mb-5">
    <router-link class="btn btn-primary my-3"  to="/notes">Back To All Notes</router-link> 
    <div class="card">
        <form @submit.prevent="addNote">
            <div class="card-header">
                Add Note
            </div>
            <div class="card-body">
                <NoteForm :item="item_data" />
            </div>

            <div class="card-footer">
                <button type="submit"  class="btn btn-info mx-1 text-white"    >Save</button>   or 
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

            };
        },
        inject: ['apiBasePath'],
        methods: {
            addNote() {
                this.axios.post(this.apiBasePath + 'notes/store/', this.item_data)
                        .then((res) => {

                            if (res.status === 200 && res.data.code === 200) {
                                this.successMessage = res.data.message;
                                this.$router.push("/notes");
                            } else {
                                this.errorMessage = res.data.message;
                            }
                        });
            },
        },

        components: {
            NoteForm
        }
    }
</script>