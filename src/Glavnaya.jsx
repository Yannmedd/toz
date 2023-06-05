import React from 'react';
import Card from "./components/card";

const Glavnaya = () => {

    const cards = [
        { src: './images/3.jpg', title: 'Надежность'},
        { src: './images/5.jpg', title: 'Ответственность'},
        { src: './images/6.jpg', title: 'Качество'},
        { src: './images/4.jpg', title: 'Авторитет'},
    ];

  return (
    <div className="glavnaya">
          <div className="flex">
              <div className='logo'><img src="./images/2.webp"></img></div>
          </div>

            <div className="flex1">

                <div className="flex2">
                    <div className="text2 text-max">О компании:</div>
                    <div className="text2"> Императорский Тульский оружейный завод основан в 1712 году по именному Указу Петра I.</div>
                    <div className="text2"> Предприятию более 300 лет, это старейшее оружейное предприятие России. На протяжении трёх веков завод создает свою историю, проходя через все вехи развития страны. Сегодня темп работы, заданный государством, требует высокоточного оборудования и высококвалифицированных кадров. Несмотря на большой возраст, предприятие идёт в ногу со временем и оснащено необходимым оборудованием, предоставлена возможность работать в современных условиях.</div>
                    <div className="text2"> Императорский Тульский оружейный завод сегодня – это опыт, качество, традиционность, но в то же время современность, динамика развития, стремление вперёд.</div>
                </div>

                <div className="flex2">
                    <div className="petrs"></div>
                </div>
            </div>

        <div className="preim">
            <div className="text12">Преимущества:</div>

            <div className="prflex">
                { cards.map(card => {
                    return <Card key={card.src} src={card.src} title={card.title} />
                }) }
            </div>
        </div>
    </div>

    )
}

export default Glavnaya;