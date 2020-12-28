<template>
  <v-container class="warning" fluid grid-list-md>
    <v-layout>
      <v-app-bar app color="#191C1F">
        <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon> <!--Le añadimos un icono blanco-->
        <v-toolbar-title class="white--text">Merchandaising</v-toolbar-title> <!--Le añadimos el titulo-->
        <v-avatar size="40" class="ml-3">
          <img src="../assets/LogoPanicoKernel.jpeg" absolute alt="">
        </v-avatar>

        <v-spacer></v-spacer>
          <h1 class="white--text body-1 ma-5 hoverMouse" @click="goTo('')">Página principal</h1>
          <h1 class="white--text body-1 ma-5 hoverMouse" @click="goTo('faq')">About us</h1>
      </v-app-bar>
    </v-layout>


    <br />
    <br />

    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
        <v-card dark>
          <v-col cols="1">
            <img width="200" height="200" src="../assets/camiseta.png" />
          </v-col>
          <v-col cols="">
            <v-list>
              <p><strong>Precio: </strong> 15€</p>
              <p><strong>Producto: </strong> Camiseta Panico del Kernel</p>
              <p class="text-right"><v-btn class="ml-14" color="#1aff1a" text @click="snackbarDeContacto = false">Comprar</v-btn></p>
            </v-list>
          </v-col>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card dark>
          <v-col cols="1">
            <img width="200" height="200" src="../assets/camiseta.png" />
          </v-col>
          <v-col cols="">
            <v-list>
              <p><strong>Precio: </strong>7€</p>
              <p><strong>Producto: </strong> Camiseta Panico del Kernel</p>
              <p class="text-right"><v-btn class="ml-14" color="#1aff1a" text @click="snackbarDeContacto = false">Comprar</v-btn></p>
            </v-list>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <br />
    <br />
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
        <v-card dark>
          <v-col cols="1">
            <img width="200" height="200" src="../assets/camiseta.png" />
          </v-col>
          <v-col cols="">
            <v-list>
              <p><strong>Precio: </strong> 5€</p>
              <p><strong>Producto: </strong> Camiseta Panico del Kernel Nueva</p>
              <p class="text-right"><v-btn class="ml-14" color="#1aff1a" text @click="snackbarDeContacto = false">Comprar</v-btn></p>
            </v-list>
          </v-col>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card dark>
          <v-col cols="1">
            <img width="200" height="200" src="../assets/camiseta.png" />
          </v-col>
          <v-col cols="">
            <v-list>
              <p><strong>Precio: </strong> 23€</p>
              <p><strong>Producto: </strong> Camiseta Panico del Chupacabrar</p>
              <p class="text-right"><v-btn class="ml-14" color="#1aff1a" text @click="snackbarDeContacto = false">Comprar</v-btn></p>
            </v-list>
          </v-col>
        </v-card>
      </v-col>

      <v-col cols="2"></v-col>
    </v-row>

    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />

    <!-- Footer de la aplicacion -->
    <v-footer color="#191C1F" absolute class="font-weight-medium" style="height:100px">
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
  name: "Home",
  data() {
    return {};
  },
  methods: {
    goTo(dir) {
      this.$router.push("/" + dir);
    },
  },
};
</script>