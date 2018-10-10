<template>
  <div id="app">
   <div> <img alt="Vue logo" src="./assets/logo.png"></div>
    <button v-on:click="displaySimplePopup">Click Me</button>
    <button v-on:click="infoAlert">Info Popup</button>
    <button v-on:click="successAlert">Success Popup</button>
    <button v-on:click="errorAlert">Error Popup</button>
    <button v-on:click="AlertPassingData">Prompt Popup</button>
    <button v-on:click="positionPopup">Custom Position Popup</button>
    <button v-on:click="deletePopup">Delete Popup</button>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          msg:''
        };
    },
    methods: {
        displaySimplePopup(){
            // Use Sweetalert
            this.$swal('Welcome to Vuejs Application using Sweetalert');
        },
        infoAlert() {
            this.$swal({
                type: 'info',
                title: 'Title Info',
                text: 'This is informational message'
            });
        },
        successAlert() {
            this.$swal({
                type: 'success',
                title: 'Title Success',
                text: 'This is successful message'
            });
        },
        errorAlert() {
            this.$swal({
                type: 'error',
                title: 'Error Title ...',
                text: 'Error Occured!',
                footer: '<a href>Please click this for more about this error</a>'
            });
        },
        positionPopup() {
            this.$swal({
                position: 'top-end',
                type: 'success',
                title: 'Data is saved in Database',
              showConfirmButton: false,
              timer: 1000
            });
        },
        deletePopup() {
            this.$swal({
                  title: "Do you want to delete this record",
                  text: "This will be record from Database",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#4026e3",
                  confirmButtonText: "Yes, remove it it!"
                  }).then((result) => { // <--
                  if (result.value) { // <-- if accepted
                          this.$swal('status-delete/' );
                          }
                  });
        },
          AlertPassingData() {
            this.$swal({
              title: 'Please enter String?',
              input: 'text',
              inputPlaceholder: 'Enter String here',
              showCloseButton: true,

            });
        },
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
