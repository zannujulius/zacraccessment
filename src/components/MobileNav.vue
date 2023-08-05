<template>
    <div class="w-full bg-white shadow-md absolute top-0 p-4 mobile-nav"
    :style="{ display: state ? 'block' : 'none', fontSize: fontSize + 'px' }"
    >
        <div class="py-2 flex justify-between">
            <div class="">
                <img class="" src="@/assets/svg/applogo.svg" />
            </div>
            <div class="h-[30px] w-[30px]" v-on:click="closeMenu">
                <img class="" src="@/assets/svg/cancel.svg" />
            </div>
        </div>
        <div class="">
            <router-link to="/" class="px-4 block  py-6 w-[fit-content] text-[14px] font-[400]">Home</router-link>
            <router-link to="/" class="px-4 block  py-6 w-[fit-content] text-[14px] font-[400]">Our services</router-link>
            <router-link to="/" class="px-4 block  py-6 w-[fit-content] text-[14px] font-[400]">Pricing</router-link>
            <router-link to="/" class="px-4 block  py-6 w-[fit-content] text-[14px] font-[400]">Company</router-link>
            <!-- <router-link to="/" class="px-4 block  py-6 w-[fit-content] text-[14px] font-[400]">{{ showNav}}</router-link> -->
        </div>
    </div>
</template>

<script>

export default{
    data(){
        name: "MobileNav"
        return{

        }
    }, 
    mounted(){
    },
    props: ["state"],
    methods: {
        closeMenu(){
            this.emitter.emit("menu", false);
            console.log("closed")
        }
    }
}

</script>

<style>
.mobile-nav{
    transition: all 350ms ease;
    animation: mobileslide 350ms ease;
}

@keyframes mobileslide {
  from {
    top: -200px;
  }
  to {
    top: 0;
  }
}

</style>