export let darktheme = null;

if (
	localStorage.length === 0 &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
    localStorage.setItem("theme","coffee")
}else if (
	localStorage.length === 0 &&
	window.matchMedia('(prefers-color-scheme: light)').matches
) {
	localStorage.setItem("theme","retro")
}

if (
	localStorage.getItem('theme') === 'coffee' &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	darktheme = true
} else {
	darktheme = false
}
