import { Container, ResumeContainer } from "./styles";

import { ButtonText } from "../ButtonText";

import { useCart } from '../../hooks/cart';

export function OrderCard({data}) { 
    const { handleRemoveDishFromCart, paymentAccept } = useCart();

    return(
        <Container>
            <div className="card">

                <img src={data.image} alt="Imagem do Prato" />
                
                <ResumeContainer>
                    <p><strong>{data.quantity} x </strong>{data.title} <span>R${data.price}</span></p>
                    <ButtonText 
                        title="Excluir"
                        onClick={() => handleRemoveDishFromCart(data.id)}
                    />
                </ResumeContainer>
                
            </div>
        </Container>
    )
}