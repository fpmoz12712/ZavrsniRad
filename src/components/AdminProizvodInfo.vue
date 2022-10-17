<template>
     <article class="proizvodInfoAdmin">
          <!--Proizvod primjer-->
       <div class="bar-heading " >
           <span class="bar-heading__text"><span>{{getActiveProizvod | checkDashes}}</span></span>
       </div>


       <div class="proizvodi-action">
        <!--Proizvod add img-->
        <form  class="form__addimg">
           <input type="file" multiple  @change="uploadImg">
           <button type="submit" class="addImgFile" @click.prevent="updateImgsDb">Add img</button>
       </form>

        <div class="deleteProizvod" 
           
            @click="deleteProizvodMain(activePr.id,activePr.proizvod)" >
           <p>Delete product</p>
       </div>

       </div>

       

      <!--Spinner gif-->
      <div v-if="getLoader" class="gifBox">
            <img src="@/assets/img/spin.gif" alt="gif" >
      </div>

     

      <div v-else class="images-layout__box">
      
            <div class="images-layout__box-img adminBoxImg" 
            v-for="(img,index) in  getProizvodImgs" :key="index" >

                  <img :src="img" alt="img">
                  <div class="deleteImg" @click="deleteImg($event,img)">x</div>

            </div>
      
      </div>

     </article>
</template>

<script>


export default {
     
     data(){
           return{
                 images:[]
           }
     },
      
      props: ['activePr'],

      computed:{
            getActiveProizvod() {
                  return  this.activePr.proizvod;
            },



            getProizvodImgs(){
               return   this.$store.getters.getActivePr;
            },
             getLoader(){
                   return   this.$store.getters.getLoader
            }
      },

      methods:{
            deleteProizvod(path){
                        this.$store.dispatch('deleteProizvod',path);
                        this.$emit('resetActive',null);
            },

            deleteProizvodStrg(pathName){
                  const path =  (/\s/.test(pathName)) ? pathName = pathName.toLowerCase().replace(' ','-') : pathName; 
                  this.$store.dispatch('deleteProizvodStrg',path);
            },


            deleteProizvodMain(path,pathName){
                   const quest = confirm('Želite li zaista obrisati proizvod?');
                    if(quest){
                          this.deleteProizvod(path);
                          this.deleteProizvodStrg(pathName)
                    }
            },

            uploadImg(e){
                this.images = [...e.target.files];
            },

           async updateImgsDb(){
                  const activePath = this.activePr.proizvod;
                 this.$store.dispatch('uploadFiles',{
                        path: activePath,
                        images: this.images
                  });
            
            },

            deleteImg(e,img){
                   e.target.parentElement.remove();
                   this.$store.dispatch('deleteImg',{img});  
            },
            
            
      },
      
}
</script>


