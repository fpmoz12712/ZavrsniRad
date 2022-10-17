<template>

    <header class="header">

        <div class="header__logo">
            <picture>
                <router-link :to="{name: 'Admin'}" tag="li" style="list-style-type: none; cursor: pointer;">
                    <img src="../assets/img/logo/logoKeyb.jpg" alt="header logo">
                </router-link>
            </picture>
        </div>

        <div class="header__nav">
            <ul>
                 <router-link :to="{name: 'Naslovna'}" tag="li">HOME PAGE</router-link>
                 <router-link :to="{name: 'Proizvodi'}" tag="li">PRODUCTS</router-link>
                 <router-link :to="{name: 'Kontakt'}" tag="li">CONTACT</router-link>
            </ul>
        </div>

    </header>
  
</template>




    