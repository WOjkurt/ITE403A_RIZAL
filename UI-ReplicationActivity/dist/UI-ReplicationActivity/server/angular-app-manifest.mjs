
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 643, hash: '572ed685ddf57c1398b38ff19a9327ccbc03b171b7202713b295628d17a5141d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: '1fb161bd2b5d0ba693450d8335821760f86b9a0898c08bc62f7272720bb6ab56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3992, hash: '4714c38edcd544b83aa76389c5a74749039051532f44f4db98149b094adc73d3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZFLTIRRA.css': {size: 72, hash: 'HHrq9nOxyFM', text: () => import('./assets-chunks/styles-ZFLTIRRA_css.mjs').then(m => m.default)}
  },
};
