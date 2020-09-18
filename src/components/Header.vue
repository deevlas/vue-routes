<template>
    <ul class="nav nav-pills nav-fill">
            <router-link class="nav-link" active-class="active" exact tag="li" to="/">Home</router-link>
            <router-link class="nav-link" active-class="active" tag="li" to="/Contacts">Contacts</router-link>
            <router-link class="nav-link" active-class="active" tag="li" to="/MyProjects">My projects</router-link>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>