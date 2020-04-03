<style lang="scss">
  @import '../../static/styles/scss/index.scss';
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: $topbar-height;
    background-color: $white;
    line-height: $topbar-height;
    box-shadow: 0 0 15px -5px $dark;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;

    section {
      margin: 0 1em;
      flex-grow: 1;
      text-align: center;

      li {
        display: inline-block;
        margin: 0 0.5em;
      }

      li:last-child {
        margin-right: 0;
      }

      &:first-child {
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }

      h1 {
        font-size: 2rem;
        font-weight: 400;
        margin: 0;
        img {
          width: 100px;
        }
      }

      h1 a {
        color: $primary;
        text-decoration: none;
      }
    }

    span {
      margin-left: -8px;
      em {
        color: #6d6d6d;
      }
    }
  }
</style>

<header>
  <section>
    <h1>
      <a href=".">
        <img src="../svelteit-logo-brand.svg" alt="Svelteit Logo" />
      </a>
    </h1>
  </section>
  <section>
    <ul>
      <li>v1.0.0-alpha.6</li>
      <li>
        <a href="https://github.com/erictherobot/svelteit">Github</a>
      </li>
    </ul>
  </section>
</header>
