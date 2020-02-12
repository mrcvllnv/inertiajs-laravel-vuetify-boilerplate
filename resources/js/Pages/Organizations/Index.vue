<template>
  <v-row>
    <v-col cols="12">
      <data-table-wrapper
        :items="organizations"
        :headers="headers"
        :button-title="'Add Client'"
        :button-link="create"
        with-search
        sort-by="name"
      >
        <template #item="{ item }">
          <tr>
            <td>
              {{ item.id }}
            </td>
            <td>
              {{ item.name }}
            </td>
            <td>{{ item.city }}</td>
            <td>{{ item.phone }}</td>

            <td class="text-right">
              <template v-if="item.deleted_at">
                <v-chip color="warning" outlined>Deleted</v-chip>
              </template>

              <v-btn text icon @click="edit(item.id)">
                <v-icon small>edit</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </data-table-wrapper>
    </v-col>
  </v-row>
</template>

<script>
import Layout from '@shared/Layout'

export default {
  metaInfo: { title: 'Clients' },

  layout: (h, page) => h(Layout, [page]),

  props: {
    organizations: Array,
  },

  data: () => ({
    headers: [
      {text: 'ID', value: 'id'},
      {text: 'Company Name', value: 'name'},
      {text: 'City', value: 'city'},
      {text: 'Phone', value: 'phone'},
      {text: '', sortable: false},
    ],
  }),

  methods: {
    create() {
      this.$inertia.visit(route('organizations.create'))
    },
    edit(_organisation) {
      this.$inertia.visit(route('organizations.edit', _organisation))
    },
  },
}
</script>
