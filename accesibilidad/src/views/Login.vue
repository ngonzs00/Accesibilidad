
<template id="app1">
  <v-container fluid class="success">
    <v-layout>
      <v-app-bar app color="#191C1F">
        <v-toolbar-title class="white--text">Pánico del Kernel</v-toolbar-title>
        <!--Le añadimos el titulo-->
        <v-avatar size="40" class="ml-3">
          <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="" />
        </v-avatar>

        <v-spacer></v-spacer>
        <h1 class="white--text body-1 ma-5 hoverMouse" @click="goTo('')">
          Página principal
        </h1>
        <h1 class="white--text body-1 ma-5 hoverMouse" @click="goTo('merch')">
          Merchandising
        </h1>
        <h1 class="white--text body-1 ma-5 hoverMouse" @click="goTo('faq')">
          About us
        </h1>
      </v-app-bar>
    </v-layout>

    <v-row>
      <h1 class="mt-12"></h1>
    </v-row>

    <v-layout column align-center>
      <v-row class="mt-12"></v-row>
      <v-row align="center" class="mt-12">
        <v-avatar size="200" class="ml-3">
          <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="" />
        </v-avatar>
        <v-col class="mr-10">
          <h1 class="mt-10 ml-5 myfontGrey">Pánico del Kernel</h1>
          <h1 class="mt-1 ml-5 myfontWhite">Login</h1>
        </v-col>
      </v-row>
    </v-layout>

    <v-row class="mt-12"></v-row><v-row class="mt-12"></v-row
    ><v-row class="mt-12"></v-row>

    <v-card class="mt-12" color="#1F2326" width="100000" height="500">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12"></v-row>
      <v-row class="mt-5"></v-row>
      <v-layout column align-center>
        <v-card class="mt-12" color="#1F2326" width="700" height="300">
          <v-card-text>
            <v-form>
              <v-text-field
                dark
                id="Usuario"
                label="Usuario"
                v-model="nombreUsuario"
                name="login"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>

              <v-row class="mt-5"></v-row>

              <v-text-field
                dark
                id="password"
                label="Password"
                v-model="passwordUsuario"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>

              <v-row class="ml-1">
                <v-checkbox
                  dark
                  class="myfontGrey"
                  v-model="checkbox"
                  :label="`Recuérdame`"
                ></v-checkbox>
              </v-row>

              <v-row>
                <p class="myfontGrey ml-5 mt-1">
                  Si aún no tienes una cuenta, puedes registrarte
                </p>
                <p
                  class="ml-2 myfontGreen hoverMouse mt-1"
                  @click="goTo('register')"
                >
                  aquí
                </p>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#1EFF21" @click="clickPerfil">Login</v-btn>
                </v-card-actions>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-layout>

      <v-row justify="center">
        <p class="myfontRed mt-5" v-if="somethingMissing">
          Todos los campos deben estar llenos
        </p>
        <p class="myfontRed mt-5" v-if="userCorrect">
          Los datos son incorrectos. Inténtelo de nuevo
        </p>
      </v-row>
    </v-card>

    <v-row class="mt-12"></v-row><v-row class="mt-12"></v-row>

    <v-row justify="center">
      <v-col align="center">
        <h3 class="white--text">MÁS INFORMACIÓN</h3>

        <v-row class="mt-7"></v-row>

        <p class="white--text">
          Algunas empresas podrían pasarse por aquí para cazar talentos
        </p>
        <p class="white--text">
          Grandes hackers como Julian Assange o Chema Alonso nos avalan
        </p>
        <p class="white--text">En colaboración con Incibe y Google CTF</p>
        <p class="white--text hoverMouse" @click="goTo('faq')">FAQ</p>
        <p
            class="myfontGreen hoverMouse"
            color="#6ADD17"
            @click="snackbar3 = true"
          >
            Configuración de cookies
          </p>

          <v-snackbar
            color="blue-grey darken-4
"
            v-model="snackbar3"
            :multi-line="multiLine"
          >
            {{ cookies }}
            <v-btn
              dark
              color="#1eff21
"
              cookies
              @click="snackbar3 = false"
              >Cerrar</v-btn
            >
          </v-snackbar>
      </v-col>

      <v-col align="center">
        <h3 class="white--text">REDES SOCIALES</h3>

        <v-row class="mt-2" justify="center">
          <img
            src="../assets/Twitter.png"
            absolute
            alt=""
            class="mt-4 mr-6 hoverMouse"
          />
          <img
            src="../assets/Instagram.png"
            absolute
            alt=""
            class="mt-4 mr-6 hoverMouse"
          />
          <img
            src="../assets/Linkedin.png"
            absolute
            alt=""
            class="mt-4 mr-6 hoverMouse"
          />
          <img
            src="../assets/Facebook.png"
            absolute
            alt=""
            class="mt-4 mr-6 hoverMouse"
          />

        </v-row>
      </v-col>

      <v-col align="center">
        <h3 class="white--text">CONTACTO</h3>
        <v-row class="mt-7"></v-row>
        <p class="white--text hoverMouse">
          Atención al cliente todos los días de 9:00 a 20:00 de lunes a sábado
        </p>
        <p class="white--text hoverMouse">
          Copyright © 2021 DECLIVIA A.A.E LTD All rights reserved.
        </p>
        <p class="white--text hoverMouse">633457639</p>
        <p class="white--text hoverMouse">decliviaoficial@gmail.com</p>
          <div class="text-center">

            <p class="myfontGreen hoverMouse" color="#6ADD17" @click="snackbar2 = true"
              >Configuración de privacidad</p
            >

            <v-snackbar
              color="blue-grey darken-4"
              v-model="snackbar2"
              :multi-line="multiLine"
            >
              {{ privacidad }}
              <v-btn
                color="#1eff21"
                @click="snackbar2 = false"
                >Cerrar</v-btn
              >
            </v-snackbar>
          </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.myfontGrey {
  color: #78838a;
  font-family: "Ubuntu Mono", monospace;
}

.myfontRed {
  color: #f00a0a;
  font-family: "Ubuntu Mono", monospace;
}

.myfontWhite {
  color: #ffffff;
  font-family: "Ubuntu Mono", monospace;
}

.myfontGreen {
  color: #1eff21;
}

.hoverMouse {
  cursor: pointer;
}
</style>

<script>
export default {
  data: () => ({
    cookies:
      "Utilizamos cookies para garantizarle la mejor experiencia en nuestro sitio web. ",
    privacidad:
      "No se difundirán en ningún caso los datos que obtengamos de su conexión. ",
    snackbar2: false,
    snackbar3: false,
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
  },
};
/*
  import axios from "axios";

  const ip = "http://192.168.1.79:3000"

  export default{

    data: () => ({
      nombreUsuario : '',
      passwordUsuario : '',
      somethingMissing: false, //Si cuando clickemos en login hay algún campo que no esté rellenado saldrá un mensaje de error
      userCorrect : false
   }),
    methods: {
      goTo(dir)
      {
        this.$router.push('/' + dir);
      },

      async login()
      {
        /*const headers = {
          'Content-Type' : 'application/json',
          'Authorization' : 'JWT fefege...',
        }
        if(this.nombreUsuario == '' || this.passwordUsuario == '')
        {
          this.somethingMissing = true;
          this.userCorrect = false;
        }
        else
        {
          var data = {
            user: this.nombreUsuario,
            password: this.passwordUsuario
          }
        
          try
          {

            var datos = await axios.post( ip + '/login', data);

            console.log(datos);

            //Si el usuario existe
            if(datos.data == true)    
            {
              console.log("EL usuario y la contraseña son correctos");
              //Quitamos las posibles sentencias errónesas que aparecen y dejamos pasar al usuario
              this.somethingMissing = false;
              this.userCorrect = false;

              this.$router.push("/profile");
            }
            else
            {
              console.log("ERROR! Usuario y contraseña incorrectos")
              this.somethinMissing = false;
              //Mostraremos la sentencia que nos indica que el usuario es incorreto
              this.userCorrect = true;
            }

          }
          catch(error)
          {
            console.log("No ha funcionado");
            console.log(error);
          }
          
        }
      }
    }
  }*/
</script>

