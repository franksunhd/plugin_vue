<template>
    <div class="indexBox">
        <radial-progress-bar
            :diameter="200"
            :completed-steps="completedSteps"
            :total-steps="totalSteps">
            <p>Total steps: {{ totalSteps }}</p>
            <p>Completed steps: {{ completedSteps }}</p>
        </radial-progress-bar>
    </div>
</template>

<script>
    import RadialProgressBar from 'vue-radial-progress';

    export default {
        name: "index",
        components: {RadialProgressBar},
        data() {
            return {
                completedSteps: 0,
                totalSteps: 10
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
