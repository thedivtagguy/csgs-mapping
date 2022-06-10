<script>
    export let hit;
</script>
  
  <h2>{@html hit.title}</h2>
  
  <div>
    <ul>
      <li>Type: {@html hit.genre}</li>
      <li>Height: {@html hit.year}</li>
    </ul>
  </div>
  
  <style>
    /* highlights text matching the search string */
    :global(em) {
      color: darkcyan;
      line-height: 1.2em;
      border-radius: 3pt;
      font-style: normal;
    }
    div {
      display: flex;
      justify-content: space-between;
    }
  </style>