<template>
  <div class="calculator">
    <div class="display">{{current}}</div>
    <div @click="clear" class="btn">C</div>
    <div @click="sign" class="btn">+/-</div>
    <div @click="perc" class="btn">%</div>
    <div @click="div" class="btn operator">/</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="mul" class="btn operator">x</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="sub" class="btn operator">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="add" class="btn operator">+</div>
    <div @click="append('0')" class="btn zero">0</div>
    <div @click="dec" class="btn">.</div>
    <div @click="equal" class="btn operator equals">=</div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      current: "0",
      operator: null,
      prev: null,
      isClicked: false
    };
  },
  methods: {
    clear() {
      this.current = "0";
    },
    sign() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    perc() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.isClicked) {
        this.current = "";
        this.isClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dec() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrev() {
      this.prev = this.current;
      this.isClicked = true;
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrev();
    },
    sub() {
      this.operator = (a, b) => a - b;
      this.setPrev();
    },
    mul() {
      this.operator = (a, b) => a * b;
      this.setPrev();
    },
    div() {
      this.operator = (a, b) => a / b;
      this.setPrev();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.prev)
      )}`;
      this.prev = null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  background-color: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  text-align: center;
  line-height: 2em;
  font-size: 25px;
  width: 250px;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid #999;
  box-shadow: 0px 0px 5px #999;
}
.display {
  grid-column: 1/5;
  color: white;
  text-align: right;
  padding-right: 0.9em;
}
.zero {
  grid-column: 1/3;
  border-bottom-left-radius: 10px;
}
.equals {
  border-bottom-right-radius: 10px;
}
.btn {
  background-color: #f2f2f2;
  border: 1px solid #999;
}
.btn:hover {
  cursor: pointer;
}
.operator {
  background-color: orange;
  color: white;
}
</style>
