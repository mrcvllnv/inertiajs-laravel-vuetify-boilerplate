<template>
  <v-navigation-drawer
    v-model="$root.sideDrawer"
    floating
    persistent
    app
  >
    <v-app-bar color="primary" dark flat>
      <v-toolbar-title>
        <v-icon class="mr-2 mb-1">grain</v-icon>
        Safety Delta
      </v-toolbar-title>
    </v-app-bar>
    <v-list dense nav>
      <v-list-item-group
        :value="currentController"
        active-class="blue-grey lighten-5 blue-grey--text text--darken-4 disabled"
      >
        <v-list-item link value="/" @click="$inertia.visit(route('dashboard'))">
          <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Dashboard
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link value="/organizations" @click="$inertia.visit(route('organizations.index'))">
          <v-list-item-icon>
            <v-icon>domain</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Clients
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          prepend-icon="people"
        >
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>

          <v-list-item link value="/users" @click="$inertia.visit(route('users.index'))">
            <v-list-item-icon>
              <v-icon>domain</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Users List
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link value="/roles" @click="$inertia.visit(route('roles.index'))">
            <v-list-item-icon>
              <v-icon>domain</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                User Roles
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data: () => ({}),
  computed: {
    currentController() {
      const controller = location.pathname.substr(1).split('/').shift()
      return `/${controller}`
    },
  },
}
</script>