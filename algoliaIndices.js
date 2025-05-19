// Function algoliaIndices loads all the data from the data/indices folder
// It is multiple async functions that are called in sequence
// It is of the form:
// async function loadData() {
//     // Fetch data from data/indices folder
//     const json = await import('./src/data/indices/publications.csv.json', {
//       assert: { type: 'json' }
//     });
//     return json.default.map((el) => ({ ...el, id: el.title }))
//   }
  

async function loadPublications() {
    // Fetch data from data/indices folder
    const json = await import('./src/data/indices/publications.csv.json', {
      assert: { type: 'json' }
    });
    return json.default.map((el) => ({ ...el, id: el.id }))
}

async function loadAVMaterial() {
    // Fetch data from data/indices folder
    const json = await import('./src/data/indices/avMaterial.csv.json', {
      assert: { type: 'json' }
    });
    return json.default.map((el) => ({ ...el, id: el.id }))
}

async function loadEvents() {
    // Fetch data from data/indices folder
    const json = await import('./src/data/indices/events.csv.json', {
      assert: { type: 'json' }
    });
    return json.default.map((el) => ({ ...el, id: el.id }))
}

async function loadDigitalSpaces() {
    // Fetch data from data/indices folder
    const json = await import('./src/data/indices/digitalSpaces.csv.json', {
      assert: { type: 'json' }
    });
    return json.default.map((el) => ({ ...el, id: el.id }))
}

async function loadMiscellaneous() {
    // Fetch data from data/indices folder
    const json = await import('./src/data/indices/miscellaneous.csv.json', {
      assert: { type: 'json' }
    });
    return json.default.map((el) => ({ ...el, id: el.id }))
}

async function loadOrganizations() {
    // Fetch data from data/indices folder
    const json = await import('./src/data/indices/organizations.csv.json', {
      assert: { type: 'json' }
    });
    return json.default.map((el) => ({ ...el, id: el.id }))
}

export {
  // Export all the functions
  loadPublications,
  loadAVMaterial,
  loadEvents,
  loadDigitalSpaces,
  loadMiscellaneous,
  loadOrganizations
}