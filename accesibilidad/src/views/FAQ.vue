
<template>
  <v-container dark class="success" fluid grid-list-md>
    <br />
  <v-layout>
                <v-app-bar app color="#191C1F">
        <v-avatar size="40" class="mr-5">
          <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="" />
        </v-avatar>

        <v-toolbar-title class="white--text">Pánico del Kernel</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-flex xs5 sm5 md5> </v-flex>
        <v-flex xs1 sm1 md1>
          <v-btn large dark color="#191C1F" @click="clickLogin" tile elevation="0"> Login </v-btn>
        </v-flex>
        <v-flex xs1 sm1 md1>
          <v-btn large dark color="#191C1F" @click="clickRegister" tile elevation="0">
            Register
          </v-btn>
        </v-flex>
        <v-flex xs1 sm1 md1> </v-flex>
      </v-app-bar>
    </v-layout>
    <v-flex xs12 sm12 md12>
      <v-card color="#292E33" dark>
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
      <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header dark color="#292E33">¿Cuál el es objetivo de esta web?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >Ser el centro de reunión de todas las personas a las que les interesa la ciberseguridad independientemente de sus conocimientos.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header
          dark
          color="#292E33"
        >¿Se puede acceder a todos los contenidos de la aplicación sin loguearse?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >No, para acceder a algunos contenidos determinados es necesario tener un perfil en nuestra página web.</v-expansion-panel-content>
      </v-expansion-panel>

      
      <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header
          dark
          color="#292E33"
        >¿Qué tipos de productos se pueden comprar en Merchandaising?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >Hay una gran variedad de productos, desde alfombrillas hasta ratones, pasando por camisetas.</v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header dark color="#292E33">¿Para qué sirve la zona de Máquinas Virtuales?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >En esta zona te puedes encontrar Máquinas Virtuales que tienen vulnerabilidades en las que el objetivo del usuario es descubrir cómo se van a "romper"</v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header
          dark
          color="#292E33"
        >¿Qué es la zona de Kernels?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >Son las actividades de hacking que se pueden realizar en nuestra página web.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header dark color="#292E33">¿Tengo que acceder a la zona de Máquinas Virtuales para hacer los "kernels"?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >No, la máquina virtual que sea necesaria dentro de los kernels será escogida de forma automática</v-expansion-panel-content>
      </v-expansion-panel>

        <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header
          dark
          color="#292E33"
        >¿Es seguro utilizar la zona de Máquinas Virtuales?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >Sí, es completamente seguro ya que se accederá a cada una de las máquinas mediante una VPN, así que los datos permanecerán ocultos.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header
          dark
          color="#292E33"
        >¿De qué formas se pueden ordenar los hilos?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >Por recientes, por ID, aleatoriamente y alfabéticamente.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header
          dark
          color="#292E33"
        >¿Puedo editar un hilo una vez publicado?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >No se puede editar una post una vez se ha realizado, por lo que deberás tener cuidado a la hora de publicarlo.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header
          dark
          color="#292E33"
        >¿Cómo puedo editar el perfil?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >En la sección de perfil, se puede encontrar un botón llamado "Editar Perfil" en el que se puede pulsar para conseguir tal funcionalidad.</v-expansion-panel-content>
      </v-expansion-panel>

            <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header
          dark
          color="#292E33"
        >¿Se pueden descargar las máquinas virtuales?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >Sí, la opción de realizar la descarga de máquinas virtuales está permitida para que los usuarios las puedan usar localmente en sus ordenadores.</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel dark color="#292E33">
        <v-expansion-panel-header
          dark
          color="#292E33"
        >¿Puedo eliminar un hilo una vez publicado?</v-expansion-panel-header>
        <v-expansion-panel-content
          dark
          color="#292E33"
        >Sí, se puede eliminar un hilo si es que has cometido un error a la hora de redactarlo.</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <br />
    <v-footer class="warning" padless>
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
        <v-col class="warning py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Pánico Del Kernel</strong>
        </v-col>
      </v-row>
        <v-col class="text-center" cols="12">
        <h1
          class="overline pt-0 white--text"
        >Copyright © 2021 DECLIVIA A.A.E LTD All rights reserved.</h1>
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

  }
}
</script>



