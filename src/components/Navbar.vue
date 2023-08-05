<template>
    <div class="bg-white shadow-md relative">
        <MobileNav :state="showNav" />
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
            <div class="flex md:hidden w-[30px] h-[30px]" v-on:click="handleClick">
                <img src="@/assets/svg/menu.svg" alt="" class="" />
            </div>
        </div>
    </div>
</template>

<script>
import MobileNav from './MobileNav.vue';
    export default {
    name: "navbar",
    data() {
        return {
            showNav: false
        };
    },
    components: { MobileNav },
    methods: {
        handleClick: function () {
            this.showNav = !this.showNav
        }
    },
    mounted() { 
        this.emitter.on("menu", (data) => {
            this.showNav = data
        });
  }
}
</script>

<style>

</style>