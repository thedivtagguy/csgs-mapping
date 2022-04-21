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



<div class="mt-10 py-24 sm:mt-0">
	<div class="md:grid md:grid-cols-3 md:gap-6">
	  <div class="md:col-span-1">
		<div class="px-4 sm:px-0">
		  <h3 class="text-lg font-medium leading-6 text-gray-900">Content Submission Form</h3>
		  <p class="mt-1 text-sm text-gray-600">
			Help us make our repository better by contributing to our documentation.
		  </p>
		</div>
	  </div>
	  <div class="mt-5 md:mt-0 md:col-span-2">
		<form id="myform" on:submit{handleSubmit} name="hello" method="POST" data-netlify="true">
		  <div class="shadow overflow-hidden sm:rounded-md">
			<div class="px-4 py-5 bg-white sm:p-6">
			  <div class="grid grid-cols-6 gap-6">
				<div class="col-span-6 sm:col-span-3">
				  <label for="first_name" class="block text-sm font-medium text-gray-700">Name</label>
				  <input type="text" name="name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
				</div>
  
				
  
				<div class="col-span-6 sm:col-span-4">
				  <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
				  <input type="text" name="email" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
				</div>
  
  
				
  
			
  
				<div class="col-span-6 sm:col-span-3 lg:col-span-2">
				  <label for="postal_code" class="block text-sm font-medium text-gray-700">Your Message</label>
				  <input type="text" name="message" id="postal_code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
				</div>
			  </div>
			</div>
			<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
			  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Save
			  </button>
			</div>
		  </div>
		</form>
	  </div>
	</div>
  </div>
