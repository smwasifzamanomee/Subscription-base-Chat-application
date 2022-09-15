<template>
<div class="container mb-5">
    <div>

        <div class="mb-3">
            <label for="note_number" class="form-label">Note number</label>
            <input v-model="formItem.note_number" type="text" class="form-control" id="note_number" placeholder="">

        </div>
        <div class="mb-3">
            <label for="title" class="form-label">Note Title</label>
            <input v-model="formItem.title" type="text" class="form-control" id="title" placeholder="">
        </div>

        <div class="mb-3">
            <label for="date_time" class="form-label">Date time</label>
            <input v-model="formItem.date_time" type="datetime-local" class="form-control" id="date_time" placeholder="">
        </div>

        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea v-model="formItem.description"   class="form-control" id="description" placeholder=""></textarea>
        </div>
        <div class="mb-3">
            <label for="involved_person" class="form-label">Involved person</label>
            <input v-model="formItem.involved_person" type="text" class="form-control" id="involved_person" placeholder="">
        </div>
        <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input v-model="formItem.location" type="text" class="form-control" id="location" placeholder="">
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: "NoteForm",
        props: ["item"], // declare the props
        computed: {
            formItem() {
                return this.item;
            }
        }

    }
</script>