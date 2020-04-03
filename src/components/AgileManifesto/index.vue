<template>
  <transition-group name="fade-in" tag="div">
    <div
      v-for="(agile, i) in agile"
      class="principle"
      :key="i + 0"
      v-show="i === slideIndex"
    >
      <span>Agile Principle #{{ i + 1 }}</span>
      <h2>{{ agile.principle }}</h2>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { db } from "@/main.ts";

@Component
export default class AgileManifesto extends Vue {
  principles: Array<object> = [];
  show = 0;
  slideIndex = 0;

  get agile() {
    return this.$store.state.agile;
  }

  async getPrinciples() {
    const snapshot = await db.collection("principles").get();
    snapshot.forEach(doc => {
      const appData = doc.data();
      appData.id = doc.id;
      this.principles.push(appData);
    });
    this.$store.commit("setAgile", this.principles);
  }

  showPrinciple() {
    this.slideIndex++;
    if (this.slideIndex > this.agile.length - 1) {
      this.slideIndex = 0;
    }
    setTimeout(this.showPrinciple, 5000);
  }

  mounted() {
    this.getPrinciples();
    this.showPrinciple();
  }
}
</script>

<style scoped lang="scss">
.principle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 90%;
  margin: 0 auto;
}

.fade-in-enter-active {
  transition: all 3s ease;
}

.fade-in-leave-active {
  transition: all 0s ease;
}

.fade-in-enter,
.fade-in-leave-to {
  position: absolute;
  opacity: 0;
}
</style>
