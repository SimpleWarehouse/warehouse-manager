<template>
  <div class="tabel">

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="produse-tabel"
    ></b-pagination>

    <b-table id="produse-tabel" hover :items="produse" :fields="fields" 
      :per-page="perPage"
      :current-page="currentPage">

      <template v-slot:cell(show_details)="data">
        <!-- <b-button variant="primary btn-sm">Details</b-button> -->

        <ModalEditProdus :idprodus="data.item._id" />
        <b-button @click="() => deleteProdus(data.item._id)" variant="danger btn-sm" class='ml-2'>Delete</b-button>

      </template>
    </b-table>

  </div>
</template>

<script>

import ModalEditProdus from './ModalEditProdus'
import axios from 'axios'

export default {
    name: 'TabelProduse',
    props: {
      produse: []
    },
    data() {
      return {
        perPage: 6,
        currentPage: 1,
        fields: [
          {
            key: 'name',
            label: 'Name',
            sortable: true
          },
          {
            key: 'code',
            label: 'Code',
            sortable: true
          },
          {
            key: 'weight',
            label: 'Weight',
            sortable: true
          },
          {
            key: 'price',
            label: 'Price',
            sortable: true
          },
          {
            key: 'color',
            label: 'Color',
            sortable: true
          },

          'show_details'
        ]
      }
    },
    computed: {
      rows() {
        return this.produse.length
      }
    },
    components: {
      ModalEditProdus
    },
    methods: {
      deleteProdus(id) {
        axios.delete(`${process.env.VUE_APP_URL}/produse/${id}`)
        .then(response => {
          console.log(response);
          window.location.reload(false);
          })
        .catch(error => alert("error: " + error));
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabel{
  width: 60%;
}

</style>
