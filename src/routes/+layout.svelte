<script>
  import "../app.css";
  import { isLogged, logOut } from "../utils/auth";
  import { goto } from '$app/navigation';

  function logIn() {
    goto('/login')
  }

  function signOut() {
    logOut();
    goto("/")
  }

  function goToPost() {
    goto('/jobs/new')
  }
</script>
<div class="flex flex-wrap justify-end " data-theme="dark">
  <button class="btn mr-6">
    <a href="/">Home</a>
  </button>
  {#if $isLogged}
      <button class="btn mr-6" on:click={signOut}>Sign Out</button>
  {:else}
      <button class="btn mr-6" on:click={logIn}>Log In</button>
  {/if}
  {#if $isLogged}
    <button class="btn mr-6" on:click={goToPost}>Post a Job</button>
  {:else}
      <button class="btn mr-6" on:click={logIn}>Post a Job</button>
  {/if}
  <button class="btn btm-md ">
    <a href='/users/new'>Create Account</a>
  </button>
</div>
<slot />