<script>
export default {
  async asyncData({ req, redirect }) {
    let userAgent = ''
    if (process.server && req) {
      userAgent = req.headers['user-agent'] || ''
    }
    const isMobile = /Android|iPhone|iPad|Mobile/i.test(userAgent)
    if (isMobile) {
      return redirect('/mobile')
    } else {
      return redirect('/pc')
    }
  }
}
</script>
<style>
  body {
    margin: 0 !important
  }
</style>