<template>
    <q-page padding>

        <q-form @submit="onSubmit" @reset="onReset" class="row q-col-gutter-sm">

            <q-input filled v-model="form.author" class="col-lg-6 col-xs-12" label="Author" lazy-rules

                :rules="[val => val && val.length > 0 || 'Campo obrigatório']" />


            <q-input filled v-model="form.title" class="col-lg-6 col-xs-12" label="Title" lazy-rules

                :rules="[val => val && val.length > 0 || 'Campo obrigatório']" />


            <div class="col-lg-12 col-xs-12">
                <q-editor v-model="form.content" min-height="5rem" /> 
                    
            </div>

            <div class="col-12 q-gutter-sm">
                <q-btn :to="{ name: 'home'}" label="Cancelar" text-color="primary" class="float-right" />
                <q-btn type="submit"  label="Salvar" color="primary" class="float-right" />
                
            </div>

            

        </q-form>

    </q-page>

</template>

<script>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router'
import postService from 'src/service/posts'
export default {

    setup() {

        const $q = useQuasar()
        const router = useRouter()
        const route = useRoute()

        const {Post, Getbyid, Update} = postService()
       

        const form = ref({ 
            
            title: '',
            content: '',
            author: '',

        
        })

        onMounted( async () => {
            if (route.params.id) {
              getPost(route.params.id)
            }
        })


        const getPost = async (id) => {

            try{
                
                const response =  await Getbyid(id)
               form.value = response

            } catch (error){
                
            }   

        }

        const onSubmit = async () => {

            try{
                
                if(form.value.id)[
                    await Update(form.value)
                ]

                await Post(form.value)

                router.push({ name: 'home'})
                
                $q.notify({ message: 'Feito com sucesso', icon: 'check', color: 'positive'})

            } catch (error){
                
            }

        }

        return {
            form,
            onSubmit
        }
    }

}
</script>

<style>

</style>