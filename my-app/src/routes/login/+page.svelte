<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Cookies from 'js-cookie';

	let username = '';
	let password = '';

	const users = writable([]);

	onMount(async () => {
		// Charger les utilisateurs depuis le fichier JSON
		const response = await fetch('src/users.json');
		const data = await response.json();
		console.log(data);
		users.set(data);
	});

	const handleLogin = () => {
		const userList = $users;
		// Vérifier si l'utilisateur existe
		const user = userList.find(
			u => u.username === username && u.password === password,
		);

		if (user) {
			// Stocke l'utilisateur dans un cookie pour le garder connecté après un rafraîchissement
			Cookies.set('currentUser', user);
			// Rediriger l'utilisateur vers une page d'accueil ou une autre page de l'application
			window.location.href = '/';
		} else {
			// Afficher un message d'erreur
			alert('Invalid username or password');
		}
	};

	// const register = async () => {
	// 	const userList = $users;
	// 	const user = userList.find(u => u.username === username);
	// 	if (user) {
	// 		alert('Username already exists');
	// 	} else {
	// 		const newUser = { username, password };
	// 		userList.push(newUser);
	// 		users.set(userList);
	// 		// Supprime le fichier JSON existant
	// 		await fetch('src/users.json', {
	// 			method: 'DELETE',
	// 		});

	// 		await fetch('src/users.json', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify(userList),
	// 		});

	// 		Cookies.set('currentUser', newUser);
	// 		window.location.href = '/';
	// 	}
	// };
</script>

<div class="container">
	<!-- <h1 class="is-size-3 has-text-weight-semibold my-4">Login or Register</h1> -->
	<h1 class="is-size-3 has-text-weight-semibold my-4">Login</h1>
	<form>
		<input
			bind:value={username}
			class="input my-2"
			type="text"
			placeholder="Username"
			name="username"
			required
		/>
		<input
			bind:value={password}
			class="input my-2"
			type="password"
			placeholder="Password"
			name="password"
			required
		/>
		<button class="button is-primary mt-4" on:click={handleLogin} type="submit"
			>Login</button
		>
		<!-- <button class="button is-info mt-4" on:click={register}>Register</button> -->
	</form>
</div>
