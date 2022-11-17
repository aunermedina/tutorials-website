<template>
  <div class="container">
    <header class="jumbotron">
      <!-- <h3>{{ content }}</h3> -->
      <h3>Principios de computación en la nube</h3>
      <h4>Producto Integrador</h4>
      <h5>Aplicación web dinámica en un servicio de la nube</h5>
      <p>
        Oscar Gregorio Silva Mares <br />
        Carlos Auner Medina Montejano <br />303668622 <br />Licenciatura en
        Desarrollo de Sistemas Web <br />2022 B
      </p>
    </header>
  </div>
</template>

<script>
import UserService from "@/services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
