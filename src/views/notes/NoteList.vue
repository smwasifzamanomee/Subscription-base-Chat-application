<template>
<div class="container mb-5">
    <router-link class="btn btn-primary my-3"  to="/notes/add">Add Note</router-link> 
    
    <div class="card">
        <div class="card-header">
            Notes 
        </div>
        <div class="card-body">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Note Number</th>
                        <th scope="col">Title</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
               <tbody>
                    <tr v-for="item in items" :key="item.id" >
                        <td>{{ item.date_time }}</td>
                        <td>{{ item.note_number }}</td>
                        <td>{{ item.title }}</td>
                        <td>
                <router-link class="btn btn-info mx-1 text-white" :to="{ name: 'EditNote', params: { id: item.id } }"> Edit </router-link>  
                <button class="btn btn-danger text-white" @click="deleteNote(item.id)"> Delete </button>  
                       </td>
                </tr>
                </tbody>
            </table>

        </div>
    </div>
</div>
</template>

<script>

    export default {
        data() {
            return{
                items: []
            }
        },
        inject: ['apiBasePath'],
        created: function ()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
                this.axios.get(this.apiBasePath + 'notes', {
                }).then(res => {
                    console.log(res);
                    this.items = res.data;
                }).catch(err => {
                    console.log(err.response);
                });
            },
            deleteNote(id) {
                if (confirm("Do you confirm to delete this item")) {
                    this.axios.post(this.apiBasePath + 'notes/delete/' + id)
                            .then(res => {
                                if (res.status === 200 && res.data.code === 200) {
                                    let i = this.items.map(data => data.id).indexOf(id);
                                    this.items.splice(i, 1)
                                }
                            });
                }

            }
        }
    }
</script>