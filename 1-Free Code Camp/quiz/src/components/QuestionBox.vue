<template>
  <div class="container">
    <div v-if="numTotal<=9" class="wrapper">
      <h2>Question {{index + 1}}</h2>
      <p>{{currentQuestion.question}}</p>
      <ul>
        <li
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click.prevent="selectAnswer(index)"
          :class="answerClass(index)"
        >{{answer}}</li>
      </ul>
      <button
        class="submit"
        @click="submitAnswer"
        :disabled="selectedIndex === null || answered"
      >Submit</button>
      <button @click="next" class="next">Next</button>
    </div>
    <div v-else class="wrapper">
      <h1>Game Over !!!</h1>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
    index: Object,
    numTotal: Object
  },
  data: function() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false
    };
  },
  /*
    computed:{
        answers(){
            let answers = [...this.currentQuestion.incorrect_answers]
            answers.push(this.currentQuestion.correct_answer)
            return answers
        }
    },*/
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      }
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;
      this.increment(isCorrect);
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    answerClass(index) {
      let answerClass = "";
      if (!this.answered && this.selectedIndex === index) {
        answerClass = "selected";
      } else if (this.answered && this.correctIndex === index) {
        answerClass = "correct";
      } else if (
        this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = "incorrect";
      }
      return answerClass;
    }
  }
};
</script>
    
<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 20%;
  margin-top: 3em;
  text-align: center;
  border: 2px solid black;
  box-shadow: 0px 0px 35px black;
}
h2 {
  padding-top: 0.5em;
  color: #ff8700;
}
ul {
  list-style: none;
  border: 2px solid black;
  padding: 0;
  margin-top: 2em;
  box-shadow: 0px 0px 35px black;
}
li {
  border: 1px solid black;
  padding: 0.5em;
  background-color: #1d1c1b;
  color: white;
  margin: 1em;
}
li:hover {
  background-color: #57524c;
  cursor: pointer;
}
button {
  display: inline-block;
  margin: 1em;
  margin-bottom: 2em;
  padding: 1em;
  font-size: 1em;
  border-radius: 0.3em;
  width: 150px;
  color: white;
  border: none;
}
.submit {
  background-color: #595959;
}
.next {
  background-color: #ff8700;
}
.selected {
  background-color: blue;
}
.correct {
  background-color: green;
}
.incorrect {
  background-color: red;
}
</style>


