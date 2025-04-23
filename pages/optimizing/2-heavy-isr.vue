<template>
    <div>
        <h1>🐢 Full Page ISR (No API)</h1>
        <p><strong>Generated at:</strong> {{ data?.generatedAt }}</p>
        <p><strong>Render time:</strong> {{ data?.duration }} ms</p>
    </div>
</template>

<script setup>
const start = Date.now()

// Simulate a slow "build" process
const data = await useAsyncData('slow-isr', async () => {
    await new Promise(resolve => setTimeout(resolve, 5000)) // 3 second delay
    return {
        generatedAt: new Date().toISOString(),
        duration: Date.now() - start
    }
})
</script>
