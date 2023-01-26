import { api } from 'boot/axios'

export default  function useApi (url) {

    const List = async () => {
        try{
            const {data} = await api.get(url)
            return data
        } catch (error) {

        }
    }

    const Getbyid = async (id) => {
        try{
            const {data} = await api.get(`${url}/${id}`)
            return data
        } catch (error) {

        }
    }

    const Post = async (form) => {
        try{
            const {data} = await api.post(url, form)
            return data
        } catch (error) {

        }
    }

    const   Update = async (form) => {
        try{
            const {data} = await api.put(`${url}/${form.id}`, form)
            return data
        } catch (error) {

        }
    }

    const   Remove = async (id) => {
        try{
            const {data} = await api.delete(`${url}/${id}`)
            return data
        } catch (error) {

        }
    }
return {
        List,
        Post,
        Update,
        Remove,
        Getbyid
    }

}