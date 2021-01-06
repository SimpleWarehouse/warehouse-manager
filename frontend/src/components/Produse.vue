<template>
  <div class="produse">

    <div class="firstline">
      <div class="left">
        <h1>Produse</h1>
      </div>
      <div class="right">
        <ModalProdusNou/>
      </div>
    </div>


    <br/>
    <TabelProduse :produse="produse"/>

    
    
  </div>
</template>



<script>
import TabelProduse from './TabelProduse.vue'
import ModalProdusNou from './ModalProdusNou.vue'

import axios from 'axios';

export default {
  name: 'Produse',
  data () {
    return {
      produse: []
    }
  },
  components: {
    TabelProduse,
    ModalProdusNou
  },
  mounted () {
    axios.get(`${process.env.VUE_APP_URL}/produse`)
      .then(response => {
          this.produse = response.data
      })
      .catch(error => alert("error " + error))
  }

}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.firstline{
  .left{
    display: inline-block;
    width: 50%;
  }
  .right{
    width: 50%;
    display: inline-block;
  }

}

.produse{
  margin-top: 150px;
  margin-left: 20%;
  text-align: left;
}

</style>
