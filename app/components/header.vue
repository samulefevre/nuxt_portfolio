<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const router = useRouter()
const activeSection = ref('')

// Gestion de la navigation
const handleNavigation = async (to: string) => {
  if (to === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    activeSection.value = ''
    if (route.path !== '/') {
      await router.push('/')
    }
  } else if (to.startsWith('/#')) {
    const hash = to.substring(1)
    const targetId = hash.substring(1)
    const target = document.getElementById(targetId)
    
    if (target) {
      const headerOffset = 80
      const elementPosition = target.offsetTop
      const offsetPosition = elementPosition - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Force l'activation de la section
      activeSection.value = hash
      
      if (route.path === '/') {
        window.history.replaceState({}, '', to)
      } else {
        await router.push(to)
      }
    }
  }
}

watch(() => route.fullPath, (newPath) => {
  if (newPath === '/') {
    activeSection.value = ''
  } else if (route.hash) {
    activeSection.value = route.hash
  }
})

onMounted(() => {
  const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[]
  
  const updateActiveSection = () => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    
    // Si on est en haut de la page
    if (scrollY < 200) {
      activeSection.value = ''
      return
    }
    
    // Si on est en bas de page, active la dernière section
    if (scrollY + windowHeight >= documentHeight - 100) {
      const lastSection = sections[sections.length - 1]
      if (lastSection?.id) {
        activeSection.value = '#' + lastSection.id
        return
      }
    }
    
    // Sinon, cherche la section visible
    let currentSection = ''
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i]
      if (section && section.offsetTop - 200 <= scrollY) {
        currentSection = '#' + section.id
        break
      }
    }
    
    activeSection.value = currentSection
  }
  
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
  
  // Si on charge la page avec un hash
  if (route.hash) {
    nextTick(() => {
      const targetId = route.hash.substring(1)
      const target = document.getElementById(targetId)
      if (target) {
        setTimeout(() => {
          const headerOffset = 80
          const elementPosition = target.offsetTop
          const offsetPosition = elementPosition - headerOffset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
          activeSection.value = route.hash
        }, 100)
      }
    })
  }
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })
})

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: !activeSection.value,
    onClick: (e: Event) => {
      e.preventDefault()
      handleNavigation('/')
    }
  },
  {
    label: 'Compétences',
    to: '/#skills',
    active: activeSection.value === '#skills',
    onClick: (e: Event) => {
      e.preventDefault()
      handleNavigation('/#skills')
    }
  },
  {
    label: 'Portfolio',
    to: '/#portfolio',
    active: activeSection.value === '#portfolio',
    onClick: (e: Event) => {
      e.preventDefault()
      handleNavigation('/#portfolio')
    }
  },
  {
    label: 'Contact',
    to: '/#contact',
    active: activeSection.value === '#contact',
    onClick: (e: Event) => {
      e.preventDefault()
      handleNavigation('/#contact')
    }
  },
])
</script>






<template>
  <UHeader title="Samuel LEFEVRE">
    <UNavigationMenu :items="items" />
  </UHeader>
</template>
