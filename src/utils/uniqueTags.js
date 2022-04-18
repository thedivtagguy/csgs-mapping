// This function takes in an array of tags and returns an array of unique tags

export default function uniqueTags(array, key) {
    const categoryList = [];
    array.forEach(story => {
        story[key].forEach(category => {
            if (!categoryList.includes(category)) {
                categoryList.push(category.replace(/\w\S*/g, function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }));
            }
        });
    });
    // Remove duplicates
    const uniqueCategoryList = categoryList.filter((item, index) => {
        return categoryList.indexOf(item) === index;
    });
    return uniqueCategoryList;
}