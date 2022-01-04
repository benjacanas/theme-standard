import * as React from 'react'
import Layout from '../components/layout'
import '../styles.scss'

const IndexPage = () => {
  return (
    <Layout>
      <div className="index">
        <section className="index-cards">
          <div className="index-cards__container-primary">
            <h1>Titulo de tarjeta 1</h1>
            <h3>subtutulo 1</h3>
            <hr />
            <p>
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
              simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica
              de la literatura del Latin, que data del año 45 antes de Cristo,
              haciendo que este adquiera mas de 2000 años
            </p>
          </div>
          <div className="index-cards__container-secondary">
            <h1>Titulo de tarjeta 2</h1>
            <h3>subtutulo 2</h3>
            <hr />
            <p>
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
              simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica
              de la literatura del Latin, que data del año 45 antes de Cristo,
              haciendo que este adquiera mas de 2000 años
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
