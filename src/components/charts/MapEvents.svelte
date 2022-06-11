<script context='module'>
	// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
	export const attrs = [
		{
			aria_pressed: 'false',
			on_click: event => {
				let element = event.target
				let pressed = (element.getAttribute('aria-pressed') === 'true')
				element.setAttribute('aria-pressed', !pressed)
				if (pressed) {
					console.log('Pressed!')
				} else {
					console.log('Unpressed!')
				}
			},
			on_KeyDown: event => {
				if (event.key === ' ' || event.key === 'Enter' || event.key === 'Spacebar') {
					event.preventDefault()
					let element = event.target
					let pressed = (element.getAttribute('aria-pressed') === 'true')
					element.setAttribute('aria-pressed', !pressed)
					if (pressed) {
                        console.log('Pressed!')
                    } else {
                        console.log('Unpressed!')
				}
			}
		}
    }
]
</script>