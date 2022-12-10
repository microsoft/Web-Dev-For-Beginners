<template>
  <div>
    <nav>
      <router-link
        class="navlink"
        to="/"
      >
        Home
      </router-link>
      <label for="locale">locale</label>
      <select v-model="locale">
        <option
          v-for="localeName in availableLocales"
          :key="localeName"
        >
          {{ localeName }}
        </option>
      </select>
    </nav>
    <div id="app">
      <h1>{{ $t("title") }}</h1>
      <router-view>
        <Quiz />
      </router-view>
    </div>
  </div>
</template>

<script>
import Quiz from "@/components/Quiz.vue";
import messages from "@/assets/translations";

export default {
  name: "App",
  i18n: { messages },
  components: {
    Quiz,
  },
  data() {
    return {
      locale: "en",
      availableLocales: Object.keys(messages).sort(),
    };
  },
  watch: {
    locale(val) {
      this.$root.$i18n.locale = val;
    },
  },
  created() {
    if (this.$route.query.loc) {
      this.locale = this.$route.query.loc;
    }
  },
};
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #252d4a;
}
nav {
  background-color: #252d4a;
  padding: 1em;
  margin-bottom: 20px;
}

nav a {
  color: white;
  text-align: right;
}

.link {
  display: list-item;
}

h1,
h2,
h3,
.message {
  text-align: center;
}
.error {
  color: red;
}
.card {
  width: 60%;
  border: #252d4a solid;
  border-radius: 5px;
  margin: auto;
  padding: 1em;
}
.btn {
  min-width: 50%;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 5px;
  width: 50%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 5px;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
}
.ans-btn {
  justify-content: center;
  display: flex;
  margin: 4px auto;
}
</style>
