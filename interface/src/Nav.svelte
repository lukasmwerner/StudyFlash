<script>
  import {
    FolderIcon,
    PlusIcon,
    ProfileCircledIcon,
  } from "@indaco/svelte-iconoir";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleFolderClick() {
    dispatch("folderClick");
  }
  function handleNewClick() {
    dispatch("newClick");
  }
  function handleProfileClick() {
    dispatch("profileClick");
  }
</script>

<div class="nav">
  <h1>Study Flash</h1>
  <ProfileCircledIcon size={"32px"} on:click={handleProfileClick} />
  <FolderIcon size={"32px"} on:click={handleFolderClick} />
  <PlusIcon size={"32px"} on:click={handleNewClick} />
</div>

<style>
  .nav {
    margin: 34px;
    padding: 16px;
    display: flex;
    flex-direction: row;

    background-color: white;
    min-height: calc(32px * 2);
    max-height: calc(32px * 2);
    align-items: center;
    gap: 8px;
  }
  .nav h1 {
    padding-right: 8px;
  }
</style>
