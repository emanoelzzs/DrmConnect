import { useState, useEffect } from "react";
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";
import { envImagensStorage } from "../services/uploadImages";

export default function PaginaDeUsuario(){
    const irPara = useNavigate()
    const [ mudarNome, setMudarNome ] = useState(false)
    const [ nome, setNome ] = useState("")
    const [ urlImg, setUrlImg ] = useState(null)
    const [ img, setImg ] = useState(null)

    useEffect(() => {
        async function buscarUser(){
            const { data: { user }, error } = await supabase.auth.getUser()
            if(error){
                alert("algo deu errado, tente novamente mais tarde!")
                return
            }
            const nomeDeUsuario = user.user_metadata?.full_name || ""
            setNome(nomeDeUsuario)
            const avatar = user.user_metadata?.avatar_url
            setUrlImg(avatar)
            
        }
        buscarUser()
    }, [])

    async function mudarNomeDeUsuario() {
        const res = await supabase.auth.updateUser({
            data: { full_name: nome }
        })
        if(res.error){
            alert("mudaça n funcionou")
        }else{
            alert("nome alterado")
            setMudarNome(false)
            irPara("/home")
        }
    }

    async function mudarFotoDePerfil() {
        if(img == null){
            alert("coloque algo")
            return
        }
        const imgUrl = await envImagensStorage("perfilFotoDefault", img)
        const res = await supabase.auth.updateUser({
            data:{
                avatar_url: imgUrl
            }
        })
        if(res.error){
            alert("algo deu errado")
        }else{
            alert("deu certo")
            setMudarNome(false)
            irPara("/home")
        }
    }
    return(
        <div>
            {!mudarNome ? <img src={urlImg} /> : <input type="file" accept="image/png,image/jpeg" onChange={e => setImg(e.target.files[0])} />}
            {!mudarNome ? <span></span> : <button onClick={() => mudarFotoDePerfil()}>Mudar foto</button>}
            {!mudarNome ? <span><h1>{nome}</h1></span> : <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>}
            {!mudarNome ? <button onClick={() => setMudarNome(true)}>Editar</button> : <button onClick={() => mudarNomeDeUsuario()}>Alterar</button>}
       </div>
    )
}