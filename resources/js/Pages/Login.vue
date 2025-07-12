<template>
    <div class="flex flex-col justify-center items-center w-full h-screen">
        <div class="card bg-base-200 p-5 flex-col flex rounded-lg">
            <div class="flex items-center justify-center">
                <PklRusLogo :size="96" />
                <span className="text-4xl text-primary">PKL</span>
                <span className="text-4xl text-secondary">RUS</span>
            </div>
            <h1 class="mb-2 text-xl">Login</h1>
            <form class="flex flex-col gap-3" @submit.prevent="onSubmit">
                <TextInput input-name="Username" input-placeholder="Username" v-model:input-value="form.username"
                    v-model:input-error="form.errors.username" />
                <PasswordInput input-name="Password" input-placeholder="Password" v-model:input-value="form.password"
                    v-model:input-error="form.errors.password" />
                <button class="btn bg-primary rounded-lg" type="submit" :disabled="form.processing">Login</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="js">
import { getCSRFCookie, postLoginCredentials } from '../api/auth';
import { ref } from 'vue';
import { router, useForm } from '@inertiajs/vue3';
import TextInput from '../Components/Inputs/TextInput.vue';
import PasswordInput from '../Components/Inputs/PasswordInput.vue';
import PklRusLogo from "../Components/PklRusLogo.vue"

const form = useForm({
    username: "",
    password: ""
});

async function onSubmit() {
    await getCSRFCookie();
    form.submit("post", "/api/login", { preserveState: "errors", preserveScroll: true });
}
</script>