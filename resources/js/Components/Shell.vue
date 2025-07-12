<template>
    <div class="flex flex-row min-h-screen w-full">
        <div class="flex flex-col w-64 bg-base-200 text-center p-4">
            <div class="flex flex-row items-center justify-center gap-2">
                <PklRusLogo size="64" />
                <h3 class="text-2xl">Surat PKL</h3>
            </div>
            <div class="divider"></div>
            <nav class="flex flex-col justify-stretch text-left">
                <Link href="/surat" class="p-2 nav-highlight transition-all rounded-md duration-25 cursor-pointer">Surat
                </Link>
                <Link href="/murid" class="p-2 nav-highlight transition-all rounded-md duration-25 cursor-pointer">Murid
                </Link>
                <Link href="/pengguna" class="p-2 nav-highlight transition-all rounded-md duration-25 cursor-pointer">
                Pengguna</Link>
                <Link href="/settings" class="p-2 nav-highlight transition-all rounded-md duration-25 cursor-pointer">
                Settings</Link>
            </nav>
        </div>
        <slot></slot>
    </div>
</template>
<script setup lang="js">
import PklRusLogo from './PklRusLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>
<style>
.nav-highlight {
    background-color: var(--color-base-200);
}

.nav-highlight:hover {
    background-color: color-mix(in oklab, var(--color-base-content)10%, transparent);
}
</style>