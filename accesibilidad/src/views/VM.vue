<template>
 <v-container class="success" fluid grid-list-md style="height:2000px">
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
    <v-layout column align-center>
      <v-row class="mt-12"></v-row>
      <v-row align="center" >
          <v-avatar rounded size="200" class="ml-3">
            <img src="../assets/boxDef.png" absolute alt="">
          </v-avatar>
          <v-col class="mr-10">
          <h1 class="mt-10 ml-5 myfontGrey">Pánico del Kernel</h1>
          <h1 class="mt-1 ml-5 myfontWhite">Máquinas Virtuales</h1>
          </v-col>
      </v-row>

    </v-layout>
    
    
    <br>
      <br>
      <br>  
        <v-card color="grey darken-4" dark>
            <v-card-title primary class="align-center">Maquina Virtual 1 <v-btn class= ml-12  dark color="cyan darken-4">Download</v-btn></v-card-title>
            <v-card-text> SO: Linux<br>
                            Usuario: Alexchupala<br>
                            Fecha:10/12/2020<br>
                            Descripción: texto de prueba texto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de prueba</v-card-text>
            
            </v-card>
            
            <br>

            <v-card color="grey darken-4" dark>
            <v-card-title primary class="align-center">Maquina Virtual 2<v-btn class= ml-12  dark color="cyan darken-4">Download</v-btn></v-card-title>
            <v-card-text> SO: Linux<br>
                            Usuario: Jotychupala<br>
                            Fecha:10/12/2020<br>
                            Descripción: texto de prueba texto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de prueba</v-card-text>
            </v-card-text>
                        
            </v-card>
            
            <br>
             <v-card color="grey darken-4" dark>
            <v-card-title primary class="align-center">Maquina Virtual 3 <v-btn class= ml-12  dark color="cyan darken-4">Download</v-btn></v-card-title>
            <v-card-text> SO: Linux<br>
                            Usuario: Namochupala<br>
                            Fecha:10/12/2020<br>
                            Descripción: texto de prueba texto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de prueba</v-card-text>
            </v-card-text>
            
            </v-card>
            
    
    <br>
    
        <v-card color="grey darken-4" dark>
            <v-card-title primary class="align-center">Maquina Virtual 1 <v-btn class= ml-12  dark color="cyan darken-4">Download</v-btn></v-card-title>
            <v-card-text> SO: Linux<br>
                            Usuario: Alexchupala<br>
                            Fecha:10/12/2020<br>
                            Descripción: texto de prueba texto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de prueba</v-card-text>
            </v-card-text>
            
            </v-card>
            <br>
            <v-card color="grey darken-4" dark>
            <v-card-title primary class="align-center">Maquina Virtual 2<v-btn class= ml-12  dark color="cyan darken-4">Download</v-btn></v-card-title>
            <v-card-text> SO: Linux<br>
                            Usuario: Jotychupala<br>
                            Fecha:10/12/2020<br>
                            Descripción: texto de prueba texto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de prueba</v-card-text>
            </v-card-text>
            
            </v-card>
            <br>
             <v-card color="grey darken-4" dark>
            <v-card-title primary class="align-center">Maquina Virtual 3 <v-btn class= ml-12  dark color="cyan darken-4">Download</v-btn></v-card-title>
            <v-card-text> SO: Linux<br>
                            Usuario: Namochupala<br>
                            Fecha:10/12/2020<br>
                            Descripción: texto de prueba texto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de pruebatexto de prueba</v-card-text>
            </v-card-text>
            
            </v-card>
            
    
    <br />

   

    
      
    </v-layout>
    <br />

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
    <br />
   
    <br />
    <v-layout>
    </v-layout>
    <br />

    
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

  .hoverMouse
  {
    cursor: pointer
  }
</style>