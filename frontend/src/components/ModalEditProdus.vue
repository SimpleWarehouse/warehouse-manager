<template>
  <span class="produsedit">
      <b-button @click="showModal" variant="primary btn-sm">Details</b-button>

      <b-modal ref="produsedit-modal" size="lg" hide-footer>
        <template v-slot:modal-title>
          Editeaza produsul
        </template>
        <div class="d-block text-center">

          <EditProdusForm v-if="idprodus" :idprodus="idprodus"/>

        </div>
      </b-modal>

  </span>
</template>

<script>

import EditProdusForm from './EditProdusForm.vue'


export default {
    name: 'ModalEditProdus',
    components: {
      EditProdusForm
    },
    props: {
      idprodus: String
    },
    data() {
      return {
      }
    },
    methods: {
      showModal() {
        this.$refs['produsedit-modal'].show()
      }
    }
  }
</script>


<style scoped>

</style>
