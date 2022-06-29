<script>
  import Button from './Button.svelte'
  let someText = `Frontend Developer at Improving`;
  let count = 0;
  let styles = { darkMode: false }

  function handleclick() {
    count += 1;
  }

  function toggleTheme() {
    styles.darkMode = !styles.darkMode
    window.document.body.classList.toggle('dark-mode')
  }
</script>

<style>
  p {
    color: var(--theme-color);
  }
</style>

<div class="About">

  {#if !styles.darkMode}
    <p>{someText}</p>
  {:else}
    <p>
      <span>Hello DarkMode</span>
    </p>
  {/if}
  <Button
    text='Click'
    count={count}
    on:click={handleclick}
  />
  <Button
  text='Dark Mode'
  on:click={toggleTheme}
/>
</div>