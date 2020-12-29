<template id="app1">
  <v-container fluid class="success" style="height:1500px">
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

        <v-row>
        <h1 class="mt-12"></h1>
        </v-row>

        <v-layout column align-center>
        <v-row class="mt-12"></v-row>
        <v-row align="center" class="mt-12">
            <v-avatar size="200" class="ml-3" rounded>
                <img src="../assets/kernelsDef.png" absolute alt="">
            </v-avatar>
            <v-col class="mr-10">
            <h1 class="mt-10 ml-5 myfontGrey">Pánico del Kernel</h1>
            <h1 class="mt-1 ml-5 myfontWhite">Kernels</h1>
            </v-col>
        </v-row>

        </v-layout>

        <v-row class="mt-12"></v-row><v-row class="mt-12"></v-row><v-row class="mt-12"></v-row>
      
        <v-card
        class="mt-12"
        color="#1F2326"
        width="100000"
        height="700"
        >  
        <v-col>
          <v-row class="mr-10" justify="center">
              <h1 class="mt-10 ml-10 myfontGreySmall">Kernels más populares</h1>
              <v-divider dark vertical class="mt-8 ml-8" color="#1EFF21"></v-divider>
              <h1 class="mt-10 ml-10 myfontGreySmall">Para principantes</h1>
              <v-divider dark vertical class="mt-8 ml-8" color="#1EFF21"></v-divider>
              <h1 class="mt-10 ml-10 myfontGreySmall">Todos los Kernels</h1>

          </v-row>

          <v-row>
            <h1></h1>
            <v-spacer></v-spacer>
            <v-text-field
              dark
              solo-inverted
              prepend-inner-icon="mdi-magnify"
              label="Search"
              class="sm-and-down mt-10"
            />
            <v-spacer></v-spacer>
            <h1></h1>
          </v-row>

          <v-text-field 
            dark
            id="Usuario"
            label=""
            v-model="nombreUsuario"
            name="login"
            prepend-icon=""
            
            type="text"
          ></v-text-field>

          <v-row justify="center">
            <v-card
              class="mt-12"
              color="#292E33"
              width="500"
              height="500"
              elevation=6
            >
            </v-card>

            <v-card
              class="mt-12"
              color="#292E33"
              width="500"
              height="500"
              elevation=6
            >
            </v-card>
          </v-row>

        </v-col>
            

        </v-card>




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

  .myfontGreen{
    
    color: #8AC53E

  }

  .hoverMouse
  {
    cursor: pointer
  }
</style>