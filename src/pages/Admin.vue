<template>

        <section class="admin">
           
            <div class="admin__box" v-if="currentUser !== null">
            <!--Odjava-->
            <div class="bar-heading ">
                <span class="bar-heading__text"><span>admin section</span></span>
            </div>

                <button class="form__btn" @click.prevent="signOut">sign out</button>

                <!--Osobni podaci-->
            <div class="bar-heading ">
                <span class="bar-heading__text"><span>change password</span></span>
            </div>

            <form class="form" @submit.prevent="changePwd">

                    <div class="form__box">
                        <input type="password"  placeholder="New password" v-model="novaLozinka">
                    </div>

                    <div class="form__box">
                        <input type="password"  placeholder="Repeat new password"  v-model="potrvdiLozinku">
                    </div>

                    <button class="form__btn" >Save</button>

                </form>



                <!--Broj mobitela-->
            <div class="bar-heading ">
                <span class="bar-heading__text"><span>phone numbers</span></span>
            </div>

            

            <div class="addPhoneNum">

                <form class="addPhoneNum__form">
                    <input type="text" placeholder="Unesite novi broj" v-model="phone">
                    <button @click.prevent="addPhoneNumber">ADD</button>
                </form>

                <div class="addPhoneNum__box" v-for="(item,index) in getPhoneNumbers" :key="index">
                    <div class="addPhoneNum__box-number">{{item.number}}</div>
                    <div class="deleteNum" @click="deletePhoneNumber(item.id)">X</div>
                </div>

            </div>

            <div class="phoneNum">
                <div class="phoneNum__box">
                    
                </div>
            </div>

                <!--proizvodi-->
            <div class="bar-heading ">
                <span class="bar-heading__text"><span>products</span></span>
            </div>
    
            
                <!--proizvodi form-->
                <form class="proizvodi__form">
                <input type="text" placeholder="Add new product" v-model="proizvod">
                <button @click.prevent="addProizvod">ADD</button>
            </form>



            <div class="proizvodi__list">
                
                <div class="proizvodi__list--item" v-for="(item,index) in getProizvodi" :key="index" 
                @click="updateStateAndImgs(item)"> 
                    {{item.proizvod | checkDashes}}
                </div>

            </div>

            
            <app-pr-info v-if="activeProizvod" :activePr = activeProizvod 
                         v-on:resetActive="updateActivePr($event)"/>

            </div>

             <Login v-if="currentUser === null" />

        </section>

       
    
</template>

<script>

import AdminProizvodInfo from '../components/AdminProizvodInfo';
import Login from '../components/Login';
import {mapGetters} from 'vuex';



export default {

    data(){
        return{
            phone:'',
            proizvod: '',
            activeProizvod: null,
            novaLozinka: '',
            potrvdiLozinku: ''
            
        }
    },

    components:{
        appPrInfo: AdminProizvodInfo,
        Login
    },


    computed:{

    ...mapGetters([
            'getPhoneNumbers',
            'currentUser',
            'getProizvodi'
        ]),
    },

    methods:{
        updateStateAndImgs(obj){
                this.activeProizvod = obj;
                this.$store.dispatch('getFiles',obj.proizvod);
               

        },
        addPhoneNumber(){
            if(this.phone !== ''){
                this.$store.dispatch('addPhoneNumber',this.phone);
                this.phone = '';
            }
        },

        deletePhoneNumber(id){
             this.$store.dispatch('deletePhoneNumber',id);
        },

        signOut(){
               this.$store.dispatch('signOut');
        },

        addProizvod(){
            if(this.proizvod !== ''){
                this.$store.dispatch('addProizvod',this.proizvod);
                this.proizvod = '';
            }
           
        },

        updateActivePr(val){
            this.activeProizvod = val;
        },

        changePwd(){
        
             this.novaLozinka === this.potrvdiLozinku ?  this.$store.dispatch('changePassword',this.novaLozinka):alert('Lozinke se ne podudaraju');
             this.novaLozinka = '';
             this.potrvdiLozinku = '';
        }
        

    }


}
</script>

<style>

</style>

