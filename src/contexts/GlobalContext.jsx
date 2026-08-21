import { createContext, useState} from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// aqui cria as infos salvas no contexto
    const[usuario, setUsuario] = useState("Lúcio Fernando")

    let pontos = 1234

    const[carrinho, setCarrinho] = useState([
        {
            produto: {
                id: 67,
                nome: 'Nescau batizado',
                preco: 10
            },
            quantidade:1,
            id: 5555,
        }
    ])

    const[cardapioTaverna, setcardapioTaverna] = useState([
        {
            id: 0,
            nome: 'Erupção Crânica (Coca cola com mentos)',
            desc: 'Coca cola saborosa com Mentos para trazer uma explosão de sabores a sua boca.',
            preco: 25,
        },
        {
            id: 1,
            nome: 'Tortura Linguesa (Vinagre com limão)',
            desc: 'Acho que é uma ótima ideia colocar de adicional na coca do amiguinho...',
            preco: 5,
        },
        {
            id: 2,
            nome: 'Furacão de SaBores (Pepsi Twist)',
            desc: 'Uma boa e velha Pepsi Twist para deixar sua merenda ainda melhor :> ',
            preco: 3,
        },

        
    ])
    
    function adicionarAoCarrinho(id, restaurante){
        console.log(carrinho)

        if(restaurante == 'taverna'){
            let novoProduto = cardapioTaverna.find( p = p.id == id)
            console.log(novoProduto)

            setCarrinho([...carrinho, {

            }])
        }

    }
    return(
        <GlobalContext.Provider value={{
                usuario, setUsuario, pontos, carrinho, setCarrinho,
                cardapioTaverna, adicionarAoCarrinho
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
