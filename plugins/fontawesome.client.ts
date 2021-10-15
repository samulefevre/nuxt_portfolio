import { defineNuxtPlugin } from '#app'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faTwitter, faLinkedin)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.app.component('fa', FontAwesomeIcon)
})
