
<template>
  <v-container dark class="warning" fluid grid-list-md style="height:2000px">
    <br />
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
    <v-flex xs12 sm12 md12>
      <v-card color="#212F3D" dark>
        <v-card-title primary class="align-center">Preguntas más frecuentes</v-card-title>
        <v-card-text>En esta sección de la página web de verán reflejadas las principales preguntas que puede surgir a los usuarios de la aplicación.</v-card-text>
        <center>
          <br />
          <v-img height="400" width="700" src="../assets/question-mark-2492009_1280.jpg"></v-img>
          <br />
          <br />
        </center>
      </v-card>
    </v-flex>

    <br />

    <v-expansion-panels v-model="panel" :readonly="readonly" multiple dark>
      <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header dark class="blue-grey darken-4">¿Cuál el es objetivo de esta web?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >Ser el centro de reunión de todas las personas a las que les interesa la ciberseguridad independientemente de sus conocimientos.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header
          dark
          class="blue-grey darken-4"
        >¿Se puede acceder a todos los contenidos de la aplicación sin loguearse?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >No, para acceder a algunos contenidos determinados es necesario tener un perfil en nuestra página web.</v-expansion-panel-content>
      </v-expansion-panel>

      
      <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header
          dark
          class="blue-grey darken-4"
        >¿Qué tipos de productos se pueden comprar en Merchandaising?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >Hay una gran variedad de productos, desde alfombrillas hasta ratones, pasando por camisetas.</v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header dark class="blue-grey darken-4">¿Para qué sirve la zona de Máquinas Virtuales?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >En esta zona te puedes encontrar Máquinas Virtuales que tienen vulnerabilidades en las que el objetivo del usuario es descubrir cómo se van a "romper"</v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header
          dark
          class="blue-grey darken-4"
        >¿Qué es la zona de Kernels?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >Son las actividades de hacking que se pueden realizar en nuestra página web.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header dark class="blue-grey darken-4">¿Tengo que acceder a la zona de Máquinas Virtuales para hacer los "kernels"?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >No, la máquina virtual que sea necesaria dentro de los kernels elegirá la máquina virtual de forma automática</v-expansion-panel-content>
      </v-expansion-panel>

        <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header
          dark
          class="blue-grey darken-4"
        >¿Es seguro utilizar la zona de Máquinas Virtuales?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >Sí, es completamente seguro ya que se accederá a cada una de las máquinas mediante una VPN, así que los datos permanecerán ocultos.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header
          dark
          class="blue-grey darken-4"
        >¿De qué formas se pueden ordenar los hilos?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >Por recientes, por ID, aleatoriamente y alfabéticamente.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header
          dark
          class="blue-grey darken-4"
        >¿Puedo editar un hilo una vez publicado?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >No se puede editar una post una vez se ha realizado, por lo que deberás tener cuidado a la hora de publicarlo.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header
          dark
          class="blue-grey darken-4"
        >¿Cómo puedo editar el perfil?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >En la sección de perfil, se puede encontrar un botón llamado "Editar Perfil" en el que se puede pulsar para conseguir tal funcionalidad.</v-expansion-panel-content>
      </v-expansion-panel>

            <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header
          dark
          class="blue-grey darken-4"
        >¿Se pueden descargar las máquinas virtuales?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >Sí, la opción de realizar la descarga de máquinas virtuales está permitida para que los usuarios las puedan usar localmente en sus ordenadores.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark class="blue-grey darken-4">
        <v-expansion-panel-header
          dark
          class="blue-grey darken-4"
        >¿Puedo eliminar un hilo una vez publicado?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          class="blue-grey darken-4"
        >Sí, se puede eliminar un hilo si es que has cometido un error a la hora de redactarlo.</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
    email:
      "Para contactar con los creadores utilizar el siguiente correo electrónico: panicodelkernel@gmail.com",

    multiLine: true,
    snackbar: false,
    snackbar2: false,
    cookies:
      "Utilizamos cookies para garantizarle la mejor experiencia en nuestro sitio web. ",
    privacidad:
      "No se difundirán en ningún caso los datos que obtengamos de su conexión. ",
    lenguajes: `En nuestros foros, los lenguajes de programación que te vas a encontrar son estos:`,
    foro: `En esta zona de la página web ofreceremos consejos útiles a la hora de aprender sobre ciberseguirdad`,
    carpetaPersonal: `En este zona puedes publicar cualquier cosa que tenga que ver con el mundo de la ciebrseguridad`,
    mensajes: `En esta sección puedes enviar mensajes tanto a otros usuarios como dentro de grupos`,
    explicacionNiveles: `Una de las principales características de esta págian web es que sus contenidos están separados por niveles, por lo que siempre podrás encontrar información interesante sepas lo que sepas`,
    items: [
      {
        color: "green darken-4",
        icon: "mdi-numeric-1-box-outline",
        titulo: "Fácil",
        texto:
          "En este nivel encontrarás contenidos de introducción a la ciberseguridad"
      },
      {
        color: "green darken-2",
        icon: "mdi-numeric-2-box-outline",
        titulo: "Medio",
        texto:
          "Si tienes conocimientos básicos de ciberseguridad pero quieres aprender más, es un buen lugar"
      },
      {
        color: "green",
        icon: "mdi-numeric-3-box-outline",
        titulo: "Experto",
        texto:
          "Si tus conocimientos sobre ciberseguridad son muy amplios, en esta zona puede encontrar nuevos contenidos"
      },
      {
        color: "green lighten-2",
        icon: "mdi-numeric-4-box-outline",
        titulo: "Hacker",
        texto:
          "Si ya lo sabes todo acerca de ciberseguridad y quieres dar un paso más, este es tu nivel"
      }
    ],
    value: [500, 1000, 2500, 5000, 10000, 20000, 30000],
    rating: 5,
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  }),
  methods: {
      /*
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
    }*/
  }
}
</script>



