<template>
    <section class="login">

        <div class="login__box">
            <picture>
                <img src="../assets/img/logo/logoKeyb.jpg" alt="header logo">
            </picture>

            <form class="form">

                <div class="form__box"> 
                    <input type="text" id="email" placeholder="Email" v-model="email" >
                </div>

                <div class="form__box">
                    <input type="password" id="password" placeholder="Lozinka" v-model="password" >
                </div>

                <button class="form__btn" @click.prevent="signIn">Sign in</button>

            </form>
        </div>

    </section>
</template>
<script>

export default {
    name:'login',
    data(){
        return{
            
            email: '',
            password: ''
        }
    },
    methods:{
        signIn(){
          const user = {
              email: this.email,
              password: this.password
          }

            this.$store.dispatch('signIn',user)
        },
    }
}

</script>