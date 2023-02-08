<template>
    <h1 style="text-align: center;">Here is the parameter that was passed: 
    <br/>
    <u>{{ testParameter }}</u>
    </h1>
</template>
<script setup>
    // definePageMeta({ auth: false })W
    const route = useRoute();
    const testParameter = route.query["testParameter"];

</script>
<script>
    import { useTestStore } from '~~/store/testStore';
    const storeTest = useTestStore;
</script>