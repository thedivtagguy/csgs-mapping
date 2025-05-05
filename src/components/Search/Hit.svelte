<script>
    export let hit;
</script>
  
  <h2>{@html hit.title}</h2>
  
  <div>
    <ul>
      <li>{@html hit.genre}</li>
      <li>{@html hit.year}</li>
      <li>{@html hit.artform}</li>
    </ul>
    <!-- Horizontal line -->
    <hr class="border-gray-200 border-2">
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