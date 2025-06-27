<template>
    <label :for="inputName" class="floating-label">
        <span>{{ inputName }}</span>
        <input :name="inputName"
            :class="[{ ['border-error']: inputError != null }, 'input', 'w-sm', 'w-md', 'focus:outline-none', 'rounded-lg']"
            :placeholder="inputPlaceholder" v-model="inputValue" type="text " />
        <div class="text-error text-sm">{{ inputError }}</div>
    </label>
</template>
<script setup lang="js">
import { defineProps } from 'vue';

defineProps({
    inputName: String,
    inputPlaceholder: String
});
const inputValue = defineModel("input-value");
const inputError = defineModel("input-error");
</script>