<template>
 <v-container class="success" fluid grid-list-md >
    <v-layout>
      <v-app-bar app color="#191C1F">
        <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon> 
        <v-toolbar-title class="white--text">Pánico del Kernel</v-toolbar-title> 
        <v-avatar size="40" class="ml-3">
          <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="">
        </v-avatar>

        <v-spacer></v-spacer>
           <v-btn color="white" @click="clickMain" text rounded class="my-2">Página principal</v-btn>
           <v-btn color="white" @click="clickMerch" text rounded class="my-2">Merchandising</v-btn>
          
      </v-app-bar>
    </v-layout>
     <v-row class="mt-12"></v-row><v-row class="mt-12"></v-row>
    
    <v-layout column align-center>
      <v-row class="mt-12"></v-row>
      <v-row align="center" >
          <v-avatar rounded size="230" class="ml-3">
            <img src="../assets/box2.png" absolute alt="">
          </v-avatar>
          <v-col class="mr-10">
          <h1 class="mt-10 ml-5 myfontGrey">Pánico del Kernel</h1>
          <h1 class="mt-1 ml-5 myfontWhite">Máquinas Virtuales</h1>
          </v-col>
      </v-row>

 <v-row class="mt-12"></v-row><v-row class="mt-12"></v-row><v-row class="mt-12"></v-row>
      <v-row class="mt-12"></v-row>
    </v-layout>
    <v-card
    color="#1F2326"
    >

      <v-progress-linear background-color="#1EFF21" color="#1EFF21" value="15" md3></v-progress-linear>
      <v-text-field
          dark
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="sm-and-down"
        />
         <br>
      <br>
        <v-card color="#292E33" dark>
          
            <v-card-title primary class="align-center">Maquina Virtual 1 <v-spacer></v-spacer><v-btn class=ml-15 dark color="#1EFF21"><h1 class="myfontBlack">DOWNLOAD</h1></v-btn></v-card-title>
            
            <v-card-text> <h2>SO: Ubuntu  <v-icon large class=ml-2 color="#ff6303">mdi-ubuntu</v-icon></h2>
                            Usuario: jcastr05<br>
                            Fecha: 10/10/2020<br>
                            Descripción: <b>1.Linux básico: </b>  Familiarícese con la línea de comandos de Linux
<b>2.Seguridad de las aplicaciones web: </b> Aprenda los conceptos de seguridad de las aplicaciones web a través de OWASP Top 10
<b>3.Seguridad de la red: </b> Uso de herramientas esenciales como NMAP para enumerar la infraestructura.
<b>4.Desafíos de secuencias de comandos: </b> Uso de Python y Bash para realizar diferentes tareas.
<b> 5.Escalada de privilegios </b></v-card-text>
            
            </v-card>
            
            <br>

            <v-card color="#292E33" dark>
            <v-card-title primary class="align-center">Maquina Virtual 2<v-spacer></v-spacer><v-btn class=ml-15 dark color="#1EFF21"><h1 class="myfontBlack">DOWNLOAD</h1></v-btn></v-card-title>
            <v-card-text> <h2>SO: Windows  <v-icon large class=ml-2 color="#2882FF">mdi-windows</v-icon></h2>
                            Usuario: mherrg04<br>
                            Fecha: 5/11/2020<br>
                            Descripción: - Utilizar herramientas estándar de la industria
- Aprenda escenarios de ataque realistas
- Entrena en seguridad ofensiva
- Ejercicios y recursos de apoyo</v-card-text>
            
                        
            </v-card>
            
            <br>
             <v-card color="#292E33" dark>
            <v-card-title primary class="align-center">Maquina Virtual 3 <v-spacer></v-spacer><v-btn class=ml-15 dark color="#1EFF21"><h1 class="myfontBlack">DOWNLOAD</h1></v-btn></v-card-title>
            <v-card-text><h2>SO: Macosx  <v-icon large class=ml-2 >mdi-apple</v-icon></h2>
                            Usuario: aabadp02<br>
                            Fecha: 22/12/2020<br>
                            Descripción: - Herramientas de prueba de penetración estándar de la industria
- Identificar y explotar diferentes servicios de red
- Explotación de aplicaciones web a través de las vulnerabilidades más comunes de la actualidad
- Comprender el directorio activo de Macosx y atacar Kerberos
- Técnicas posteriores a la explotación (con Powerview, Bloodhound y Mimikatz)</v-card-text>
            
            
            </v-card>
            
    
    <br>
    
        <v-card color="#292E33" dark>
            <v-card-title primary class="align-center">Maquina Virtual 4 <v-spacer></v-spacer><v-btn class=ml-15 dark color="#1EFF21"><h1 class="myfontBlack">DOWNLOAD</h1></v-btn></v-card-title>
            <v-card-text> <h2>SO: Linux  <v-icon large class=ml-2 color="#FFEB00">mdi-linux</v-icon></h2>
                            Usuario: ngonzs00<br>
                            Fecha: 10/12/2020<br>
                            Descripción: - Introducción a Linux
- Ejecución de comandos y páginas de manual
- Operadores de archivos básicos</v-card-text>
            
            
            </v-card>
            <br>
            <v-card color="#292E33" dark>
            <v-card-title primary class="align-center">Maquina Virtual 5<v-spacer></v-spacer><v-btn class=ml-15 dark color="#1EFF21"><h1 class="myfontBlack">DOWNLOAD</h1></v-btn></v-card-title>
            <v-card-text> <h2>SO: Ubuntu  <v-icon large class=ml-2 color="#ff6303">mdi-ubuntu</v-icon></h2>
                            Usuario: mherrg04<br>
                            Fecha: 30/8/2020<br>
                            Descripción: - Comprender cómo funcionan las aplicaciones web.
- Utilizar herramientas estándar de la industria al atacar aplicaciones web.
- Explicar y explotar las vulnerabilidades web comunes.
- Aplicar este conocimiento a otros objetivos (ya sea en una entrevista o en una evaluación de seguridad de aplicaciones web profesional)</v-card-text>
            
            
            </v-card>
            <br>
             <v-card color="#292E33" dark>
            <v-card-title primary class="align-center">Maquina Virtual 6 <v-spacer></v-spacer><v-btn class=ml-15 dark color="#1EFF21"><h1 class="myfontBlack">DOWNLOAD</h1></v-btn></v-card-title>
            <v-card-text> <h2>SO: Ubuntu  <v-icon large class=ml-2 color="#ff6303">mdi-ubuntu</v-icon></h2>
                            Usuario: jcastr05<br>
                            Fecha: 20/12/2020<br>
                            Descripción: - Gestión de amenazas y vulnerabilidades
- Vigilancia y operaciones de seguridad
- Emulación de amenazas
- Respuesta a incidentes y análisis forense
- Análisis de malware e ingeniería inversa</v-card-text>
             
            </v-card>
            
    
    <br />
      
    <br />
                <br><br>
    </v-card>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark>
          <v-card-title class="title">
            <span v-text="item.titulo"></span>
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              <br />
              <span v-text="item.texto"></span>
            </p>
            <v-btn :color="item.color" class="mx-0" outlined>
              <span v-text="item.titulo"></span>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-layout>
    </v-layout>
   <v-footer class="success mt" padless>
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
    <!--<h1>Esto es lo que tiene que salir en máquinas virtuales.</h1>-->
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

  .myfontBlack{
    color:black;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 15px;
  }

  .hoverMouse
  {
    cursor: pointer
  }
  
       

</style>
<script>
    export default {
      data: () => ({
        snackbar: false,
        email:
      "Para contactar con los creadores utilizar el siguiente correo electrónico: panicodelkernel@gmail.com",
        }),
      methods: {
          clickFaq() {
            this.$router.push("/faq");
          },
          clickMerch() {
            this.$router.push("/merch");
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