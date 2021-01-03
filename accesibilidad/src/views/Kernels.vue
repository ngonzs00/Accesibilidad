<template id="app1">
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
        >  
        <v-col>
          <v-row class="mr-10" justify="center">
              <h1 class="mt-10 ml-10 myfontGreyNormal">Kernels más populares</h1>
              <v-divider dark vertical class="mt-8 ml-8" color="#1EFF21"></v-divider>
              <h1 class="mt-10 ml-10 myfontGreyNormal">Para principantes</h1>
              <v-divider dark vertical class="mt-8 ml-8" color="#1EFF21"></v-divider>
              <h1 class="mt-10 ml-10 myfontGreyNormal ">Todos los Kernels</h1>

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
              class="mt-12 mr-10"
              color="#292E33"
              width="550"
              height="500"
              elevation=10
            >
              <v-layout column align-center>      
                  <img src="../assets/hydra.jpeg" absolute alt="" height=100 class="mt-5">
                <h1 class="myfontWhite mt-5"> THE WITCHER</h1>
                <h1 class="myfontWhiteNormal">SO: Linux</h1>
                <h1 class="myfontWhiteNormal">Nivel de dificultad: 7/10</h1>
                <h1 class="myfontWhiteNormal">Valoración de los usuarios: 8/10</h1>
                <h1 class="myfontWhiteNormal mt-10">Descripción:</h1>
                <h1 class="myfontGreySmall mt-3">Aprende a usar el indispensable programa: Hydra </h1>
                <h1 class="myfontGreySmall">siguiendo la historia de Geralt de Rivia, viviendo</h1>
                <h1 class="myfontGreySmall">sus hazañas y combates más feroces contra estas</h1>
                <h1 class="myfontGreySmall">bestias. Con una dificultad media, esta máquina</h1>
                <h1 class="myfontGreySmall">te enseñará a usar este magnífico software.</h1>
                
                <!--el root de los sistemas informáticos de la biblioteca de tu municipio.Esta máquina ofrece un desafío perfecto para principiantes, tocando muchos de los tópicos principales de la ciberseguridad-->
              </v-layout>
              
            </v-card>

            <v-card
              class="mt-12 mr-10"
              color="#292E33"
              width="550"
              height="500"
              elevation=10
            >
              <v-layout column align-center>      
                  <img src="../assets/mrRobot.png" absolute alt="" height=100 class="mt-5">
                <h1 class="myfontWhite mt-5"> MR.ROBOT</h1>
                <h1 class="myfontWhiteNormal">SO: Linux</h1>
                <h1 class="myfontWhiteNormal">Nivel de dificultad: 2/10</h1>
                <h1 class="myfontWhiteNormal">Valoración de los usuarios: 9/10</h1>
                <h1 class="myfontWhiteNormal mt-10">Descripción:</h1>
                <h1 class="myfontGreySmall mt-3">Asume el rol de un joven Elliot Alderson y consigue </h1>
                <h1 class="myfontGreySmall">el root de los sistemas informáticos de la biblioteca</h1>
                <h1 class="myfontGreySmall">de tu municipio.</h1>
                <h1 class="myfontGreySmall">Esta máquina ofrece un desafío perfecto para</h1>
                <h1 class="myfontGreySmall">principiantes a lo largo de 15 actividades. Empieza ya</h1>
                
                <!--el root de los sistemas informáticos de la biblioteca de tu municipio.Esta máquina ofrece un desafío perfecto para principiantes, tocando muchos de los tópicos principales de la ciberseguridad-->
              </v-layout>
            </v-card>


             <v-card
              class="mt-12 mr-10"
              color="#292E33"
              width="550"
              height="500"
              elevation=10
            >
              <v-layout column align-center>      
                  <img src="../assets/hacker.jpg" absolute alt="" height=100 class="mt-5">
                <h1 class="myfontWhite mt-5">SNOWDEN</h1>
                <h1 class="myfontWhiteNormal">SO: Windows</h1>
                <h1 class="myfontWhiteNormal">Nivel de dificultad: 9/10</h1>
                <h1 class="myfontWhiteNormal">Valoración de los usuarios: 7/10</h1>
                <h1 class="myfontWhiteNormal mt-10">Descripción:</h1>
                <h1 class="myfontGreySmall mt-3">En esta máquina pensada para usuarios avanzados</h1>
                <h1 class="myfontGreySmall">tendrás que asumir el papel de Edward Snowden y</h1>
                <h1 class="myfontGreySmall">conseguir el root del pentágono para extraer toda</h1>
                <h1 class="myfontGreySmall">la información que allí se guarda. Este kernel</h1>
                <h1 class="myfontGreySmall">es un desafío para usuarios avanzados. Cuidado.</h1>
                
                <!--el root de los sistemas informáticos de la biblioteca de tu municipio.Esta máquina ofrece un desafío perfecto para principiantes, tocando muchos de los tópicos principales de la ciberseguridad-->
              </v-layout>
            </v-card>


          </v-row>

        </v-col>
        
        <br><br>

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