<script setup lang="ts">
import type { Serie } from '@/models/Serie'
import { ref, onMounted } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var series = ref<Serie[]>([])

async function getSeries() {
  series.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/series/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la Serie?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getSeries())
  }
}

onMounted(() => {
  getSeries()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Serie</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Series</h2>
      <div class="col-12">
        <RouterLink to="/series/crear">
          <font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Titulo</th>
            <th scope="col">Sinopsis</th>
            <th scope="col">Director</th>
            <th scope="col">Duración</th>
            <th scope="col">Fecha de Estreno</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(serie, index) in series.values()" :key="serie.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ serie.titulo }}</td>
            <td>{{ serie.sinopsis }}</td>
            <td>{{ serie.director }}</td>
            <td>{{ serie.duracion }}</td>
            <td>{{ serie.fechaEstreno }}</td>
            <td>
              <button class="btn text-success"   @click="toEdit(serie.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />editar
              </button>
              <button class="btn text-danger" @click="toDelete(serie.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
