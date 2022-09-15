import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/pages/PageHome.vue";
import About from "@/views/pages/PageAbout.vue";
import NoteList from "@/views/notes/NoteList.vue";
import CreateNote from '@/views/notes/CreateNote.vue';
import EditNote from '@/views/notes/EditNote.vue';
import UserList from "@/views/users/UserList.vue";
import CreateUser from '@/views/users/CreateUser.vue';
import EditUser from '@/views/users/EditUser.vue';
import Chatbox from "@/views/chatboxs/PageChatbox.vue";
import Authentication from "@/views/authentications/PageAuthentication.vue";
import Logout from "@/views/logouts/PageLogout.vue";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/notes",
        name: "Notes",
        component: NoteList,
    },
    {
        path: "/notes/add",
        name: "CreateNote",
        component: CreateNote,
    },
    {
        path: "/notes/edit/:id",
        name: "EditNote",
        component: EditNote,
    },
    {
        path: "/users",
        name: "Users",
        component: UserList,
    },
    {
        path: "/users/add",
        name: "CreateUser",
        component: CreateUser,
    },
    {
        path: "/users/edit/:id",
        name: "EditUser",
        component: EditUser,
    },
    {
        path: "/chatboxs",
        name: "Chatbox",
        component: Chatbox,
    },
    {
        path: "/",
        name: "Authentication",
        component: Authentication,
    },
    {
        path: "/logouts",
        name: "Logout",
        component: Logout,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;