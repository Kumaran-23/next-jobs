<script>
    import { authenticateUser} from "../../utils/auth";
    import { goto } from '$app/navigation'

    async function signIn(evt) {
        evt.preventDefault();

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

<h1 class="text-center text-2xl mt-5 font-bold sm:text-3xl">Login</h1>
<div class="flex justify-center items-center mt-8">
    <form on:submit={signIn} class="w-1/3">
	<div class="form-control w-full">
		<label class="label" for="username">
			<span class="label-text text-xl">Username</span>
		</label>
		<input
			type="text"
			name="username"
			placeholder="Type here"
			class="input input-bordered w-full"
			required
		/>
	</div>
	<div class="form-control w-full">
		<label class="label" for="password">
			<span class="label-text text-xl">Password</span>
		</label>
		<input
			type="password"
			name="password"
			placeholder="Type here"
			class="input input-bordered w-full"
			required
		/>
	</div>
    <div class="form-control w-full mt-4">
		<button class="btn">Log In</button>
	</div>
	<div class="text-center">
    	<a class="link-hover italic text-xs" href="/users/new">Don't have an account yet? Click here to sign-up instead!.</a>
	</div>
</form>
</div>
