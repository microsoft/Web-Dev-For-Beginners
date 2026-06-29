<style>
    .question {
      margin: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

</style>
<template>
  <div>
    <div
      class="question"
      v-for="q in questions"
      :key="q.id"
    >
      <router-link
        :to="`quiz/${q.id}`"
        class="link"
      >
        {{ q.title }}
      </router-link>
    </div>
  </div>
  </template>
  
  <script>
  import messages from "@/assets/translations";
  
  function normalizeLocale(locale) {
    return (locale || "").toLowerCase().replace("-", "_");
  }

  function getFileByLocale(locale) {
    // loop keys in messages, if key is the start of locale, return that file
    let file = {
        complete: "Complete",
        error: "Error",
        quizzes: [],
        title: "Default Quiz",
    };
    const normalizedLocale = normalizeLocale(locale);
    for (let key in messages) {
      if (normalizedLocale.startsWith(key)) {
        file = messages[key];
        break;
      }
    }
    return file;
  }

  let locale = navigator.language || navigator.userLanguage;

  export default {
    name: "QuizzesComponent",
    data() {
      return {
        file: getFileByLocale(this.$route.query.loc || locale),
      };
    },
    computed: {
      questions() {
        return this.file.quizzes;
      },
    },
    i18n: { messages },
  };
  </script>
