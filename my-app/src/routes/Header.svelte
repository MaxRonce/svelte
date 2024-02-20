
<script>
	import logo_quiz from '$lib/images/quiz_logo.png';
	import Button from '@smui/button';
</script>
<header>
	<div class="corner">
		<a href="/">
			<img src={logo_quiz} alt="Logo" />
		</a>
	</div>
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/quizlist">Play</a>
			</li>
			<li>
				<a href="/import">Import</a>
			</li>
			<li>
				<a href="/export">Export</a>
			</li>
            <li>
                <a href="/debug">debug quiz</a>
            </li>
		</ul>
	</nav>
	<div class="corner">
		<a href="/cart">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<circle cx="9" cy="21" r="1" />
				<circle cx="20" cy="21" r="1" />
				<path d="M21 15s-2-4-5-4H8c-3 0-5 4-5 4" />
			</svg>
		</a>
	</div>
</header>

<style>
	
	header {
        display: flex;
        justify-content: space-between;
		background: rgba(255, 255, 255, 0.7);
    }

    .corner {
        width: 3em;
        height: 3em;
    }

    .corner a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .corner img {
        width: 2em;
        height: 2em;
        object-fit: contain;
    }

    nav {
        display: flex;
        justify-content: center;
        --background: rgba(255, 255, 255, 0.7);
    }

    svg {
        width: 2em;
        height: 3em;
        display: block;
    }

    path {
        fill: var(--background);
    }

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background: var(--background);
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }

    li[aria-current='page']::before {
        --size: 6px;
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--color-theme-1);
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: var(--color-text);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--color-theme-1);
    }
</style>
