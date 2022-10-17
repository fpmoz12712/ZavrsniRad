<template>
    <section class="kontakt">
        <!--Kontakt Banner-->
        <div class="kontakt__banner">
           <div class="kontakt__banner-heading">email</div>
           <div class="kontakt__banner-bg"></div>
        </div>

        <!--Kontakt Form-->
        <form class="form" @submit.prevent="sendEmail">
            <div class="form__box">
                <label for="ime">Name</label>
                <input type="text" id="ime" v-model="name">
            </div>

             <div class="form__box">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="user">
            </div>

            <textarea id="txtarea" cols="30" rows="10" 
                placeholder="Enter your message here ..."
                v-model="poruka"
            ></textarea>

            <button class="form__btn">send</button>
        </form>

    </section>
</template>

<script>

import {mapGetters} from 'vuex';

export default {

    data(){
        return{
            name: '',
            user:'',
            poruka:''
        }
    },
    computed:{

    ...mapGetters([
            'getPhoneNumbers'
        ])
    },


    methods:{
        sendEmail(){
            const email = {
                name: this.name,
                user: this.user,
                poruka: this.poruka
            }

            this.$store.dispatch('sendEmail', email);

             this.name = '',
             this.user= '',
             this.poruka= ''

            
        }
    }

    
}
</script>



 