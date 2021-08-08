<template>
    <div v-if="name && mobole">Contact Mr {{name}} @ {{mobole}}</div>
    <div v-else> Contact admin</div>
</template>
<script>
export default {
    data(){
        return {
            name: this.$route.query.name,
            mobole: this.$route.query.mobole
        }
    }
}
</script>