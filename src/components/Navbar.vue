<template>
    <div class="bg-white shadow-md ">
        <div class="w-[90%] m-auto flex items-center justify-between h-[86px]">
            <div class="">
                <img class="" src="@/assets/svg/applogo.svg" />
            </div>
            <div class="items-center hidden md:flex">
                <router-link to="/" class="px-6 text-[14px] font-[400]">Home</router-link>
                <router-link to="/" class="px-6 text-[14px] font-[400]">Our services</router-link>
                <router-link to="/" class="px-6 text-[14px] font-[400]">Pricing</router-link>
                <router-link to="/" class="px-6 text-[14px] font-[400]">Company</router-link>
            </div>
            <div class="flex md:hidden">
                icon
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>