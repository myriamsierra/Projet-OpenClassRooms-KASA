import React from 'react';
import Error404 from '../../Component/Error404/Error404.jsx'
import Error404Logo from './../../Assets/error-404.png'

//-->Path
const textForError="Oups! La page que vous demandez n'existe pas."
const textForLink="Retourner sur la page d’accueil"

const NotFound = () => {
  return (
    <main>
      <section className='errorPage__contenair'>
        <Error404 imgError={Error404Logo} textError={textForError} linkText={textForLink}/>
      </section>
    </main>
  )
}

export default NotFound;