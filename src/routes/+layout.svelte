<script>
  import "../app.css";
  import { isLogged, logOut } from "../utils/auth";
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte'
import { themeChange } from 'theme-change'
	import Alert from "./Alert.svelte";
  import Header from "./Header.svelte";
</script>
<Header />
<Alert />
<slot />