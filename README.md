# Website Starter

This is a website starter used for sites and projects at [thedivtagguy](https://thedivtagguy.com). There is some minimal changes required before getting started.

## Google Docs
For all text pages and written content, I use archieML to pull in data from Google Docs and render it on specific pages. This is done in two ways: 

### 1. Google Sheets
This is the main sheet that will be used to store details of all blogposts and other content, the main source of truth for links, tags, keywords, titles and unique IDs. 

Start by creating a new Google Sheet, enabling sharing and editing the `google.config.cjs` file with the ID.

If you wish to add individual pages, add an object in the array like so: 
```js
{
    id: "1j4G8hIduB5lHPZ9GMeRtV3au_fykZcCKU9W7RwUR9tY",
    filepath: "src/data/trial.json"
  },
```

### 2. Google Drive Folder
This is the folder that will be used to store all pages. Only the ID of the folder and all documents within that folder will be downloaded and processed.

Start by creating a new Google Drive folder, enabling sharing and editing the **line 19** of the `/tasks/collect-docs.cjs` with the `topFolderId` variable.

## Deploy

Create a new repo and deploy to Netlify from there. 

## Subdirectory
Each microsite, if associated to thedivtagguy main site will reside in `thedivtagguy.com/projects/<project-name>`. In order to make this work, add the following to the `netlify.toml`

```
[[redirects]]
  from = "/projects/<project-name>"
  to = "netlify-url"
  status = 200
  force = true
```

And in the project repo, allow CORS from the main site.
```
[[headers]]
  # Define which paths this specific [[headers]] block will cover.
  for = "/*"
    [headers.values]
    Access-Control-Allow-Origin = "*"
```
