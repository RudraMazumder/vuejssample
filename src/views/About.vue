<template>
    <div v-if="city">About {{city}}</div>
    <div v-else>About</div>
</template>
<script>
export default {
  data(){
    return {
      city: this.$route.params.city
    }
  }
}
</script>