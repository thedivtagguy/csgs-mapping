<script context="module">
	export const prerender = true;
</script>

<script>
	const handleSubmit = (e) => {
		e.preventDefault()
		let myForm = document.getElementById('myform');
		let formData = new FormData(myForm);
		fetch('/', {
			method: 'POST',
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString()
		}).then(() => console.log('Form successfully submitted')).catch((error) =>
			alert(error))
	}
</script>

<form id="myform" on:submit{handleSubmit} name="hello" method="POST" data-netlify="true">
	<p><label>Your Name: <input type="text" name="name" /></label></p>
	<p><label>Your Email: <input type="email" name="email" /></label></p>
	<p><label>Message: <textarea name="message"></textarea></label></p>
	<p><button class="mx-2 bg-red-50 border-2 px-2 rounded-md  block mx-auto" type="submit">Send</button></p>
	<br>
	<input type="hidden" name="form-name" value="hello">
</form>