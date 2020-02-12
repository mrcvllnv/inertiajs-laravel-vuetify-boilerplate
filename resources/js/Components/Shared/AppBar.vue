<template>
  <v-app-bar color="primary" app dark flat fixed clipped-right>
    <v-app-bar-nav-icon @click.stop="$root.sideDrawer = !$root.sideDrawer" />
    <v-toolbar-title>
      <template v-if="$root.goBack">
        <inertia-link class="light-blue--text lighten-5--text" :href="route($root.goBack.url)">
          {{ $root.goBack.title }}
        </inertia-link>
        /
      </template>
      {{ $root.appTitle }}
    </v-toolbar-title>
    <v-spacer />
    
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          dense
          text
          small
          v-on="on"
        >
          <v-icon class="mr-2">supervised_user_circle</v-icon>
          {{ $page.auth.user.first_name }}
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="$inertia.visit(route('logout'), {method: 'post'})">
          <v-icon class="mr-2">exit_to_app</v-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
