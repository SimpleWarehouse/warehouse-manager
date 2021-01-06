<template>
  <div class="editform">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Product Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Code:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.code"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Weight:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="number"
          v-model="form.weight"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Price:" label-for="input-4">
        <b-form-input
          id="input-4"
          type="number"
          v-model="form.price"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Color:" label-for="input-5">
        <b-form-select
          id="input-5"
          v-model="form.color"
          :options="colors"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger" class='ml-3'>Reset</b-button>
    </b-form>

    <!-- <b-card class="mt-3" header="Form Data Result">
      {{idprodus}}
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: {
      idprodus: String
    },
    data() {
      return {
        form: {
          name: '',
          code: '',
          weight: 0,
          price: 0,
          color: null
        },
        colors: [{ text: 'Select One', value: null }, 'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white', 'other'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        axios.put(`${process.env.VUE_APP_URL}/produse/${this.idprodus}`, this.form)
        .then(response => {
          console.log(response);
          window.location.reload(false);
          })
        .catch(error => alert("error: " + error));
      },

      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.code = ''
        this.form.weight = 0
        this.form.price = 0
        this.form.color = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },created () {

      axios.get(`${process.env.VUE_APP_URL}/produse/${this.idprodus}`)
      .then(response => {
          this.form = response.data
      })
      .catch(error => alert("error " + error))
  }
  }
</script>

<style scoped lang="scss">

.editform{
  text-align: left;
}
</style>
