<template>
  <v-container class="warning" fluid grid-list-md>
    <v-layout>
      <!--La barra de arriba, donde irá el logo de la página, el buscador y alguna cosa más de adorno   -->
      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="#191C1F"
        dark
      >
        <v-list-item-avatar>
          <v-img src="../assets/LogoPanicoKernel.jpeg"></v-img>
        </v-list-item-avatar>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
          <span>PÁNICO DEL KERNEL</span>
        </v-toolbar-title>

        <v-spacer />
        <!--Botón de configuración-->
        <v-toolbar-title class="white--text ml-14">
          <v-btn icon dark @click="dialog = true">
            <v-icon>mdi-settings</v-icon>
          </v-btn>
        </v-toolbar-title>
      </v-app-bar>
    </v-layout>
    <!------------------------------------------------------------------------------>
    <!------------------------------------------------------------------------------>

    <!--Esto es el toolbar vertical en el que estan las opciones principales.
    Esto iría en el lado izquierdo de la pantalla-->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      dark
      expand-on-hover
      absolute
      color="#262B30"
    >
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
        
        <v-list-item link @click="goTo('foro')">
          <v-list-item-icon>
            <v-icon></v-icon>
            <v-icon>mdi-forum</v-icon>
          </v-list-item-icon>
          <v-list-item-title
            >Acceso al Foro</v-list-item-title
          >
        </v-list-item>
        <v-divider></v-divider>
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
      <v-col cols="4"></v-col>
      <v-col cols="6">
        <v-card
          width="400"
          class="xs-right ml-10 success"
          dark
          elevation="3"
          tile
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">USUARIO</div>
              <v-list-item-title class="headline mb-1 ml-14"
                >Chotachu</v-list-item-title
              >
              <v-list-item-subtitle
                ><h4 class="green--text">@chota_chuan</h4></v-list-item-subtitle
              >
              <v-list-item-subtitle
                >En este canal tratara de bicicletas y descenso, asi como de
                bicicletas y descenso</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-avatar width="70" height="130">
              <v-avatar color="teal darken-1" width="70" height="70">
                <img src="../assets/profile.jpeg" />
              </v-avatar>
            </v-list-item-avatar>
          </v-list-item>
          <!--Botones de la tarjeta de usuario.-->
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="3"></v-col>
    </v-layout>

    <v-layout class="mt-10  ml-14">
      <v-col cols="4"></v-col>
      <v-col class="ml-5" cols="6">
        <v-btn class="mx-1 black--text" color="#6ADD17" tile
          >Añadir hilo</v-btn
        >
        <v-btn class="mx-1 black--text" color="#6ADD17" tile
          >Mensajes Directos</v-btn
        >
      </v-col>
      <v-col cols="3"></v-col>
    </v-layout>

    <!--Pantalla de configuración-->
    <v-dialog v-model="dialog" persistent max-width="600px" dark>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Cambiar @nickname" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  type="password"
                  label="Cambiar contraseña"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-btn @click="goTo('')" dark color="#8AC53E">Log Out</v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete 
                  :items="[
                    'Ciberataques',
                    'Ciberseguridad',
                    'IA',
                    'Protocolos',
                    'Programación',
                    'Diseño web',
                    'Otros',
                  ]"
                  label="Intereses"
                  multiple
                  color="black"
                  dark
                  flat
                  item-color="black"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small
            >Copyright © 2020 DECLIVIA A.A.E LTD All rights reserved.</small
          >
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#8AC53E" text @click="dialog = false">Close</v-btn>
          <v-btn color="#8AC53E" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--Línea de separación verde-->
    <v-progress-linear
      background-color="#8AC53E"
      color="#8AC53E"
      value="10"
      class="mt-10"
      md3
    ></v-progress-linear>

    <br />
    <br />
    <br />

    <!--Zona de los hilos del brawler-->
    <v-layout>
      <h1 class="mr-11"></h1>
      <h1 class="mr-10"></h1>
      <v-flex xs7 sm7 md7 child-flex>
        
        <h2 class="green--text" align="center">Hilos Principales</h2>
        <br/>

        <v-window
          v-model="window"
          class="elevation-1"
          :show-arrows="showArrows"
        >
          <v-window-item v-for="n in length" :key="n">
            <v-card flat class="success" dark>
              <v-card-text>
                <v-row class="mb-4" align="center">
                  <v-avatar color="black" class="mr-4">
                    <v-icon color="#8AC53E">mdi-cube-outline</v-icon></v-avatar
                  >
                  <strong class="title">Hilo {{ n }}</strong>
                  <v-spacer></v-spacer>
                </v-row>
                <h3>TCP {{ n }}</h3>
                <p>
                  El conjunto de protocolos TCP/IP es unos de los más utilizados
                  en servicios de red. Hacen referencia a dos protocolos que
                  son: TCP (Transmission Control Protocol) Protocolo de Control
                  de Transmisión.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
        <br />
        <v-divider></v-divider>
        <v-divider></v-divider>
        <br />
        <v-window
          v-model="window2"
          class="elevation-1"
          :show-arrows="showArrows2"
        >
          <v-window-item v-for="n in length2" :key="n">
            <v-card flat class="success" dark>
              <v-card-text>
                <v-row class="mb-4" align="center">
                  <v-avatar color="black" class="mr-4">
                    <v-icon color="#8AC53E">mdi-cube-outline</v-icon></v-avatar
                  >
                  <strong class="title">Hilo {{ n }}</strong>
                  <v-spacer></v-spacer>
                </v-row>
                <h3>DDoS {{ n }}</h3>
                <p>
                  En seguridad informática, un ataque de denegación de servicio,
                  también llamado ataque DoS, es un ataque a un sistema de
                  computadoras o red que causa que un servicio o recurso sea
                  inaccesible a los usuarios legítimos.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
        <br />
        <v-divider></v-divider>
        <v-divider></v-divider>
        <br />
        <v-window
          v-model="window3"
          class="elevation-1"
          :show-arrows="showArrows2"
        >
          <v-window-item v-for="n in length3" :key="n">
            <v-card flat class="success" dark>
              <v-card-text>
                <v-row class="mb-4" align="center">
                  <v-avatar color="black" class="mr-4">
                    <v-icon color="#8AC53E">mdi-cube-outline</v-icon></v-avatar
                  >
                  <strong class="title">Hilo {{ n }}</strong>
                  <v-spacer></v-spacer>
                </v-row>
                <h3>DDoS {{ n }}</h3>
                <p>
                  En seguridad informática, un ataque de denegación de servicio,
                  también llamado ataque DoS, es un ataque a un sistema de
                  computadoras o red que causa que un servicio o recurso sea
                  inaccesible a los usuarios legítimos.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
        <br />
        <v-divider></v-divider>
        <v-divider></v-divider>
        <br />
        <v-window
          v-model="window4"
          class="elevation-1"
          :show-arrows="showArrows3"
        >
          <v-window-item v-for="n in length4" :key="n">
            <v-card flat class="success" dark>
              <v-card-text>
                <v-row class="mb-4" align="center">
                  <v-avatar color="black" class="mr-4">
                    <v-icon color="#8AC53E">mdi-cube-outline</v-icon></v-avatar
                  >
                  <strong class="title">Hilo {{ n }}</strong>
                  <v-spacer></v-spacer>
                </v-row>
                <h3>XSS attack {{ n }}</h3>
                <p>
                  Una secuencia de comandos en sitios cruzados o Cross-site
                  scripting es un tipo de vulnerabilidad informática o agujero
                  de seguridad típico de las aplicaciones Web, que puede
                  permitir a una tercera persona inyectar en páginas web
                  visitadas por el usuario código JavaScript o en otro lenguaje
                  similar.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-flex>

      <h1 class="mr-11"></h1>
      <h1 class="mr-10"></h1>
      <v-flex xs5 sm5 md3 child-flex>
        <br/>
        <v-card flat width="520" outlined height="570" dark>
          <v-card-title primary class="align-center"
            >Grupos a los que perteneces:</v-card-title
          >

          <h1 class="pt-0"></h1>
          <v-card class="pt-0" color="#1f2326">
            <v-subheader class="white--text" color="#202429">
              Comunidades
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon color="#6ADD17">mdi-plus</v-icon></v-btn>
            </v-subheader>
            <v-list color="#1f2326">
              <v-list-item>
                <v-list-item-action>
                  <v-icon color="#6ADD17">mdi-bank</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="myfontGrey"
                    >Grupo de matemáticas</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-icon color="#6ADD17">mdi-bank</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="myfontGrey"
                    >Programar en Java</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-icon color="#6ADD17">mdi-bank</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="myfontGrey"
                    >Aprender lengua sin morir en el intento</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-icon color="#6ADD17">mdi-bank</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="myfontGrey"
                    >How to hack any WiFi with Kali Linux</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-divider :inset="inset"></v-divider>

              <v-subheader class="white--text">
                Foros
                <v-spacer></v-spacer>
                <v-btn icon><v-icon color="#6ADD17">mdi-plus</v-icon></v-btn>
              </v-subheader>

              <v-list-item>
                <v-list-item-action>
                  <v-icon color="#6ADD17"
                    >mdi-google-circles-communities</v-icon
                  >
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="myfontGrey"
                    >¿Cómo se halla la raíz cúbica de mi
                    gato?</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-divider :inset="inset"></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon color="#6ADD17"
                    >mdi-google-circles-communities</v-icon
                  >
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="myfontGrey"
                    >Fallos típicos de Atom</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-divider :inset="inset"></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon color="#6ADD17"
                    >mdi-google-circles-communities</v-icon
                  >
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="myfontGrey"
                    >Soy un goofy goober</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-divider :inset="inset"></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon color="#6ADD17"
                    >mdi-google-circles-communities</v-icon
                  >
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="myfontGrey"
                    >Tortilla 3 euros, la mejor</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
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
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!--Footer. Es lo de hay abajo del todo para poner lo del copyright etc.-->
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
    <!------------------------------------------------------------------------------>
    <!------------------------------------------------------------------------------>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    /*iconos de la navigation bar (la de la izquierda) */
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
      { title: "", icon: "", ref: "" } /*Blank*/,
      { title: "", icon: "", ref: "" } /*Blank*/,
      { title: "Configuración", icon: "mdi-drag", ref: "" } /*drag*/,
    ],
    /*Para lo del counter*/
    messages: 0,
    dialog: false,
    length: 3,
    length2: 6,
    length3: 2,
    length4: 5,
    window: 0,
    window2: 0,
    window3: 0,
    window4: 0,
    showArrows: true,
    showArrows2: true,
    showArrows3: true,
    snackbarDeContacto: false,
    timeoutDeContacto: 2000,
    text:
      "Para contactar con los creadores utilizar el siguiente correo electrónico: panicodelkernel@gmail.com",
    sticky: true,
  }),
  methods: {
    goTo(dir) {
      this.$router.push("/" + dir);
    },
  },
};
</script>

<style>
.scroll {
  overflow-y: auto;
}
</style>
