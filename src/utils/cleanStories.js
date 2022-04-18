import { timeParse, timeFormat } from "d3";
import filterStoryProps from "./filterStoryProps";

const makeArray = (str) => {
  if (str) {
    // Split and trim 
    return str.split(",").map((d) => d.trim()); 
  }
  return [];
};

const makeLink = (str) => {
  if (str) {
    // Keep string after the last slash
    return str.split("/").pop();
  }
  return "";
};

const makeSlug = (str) => {
  return str.toLowerCase().replace(/[-,/]/g, "_");
};

const imgName = (str) => {
  return str.toLowerCase().replace(/[-,/]/g, "_");
};

let result = [];

// Take in a story and key and return a cleaned version of the story
// with the key and value removed
const parseStories = (story, key) => {
  result = story.map((d) => {
    const output = {};
    key.forEach((keys) => (output[keys] = d[keys]));
    return output;
  });

  const storiesData = result.map((d) => {
    const output = {};
    output.heading = d.heading;
    output.slug = makeSlug(d.url);
    output.author = makeArray(d.author);
    // Clean date
    output.date = timeParse("%d/%m/%Y")(d.date);
    // Convert date to d, month and year
    output.month = timeFormat("%B")(output.date);
    output.year = timeFormat("%Y")(output.date);
    output.date = timeFormat("%d %B %Y")(output.date);

    // If null date, set to null
    if (output.date === "01 January 1970") {
      output.date = null;
    }
    output.description = d.desc;
    output.keyword = makeArray(d.keyword);
    output.category = makeArray(d.cat);
    output.published = d.published;
    output.thumbnail = makeSlug(d.url);
    output.featured = d.featured;
    output.link = makeLink(d.url);
    output.tools = makeArray(d.tools);
    return output;
  });
  // Only keep stories that are published
  storiesData.forEach((d) => {
    if (d.published === "TRUE") {
      result.push(d);
    }
  });
  return storiesData;
};

export default parseStories;
