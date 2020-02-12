<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card raised max-width="450">
              <v-toolbar flat dark color="blue-grey darken-4">
                <v-toolbar-title>Reset Password</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="pb-0">
                <div class="subheading">Use 8 or more characters with a mix of letters, numbers & symbols</div>
              </v-card-text>
              <v-card-text class="pa-4 pb-0">
                <v-form>
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        v-model="form.new_password"
                        min="8"
                        :rules="newPasswordRules"
                        required
                        :errors="$page.errors.password"
                        :error-messages="$page.errors.password"
                        label="New Password"
                        name="password"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        :type="e1 ? 'password' : 'text'"
                        outlined
                        dense
                        @click:append="() => (e1 = !e1)"
                        @focus="$page.errors.password = null"
                      />
                    </v-col>
										
                    <v-col cols="12">
                      <v-text-field
                        v-model="form.new_password_confirmation"
                        min="8"
                        :rules="newPasswordConfirmationRules"
                        required
                        :errors="$page.errors.new_password_confirmation"
                        label="New Password"
                        name="password"
                        :append-icon="e2 ? 'visibility' : 'visibility_off'"
                        :type="e2 ? 'password' : 'text'"
                        outlined
                        dense
                        @click:append="() => (e2 = !e2)"
                        @focus="$page.errors.new_password_confirmation = null"
                      />
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions class="pa-4 pt-0">
                <v-row dense>
                  <v-col cols="12">
                    <v-btn block color="primary" @click="submit">Reset Password</v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      block
                      text
                      @click="$inertia.visit(route('login'))"
                    >
                      Sign In
                    </v-btn>
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
    token: String,
    email: String,
  },
  data() {
    return {
      loading: false,
      valid: false,
      errorMessage: '',
      e1: true,
      e2: true,
      form: {
        new_password: null,
        new_password_confirmation: null,
      },
      newPasswordRules: [v => !!v || 'The password field is required'],
      newPasswordConfirmationRules: [
        v => !!v || 'The new password confirmation field is required',
      ],
    }
  },
  methods: {
    submit() {
      this.loading = true
      this.$inertia
        .post(this.route('reset.password'), {
          email: this.email,
          password: this.form.new_password,
          password_confirmation: this.form.new_password_confirmation,
          token: this.token,
        })
        .then(() => (this.loading = false))
    },
  },
}
</script>
