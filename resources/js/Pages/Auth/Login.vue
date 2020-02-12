<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card raised max-width="450">
              <v-toolbar flat dark color="blue-grey darken-4">
                <v-toolbar-title>Sign in to your account</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="pa-4 pb-0">
                <v-form 
                  ref="form"
                  v-model="valid"
                  aria-autocomplete="off"
                  action="#"
                  method="post"
                  @submit.prevent="submit"
                >
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        v-model="form.email"
                        :rules="emailRules"
                        required
                        :errors="$page.errors.email"
                        :error-messages="$page.errors.email"
                        label="Email"
                        type="email"
                        outlined
                        dense
                        autocomplete="email"
                        @focus="$page.errors.email = null"
                      />
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="form.password"
                        :rules="passwordRules"
                        required
                        :errors="$page.errors.password"
                        label="Password"
                        name="password"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        :type="e1 ? 'password' : 'text'"
                        outlined
                        dense
                        autocomplete="current-password"
                        @click:append="() => (e1 = !e1)"
                        @focus="$page.errors.password = null"
                      />
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions class="pa-4 pt-0">
                <v-row dense>
                  <v-col cols="12">
                    <v-btn 
                      :class="loading ? 'blue-grey darken-2 white--text' : 'primary'"
                      block 
                      text 
                      :loading="loading"
                      @click="submit"
                    >
                      Sign In
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-btn block text @click="$inertia.visit(route('password.request'))">Forgot Password?</v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  metaInfo: { title: 'Login' },
  props: {
    errors: Object,
  },
  data() {
    return {
      valid: false,
      loading: false,
      e1: true,
      emailRules: [
        v => !!v || 'The email field is required',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'The email field must be a valid email',
      ],
      passwordRules: [v => !!v || 'The password field is required'],
      form: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    submit() {
      this.loading = true
      this.$inertia.post(this.route('login.attempt'), {
        email: this.form.email,
        password: this.form.password,
      }).then(() => this.loading = false)
    },
  },
}
</script>
