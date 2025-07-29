<template>
    <div class="flex flex-col items-center justify-center grow">
        <Link href="/surat/create" class="p-2 m-0 bg-primary rounded-md">Tambah Surat</Link>
    </div>
</template>

<script setup lang="js">
import Shell from '@/Components/Shell.vue';
import { Link } from '@inertiajs/vue3';

defineOptions({ layout: Shell });
</script>