<script>
    import Search from 'svelte-algolia'
    import Hit from './Hit.svelte'
  
    const appId = '8P43BBJQAR'
    const searchKey = '2c3f24b6adc627d1edf4a3e6879e1e62'
</script>
  
  <header>
    <Search
      {appId}
      {searchKey}
      indices={{ publications: Hit }}
      placeholder="Search Pokedex" />
  </header>