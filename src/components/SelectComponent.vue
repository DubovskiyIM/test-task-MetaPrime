<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-layout wrap align-center>
        <v-flex xs12 sm6>
          <v-select
              label="Водительские категории"
              :items="getItems"
              v-model="cats"
              multiple
          ></v-select>
          <span>driverCat: {{ getDriverCat }}</span>
          {{ cats }}
        </v-flex>
        <v-flex xs12 sm6>
          <p>Водительские категории хранятся в переменной 'driverCat' в формате - '12211', где 2 означает наличие
            категории, 1 ее отсутствие.</p>
          <p>Задача - отработать получение, отображение в списке (в данном случае должно отображаться 'B, C'),
            возможность изменения и сохранение в том же формате.</p>
          <h3 class="error--text">Важное условие:</h3>
          <p>Постарайтесь максимальнно использовать логику Vue и обойтись без эвентов типа @input, @change, @click и
            т.д.</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getDriverCat', 'getItems']),
    cats: {
      get() {
        return this.getItems
            .filter((item, i) => this.getDriverCat[i] === '2' ? item : null);
      },
      set(value) {
        this.mutateDriverCat(value);
      }
    }
  },
  methods: mapActions(['mutateDriverCat'])
};
</script>
