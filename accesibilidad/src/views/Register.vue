<template>
  <v-container fluid class="success" style="height:1500px">
    <v-layout>
      <v-app-bar app color="#191C1F">
        <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon> <!--Le añadimos un icono blanco-->
        <v-toolbar-title class="white--text">Pánico del Kernel</v-toolbar-title> <!--Le añadimos el titulo-->
        <v-avatar size="40" class="ml-3">
          <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="">
        </v-avatar>

        <v-spacer></v-spacer>
          <h1 class="white--text body-1 ma-5 hoverMouse" @click="goTo('')">Página principal</h1>
          <h1 class="white--text body-1 ma-5 hoverMouse"  @click="goTo('merch')">Merchandising</h1>
          <h1 class="white--text body-1 ma-5 hoverMouse" @click="goTo('faq')">About us</h1>
      </v-app-bar>
    </v-layout>

    <v-row>
    <h1 class="mt-12"></h1>
    </v-row>

    <v-layout column align-center>
      <v-row class="mt-12"></v-row>
      <v-row align="center" class="mt-12">
          <v-avatar size="200" class="ml-3">
            <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="">
          </v-avatar>
          <v-col class="mr-10">
          <h1 class="mt-10 ml-5 myfontGrey">Pánico del Kernel</h1>
          <h1 class="mt-1 ml-5 myfontWhite">Register</h1>
          </v-col>
      </v-row>

    </v-layout>
      
      <v-row class="mt-12"></v-row><v-row class="mt-12"></v-row><v-row class="mt-12"></v-row>
      
      <v-card
      class="mt-12"
      color="#1F2326"
      width="100000"
      height="500"
      >  
      <v-row class="mt-12"></v-row>
        <v-layout column align-center>
          <v-card
          class="mt-12"
          color="#1F2326"
          width="700"
          height="400"
          > 
          <v-card-text>
      <v-form>
        <v-text-field dark
          label="Nombre de usuario"
          v-model="nombreUsuario"
          name="login"
          prepend-icon="mdi-account"
          type="text"
        ></v-text-field>

        <v-row class="mt-5"></v-row>

        <v-text-field dark
          label="Email"
          name="login"
          v-model="emailUsuario"
          prepend-icon="mdi-email"
          type="text"
        ></v-text-field>

        <v-row class="mt-5"></v-row>

        <v-text-field dark
          id="password"
          label="Password"
          name="password"
          v-model="passwordUsuario"
          prepend-icon="mdi-lock"
          type="password"
        ></v-text-field>

        <v-row class="mt-12"></v-row>
        
        <v-row>
          <p class="myfontGrey ml-10">Si ya tienes una cuenta, puedes loguearte</p><p class="ml-2 myfontGreen hoverMouse" @click="goTo('login')">aquí</p>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#1EFF21" @click="clickPerfil">Register</v-btn>
          </v-card-actions>
        </v-row>
      </v-form>
      </v-card-text>
          </v-card>
        </v-layout>

         <v-row justify="center">
          <p class="myfontRed mt-5" v-if="somethingMissing">Todos los campos deben estar llenos</p>
          <p class="myfontRed mt-5" v-if="userCorrect">Ya existe un usuario con ese nombre</p>
        </v-row>

      </v-card>

      <v-row class="mt-12"></v-row><v-row class="mt-12"></v-row>

      <v-row justify="center">

        <v-col align="center">
          <h3 class="white--text">MÁS INFORMACIÓN</h3>

          <v-row class="mt-7"></v-row>

          <p class="white--text">Algunas empresas podrían pasarse por aquí para cazar talentos</p>
          <p class="white--text">Grandes hackers como Julian Assange o Chema Alonso nos avalan</p>
          <p class="white--text">En colaboración con Incibe y Google CTF</p>
          <p class="myfontGreen hoverMouse" @click="goTo('faq')">FAQ</p>
        </v-col>

        <v-col align="center">
          <h3 class="white--text">REDES SOCIALES</h3>

          <v-row class="mt-7" justify="center">
          <img src="../assets/Twitter.png" absolute alt="" class="mt-4 mr-6 hoverMouse">
          <img src="../assets/Instagram.png" absolute alt="" class="mt-4 mr-6 hoverMouse">
          <img src="../assets/Linkedin.png" absolute alt="" class="mt-4 mr-6 hoverMouse">
          <img src="../assets/Facebook.png" absolute alt="" class="mt-4 mr-6 hoverMouse">
          </v-row>

        </v-col> 

        <v-col align="center">
          <h3 class="white--text">CONTACTO</h3>
          <v-row class="mt-7"></v-row>
          <p class="white--text hoverMouse">Atención al cliente todos los días de 9:00 a 20:00 de lunes a sábado</p>
          <p class="white--text hoverMouse">Copyright © 2021 DECLIVIA A.A.E LTD All rights reserved.</p>
          <p class="white--text hoverMouse ">633457639</p>
          <p class="myfontGreen hoverMouse">decliviaoficial@gmail.com</p>

        </v-col>

      </v-row>


  </v-container>
</template>

<style>

  .myfontGrey{

    color: #78838a;
    font-family: 'Ubuntu Mono', monospace;

  }

  .myfontWhite{

    color: #ffffff;
    font-family: 'Ubuntu Mono', monospace;

  }

  .myfontRed{

    color: #f00a0a;
    font-family: 'Ubuntu Mono', monospace;

  }

  .myfontGreen{
    
    color: #1EFF21

  }

  .hoverMouse
  {
    cursor: pointer
  }

</style>

<script>
export default {
  data: () => ({
   
  }),
  methods: {
    goTo(dir){
      this.$router.push('/' + dir);
    },
    clickFaq() {
      this.$router.push("/faq");
    },
    clickKernels() {
      this.$router.push("/kernels");
    },
    clickMain() {
      this.$router.push("/");
    },
    clickPerfil() {
      this.$router.push("/profile");
    },
    clickLogin() {
      this.$router.push("/login");
    },
    clickRegister() {
      this.$router.push("/register");
    },
    clickMV() {
      this.$router.push("/vm");
    },

  }
}
/*
  import axios from "axios";

  const ip = "http://192.168.1.79:3000"

  export default{

    data: () => 
    ({
      nombreUsuario : '',
      emailUsuario : '',
      passwordUsuario : '',
      somethingMissing: false, //Si cuando clickemos en login hay algún campo que no esté rellenado saldrá un mensaje de error
      userCorrect : false
   }),
    methods: 
    {
      goTo(dir)
      {
        this.$router.push('/' + dir);
      },
      async register()
      {
        if(this.nombreUsuario == '' || this.passwordUsuario == '' || this.emailUsuario == '')
        {
          this.somethingMissing = true;
          this.userCorrect = false;
        }
        else
        {
          this.somethingMissing = false;

          var data = {
            user : this.nombreUsuario,
            password: this.passwordUsuario,
            email : this.emailUsuario
          }

          try{
            var datos = await axios.post(ip + '/register', data);

            //Si el usuario ya existe mostramos error
            if(datos.data == true)
            {
              this.somethingMissing = false;
              this.userCorrect = true;
            }
            //Si no existe lo creamos y mandamos al usuario a login para que pueda entrar
            else{
              this.somethingMissing = false;
              this.userCorrect = false;

              alert("Usuario creado con éxito");

              this.$router.push('/login')
            }

          }
          catch(error)
          {
            console.log("No ha funcionado el REGISTER");
            console.log(error);
          }
        }
      }

    }
  }*/

</script>
