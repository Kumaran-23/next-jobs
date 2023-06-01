<script>
    import { authenticateUser, isLoggedIn} from "../../utils/auth";
    import { goto } from '$app/navigation';
	let formErrors = {};
    let clicked = false;

    async function signIn(evt) {
        evt.preventDefault();
        clicked = true;

        const result = {
        username: evt.target['username'].value,
        password: evt.target['password'].value, 
        }


        const res = await authenticateUser(result.username, result.password)
        if (res.success) {
            goto('/')
        }
        else {
			throw("username or password incorrect");
        }
    }
    
    
</script>

<h1 class="text-center text-2xl mt-5 font-bold sm:text-3xl text-violet-400">Login</h1>
<div class="flex justify-center items-center mt-8 text-violet-300">
    <form on:submit={signIn} class="w-1/3">
	<div class="form-control w-full">
		<label class="label" for="username">
			<span class="label-text text-xl text-violet-300">Username</span>
		</label>
		<input type="text" name="username" placeholder="Type here" class="input input-bordered w-full" required />
		{#if 'username' in formErrors}
            <label class="label" for="username">
                <span class="label-text-alt text-red-500">{formErrors['username'].message}</span>
            </label>
        {/if}
	</div>
	<div class="form-control w-full">
		<label class="label" for="password">
			<span class="label-text text-xl text-violet-300">Password</span>
		</label>
		<input type="password" name="password" placeholder="Type here" class="input input-bordered w-full" required />
		{#if 'password' in formErrors}
            <label class="label" for="password">
                <span class="label-text-alt text-red-500">{formErrors['password'].message}</span>
            </label>
        {/if}
	</div>
    <div class="form-control w-full mt-4">
            {#if clicked}
                <button class="btn loading bg-purple-700 hover:bg-purple-800">Login</button>
            {:else}
                <button class="btn bg-purple-700 hover:bg-purple-800">Login</button>
            {/if}
	</div>
	<div class="text-center">
    	<a class="link-hover italic text-xs" href="/users/new">Don't have an account yet? Click here to sign-up instead!.</a>
	</div>
</form>
</div>
