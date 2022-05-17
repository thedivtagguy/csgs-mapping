
	///////////////////////////////////////////////////////////////////
	// Data Preprocessing /////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////
function cleanPublication(publications) {
	const refined = [];
	// We will keep only year, title, genre
	const data = publications.map(d => ({
		year: d.year,
		title: d.title,
		genre: d.genre,
		totalCount: 0,
	}));

	// Delete items where year is empty
	data.forEach(d => {
		if (d.year !== '') {
			refined.push(d);
		}
	});
	refined.sort((a, b) => a.year - b.year);
	// Count the number of books in each year and add that to the totalCount
	refined.forEach(d => {
		const year = d.year;
		const count = refined.filter(d => d.year === year).length;
		d.totalCount = count;
	});

	// Convert year to number
	refined.forEach(d => {
		d.year = +d.year;
	});

	// Convert the dataset from an array to an array of objects
	// Where each year is a key and it contains objects for each book
	let result = refined.reduce(function (r, a){
		r[a.year] = r[a.year] || [];
		r[a.year].push(a);
		return r;
	}, Object.create(null));

	// Convert that to an array of objects
	let data2 = Object.values(result);


	////////////////////////////////////////////////////////////////////
	/////////// Genre Filters //////////////////////////////////////////
	////////////////////////////////////////////////////////////////////

	// Create an array of unique genres
	const genres = data.map(d => d.genre).filter((v, i, a) => a.indexOf(v) === i);
	const genreColors = ["#Fac937", "#1d7485", "#88ab46", "#99262a", "#381b37", "#Ac4447", "#993300", "#818181", "#0E8587"]

	// Iterate through data2 and add an item called color with the associated color for each book
	data2.forEach(d => {
		d.forEach(d => {
			d.color = genreColors[genres.indexOf(d.genre)];
		});
	});

return {data2, genres};
}

    ///////////////////////////////////////////////////////////////////
    // Export cleanPublication /////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
export default cleanPublication;