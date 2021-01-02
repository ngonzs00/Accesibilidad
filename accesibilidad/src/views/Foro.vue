<template>
  <v-container grid-list-md fluid dark class="warning">
    <v-layout>
      <v-app-bar app clipped-left color="#191C1F" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-list-item-avatar>
          <v-img src="../assets/LogoPanicoKernel.jpeg"></v-img>
        </v-list-item-avatar>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
          <span>PÁNICO DEL KERNEL</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down"
        />
        <v-spacer />
        <v-btn tile class="mx-1 black--text" color="#6ADD17" @click="goTo('profile')"
          >Volver al perfil</v-btn
        >
      </v-app-bar>
    </v-layout>

    <v-layout>
      <h1 class="mr-11"></h1>
      <h1 class="mr-11"></h1>
      <h1 class="mr-11"></h1>
      <h1 class="mr-11"></h1>
      <h1 class="mr-11"></h1>
      <h1 class="mr-11"></h1>

      <v-flex xs6 sm6 md7 child-flex>
        <v-toolbar>
          <v-tabs dark background-color="success" grow>
            <v-tab>Random</v-tab>
            <v-tab>
              <v-badge color="pink" dot>Recientes</v-badge>
            </v-tab>
            <v-tab>Alfabéticamente</v-tab>
            <v-tab>Por Nivel</v-tab>
            <v-tab>Por Usuario</v-tab>
          </v-tabs>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <!--Línea de separación verde-->
    <br />
    <v-progress-linear
      background-color="#6ADD17"
      color="#8AC53E"
      value="15"
      md3
    ></v-progress-linear>
    <br />
    <v-row class="mt-4"></v-row>
    <v-navigation-drawer v-model="drawer" app clipped color="#262B30" dark>
      <v-list dense>
        <!--Esto es la foto de perfil del usuario-->
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="../assets/profile.jpeg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>User~$:</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item link @click="goTo('')">
          <v-list-item-icon>
            <v-icon></v-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goTo('profile')">
          <v-list-item-icon>
            <v-icon></v-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Perfil</v-list-item-title>
        </v-list-item>

        <!--Aqui hacemos un for para añadir todos los iconos-->
        <v-list-item
          v-for="item in iconos"
          :key="item.title"
          link
          :href="item.ref"
          target="_blank"
        >
          <v-list-item-icon>
            <!--Icono-->
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <!--Nombre del icono-->
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item link @click="snackbarDeContacto = true">
          <v-list-item-icon>
            <v-icon></v-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="grey--text text--darken-1"
            >CONTACTO</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-snackbar
      v-model="snackbarDeContacto"
      :timeoutDeContacto="timeoutDeContacto"
    >
      {{ text }}
      <v-btn color="#1aff1a" text @click="snackbarDeContacto = false"
        >Cerrar</v-btn
      >
    </v-snackbar>
    <!------------------------------------------------------------------------------>
    <!------------------------------------------------------------------------------>

    <v-layout>
      <h1 class="mr-11"></h1>
      <h1 class="mr-7"></h1>
      <v-flex xs6 sm6 md7 child-flex>
        <v-card class="success md-left scroll" dark outlined>
          <v-list two-line>
            <v-list-item v-for="item in brawlersHilos" :key="item.title">
              <v-subheader v-if="item.header" :key="item.header"></v-subheader>
              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>
              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <img src="../assets/profile.jpeg" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    class="green--text"
                    v-html="item.title"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                  <v-list-item-subtitle
                    class="mt-5 text-right text-overline"
                    v-html="item.date"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-item v-slot:default="{ active, toggle }">
                  <v-btn icon dark @click="toggle">
                    <v-icon color="pink">
                      {{ active ? "mdi-heart" : "mdi-heart-outline" }}
                    </v-icon>
                  </v-btn>
                </v-item>
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs3 sm3 md4 child-flex>
        <v-card class="md-left scroll" dark outlined height="280">
          <center>
            <v-card-text
              justify="center"
              no-gutters
              primary
              class="align-center"
              >Ad</v-card-text
            >
          </center>
          <center>
            <a href="https://www.hackthebox.eu/" target="_blank">
              <img
                height="200"
                width="300"
                src="../assets/EYZEJWvWsAALFD0.jpg"
              />
            </a>
          </center>
        </v-card>
        <v-row class="mt-4"></v-row>
        <v-card class="md-left scroll" dark outlined height="474">
          <v-card-title primary class="align-center"
            >También te puede interesar...</v-card-title
          >
          <v-divider></v-divider>
          <v-card-text
            >Botnet es un término que hace referencia a un conjunto o red de
            robots informáticos o bots, que se ejecutan de manera autónoma y
            automática. ​ El artífice de la botnet puede...</v-card-text
          >
          <v-card-text>
            <div class="overline mb-4">
              <a
                target="_blank" href="https://es.wikipedia.org/wiki/Botnet#:~:text=Botnet%20es%20un%20t%C3%A9rmino%20que,servidores%20infectados%20de%20forma%20remota."
                >Leer más</a
              >
            </div>
          </v-card-text>
          <center>
            <v-img
              height="200"
              width="300"
              src="../assets/botnet-featured-1-1.png"
            ></v-img>
          </center>
        </v-card>
      </v-flex>
    </v-layout>

    <!--Línea de separación verde-->
    <v-row class="mt-4"></v-row>
    <br />

    <v-progress-linear
      background-color="#6ADD17"
      color="#8AC53E"
      value="15"
      md3
    ></v-progress-linear>
    <br />

    <v-row class="mt-4"></v-row>

    <v-layout>
      <h1 class="mr-11"></h1>
      <h1 class="mr-7"></h1>
      <v-flex xs3 sm3 md4 child-flex>
        <v-card class="md-left scroll" dark outlined height="280">
          <center>
            <v-card-text
              justify="center"
              no-gutters
              primary
              class="align-center"
              >Ad</v-card-text
            >
          </center>
          <center>
            <a href="https://tryhackme.com/" target="_blank">
              <img height="200" width="300" src="../assets/try hack me.jpeg" />
            </a>
          </center>
        </v-card>
        <v-row class="mt-4"></v-row>
        <v-card class="md-left scroll" dark outlined>
          <v-card-title primary class="align-center"
            >Perfiles de interés:</v-card-title
          >
          <v-divider></v-divider>
          <v-card-text>@chemaAlonso</v-card-text>
          <v-divider></v-divider>
          <v-card-text
            >@ngonzs00 <v-icon color="#6ADD17">mdi-cat</v-icon></v-card-text
          >
          <v-divider></v-divider>
          <v-card-text
            >@jcastr05
            <v-icon color="#6ADD17">mdi-biohazard</v-icon></v-card-text
          >
          <v-divider></v-divider>
          <v-card-text
            >@aabadp02 <v-icon color="#6ADD17">mdi-heart</v-icon></v-card-text
          >
          <v-divider></v-divider>
          <v-card-text
            >@mherrg04
            <v-icon color="#6ADD17">mdi-emoticon-devil</v-icon></v-card-text
          >
        </v-card>
      </v-flex>
      <v-flex xs6 sm6 md7 child-flex>
        <v-card class="success md-left scroll" dark outlined>
          <v-list two-line>
            <v-list-item v-for="item in brawlersHilos2" :key="item.title">
              <v-subheader v-if="item.header" :key="item.header"></v-subheader>
              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>
              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <img src="../assets/profile.jpeg" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    class="green--text"
                    v-html="item.title"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                  <v-list-item-subtitle
                    class="mt-5 text-right text-overline"
                    v-html="item.date"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-item v-slot:default="{ active, toggle }">
                  <v-btn icon dark @click="toggle">
                    <v-icon color="pink">
                      {{ active ? "mdi-heart" : "mdi-heart-outline" }}
                    </v-icon>
                  </v-btn>
                </v-item>
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <v-footer
      color="#191C1F"
      absolute
      class="font-weight-medium"
      style="height: 100px"
    >
      <v-col class="text-center" cols="12">
        <h1 class="overline pt-0 white--text">
          Copyright © 2020 DECLIVIA A.A.E LTD All rights reserved.
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

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
    iconos: [
      {
        title: "Google",
        icon: "mdi-google-glass",
        ref: "https://www.google.com/",
      } /*Google*/,
      {
        title: "GitHub",
        icon: "mdi-github-box",
        ref: "https://github.com/",
      } /*GitHub*/,
      { title: "", icon: "", ref: "" } /*Blank*/,
      {
        title: "Spotify",
        icon: "mdi-spotify",
        ref: "https://www.spotify.com/es/",
      } /*Spotify*/,

      { title: "", icon: "", ref: "" } /*Blank*/,
      { title: "", icon: "", ref: "" } /*Blank*/,
      { title: "", icon: "", ref: "" } /*Blank*/,
      { title: "", icon: "", ref: "" } /*Blank*/,

      { title: "", icon: "", ref: "" } /*Blank*/,
      { title: "Configuración", icon: "mdi-drag", ref: "" } /*drag*/,
    ],
    brawlersHilos: [
      //{ divider: true, inset: true },
      {
        avatar: "../assets/profile.jpeg",
        title: "Introduccion a Linux",
        subtitle:
          "<span class='font-weight-bold'>ChemaAlonso</span> &mdash; <p> Vamos a ver los comandos básicos del sistema de directorios. </p> <p>Primero de todo accedemos al apartado de Máquinas Virtuales para descargar...</p>",
        date: "23/01/2019",
      },
      { divider: true, inset: true },

      {
        avatar: "../assets/profile.jpeg",
        title: "Hack any WiFi",
        subtitle:
          "<span class='font-weight-bold'>Ranjit Devi Panjiyar</span> &mdash; <p> Hello guys, today i'm gonna show you how to hack any WiFi with Kali Linux. First of all you have to...</p>",
        date: "02/10/2020",
      },
      { divider: true, inset: true },

      {
        avatar: "../assets/profile.jpeg",
        title: "Windows",
        subtitle:
          "<span class='font-weight-bold'>Bill Gates</span> &mdash; Tutorial de vulnerabilidades con Windows.",
        date: "11/04/2015",
      },
      { divider: true, inset: true },

      {
        avatar: "../assets/profile.jpeg",
        title: "Privilege Escalation",
        subtitle:
          "<span class='font-weight-bold'>Sandra Adams</span> &mdash; Como tomar el control de root una vez dentro de una máquina. <p>El sistema operativo empleado para este curso es CentOS.</p>",
        date: "16/08/2019",
      },
      { divider: true, inset: true },

      {
        avatar: "../assets/profile.jpeg",
        title: "Virtual Box",
        subtitle:
          "<span class='font-weight-bold'>jcastr05</span> &mdash; Tengo la cabeza cuadrada.",
        date: "01/01/2021",
      },
      { divider: true, inset: true },

      {
        avatar: "../assets/profile.jpeg",
        title: "Ataques DDoS",
        subtitle:
          "<span class='font-weight-bold'>ngonzs00</span> &mdash; ¿Quieres saber que es un ataque DDoS? <p>En seguridad informática, un ataque de denegación de servicio, también llamado ataque DoS (por...</p>",
        date: "03/06/2015",
      },
    ],

    brawlersHilos2: [
      //{ divider: true, inset: true },
      {
        avatar: "../assets/profile.jpeg",
        title: "Comandos de Linux",
        subtitle:
          "<span class='font-weight-bold'>xXx_master_xXx</span> &mdash; <p>Vamos a ver los comandos basicos del sistema de directorios. </p><p> &mdash; arch: mostrar la arquitectura de la máquina (1). </p><p> &mdash; uname -m: mostrar la arquitectura de la máquina (2). </p><p> &mdash; [...]</p>",
        date: "11/05/2015",
      },
      { divider: true, inset: true },

      {
        avatar: "../assets/profile.jpeg",
        title: "Tipos de Ataques Informáticos",
        subtitle:
          "<span class='font-weight-bold'>Pedro Sánchez</span> &mdash; <p>La aparición de vulnerabilidades en los sistemas y los métodos de encubrimiento de los atacant...</p>",
        date: "30/02/2020",
      },
      { divider: true, inset: true },

      {
        avatar: "../assets/profile.jpeg",
        title: "IA en ciberseguridad",
        subtitle:
          "<span class='font-weight-bold'>JL</span> &mdash; <p>Dentro de la tendencia de aumento en el volumen y la complejidad de los ciberataques, la inteli...</p>",
        date: "04/02/2017",
      },
      { divider: true, inset: true },

      {
        avatar: "../assets/profile.jpeg",
        title: "Autorization problems",
        subtitle:
          "<span class='font-weight-bold'>sapp03__</span> &mdash; not working. yes.",
        date: "20/12/2018",
      },
    ],
    snackbarDeContacto: false,
    timeoutDeContacto: 2000,
    text:
      "Para contactar con los desarrolladores utilizar el siguiente correo electrónico: panicodelkernel@gmail.com",
  }),
  methods: {
    goTo(dir) {
      this.$router.push("/" + dir);
    },
  },
};
</script>