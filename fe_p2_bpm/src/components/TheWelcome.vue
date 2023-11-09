<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Game of Thrones</template>

    Quien se sienta en el Trono de Hierro, controla los siete reinos. Eso significa una 
    lucha de sangre y poder entre las nobles casas de Westeros. No importa si eres team Stark, 
    Lannister o Targaryen, nunca es un mal momento de revivir esta historia.
    <a href="https://www.hbomax.com/bo/es/series/urn:hbo:series:GVU2cggagzYNJjhsJATwo?countryRedirect=1" target="_blank" rel="noopener">Trailer HBO</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>FRIENDS</template>

    Esta comedia televisiva sigue las aventuras y desventuras en el trabajo, 
    el amor y la vida de seis amigos veinteañeros que viven en Manhattan 
    durante los noventa.<a href="https://www.netflix.com/bl-es/title/70153404" target="_blank" rel="noopener">Trailer Netflix</a> 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>BIG BANG THEORY</template>

    Mientras los físicos Leonard y Sheldon completan 
    su pandilla de frikis con Howard y Raj, la aspirante 
    a actriz Penny ocupa el piso de enfrente.
    <a href="https://pelisflix.email/serie/the-big-bang-theory-serie-todas-temporadas-hd-a-kmpu/" target="_blank" rel="noopener">Traler PELISFLIX</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>MALCON EL DEL MEDIO</template>

    Sitcom familiar que aborda los divertidos problemas y situaciones de una familia
     americana de clase media en la que el hijo Malcolm parece ser el único sensato... 
     o al menos el único que da señales de cordura. La familia está compuesta por sus 
     neuróticos padres Hal y Lois, el hermano mayor Francis y sus otros dos hermanos, Reese y Dewey.
    <a href="https://clasicostv.org/serie/malcolm" target="_blank" rel="noopener">Trailer CLASICOTV</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>HOW I MET YOUR MOTHER</template>

    Un padre cuenta a sus hijos, a través de una serie de flashbacks, 
    el viaje que él y sus cuatro mejores amigos hicieron antes de conocer a su madre.
    <a href="https://www17.pelisplushd.to/serie/how-i-met-your-mother/temporada/1/capitulo/1" target="_blank" rel="noopener">Trailer PELISPLUS</a>.
  </WelcomeItem>
</template>
