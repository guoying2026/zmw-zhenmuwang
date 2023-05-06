<template>
  <div class="metric-group margin-60-top">
     <div class="metric">
        <div class="circle-chart" :style="{ '--selected-color': `var(--${metric.color}` }">
           <svg viewBox="0 0 36 36">
              <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path class="circle" :stroke-dasharray="`${metric.pct}, 100`" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
           </svg>
          <div class="percentage">{{metric.pct}}</div>
        </div>
       <div class="label">{{metric.title}}</div>
     </div>
  </div>
</template>
<script setup>
const metric = {
  title:"Accessibility",
  pct:100,
  color: 'green',
};
</script>
<style setup lang="scss">
:root {
  --light:#F5F5F5;
  --dark:#212121;
  --brown:#372F25;
  --red:#FD3E3E;
  --orange:#FFAA48;
  --green:#27C86D;
}

*, *::before, *::after { box-sizing:border-box }

body {
  margin:0;

  background-color:var(--dark);
  color:var(--light);
  font-family: Helvetica, Arial, sans-serif;


}

.metric-group {
  display:flex;
  align-items: center;
  justify-content: center;
}

.metric {

.label {
  font-weight:700;
  font-size:0.9rem;
}
}


.circle-chart {

  --selected-color: var(--green);

  color:var(--selected-color);
  display:grid;
  place-items:center;

> * {
  grid-column: 1 / -1;
  grid-row: 1 / -1;
}

.circle-bg {
  fill: var(--brown);
  stroke: var(--brown);
  stroke-width: 2.8;
}

.circle {
  fill: none;
  stroke: var(--selected-color);
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1.2s ease-in-out forwards;

}

.percentage {
  font-family: Monaco, monospace;
  font-weight:bold;
  font-size: 1.4rem;
}

}

.app-editor {
  align-self:end;
  margin-bottom:50px;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>
