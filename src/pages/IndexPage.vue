<template>
 <q-page padding>
      <div class="q-pa-md">

       <q-table title="CRUD DO GUGA" :rows="posts" :columns="columns" row-key="name">

        <template v-slot:top>
          <span class="text-h5">CRUD DO GUGA</span>
            <q-space/>
          <q-btn color="primary" label="Novo" :to="{ name: 'FormPost' }" />
        </template>
        
        <template v-slot:body-cell-actions="props">
          
          <q-td :props="props" class="col-12 q-gutter-sm">
            <q-btn icon="delete" color="negative" dense size="sm" @click="removePost(props.row.id)"/>
            <q-btn icon="edit" color="primary" dense size="sm" @click="editPost(props.row.id)" />
          </q-td>

          </template>

       </q-table>

      </div>
    </q-page>
</template>

<script lang="ts">

import { ref , onMounted} from 'vue'
import postService from 'src/service/posts'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default {
 
  setup() {
    const posts = ref([]);
    const $q = useQuasar()
    const { List, Remove } = postService() 
    const router = useRouter()
    const columns = [
      { name: 'id', field: 'id', label: 'id', sortable: true, aling:'flex' },
      { name: 'author', field: 'author', label: 'Author', sortable: true, aling:'flex' },
      { name: 'title', field: 'title', label: 'Titulo', sortable: true, aling:'flex' },
      { name: 'actions', field: 'actions', label: 'Ações', aling: 'rigth' }
    ]

    onMounted(() => {
      getPost()
    })

    const getPost  = async () =>{
      try{
        const data = await List()
        posts.value = data
      } catch (error){
        console.log(error)
      }
    }

    const removePost = async (id:number) => {
      try {

        await Remove(id)
        $q.notify({ message: 'Apagado com sucesso', icon: 'check', color: 'positive'})

        await getPost()

      } catch (error) {
      alert("sucesso")
      }
    }

    const editPost = ( id:number ) => {

      router.push({ name: 'FormPost', params: { id } })

    }

    return {
      posts,
      columns,
      removePost,
      editPost
    }
  }
  
};
</script>
