window.MIP.registerVueCustomElement('mip-test-btn', {
  template: `
    <div></div>
  `,
  prerenderAllowed () {
    return true
  },
  mounted () {
    console.log('mounted...')
  }
})
