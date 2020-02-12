<template>
  <v-row>
    <!-- THE SEARCH -->
    <v-col v-if="withSearch" cols="12" class="py-0">
      <v-row justify="space-between" dense>
        <v-col md="6" lg="4" xl="3">
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            hide-details
            outlined
            dense
          />
        </v-col>
        <v-col md="6" lg="4" xl="3">
          <v-row justify="end" dense>
            <v-col cols="auto" class="py-0">
              <v-btn color="primary" @click="buttonLink">{{ buttonTitle }}</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <!-- THE TABLE -->
    <v-col cols="12">
      <v-data-table
        :mobile-breakpoint="0"
        :sort-by="sortBy"
        :sort-desc="sortDesc"
        :items="items"
        :headers="headers"
        :search="search"
        :items-per-page="itemsPerPage"
        :footer-props="footerProps"
        class="elevation-1"
      >
        <template #item="{ item }">
          <slot name="item" :item="item" />
        </template>

        <template #no-results>
          <v-alert color="warning" icon="warning" outlined>
            No results found for '{{ search }}'
          </v-alert>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DataTableWrapper',

  props: {
    items: Array,
    headers: Array,
    sortBy: [String, Array],
    withSearch: {
      type: Boolean,
      default: false,
    },
    sortDesc: {
      type: Boolean,
      default: false,
    },
    buttonLink: Function,
    buttonTitle: String,
  },

  data: () => ({
    search: '',
    footerProps: {
      'items-per-page-options': [10, 25, 50, -1],
      'items-per-page-text': 'Per page',
      'items-per-page-all-text': 'All',
    },
    itemsPerPage: 10,
  }),
}
</script>