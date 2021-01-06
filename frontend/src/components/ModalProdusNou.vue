<template>
  <div class="produsnou">
      <b-button v-b-modal.produsnou-modal variant="primary btn-lg">Adauga produs</b-button>

      <b-modal id="produsnou-modal" size="lg" hide-footer>
        <template v-slot:modal-title>
          Adauga un produs
        </template>
        <div class="d-block text-center">

          <ProdusNouForm/>

        </div>
      </b-modal>

  </div>
</template>

<script>

import ProdusNouForm from './ProdusNouForm.vue'


export default {
    name: 'ModalProdusNou',
    components: {
      ProdusNouForm
    },
    props: {
    },
    data() {
      return {
      }
    }
  }
</script>


<style scoped>

</style>
