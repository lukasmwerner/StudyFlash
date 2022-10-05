<script>
  import dompurify from "dompurify";
  import { createEventDispatcher } from "svelte";
  import Flippable from "./lib/Flippable.svelte";
  export let sideA = "hello there";
  export let sideB = "obi wan kanobi";
  export let active = false;
  export let id = "";
  let cleanA = dompurify.sanitize(sideA);
  let cleanB = dompurify.sanitize(sideB);

  let flip = false;

  let dispatch = createEventDispatcher();

  if (active) {
    addEventListener("keydown", (ev) => {
      if (ev.keyCode == 32 || ev.keyCode == 38 || ev.keyCode == 40) {
        flip = !flip;
        dispatch("cardFlip");
      }
    });
  }
</script>

<Flippable width={"calc(32px * 24)"} height={"calc(32px * 16)"} {flip} >
  <div class="card" slot="front">
    <h1>{cleanA}</h1>
  </div>
  <div class="card" slot="back">
    <h1>{cleanB}</h1>
  </div>
</Flippable>

<style>
  .card {
    max-width: calc(32px * 24);
    min-width: calc(32px * 24);
    max-height: calc(32px * 16);
    min-height: calc(32px * 16);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
