<script>
  import Card from "./Card.svelte";

  addEventListener("keypress", (ev)=> {
    if (ev.keyCode === 39) {

    }
  });
</script>

<div class="stack">
  <div class="card">
    <Card active={true} />
  </div>
  <div class="card">
    <Card sideA="hi" />
  </div>
  <div class="card card-topify">
    <Card sideA="wot" />
  </div>
</div>

<style>
  .stack {
    position: relative;
  }
  .card {
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.44);
    -webkit-box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.44);
    -moz-box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.44);
  }
  .card-topify {
    animation: moveTop 1s ease-in;
    z-index: 7;
  }
  @keyframes moveTop {
    0% {
        transform: rotateZ(0deg);
        transform: scale(90%);
    }
    50% {
        z-index: 7;
        transform: translateX(40);
    }
    100% {
       z-index: 7;
    }
  }
  .card:nth-child(1) {
    z-index: 5;
    position: fixed;
  }
  .card:nth-child(2) {
    z-index: 4;
    position: fixed;
    transform: rotateZ(-5deg);
  }
  .card:nth-child(3) {
    z-index: 3;
    position: fixed;
    left: -1px;
    transform: rotateZ(2deg);
  }
</style>
