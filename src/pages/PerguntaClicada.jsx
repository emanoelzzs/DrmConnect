import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/supabase";
export default function PerguntaClicada(){
    const { id } = useParams()
    const [pergunta, setPergunta] = useState(null)
    const [respostas, setRespostas] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() =>{
        async function carregarDados() {
            const resPergunta = await supabase
            .from("perguntas")
            .select('*')
            .eq('id', id)
            .single()

            const resRespostas = await supabase
            .from("respostas")
            .select('*')
            .eq("id_pergunta", id)
        }
    })
}