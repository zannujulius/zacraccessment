<template>
  <div class="">
   <Navbar />
   <!-- hero section -->
   <div class="h-[600px] bg-primary grid grid-cols-2 overflow-hidden">
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
        <div class="pt-[100px]">
          <img src="@/assets/png/hero_img.png" alt="hero-img" />
        </div>
      </div>
    </div>
    <!-- section two -->
    <div class="mx-auto grid mt-[100px] gap-6 grid-cols-2 w-[90%] justify-center items-center">
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
    <!-- section three -->
    <div class="mx-auto mt-[100px] w-[90%] justify-center items-center">
      <h3 class="text-[#0B150F] font-[600] text-[34px]">
        What Sets Us Apart
      </h3>
      <div class="mt-10 grid gap-10 grid-cols-3">
        <div class="" v-for="i in nicheData" :key="i.id">
          <div class="h-[47px] w-[47px] flex items-center rounded-[10px] bg-lightPrimary  justify-center">
            <div class="h-[24px] w-[24px]" v-if="i.imgTag == 'bulb'">
              <img src="@/assets/svg/lightbulb-flash-fill.svg" alt="" class="w-full h-full" />
            </div>
            <div class="h-[24px] w-[24px]" v-if="i.imgTag == 'sec'">
              <img src="@/assets/svg/safe-2-fill.svg" alt="" class="w-full h-full" />
            </div>
            <div class="h-[24px] w-[24px]" v-if="i.imgTag == 'user'">
              <img src="@/assets/svg/palette-fill.svg" alt="" class="w-full h-full" />
            </div>
            <div class="h-[24px] w-[24px]" v-if="i.imgTag == 'personal'">
              <img src="@/assets/svg/user-4-fill.svg" alt="" class="w-full h-full" />
            </div>
            <div class="h-[24px] w-[24px]" v-if="i.imgTag == 'support'">
              <img src="@/assets/svg/question-fill.svg" alt="" class="w-full h-full" />
            </div>
          </div>
          <h4 class="font-[600] my-2 ">
            {{ i.title }}
          </h4>
          <div class="text-[14px] font-[400] leading-[22.4px]">
            {{ i.desc }}
          </div>
        </div>
      </div>
    </div>

    <!-- section four  -->
    <div class="mx-auto mt-[100px] bg-primary flex items-center justify-center flex-col rounded-[30px] w-[90%] h-[439px] bg-[section-pattern]">
      <h3 class="text-[#96EF76] text-[20px] font-[600]">
        Join Us on Our Financial Journey
      </h3>
      <p class="text-center font-[300] w-[50%]  pt-10 text-white">
        We invite you to embark on this exciting financial journey with us. At [Your Fintech Company Name], we believe in a collaborative approach, where our clients become our partners. Together, we can shape a future where financial possibilities are limitless.
      </p>
      <div class="">
        <div class="">

        </div>
        <div class=""></div>
      </div>
    </div>
  </div>

  <!-- section four -->
  <div class="w-full bg-primary mt-[100px] h-[299px] ">
    <div class="mx-auto w-[90%]  pt-10">
      <div class="flex justify-between">
        <div class="w-[137px] h-[27px]">
          <img src="@/assets/png/app_logo.png" class="h-full w-full" alt="" />
        </div>
        <div class="grid gap-16 grid-cols-3">
          <div class=""> 
            <h4 class="font-[600] text-white ">
              Support
            </h4>
            <div class="text-[14px] text-white pt-4 font-light">
              Blog  
            </div>
            <div class="text-[14px] text-white pt-4 font-light">
            Company
            </div>
          </div>
          <div class="">
            <h4 class="font-[600] text-white">
              Legal 
            </h4>
            <div class="text-[14px] pt-4 text-white font-light">
              Term of use  
            </div>
            <div class="text-[14px] pt-4 text-white font-light">
              Privacy policy
            </div>
          </div>
          <div class="">
            <h4 class="font-[600] text-white">
              Follow
            </h4>
            <div class="text-[14px] pt-4 text-white font-light">
              Twitter
            </div>
            <div class="text-[14px] pt-4 text-white font-light">
              LinkedIn
            </div>
            <div class="text-[14px] pt-4 text-white font-light">
              Facebook
            </div>
          </div>
        </div>
      </div>
      <hr  class="border-[0.2px] mt-10 border-[#5E5E5E]"/>
      <p class="text-center text-white text-[14px] text-thin py-8">
        Design with ❤️ for SaaS
      </p>
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
      }],
      nicheData: [
        {
        id: 1,
        imgTag: "bulb",
        title: "Innovation",
        desc: "We are at the forefront of financial technology, continuously exploring and integrating the latest advancements to offer cutting-edge solutions that enhance our users' financial lives."
      }, 
      {
        id: 2,
        imgTag: "sec",
        title: "Security",
        desc: "Your security is our utmost priority. We employ state-of-the-art security measures, encryption protocols, and advanced authentication methods to safeguard your financial data and transactions."
      }, 
      {
        id: 3,
        imgTag: "user",
        title: "User Experience",
        desc: "We are committed to providing an intuitive, user-friendly platform that makes managing finances a breeze. Our interface is designed with simplicity and functionality in mind to ensure a seamless user experience."
      }, 
      {
        id: 4,
        imgTag: "personal",
        title: "Personalization",
        desc: "We understand that every individual's financial journey is unique. That's why we offer tailored financial solutions that align with your specific goals and aspirations."
      }, 
      {
        id: 5,
        imgTag: "support",
        title: "Customer Support",
        desc: "Our dedicated customer support team is always available to assist you with any queries, concerns, or technical assistance you may need."
      }, 
    ]
    }
  },
  components: {
    HelloWorld,
    Navbar
  }
}
</script>
