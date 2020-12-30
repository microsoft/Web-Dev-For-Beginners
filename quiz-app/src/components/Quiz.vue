<template>
  <div class="card">
    <div v-for="q in questions" :key="q.id">
      <div v-if="route == q.id">
        <h3 v-if="complete" class="message">{{ $t("complete") }}</h3>
        <div v-else>
          <h3 v-if="error" class="error">{{ $t("error") }}</h3>
          <h2>
            {{ q.quiz[currentQuestion].questionText }}
          </h2>
          <div>
            <button
              :key="index"
              v-for="(option, index) in q.quiz[currentQuestion].answerOptions"
              @click="handleAnswerClick(option.isCorrect)"
              class="btn ans-btn"
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
import messages from "@/assets/translations";

export default {
  name: "Quiz",
  data() {
    return {
      currentQuestion: 0,
      complete: false,
      error: false,
      route: "",
    };
  },
  computed: {
    questions() {
      return this.$t("quizzes");
    }
  },

  i18n: { messages },
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
  created() {
    //console.log(this.$root.$i18n.locale,this.$i18n.locale);
    //this.questions = this.$i18n.messages + "." + this.$i18n.locale;
    this.route = this.$route.params.id;
  },
};
</script>
