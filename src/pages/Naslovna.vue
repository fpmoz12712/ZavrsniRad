<template>

    <section class="naslovna">
        <!--Bar Heading-->
       <div class="bar-heading ">
           <span class="bar-heading__text"><span>Products</span></span>
       </div>

       <div class="images-layout">

           
           <div class="heading-primary">Case</div>
           <div class="images-layout__box">
             <div class="images-layout__box-img">
                   <img src="@/assets/img/case1.png">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/case2.png">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/case3.png">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/case4.png">
             </div>
               
           </div>

          
           <div class="heading-primary">Mechanical switches</div>
           <div class="images-layout__box">
             <div class="images-layout__box-img">
                   <img src="@/assets/img/sw1.png">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/sw2.png">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/sw3.png">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/sw4.png">
             </div>
               
           </div>

          
           <div class="heading-primary">Stabilizers</div>
           <div class="images-layout__box">
             <div class="images-layout__box-img">
                   <img src="@/assets/img/st1.png">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/st2.png">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/st3.png">
             </div>

             <div class="images-layout__box-img">
                   <img src="@/assets/img/st4.png">
             </div>
               
           </div>
       </div>

      
        <router-link :to="{name: 'Proizvodi'}" tag="div" class="btn-primary naslovna__btn">More</router-link>

       <div class="naslovna__content--1">
           <div class="heading-secondary-white">about us</div>
           <div class="naslovna__content-txt">
            If you want to build the top of the line mechanical keyboard, with all the premium parts on the market with a couple clicks, look no further, because we have you covered.<br><br>

            Simply look through our products, choose which you like and get a professional to build it for you.
           </div>

             <router-link :to="{name: 'Proizvodi'}" tag="div" class="btn-secondary">Products &rarr;</router-link>
       </div>

        <div class="naslovna__content--2">
             <div class="heading-secondary">RESPONSIBLE AND PROFESSIONAL</div>
             <div class="naslovna__content-txt">
                  Today, having a mechanical keyboard enhances your daily computing expirience wether you use it for work or hobbies. Mechanical keyboards are prefered by many because they offer faster response times, better durability, N-key rollover, tons of customization, 
and are incredibly satisfying to use.
             </div>
       </div>


    </section>
  
</template>

