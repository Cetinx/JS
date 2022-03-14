import React from 'react'

const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light "   style={{backgroundColor: '#e3f2fd'}}>    
    <div className="container">
      <a className="navbar-brand" href="/">To Do List</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/create">Crate</a>
          </li>
       
     
       
        </ul>
      
      </div>
    </div>
  </nav>
  </header>

  )
}

export default Header