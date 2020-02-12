<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card raised max-width="450">
              <v-toolbar flat dark color="blue-grey darken-4">
                <v-toolbar-title>Reset your password</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="pb-0">
                <div class="subheading">Enter your email address and we will send you a link to reset your password.</div>
              </v-card-text>
              <v-card-text class="pa-4 pb-0">
                <v-form>
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        v-model="form.email"
                        label="Email"
                        name="email"
                        type="email"
                        :error-messages="$page.errors.email"
                        outlined
                        dense
                        autocomplete="email"
                      />
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions class="pa-4 pt-0">
                <v-row dense>
                  <v-col cols="12">
                    <v-btn block color="primary" @click="submit">Send Password reset email</v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-btn block text @click="$inertia.visit(route('login'))">Sign In</v-btn>
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
  metaInfo: { title: 'Reset Password' },
  props: {
    errors: Object,
  },
  data() {
    return {
      sending: false,
      form: {
        email: null,
      },
    }
  },
  methods: {
    submit() {
      this.sending = true
      this.$inertia.post(this.route('password.email'), {
        email: this.form.email,
      }).then(() => this.sending = false)
    },
  },
}
</script>
