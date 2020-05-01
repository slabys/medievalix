<template>
  <div >
    <b-navbar class="w-100 nav" type="dark" variant="bg_dark">

        <b-button v-b-toggle.sidebar-backdrop >
          <div id="bars">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </b-button>

        <Sidebar menu="Menu"></Sidebar>

        <b-navbar-brand>
          <h1> Medievalix </h1>
        </b-navbar-brand>

        <div id="logo">
          <a href="#">
            <img src="../assets/images/Medievalix-noBg.png">
          </a>
        </div>

    </b-navbar>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'


export default {
  name: 'Header',
  // props: {
  //   msg: String
  // },
  components: {
    Sidebar
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 2em;
  margin: 0.2em 0.5em;
}

#logo{
    z-index: 10;
}

#EventSection{
    z-index: -10;
}

#bars div{
  width: 2em;
  height: 0.3em;
  background-color: var(--light);
  margin: 6px 0;
}

.nav{
  position: relative;
}

  #logo{
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);

    padding: 16px;
    border-radius: 0% 0% 50% 50%;
    box-shadow: 0px -10px 10px rgba(109,179,63,1);
    background-image: linear-gradient(rgba(38,42,45,1), rgba(150,150,150,0.5), rgba(255,255,255,0));
  }

  #logo img{
    width: 150px;
  }

</style>
