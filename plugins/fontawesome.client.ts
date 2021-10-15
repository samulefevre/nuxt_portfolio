import { defineNuxtPlugin } from '#app'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



export default defineNuxtPlugin(nuxtApp => {
  library.add(faGithub, faTwitter, faLinkedin)
  
  nuxtApp.app.component('font-awesome-icon', FontAwesomeIcon)
})
