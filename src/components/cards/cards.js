import Card from '../card/card'

const cardsTitle = ['titulo 1', 'titulo 2', 'titulo 3']

const changeColor = () => {
    Card.style.backgroundColor = 'red';
}

const Cards = () => {
    return (
        <div>
            <h2>changing card color</h2>
            <div>
            {
                cardsTitle.map((cardsTitle, index) => (
                    <Card key={index} changeColor={changeColor}>
                        <h3>{cardsTitle}</h3>
                        <p> a cor desse texto será alterada quando clicar no botão</p>
                    </Card>
                ))
            }
            </div>
        </div>
    );
}

export default Cards  