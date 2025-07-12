<template>
    <div class="flex flex-row min-h-screen w-full">
        <div class="flex flex-col w-64 bg-base-200 text-center p-4">
            <div class="flex flex-row items-center justify-center gap-2">
                <PklRusLogo size="64" />
                <h3 class="text-2xl">Surat PKL</h3>
            </div>
            <div class="divider"></div>
            <nav class="flex flex-col justify-stretch text-left">
                <Link href="/surat"
                    :class="[$page.url == '/surat' ? 'active-highlight' : 'nav-highlight', ...navClasses]">
                Surat
                </Link>
                <Link href="/murid"
                    :class="[$page.url == '/murid' ? 'active-highlight' : 'nav-highlight', ...navClasses]">Murid
                </Link>
                <Link href="/pengguna"
                    :class="[$page.url == '/pengguna' ? 'active-highlight' : 'nav-highlight', ...navClasses]">
                Pengguna</Link>
                <Link href="/settings"
                    :class="[$page.url == '/settings' ? 'active-highlight' : 'nav-highlight', ...navClasses]">
                Settings</Link>
            </nav>
        </div>
        <slot></slot>
    </div>
</template>
<script setup lang="js">
import PklRusLogo from './PklRusLogo.vue';
import { Link } from '@inertiajs/vue3';
const navClasses = ["p-2", "transition-all", "rounded-md", "duration-25", "cursor-pointer"];
</script>
<style>
.active-highlight {
    background-color: color-mix(in oklab, var(--color-base-content)10%, transparent);
}

.nav-highlight {
    background-color: var(--color-base-200);
}

.nav-highlight:hover {
    background-color: color-mix(in oklab, var(--color-base-content)10%, transparent);
}
</style>