<script>
  import Logo from './Logo.svelte';
  import './fonts.css';
  import './app.css';
</script>

<main class="min-h-screen bg-white flex flex-col justify-between p-8 font-smooth">
  <header>
    <Logo />
  </header>
  
  <div class="flex-grow"></div>
  
  <footer class="flex flex-col space-y-4">
    <h1 class="text-4xl font-bold">Outpace</h1>
    <p class="text-xl">Full-service Design Partner</p>
    <a href="#" class="text-xl underline">Book intro</a>
  </footer>
</main>

<style>
  :global(body) {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }
</style>