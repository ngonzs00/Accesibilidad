
<template>
  <v-container class="success" fluid grid-list-md>
    <v-layout>
      <v-app-bar app color="#191C1F">
        <v-avatar size="40" class="mr-5">
          <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="" />
        </v-avatar>

        <v-toolbar-title class="white--text">Pánico del Kernel</v-toolbar-title>
        <v-spacer></v-spacer>
          <v-btn large dark color="#191C1F" @click="clickLogin" tile elevation="0"> Login </v-btn>
          <v-btn large dark color="#191C1F" @click="clickRegister" tile elevation="0">
            Register
          </v-btn>
      </v-app-bar>
    </v-layout>


    <v-layout column align-center>
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12"></v-row>
      <v-row class="mt-2"></v-row>
      <v-row align="center" class="mt-12">
          <v-avatar size="200" class="ml-3">
            <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="">
          </v-avatar>
          <v-col class="mr-10">
          <h1 class="mt-10 ml-5 myfontGrey">Pánico del Kernel</h1>
          <h1 class="mt-1 ml-5 myfontWhite">Inicio</h1>
          </v-col>
      </v-row>

    </v-layout>
       <v-row class="mt-12"></v-row><v-row class="mt-12"></v-row>
      <v-row class="mt-12"></v-row>
<v-card color="#1F2326">
   <!-- <br />
    <v-card color="#292E33" dark>
      <v-card-text>
        <h1 class="text-md-center">Ciberseguridad para todos</h1>
      </v-card-text>
    </v-card>

    <br />-->

    <v-layout row wrap align-center>
      <v-flex xs12 sm6 md4>
        <v-card color="#292E33" dark class="mt-6">
          <v-card-title primary class="align-center">KERNELS</v-card-title>
          <v-card-text>{{ kernels }}</v-card-text>
          <center>
            <v-img
              height="200"
              width="200"
              src="../assets/terminal-green-icon.png"
            ></v-img>
          </center>
          <v-divider class="mt-5"></v-divider>

          <v-card-actions class="justify-center">
            <v-btn @click="clickKernels" color="#1EFF21" block text>
              Acceso a Kernels
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 child-flex>
        <v-card color="#292E33" dark class="mt-6">
          <v-card-title primary class="align-center">FAQ</v-card-title>
          <v-card-text>{{ faq }}</v-card-text>
          <center>
            <v-img
              height="200"
              width="200"
              src="../assets/kisspng-computer-icons-question-mark-bottom-slowly-rising-bubbles-5ae7043d041543.3058040115250893410167.png"
            ></v-img>
          </center>
          <v-divider class="mt-5"></v-divider>

          <v-card-actions class="justify-center">
            <v-btn @click="clickFaq" color="#1EFF21" block text>
              Acceso a FAQ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card color="#292E33" dark class="mt-6">
          <v-card-title primary class="align-center"
            >MÁQUINAS VIRTUALES</v-card-title
          >
          <v-card-text>{{ maqvir }}</v-card-text>
          <center>
            <v-img height="200" width="200" src="../assets/VB.png"></v-img>
          </center>
          <v-divider class="mt-5"></v-divider>

          <v-card-actions class="justify-center">
            <v-btn @click="clickMV" color="#1EFF21" block text>
              Acceso a máquinas virtuales
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <!--<v-layout row wrap align-center>
      <v-flex xs12 sm6 md4>
        <v-card color="#6ADD17">
          <v-btn @click="clickKernels" block large color="#1EFF21"
            >Acceso a KERNELS</v-btn
          >
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card color="#6ADD17">
          <v-btn @click="clickFaq" block large color="#1EFF21"
            >Acceso a FAQ</v-btn
          >
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card color="#6ADD17">
          <v-btn @click="clickMV" block large color="#1EFF21"
            >Acceso a las MÁQUINAS VIRTUALES</v-btn
          >
        </v-card>
      </v-flex>
    </v-layout>
    <br />
    -->

    <v-row justify="center" class="mt-5">
      <v-card class color="#292E33" dark width="500">
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value"
                color="#1EFF21"
                height="100"
                padding="10"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item">{{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <v-card-text class="display-1 font-weight-thin"
              >Kernels completados en los últimos 10 días</v-card-text
            >
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn @click="clickKernels" color="#1EFF21" block text>
              Ir a Kernels
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="ml-2" color="#292E33" dark width="500">
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value2"
                color="#1EFF21"
                height="100"
                padding="10"
                stroke-linecap="round"
                smooth
                fill
              >
                <template v-slot:label="item">{{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <v-card-text class="display-1 font-weight-thin"
              >Usuarios registrados en los últimos 10 días</v-card-text
            >
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn @click="clickRegister" color="#1EFF21" block text>
              Ir a Registro
            </v-btn>
          </v-card-actions>
        </v-card>

    </v-row>

    <v-card class="elevation-16 mx-auto mt-15" width="300" color="#292E33" dark>
      <v-card-title class="headline" primary-title
        >Valore la aplicación</v-card-title
      >
      <v-card-text>
        Es muy importante que realice una valoración de la aplicación para
        conocer cuál es su opinión acerca de esta.
        <div class="text-center mt-12">
          <v-rating
            v-model="rating"
            color="#1EFF21"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
          ></v-rating>
        </div>
      </v-card-text>
    </v-card>
    <br>
    <br>
</v-card>
    <br />
    <v-footer class="success mt-10" padless>
      <v-row justify="center" no-gutters>
        <br />
        <v-btn color="white" @click="clickMain" text rounded class="my-2"
          >Página principal</v-btn
        >
        <v-btn color="white" text rounded class="my-2" @click="snackbar = true"
          >Contacto</v-btn
        >
        <v-snackbar color="blue-grey darken-3" v-model="snackbar">
          {{ email }}
          <v-btn dark color="#33CC00" @click="snackbar = false">Cerrar</v-btn>
        </v-snackbar>
        <v-btn color="white" @click="clickFaq" text rounded class="my-2"
          >FAQ</v-btn
        >
        <v-btn color="white" @click="clickMV" text rounded class="my-2"
          >Máquinas virtuales</v-btn
        >
        <v-btn color="white" @click="clickKernels" text rounded class="my-2"
          >Kernels</v-btn
        >
        <v-col class="success py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Pánico Del Kernel</strong>
        </v-col>
      </v-row>
      <v-col class="text-center" cols="12">
        <h1 class="overline pt-0 white--text">
          Copyright © 2021 DECLIVIA A.A.E LTD All rights reserved.
        </h1>
        <h1 class="overline pt-3 white--text">
          <a target="_blank" color="#8AC53E"></a> icons by
          <a
            target="_blank"
            href="http://code.meta-platform.com/assets/mdi/preview.html"
            >code.meta-platform</a
          >
        </h1>
      </v-col>
    </v-footer>
  </v-container>
</template>

<style>

  .myfontGrey{

    color: #78838a;
    font-family: 'Ubuntu Mono', monospace;

  }

  .myfontRed{

    color: #f00a0a;
    font-family: 'Ubuntu Mono', monospace;

  }

  .myfontWhite{

    color: #ffffff;
    font-family: 'Ubuntu Mono', monospace;

  }

  .myfontGreen{
    
    color: #8AC53E

  }

  .hoverMouse
  {
    cursor: pointer
  }
</style>

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
    kernels: `En la zona de kernels se pueden acceder a diversas actividades y retos relacionados con el hacking.`,
    faq: `En este zona de la web puedes publicar cualquier cosa relacionada con el mundo de la ciebrseguridad.`,
    maqvir: `En esta sección puedes acceder a las máquinas virtuales vulnerables disponibles en esta página web.`,
    explicacionNiveles: `Una de las principales características de esta págian web es que sus contenidos están separados por niveles, por lo que siempre podrás encontrar información interesante sepas lo que sepas`,
    items: [
      {
        color: "#1D7C00",
        icon: "mdi-numeric-1-box-outline",
        titulo: "Fácil",
        texto:
          "En este nivel encontrarás contenidos de introducción a la ciberseguridad",
      },
      {
        color: "#20A200",
        icon: "mdi-numeric-2-box-outline",
        titulo: "Medio",
        texto:
          "Si tienes conocimientos básicos de ciberseguridad pero quieres aprender más, es un buen lugar",
      },
      {
        color: "#29D800",
        icon: "mdi-numeric-3-box-outline",
        titulo: "Experto",
        texto:
          "Si tus conocimientos sobre ciberseguridad son muy amplios, en esta zona puede encontrar nuevos contenidos",
      },
      {
        color: "#00FF55",
        icon: "mdi-numeric-4-box-outline",
        titulo: "Hacker",
        texto:
          "Si ya lo sabes todo acerca de ciberseguridad y quieres dar un paso más, este es tu nivel",
      },
    ],
    value: [2, 8, 27, 35, 46, 58, 60, 99, 102, 141],
    value2: [1, 2, 6, 7, 5, 9, 5, 12, 16, 8],
    rating: 4,
  }),
  methods: {
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
</script>



