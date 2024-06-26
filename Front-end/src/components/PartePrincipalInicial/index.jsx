import { Container, ImagemInicial, ImagemFoguete } from "./style";
import Botao from "../Botao";

const PartePrincipal = () => {
    return(
        <Container>
            <ImagemInicial src="images/img-telainicial.png"/>
            <Botao padding="0.5rem 6rem" nome="Conecte-se" link=""/>
            <ImagemFoguete src="images/img-foguete.png"/>
        </Container>

    )
}

export default PartePrincipal