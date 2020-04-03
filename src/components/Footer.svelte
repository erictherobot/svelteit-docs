<style lang="scss">
  @import '../../static/styles/scss/index.scss';
  footer {
    bottom: 0;
    left: 0;
    width: 100vw;
    height: $topbar-height;
    line-height: $topbar-height;
    background-color: $white;
    box-shadow: 0 0 15px -5px $dark;
    display: flex;
    flex-wrap: wrap;
  }
  footer section:first-child {
    text-align: left;
  }
  footer section {
    margin: 0 1em;
    flex-grow: 1;
    text-align: center;
  }
  header section h1 {
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
  }
  header section h1 a {
    color: $primary;
  }
  a {
    text-decoration: none;
  }
  em {
    color: $light;
  }
  footer section:first-child {
    text-align: left;
  }
  footer section:last-child {
    text-align: right;
  }
</style>

<footer>
  <section>
    <h1>
      <a href="/">
        Svelte
        <span>
          <em>it</em>
        </span>
      </a>
    </h1>
  </section>
  <section>
    <p>
      &copy;2020
      <a
        href="https://colorfuldots.com"
        title="Svelteit - Created by Colorful Dots, LLC">
        Colorful Dots, LLC
      </a>
    </p>
  </section>
</footer>
