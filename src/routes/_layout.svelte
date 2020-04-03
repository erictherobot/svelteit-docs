<script>
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
  import Aside from '../components/Aside.svelte'
  import { Container, Row, Column } from '@erictherobot/svelteit'
  export let segment
</script>

<style lang="scss" global>
  @import '../../static/styles/scss/index.scss';
</style>

<Container full>
  <Row>
    <Header />
  </Row>
  <Row>
    <Column class="hidden-sm-down">
      <Aside {segment} />
    </Column>
    <Column
      class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-7 offset-md-3
      offset-lg-3 offset-xl-2">
      <main>
        <slot />
      </main>
    </Column>
  </Row>
  <!-- <Row>
    <Footer />
  </Row> -->
</Container>
