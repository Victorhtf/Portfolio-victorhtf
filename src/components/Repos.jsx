import { useState, useEffect } from 'react'

const Repos = () => {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
            fetch('https://api.github.com/users/victorhtf/repos')
              .then(res => res.json())
              .then(data => setRepositories(data))
        }, [])
  return (
    <div className='repo-grid'>
        <ul>
            {repositories.map(repository => {
                return (
                  <div className='grid-container' key='blank'>
                    <h1 className=""key={repository.id}>{repository.name}</h1>
                    <img src='../img/photo.jpg' className='project-thumbnail' />
                    <p>{repository.description}</p>
                  </div>
                )
            })}
        </ul>
    </div>
  )
}

export default Repos