<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
  {{ componentIsLoaded }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  methods: {
    loadPage () {
      Promise.all([
        // RESET FILTERS
        this.$store.dispatch('home/set_panel_result', true),
        // RESET FILTERS
        this.$store.dispatch('home/set_component_is_loaded', false)
      ]).then((res) => {
        // RESET FILTERS
        console.log('ok ')
        this.$store.dispatch('home/set_component_is_loaded', true)
      })
    }
  },
  computed: {
    ...mapGetters('home', {
      componentIsLoaded: 'componentIsLoaded'
    })
  },
  created () {
    this.loadPage()
  }
}
</script>
