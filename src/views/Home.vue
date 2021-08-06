// home画面
<template>

      <div id ="home">
        <h1>ログイン画面</h1>
        <div>
          <button color='info' @click="login">Googleアカウントでログイン</button>
          <!-- <p>{{userName}}</p> -->
          
        </div>

    </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'


export default {
  name: 'Home',

     methods:{
     ...mapActions(['login','userName'])
   }

}
</script>
