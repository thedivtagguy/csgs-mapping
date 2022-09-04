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



<div class="mt-10 md:py-24 px-6 sm:mt-0">
	<div class="md:grid md:grid-cols-3 md:gap-6">
	  <div class="md:col-span-1">
		<div class="px-4 sm:px-0">
		  <h3 class="text-lg font-medium leading-6 text-gray-900">Contribute a Resource</h3>
		  <p class="mt-1 text-sm text-gray-600">
			Please enter the details of the resource below. Our team will go through the submission, and if it meets our criteria, we’ll add it to the database.
		  </p>
		</div>
	  </div>
	  <div class="mt-5 md:mt-0 md:col-span-2">
		<form id="myform" on:submit{handleSubmit} name="submission" method="POST" data-netlify="true">
		  <div class="overflow-hidden sm:rounded-md">
			<div class="px-4 py-5  sm:p-6">
			  <div class="flex flex-col gap-6">
				<div class="col-span-6 sm:col-span-3">
				  <label for="first_name" class="blocktext-sm pb-2 font-medium text-gray-900 dark:text-gray-400">Name*</label>
				  <input required type="text" name="name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
				</div>
  
				
  
				<div class="col-span-6 sm:col-span-4">
				  <label for="email_address" class="blocktext-sm pb-2 font-medium text-gray-900 dark:text-gray-400">Email address*</label>
				  <input required type="text" name="email" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
				</div>
  
  
				
  
			
  
				<div class="col-span-6 sm:col-span-3 lg:col-span-2">
				  <label for="resource_name" class="blocktext-sm pb-2 font-medium text-gray-900 dark:text-gray-400">Resource Name or Link*</label>
				  <input required type="text" name="resource" id="resource_name" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
				</div>

				<div class="col-span-6 sm:col-span-3 lg:col-span-2">
					<label for="resource_contact" class="blocktext-sm pb-2 font-medium text-gray-900 dark:text-gray-400">Do they have a contact address? Email or number? If yes, please drop it below</label>
					<input type="text" name="resource_contact" id="resource_contact" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
				  </div>




				<div>
					<label for="category" class="blocktext-sm pb-2 font-medium text-gray-900 dark:text-gray-400">Resource Category*</label>
					<select required id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option selected="">Select category</option>
					<option value="Institutions/Organization">Institutions/Organization</option>
					<option value="Publication">Publication</option>
					<option value="AV Material">AV Material</option>
					<option value="Event">Event</option>
					<option value="Digital Space">Digital Space</option>
					</select>
				</div>

				<div>
					<label for="comments" class="blocktext-sm pb-2 font-medium text-gray-900 dark:text-gray-400">Optional: If you have any additional comments, we'd love to hear from you</label>
					<textarea id="comments" name="comments" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
					
				</div>
			  </div>
			</div>
			<div class="px-4 py-3 0 text-right sm:px-6">
			  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Save
			  </button>
			</div>
		  </div>
		  <input type="hidden" name="form-name" value="submission">

		</form>
	  </div>
	</div>
  </div>
