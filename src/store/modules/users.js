import {firebaseAuth} from '../../firebase';

import {Email} from '../../smtp';

const state = {
    currentUser: null
}

const getters={
    currentUser: state=> state.currentUser,
    
}
const mutations={
    userStatus: (state,user)=> user === null ?state.currentUser = null:state.currentUser = user.email,
}
const actions={
   

signIn :async ({commit},user)=>{
    try{

       const userData = await  firebaseAuth.signInWithEmailAndPassword(user.email,user.password);

       commit('userStatus',userData.user)

      }catch(error){
          const errorCode = error.code;
          const errMsg = error.message;

          if(errorCode === 'auth/wrong-password'){
              alert('wrong password')
          }else{
              alert(errMsg)
          }
      }
},

signOut: async ({commit})=>{
    try {
        await firebaseAuth.signOut();

     } catch (error) {
         alert(`error signin out, ${error}`)
     }

     commit('userStatus', null)
},

changePassword(context,newPassword){

    firebaseAuth.currentUser.updatePassword(newPassword).then(function() {
        // Update successful.
        console.log('password changed');
        }).catch(function(error) {
        console.log(error);
        });
},

sendEmail(context,email){

    console.log(email);

    Email.send({
        Host: "smtp.elasticemail.com",
        Username:"josipziv23@gmail.com",
        Password: "223AEC60A7045567027C9A04808ED0DE5636",
        To : 'josipziv23@gmail.com',
        From : 'josipziv23@gmail.com',
        Subject : 'Pitanje korisnika: ' + email.name,
        Body : email.poruka + '. Poruka poslana od: ' + email.user
        
        }).then(
            message => console.log(message)
        );
}
}
export default {
    state,
    mutations,
    getters,
    actions
}
