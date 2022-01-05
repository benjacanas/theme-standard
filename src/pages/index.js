import * as React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import SocialCard from '../components/socialCard/socialCard'
import SearchCard from '../components/searchCard/searchCard'
import '../styles.scss'

// card images
import image1 from '../images/image 25.png'
import image2 from '../images/image 26.png'
import image3 from '../images/image 27.png'
import image4 from '../images/image 28.png'

import uploadcv from '../images/Vector.png'

import baby from '../images/baby.png'
import briefcase from '../images/briefcase.png'
import cake from '../images/cake.png'
import code from '../images/code.png'
import gear from '../images/gear.png'
import hearth from '../images/hearth.png'
import screen from '../images/screen.png'

const IndexPage = () => {
  const socialCards = [
    {
      logo: cake,
      titulo: 'Cumpleaños',
      color: '#FFAB2E',
      imagen: image1,
      fecha: '14 de septiembre',
      nombre: 'Mariela Rodriguez',
      area: 'Area de sistemas'
    },
    {
      logo: hearth,
      titulo: 'Casamiento',
      color: '#FE4767',
      imagen: image3,
      fecha: '11 de Septiembre',
      nombre: 'Gabriela Gonzalez y Lautaro Irrazabal',
      area: ''
    },
    {
      logo: baby,
      titulo: 'Nacimiento',
      color: '#F38C86',
      imagen: image2,
      fecha: '23 de agosto',
      nombre: 'Matheo Lopez',
      area: 'Hijo de Gaston Lopez y Mariela Aredalo'
    },
    {
      logo: briefcase,
      titulo: 'Nuevo ingreso',
      color: '#007BFF',
      imagen: image4,
      fecha: '10 de Agosto',
      nombre: 'Alexis Sanchez',
      area: 'Area de diseño'
    }
  ]

  const searchCards = [
    {
      logo: briefcase,
      titulo: 'Administrativo para secretaría',
      fecha: '14 de septiembre',
      link: '#'
    },
    {
      logo: code,
      titulo: 'Analista de sistemas',
      fecha: '14 de septiembre',
      link: '#'
    },
    {
      logo: screen,
      titulo: 'Docente de cátedra Filosofía',
      fecha: '14 de septiembre',
      link: '#'
    },
    {
      logo: screen,
      titulo: 'Responsable de cuentas',
      fecha: '14 de septiembre',
      link: '#'
    },
    {
      logo: gear,
      titulo: 'Analista de sistemas',
      fecha: '14 de septiembre',
      link: '#'
    },
    {
      logo: briefcase,
      titulo: 'Técnico de mantenimiento',
      fecha: '14 de septiembre',
      link: '#'
    }
  ]

  return (
    <Layout>
      <main className="index">
        <section className="container-primary">
          <Title type="primary" link="#">
            SOCIALES
          </Title>
          <div className='socialCard-container'>
            {socialCards.map((card, index) => (
              <SocialCard {...card} key={index} />
            ))}
          </div>
        </section>
        <section className="container-secondary">
          <Title type="secondary" link="#">
            BÚSQUEDAS ACTIVAS
          </Title>
          <div className='searchCard-container'>
            {searchCards.map((card, index) => (
              <SearchCard {...card} key={index} />
            ))}
          </div>
          <div className="upload-cv">
            <img src={uploadcv} alt="cv" />
            <p>SUBIR CV DE REFERIDO</p>
          </div>
        </section>
        <section className="container-primary">
          <div className="text-section">
            <h2>Inducción</h2>
            <p className="text-section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              facilisis molestie nisl, quis semper risus ultricies at.
              Suspendisse neque ligula, viverra ac tempor in, venenatis eget
              ligula. Quisque id porttitor justo, et dictum elit. Phasellus
              luctus massa orci, non iaculis est volutpat eu. Pellentesque
              aliquam sit amet odio id laoreet. Sed nec eros eu nunc venenatis
              cursus et euismod quam.
            </p>
            <p className="text-section-body">
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nam dolor lectus, tincidunt sit amet nisl
              sit amet, laoreet dignissim purus. Donec id nulla id elit
              ullamcorper cursus gravida ac ante. Cras non scelerisque purus,
              sed tempor nulla. Cras porta iaculis accumsan. Aenean et elementum
              nisl. Mauris eu quam non augue pulvinar vehicula. Nunc vitae
              tortor a erat ullamcorper consequat ac sed nibh. Maecenas
              fermentum sollicitudin augue eu finibus. Aliquam facilisis eros et
              sem ullamcorper lacinia. Duis placerat eget diam in dictum. Etiam
              fermentum, augue eu vulputate iaculis, metus arcu gravida felis,
              vel interdum felis lacus a ex.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
