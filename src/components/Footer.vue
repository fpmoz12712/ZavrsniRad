<template>
    <footer class="footer">
            <div class="footer__box">

                <!--box 1 *********-->
                <div class="footer__box-1">
                    <h3>Products</h3>
                    <ul>
                            <router-link 
                             tag="li" 
                             
                             v-for="(item,index) in getProizvodList" :key="index"
                             :to="{ name: 'ProizvodInfo', params: { proizvodInfo: item } }"
                             >{{firstLetterToUpperCase(item) | checkDashes}}</router-link>
                    </ul>
                </div>


                 <!--box 2 ***********-->
                <div class="footer__box-2">

                    <h3>Contact</h3>
                    <ul>
                        <li  v-for="(item,index) in getPhoneNumbers" :key="index">
                            Phone: {{item.number}}
                        </li>
                        

                    </ul>

                    <div class="footer__box-2--icon">
                         <!--facebook Icon-->
                          <a href="https://www.facebook.com/josip.zivkovic.14" target="_blank">

                              <svg class="feature__icon">
                                <use xlink:href="@/assets/sprite.svg#icon-facebook-with-circle"></use>
                                </svg>

                          </a>

                            <!--Mail Icon-->
                            <router-link :to="{name: 'Kontakt'}" tag="svg" class="feature__icon">
                                <use xlink:href="@/assets/sprite.svg#icon-mail"></use>
                            </router-link>

                    </div>
                </div>

                

            </div>
    </footer>

   
</template>


<script>
import {mapGetters} from 'vuex';

export default {
      computed:{

    ...mapGetters([
            'getPhoneNumbers',
            'getProizvodList'
        ])
    },


    methods:{
        firstLetterToUpperCase(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
            },
    }
}
</script>

