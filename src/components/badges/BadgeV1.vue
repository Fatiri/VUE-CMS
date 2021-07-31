<template>
    <div class="badge-v1" v-if="componentVersion === 'badge-v1'">
         {{value}}
    </div>
</template>

<script>
export default {
    props:["value", "componentVersion"],
    data() {
       return{}  
    },
}
</script>
