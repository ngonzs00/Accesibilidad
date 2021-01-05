<template id="app1" class="success">
  <v-container fluid class="success">
        <v-layout>
            <v-app-bar app color="#191C1F">
                <v-avatar size="40" class="mr-5">
                  <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="">
                </v-avatar>

                <v-toolbar-title class="white--text">Pánico del Kernel</v-toolbar-title> <!--Le añadimos el titulo-->
                <!--<v-avatar size="40" class="ml-3">
                <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="">
                </v-avatar>-->
                <v-spacer></v-spacer>
                <h1 class="white--text body-1 ma-5 hoverMouse" @click="goTo('')">Página principal</h1>
                <h1 class="white--text body-1 ma-5 hoverMouse"  @click="goTo('merch')">Merchandising</h1>
                <h1 class="white--text body-1 ma-5 hoverMouse" @click="goTo('faq')">About us</h1>
            </v-app-bar>
        </v-layout>
        <v-row justify="center" class="mt-15 mr-5">
            <v-card
            color="warning"
            class="ml-15"
            elevation=10
            >
                <v-col align="center">
                    <img src="../assets/mrRobot.png" absolute alt="" height=50 class="mt-5">
                    <h1 class="mt-5"></h1>
                    <v-row justify="center">
                        <h1 class="mr-5"></h1>
                        <h1 class="myfontWhiteNormal mt-5">SO: Linux</h1>
                        <h1 class="myfontWhiteNormal mt-5">Dificultad: 2/10</h1>
                        <h1 class="myfontWhiteNormal mt-5 ml-5">Valoración: 9/10</h1>
                        <h1 class="ml-5"></h1>
                    </v-row>
                    <v-row>
                        <h1 class="myfontWhiteNormal mt-4 ml-4">Estado de la máquina: </h1>
                        <h1 class="myfontRedNormal mt-4 ml-2">Apagada</h1>
                    </v-row>
                    <br>
                </v-col>
            </v-card>
            <row class="ml-15"></row><row class="ml-15"></row>
            <v-spacer></v-spacer>
            <v-col align="center">
                <br><br>
                <v-btn class="mt-15 ml-15" color="#1EFF21">Unirse a este Kernel</v-btn>
                <v-row justify="center" class="mt-2"> 
                    <h1 class="myfontWhiteNormal ml-15 mt-3">Versión del Kernel:</h1><h1 class="myfontGreenSmall mt-3 ml-2">1.6</h1>
                </v-row>
            </v-col>
        </v-row>
        <v-divider dark class="mt-10"></v-divider>
                <v-card
            color="#1F2326"
            height="800"
            width="10000"
            class="mt-10 mr-15"
            elevation=10

        >
        <v-row>
        <v-col class="mt-10 ml-12">
            <v-row class="ml-0">
                <v-card
                class="warning"
                elevation=10
                >
                    <v-row>
                        <h1 class="mr-15"></h1>
                        <v-col>
                            <br>
                            <h1 class="myfontWhite mr-">192.168.10.29</h1>
                            <h1 class="myfontWhiteNormal ml-10">Ip de la máquina</h1>
                            <br>
                        </v-col>
                        <h1 class="mr-15"></h1>
                    </v-row>
                </v-card>

                <v-card
                class="warning ml-7"
                elevation=10
                >
                    <v-row>
                        <h1 class="mr-15"></h1>
                        <v-col>
                            <br>
                            <h1 class="myfontGreen">Redoblemstr</h1>       
                            <h1 class="myfontWhiteNormal">Creador de la máquina</h1>
                            <br>
                        </v-col>
                        <h1 class="mr-15"></h1>
                    </v-row>
                </v-card>
            </v-row>
            <v-card
              class="mt-7"
              color="#292E33"
              width="705"
              elevation=10
            >
              <v-layout column align-center>      
                <h1 class="myfontWhiteNormal mt-5">Descripción:</h1>
                <h1 class="myfontGreySmall mt-3">Asume el rol de un joven Elliot Alderson y consigue el root de los</h1>
                <h1 class="myfontGreySmall">sistemas informáticos de la biblioteca de tu municipio</h1>
                <h1 class="myfontGreySmall">Esta máquina ofrece un desafío perfecto para principiantes a lo largo</h1>
                <h1 class="myfontGreySmall">de 15 actividades con las que aprenderás a mediad que avanzas</h1>
                <h1 class="myfontGreySmall">en la historia. ¡Empieza ya!</h1>
                <br>                
                <!--el root de los sistemas informáticos de la biblioteca de tu municipio.Esta máquina ofrece un desafío perfecto para principiantes, tocando muchos de los tópicos principales de la ciberseguridad-->
              </v-layout>
            </v-card>
        </v-col>


        
            <v-card            
            width=1000
            color="#1F2326"
            class="mr-10 mt-10"
            >

            <v-expansion-panels>
              <v-expansion-panel
                 style="background:#262B30;color:white"
              >
                <v-expansion-panel-header style="background:#262B30;color:white">
                  <h1 class="myfontWhiteActivity">Actividad 1</h1>
                </v-expansion-panel-header>
                <v-expansion-panel-content style="background:#262B30;color:white">
                <v-col align="center">
                  <h1 class="myfontWhiteNormal">Antes de comenzar con tu aventura como hacker principiante, vamos a preparar todo lo necesario para que puedas llevar a cabo las actividades de esta máquina.</h1>
                  
                  <h1 class="myfontWhiteNormal mt-5">Lo primero que tendrás que hacer es conectarte a nuestra red, mediante un programa de conectividad tal como:</h1> 
                  <v-row justify="center">
                    <h1 class="myfontGreenSmall mt-5 mb-5">OpenVPN</h1>
                  </v-row>
                  <h1 class="myfontWhiteNormal">Este programa viene preinstalado en Kali Linux y es gratuito</h1>
                  <h1 class="myfontWhiteNormal mt-5">Para ello puedes ir a tu perfil, entrar en configuración y generar un archivo de configuración personalizado para conectarte a nuestra VPN, en caso de que no lo hayas generado ya.</h1>
                  <h1 class="myfontWhiteNormal mt-5">Una vez lo tengas descargado, mételo en tu laboratorio de Hacking (tu máquina virtual con Kali Linux, Parrot OS...) y escribe el comando:</h1>
                  <h1 class="myfontGreenSmall mt-5"> openvpn "nombreArchivo.ovpn"</h1>
                  <h1 class="myfontWhiteNormal mt-5">No cierres la terminal en la que has escrito este comando y vuelve a entrar en perfil. Podrás comprobar que la conexión ha funcionado cuando el marcador
                  "conectado" aparezca en verde, justo al lado de la card de tu perfil.</h1>
                  
                  <v-row>
                    <v-text-field
                      dark
                      solo-inverted
                      label="No se necesita ninguna respuesta"
                      class="sm-and-down mt-10 ml-5"
                    />
                    <h1 class="ml-10"></h1>
                    <v-btn color="#1EFF21" class="mt-11">Responder</v-btn>
                  </v-row>

                </v-col>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            </v-card>



        </v-row>
    </v-card>
    
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

  .myfontGreySmall{

    color: #78838a;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 18px;

  }

  .myfontGreyNormal{

    color: #78838a;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 22px;

  }

   .myfontWhiteNormal{

    color: #ffffff;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 18px;

  }

  .myfontRedNormal{

    color: #f00a0a;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 20px;

  }

  .myfontRed{

    color: #f00a0a;
    font-family: 'Ubuntu Mono', monospace;

  }

  .myfontWhite{

    color: #ffffff;
    font-family: 'Ubuntu Mono', monospace;
    
  }

  .myfontWhiteActivity{

    color: #ffffff;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 20px;
  }

  .myfontGreen{
    
    color: #1EFF21;
    font-family: 'Ubuntu Mono', monospace;

  }

  .myfontGreenSmall{
    
    color: #1EFF21;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 18px;

  }
  

  .hoverMouse
  {
    cursor: pointer
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
      clickFaq(){
        this.$router.push("/faq");
      },
      clickKernel() {
        this.$router.push("/kernel");
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