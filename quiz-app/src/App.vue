<template>
  <div>
    <nav>
      <router-link class="navlink" to="/">Home</router-link>
      <label for="locale">locale</label>
      <select v-model="locale">
        <option v-for="localeName in availableLocales" :key="localeName">{{ localeName }}</option>
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
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(69, 90, 100);
  background : #f5f5f5;
}
nav {
  background-color: #ffffff;
  padding: 1em;
  margin-bottom: 20px;
  border: 2px solid #efeef1;
  border-radius: 5px;
}

nav a , label {
  color : rgb(69, 90, 100);
  text-align: right;
  text-decoration: none;
  font-size: 1.1em;
  margin-right: 1em;
}

nav a:hover{
  text-decoration :underline;
}

select{
  color : rgb(69, 90, 100);
  background-color: #ffffff;
  border-radius: 5px; 
  border: 1px solid #cccccc;
}

option{
  color : rgb(69, 90, 100); 
}

.link {
  display: list-item;
  text-decoration: none;
  background: white;
  border-radius: 8px;
  padding: 1%;
  font-weight : 500;
  color : rgb(102 102 102);
  border: 1px solid #efeef1;
  margin-top: 10px;
}
.link:hover{
  background : rgb(236, 239, 241)
}

h1,
h3,
.message {
  text-align: center;
}
h2{
  font-weight : 500;
  text-align: center;
  color : rgb(102 102 102);
}
.error {
  color: red;
}
.card {
  width: 60%;
  border: 2px #efeef1 solid;
  border-radius: 10px;
  margin: auto;
  background : white;
  padding: 1em;
}
.btn {
  min-width: 50%;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 5px;
  width: 50%;
  font-size: 17px;
  color: rgb(102 102 102);
  background-color:#ffffff;
  border-radius: 5px;
  border: 2px solid #efeef1;
  padding: 1%;
  justify-content: flex-start;
  align-items: center;
}
.ans-btn {
  justify-content: center;
  display: flex;
  margin: 4px auto;
}
</style>
