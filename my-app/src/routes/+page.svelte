<script>
	import logo_quiz from '$lib/images/quiz_logo.png';
	import Button from '@smui/button';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="logo">
			<picture>
				<img src={logo_quiz} alt="logo" />
			</picture>
		</span>

		Prêt à commencer ?
	</h1>

	<Button href="/quiz" variant="raised">Commencer</Button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.logo {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.logo img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
