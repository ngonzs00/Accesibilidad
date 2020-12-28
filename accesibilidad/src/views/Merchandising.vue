
<template>
<v-container fluid class="success" style="height:1500px">

<v-col align="center">
    <h1 class=" myfontGrey ml-12 ">Merchandising Pánico del Kernel</h1>
  <v-row justify="center">
    
    <v-col
      cols="12"
      sm="6"
      align="center"
    >
      <v-hover
        v-slot:default="{ hover }"
        close-delay="200"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="400"
          max-width="435"
          color="#1F2326"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <img src="../assets/camiseta.png" absolute alt="">
          </v-card-text>
        </v-card>
      </v-hover>

        <h4 class="myfontGrey mt-5">Camiseta de hombre Pánico del kernel</h4><h4 class="myfontGreen">20€</h4>      

    </v-col>

    <v-col
      cols="12"
      sm="6"
      align="center"
    >
      <v-hover
        v-slot:default="{ hover }"
        close-delay="200"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="400"
          max-width="435"
          color="#1F2326"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <img src="../assets/camiseta.png" absolute alt="">
          </v-card-text>
        </v-card>
      </v-hover>

        <h4 class="myfontGrey mt-5">La misma camiseta, pero muchísimo mejor</h4><h4 class="myfontGreen">2000€</h4>      


    </v-col>
  </v-row>
</v-col>
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