<template>
  <div class="">
   <Navbar />
   <!-- hero section -->
   <div class="h-[590px] bg-primary grid grid-cols-2 overflow-hidden">
      <div class="h-full flex flex-col justify-center px-20">
        <h3 class="text-secondary text-[24px] font-[600]">Who We Are</h3>   
        <p class="text-white">
          Cashwise is a leading fintech company dedicated to providing personalized 
          financial services that cater to the unique needs and goals of our clients.
           With a team of industry experts, visionary technologists, and passionate financial 
           enthusiasts, we bring together a perfect blend of financial expertise and 
          technological prowess.
        </p>   
      </div>
      <div class="h-full flex flex-col justify-center relative">
        <div class="absolute w-[140px h-[100px] bottom-[50px] left-[-150px]">
          <img class="w-full h-full" src="@/assets/png/Frame_25.png" alt="" />
         </div>
        <div class="pt-[84px]">
          <img src="@/assets/png/hero_img.png" alt="hero-img" />
        </div>
      </div>
    </div>
    <!-- section two -->
    <div class="mx-auto grid gap-6 grid-cols-2 w-[90%] h-screen justify-center items-center">
        <div v-for="i in aboutData"  :key="i.id" class="h-[620px] bg-[#F3F3F3] flex flex-col justify-between rounded-[30px] p-10">
          <div class="flex itms-center justify-between">
            <h3 class="font-[600] text-black text-[24px]">{{i.title}}</h3>
            <div class="h-[40px] w-[40px]">
              <img class="h-full w-full" src="@/assets/svg/arrow.svg" alt="" />
            </div>
          </div>
          <div class="mx-auto h-[298px] w-[265px]" v-if="i.imageType == 'cube'">
            <img src="@/assets/png/img11.png" class="w-full h-full" alt="" />
          </div>
          <div class="mx-auto h-[298px] w-[265px]" v-if="i.imageType == 'cone'">
            <img src="@/assets/png/img10.png" class="w-full h-full" alt="" />
          </div>
          <div class="text-black font-[400]">
            {{ i.desc }}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'HomeView',
  title:"Home",
  data(){
    return {
      aboutData: [{
        id: 1,
        title: "Our Mission",
        imageType: "cube",
        desc: `Our mission is to revolutionize the financial landscape by empowering individuals and businesses with innovative and secure financial solutions. We strive to bridge the gap between traditional banking systems and cutting-edge technology, ensuring a seamless and inclusive financial experience`
      },
      {
        id: 2,
        title: "Our Vision",
        imageType: "cone",
        desc: `Our vision is to create a world where financial freedom is accessible to everyone, irrespective of their background or location. We envision a future where financial decisions are driven by data-driven insights, smart automation, and transparent practices, empowering individuals to make informed cho ....`
      }]
    }
  },
  components: {
    HelloWorld,
    Navbar
  }
}
</script>
