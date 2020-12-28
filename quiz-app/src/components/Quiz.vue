<template>
  <div class="card">
    <div v-for="q in questions" :key="q.id">
      <div v-if="route == q.id">
        <h2>
          {{ q.quiz[currentQuestion].questionText }}
        </h2>
        <h3 class="message">{{ message }}</h3>
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
</template>

<script>
import questions from "@/assets/data/en/quiz.json";

export default {
  data() {
    return {
      currentQuestion: 0,
      message: "",
      startQuiz: false,
      restart: false,
      questions: questions,
      route: "",
    };
  },

  methods: {
    handleAnswerClick(isCorrect) {
      let nextQuestion = this.currentQuestion + 1;
      console.log(nextQuestion);
      if (isCorrect == "true") {
        this.message = "";
        //always 3 questions per quiz
        if (nextQuestion < 3) {
          this.currentQuestion = nextQuestion;
        } else {
          this.message = "Well done, you've completed the quiz";
        }
      } else {
        this.message = "sorry, try again";
      }
    },
  },
  created() {
    console.log(this.$route.params.id);
    this.route = this.$route.params.id;
  },
};
</script>
