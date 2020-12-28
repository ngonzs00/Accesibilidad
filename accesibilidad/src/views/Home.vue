
<template>
  <v-container class="success" fluid grid-list-md style="height:2000px">
    <v-layout>
      <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#191C1F" dark>
        <v-flex xs2 sm2 md1>
          <v-list-item-avatar>
            <v-img src="../assets/LogoPanicoKernel.jpeg"></v-img>
          </v-list-item-avatar>
        </v-flex>
        <v-flex xs4 sm4 md2>
          <v-toolbar-title>
            <span>Pánico Del Kernel</span>
          </v-toolbar-title>
        </v-flex>

        <v-flex xs4 sm4 md1>
          <v-chip class="ma-2" color="red" text-color="white" label>
            <v-btn icon href="https://www.youtube.com/" target="_blank">
              <v-icon>mdi-youtube</v-icon>
            </v-btn>
          </v-chip>
        </v-flex>

        <v-flex xs4 sm4 md1>
          <v-chip class="ma-2" color="purple lighten-1" text-color="white" label>
            <v-btn icon href="https://www.instagram.com/" target="_blank">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </v-chip>
        </v-flex>

        <v-flex xs4 sm4 md1>
          <v-chip class="ma-2" color="cyan" text-color="white" label>
            <v-btn icon href="https://www.twitter.com/" target="_blank">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-chip>
        </v-flex>

        <v-flex xs4 sm4 md1>
          <v-chip class="ma-2" color="grey darken-3" text-color="white" label>
            <v-btn icon href="https://www.github.com/" target="_blank">
              <v-icon>mdi-github-box</v-icon>
            </v-btn>
          </v-chip>
        </v-flex>
        <v-flex xs4 sm4 md1>
        </v-flex>

         <v-flex xs6 sm4 md2>
        <v-btn block @click="clickLogin" dark color="cyan darken-4">log-in</v-btn>
      </v-flex>
      <v-flex xs6 sm4 md2>
        <v-btn block @click="clickRegister" dark color="teal darken-4">registro</v-btn>
      </v-flex>
      </v-app-bar>
    </v-layout>
    
    <br />
    <v-card color="#003D40" dark>
      <v-card-text>
        <h1 class="text-md-center">Ciberseguridad para todos</h1>
      </v-card-text>
    </v-card>

    <br />

    <v-layout row wrap align-center>
      <v-flex xs12 sm6 md4>
        <v-card color="grey darken-4" dark>
          <v-card-title primary class="align-center">KERNELS</v-card-title>
          <v-card-text>{{ kernels }}</v-card-text>
          <center>
            <v-img height="200" width="200" src="../assets/terminal-green-icon.png"></v-img>
          </center>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 child-flex>
        <v-card color="grey darken-4" dark>
          <v-card-title primary class="align-center">FAQ</v-card-title>
          <v-card-text>{{ faq }}</v-card-text>
          <center>
            <v-img height="200" width="300" src="../assets/faq-2639673_640.png"></v-img>
          </center>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card color="grey darken-4" dark>
          <v-card-title primary class="align-center">MÁQUINAS VIRTUALES</v-card-title>
          <v-card-text>{{ maqvir }}</v-card-text>
          <center>
            <v-img height="200" width="200" src="../assets/VB.png"></v-img>
          </center>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex xs12 sm6 md4>
        <v-card color="#6ADD17" dark>
          <v-btn @click="clickDesarrollo" block large color="#6ADD17">Acceso al KERNELS</v-btn>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card color="#6ADD17" dark>
          <v-btn @click="clickFaq" block large color="#6ADD17">Acceso a FAQ</v-btn>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card color="#6ADD17" dark>
          <v-btn @click="clickAyuda" block large color="#6ADD17">Acceso a las MÁQUINAS VIRTUALES</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    <br />
    <v-layout row wrap align-center>
      <v-flex xs12 sm16 md12>
        <v-card color="#003D40" dark>
          <v-card-text>{{explicacionNiveles}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <br />
   
    <br />
    <v-layout>
      <v-flex xs12 sm6 md6>
        <div class="text-center">
          <v-btn dark color="#6ADD17" @click="snackbar3 = true">Configuración de cookies</v-btn>

          <v-snackbar color="blue-grey darken-4

" v-model="snackbar3" :multi-line="multiLine">
            {{ cookies }}
            <v-btn dark color="#6ADD17
" cookies @click="snackbar3 = false">Cerrar</v-btn>
          </v-snackbar>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <div class="text-center">
          <v-btn dark color="#6ADD17" @click="snackbar2 = true">Configuración de privacidad</v-btn>

          <v-snackbar color="blue-grey darken-4" v-model="snackbar2" :multi-line="multiLine">
            {{ privacidad }}
            <v-btn dark color="#6ADD17
" privacidad @click="snackbar2 = false">Cerrar</v-btn>
          </v-snackbar>
        </div>
      </v-flex>
    </v-layout>
    <br />

    <v-card class="elevation-16 mx-auto" width="300" color="#191C1F" dark>
      <v-card-title class="headline" primary-title>Valore la aplicación</v-card-title>
      <v-card-text>
        Es muy importante que realice una valoración de la aplicación para conocer cuál es su opinión acerca de esta.
        <div class="text-center mt-12">
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
          ></v-rating>
        </div>
      </v-card-text>
    </v-card>
    <br />
   <v-footer class="warning" padless>
      <v-row justify="center" no-gutters>
        <br />
        <v-btn color="white" @click="clickMain" text rounded class="my-2">Página principal</v-btn>
        <v-btn color="white" text rounded class="my-2" @click="snackbar = true">Contacto</v-btn>
        <v-snackbar color="blue-grey darken-3" v-model="snackbar">
          {{ email }}
          <v-btn dark color="#33CC00" @click="snackbar = false">Cerrar</v-btn>
        </v-snackbar>
        <v-btn color="white" @click="clickFaq" text rounded class="my-2">FAQ</v-btn>
        <v-btn color="white" @click="clickAyuda" text rounded class="my-2">Ayuda</v-btn>
        <v-btn color="white" @click="clickDesarrollo" text rounded class="my-2">Desarrollo</v-btn>
        <v-col class="warning py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Pánico Del Kernel</strong>
        </v-col>
      </v-row>
        <v-col class="text-center" cols="12">
        <h1
          class="overline pt-0 white--text"
        >Copyright © 2020 DECLIVIA A.A.E LTD All rights reserved.</h1>
        <h1 class="overline pt-3 white--text">
          <a target="_blank" color="#8AC53E"></a> icons by
          <a
            target="_blank"
            href="http://code.meta-platform.com/assets/mdi/preview.html"
          >code.meta-platform</a>
        </h1>
      </v-col>
    </v-footer>
  </v-container>
</template>



<script>
export default {
  data: () => ({
    multiLine: true,
    snackbar: false,
    snackbar2: false,
    snackbar3: false,

    email:
      "Para contactar con los creadores utilizar el siguiente correo electrónico: panicodelkernel@gmail.com",

    cookies:
      "Utilizamos cookies para garantizarle la mejor experiencia en nuestro sitio web. ",
    privacidad:
      "No se difundirán en ningún caso los datos que obtengamos de su conexión. ",
    lenguajes: `En nuestros foros, los lenguajes de programación que te vas a encontrar son estos:`,
    kernels: `En la zona de kernels se pueden acceder a diversas actividades relacionadas con el mundo del hacking.`,
    faq: `En este zona puedes publicar cualquier cosa que tenga que ver con el mundo de la ciebrseguridad.`,
    maqvir: `En esta sección puedes acceder a las máquinas virtuales vulnerables disponibles.`,
    explicacionNiveles: `Una de las principales características de esta págian web es que sus contenidos están separados por niveles, por lo que siempre podrás encontrar información interesante sepas lo que sepas`,
    items: [
      {
        color: "#1D7C00",
        icon: "mdi-numeric-1-box-outline",
        titulo: "Fácil",
        texto:
          "En este nivel encontrarás contenidos de introducción a la ciberseguridad"
      },
      {
        color: "#20A200",
        icon: "mdi-numeric-2-box-outline",
        titulo: "Medio",
        texto:
          "Si tienes conocimientos básicos de ciberseguridad pero quieres aprender más, es un buen lugar"
      },
      {
        color: "#29D800",
        icon: "mdi-numeric-3-box-outline",
        titulo: "Experto",
        texto:
          "Si tus conocimientos sobre ciberseguridad son muy amplios, en esta zona puede encontrar nuevos contenidos"
      },
      {
        color: "#00FF55",
        icon: "mdi-numeric-4-box-outline",
        titulo: "Hacker",
        texto:
          "Si ya lo sabes todo acerca de ciberseguridad y quieres dar un paso más, este es tu nivel"
      }
    ],
    value: [500, 1000, 2500, 5000, 10000, 20000, 30000],
    rating: 4.5
  }),
  methods: {
    clickFaq() {
      this.$router.push("/faq");
    },
    clickDesarrollo() {
      this.$router.push("/developers");
    },
    clickMain() {
      this.$router.push("/about");
    },
    clickPerfil() {
      this.$router.push("/profile");
    },
    clickAyuda() {
      this.$router.push("/help");
    },
    clickLogin() {
      this.$router.push("/login");
    },
    clickRegister() {
      this.$router.push("/register");
    }
  }
};
</script>



