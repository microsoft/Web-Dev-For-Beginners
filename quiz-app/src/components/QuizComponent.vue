<style scoped>
.button {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button:hover {
  background-color: black;
  color: white;
}

.error {
  color: red;
  background-color: pink;
}

</style>
<template>
    <div class="card">
        Back to <router-link to="/">Quizzes</router-link>
    </div>
    <div class="card">
      <div
        v-for="q in questions"
        :key="q.id"
      >
        <div v-if="route == q.id">
          <h2>{{ q.title }}</h2>
          <hr>
          <h3
            v-if="complete"
            class="message"
          >
            {{ file.complete }}
          </h3>
          <div v-else>
            <h3
              v-if="error"
              class="error"
            >
              {{ file.error }}
            </h3>
            <h2>
              {{ q.quiz[currentQuestion].questionText }}
            </h2>
            <div>
              <button
                v-for="(option, index) in q.quiz[currentQuestion].answerOptions"
                :key="index"
                class="btn ans-btn button"
                @click="handleAnswerClick(option.isCorrect)"
              >
                {{ option.answerText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  function getFileByLocale(locale) {
    // loop keys in messages, if key is the start of locale, return that file
    let file = {
        complete: "Complete",
        error: "Error",
        quizzes: [],
        title: "Default Quiz",
    };
    for (let key in messages) {
      if (locale.startsWith(key)) {
        file = messages[key];
        break;
      }
    }
    return file;
  }

  import messages from "@/assets/translations";
  let locale = navigator.language || navigator.userLanguage;
  console.log("locale", locale);
  console.log("messages", messages);
  
  
  export default {
    name: "QuizComponent",
    data() {
      return {
        currentQuestion: 0,
        complete: false,
        error: false,
        route: "",
        locale: "",
        file: getFileByLocale(locale),
      };
    },
    computed: {
      questions() {
        return this.file.quizzes;
      },
    },
    created() {
      this.route = this.$route.params.id;
      this.locale = this.$route.query.loc;
    },
    methods: {
      handleAnswerClick(isCorrect) {
        this.error = false;
        let nextQuestion = this.currentQuestion + 1;
        if (isCorrect == "true") {
          //always 3 questions per quiz
          if (nextQuestion < 3) {
            this.currentQuestion = nextQuestion;
          } else {
            this.complete = true;
          }
        } else {
          this.error = true;
        }
      },
    },
  };
  </script>
  