<template>
  <v-content>
    <v-container>
      <p class="font-weight-regular">default: ASC</p>
      <v-autocomplete
        v-model="model"
        :items="items"
        chips
        clearable
        hide-details
        hide-selected
        item-text="name"
        item-value="symbol"
        label="Sort by ..."
        solo
      >
      </v-autocomplete>
      <v-card
        v-for="(item, index) in sortPokemonList"
        :key="index"
        class="mx-auto ma-5"
        height="60"
      >
        <v-card-title>
          {{ item.name }}
          <v-spacer />
          pokedex: {{ item.pokedex }}
        </v-card-title>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      pokemonList: [],
      model: null,
      items: ["A-Z", "Z-A", "ASC", "DESC"],
      sortPokemonList: [],
    };
  },
  watch: {
    model(val) {
      const data = this.pokemonList;
      let sort = [];

      if (val === "A-Z") {
        sort = data.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (val === "Z-A") {
        sort = data.sort((a, b) => b.name.localeCompare(a.name));
      }

      if (val === "ASC" || !val) {
        sort = data.sort((a, b) => a.pokedex - b.pokedex);
      }

      if (val === "DESC") {
        sort = data.sort((a, b) => b.pokedex - a.pokedex);
      }

      this.sortPokemonList = sort;

      return "";
    },
  },
  created() {
    this.fetchAPIPokemon();
  },
  methods: {
    async fetchAPIPokemon() {
      const { results } = await axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then((response) => response.data);
      const mapPokedex = results.map((item) => {
        const removeLastSlash = item.url.slice(0, -1);
        const pokedex = removeLastSlash.substring(
          removeLastSlash.lastIndexOf("/") + 1
        );
        return { ...item, pokedex };
      });
      this.pokemonList = mapPokedex;
      this.sortPokemonList = mapPokedex;
    },
  },
};
</script>
