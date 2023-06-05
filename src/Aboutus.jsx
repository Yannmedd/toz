import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

const About = () => {
    return <div className="aboutus">
    <div className="flex1">

<div className="flex2">
    <div className="text2 text-max">Контакты:</div>
    <div className="text2">Телефон: +7 (xxx) xxx-xx-xx (менеджер)</div>
    <div className="text2">E-mail: tozstat@yandex.ru </div>
    <div className="text2"> Адрес: г. Тула, ул. Советская, 1-а </div>
    <div className="text2">Руководитель: Култыгин Александр Вячеславович</div>
    
</div>

<div className="flex2">
    <div>
        <YMaps>
    <div>
      <Map width="800px" height="800px" defaultState={{ center: [54.201218349916914,37.61769233664984], zoom: 17,  }}>
      <Placemark geometry={[54.20135044393646,37.61703787765021]} />
      </Map>

    </div>

  </YMaps>
    </div>
</div>
</div>
    </div>
  
  
}

export default About;