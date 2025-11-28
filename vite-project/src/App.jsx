
import './App.css'
import { useState } from 'react'
import Product from './Product'
import Profile from './Profile'

const items = [
  { id: 1, img: '/img/burger1.png', title: 'Cheeseburger', subtitle: "Wendy's Burger", rating: 4.9 },
  { id: 2, img: '/img/burger2.png', title: 'Hamburger', subtitle: 'Veggie Burger', rating: 4.8 },
  { id: 3, img: '/img/burger3.png', title: 'Hamburger', subtitle: 'Chicken Burger', rating: 4.6 },
  { id: 4, img: '/img/burger4.png', title: 'Hamburger', subtitle: 'Fried Chicken Burger', rating: 4.5 }
]

function App() {
  const [query, setQuery] = useState('')
  const [view, setView] = useState('home')
  const [activeItem, setActiveItem] = useState(null)
  const [activeNav, setActiveNav] = useState('home')

  function openProduct(it) {
    setActiveItem(it)
    setView('product')
  }

  return (
    <div className="phone-root">
      <div className="phone">
        <header className="top">
          <div className="brand">
            <div className="brand-title"><img src="/icons/foodgo.png" alt="logo" /></div>
            <div className="brand-sub">Order your favourite food!</div>
          </div>
          <img className="avatar" src="/img/person.png" alt="avatar" />
        </header>

        <div className="controls">
          <div className="search">
            <svg className="icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="6"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
            />
          </div>
          <button className="filter" aria-label="Filters"><img src="/icons/filter.png" alt="Filters" />
          </button>
        </div>

        {view === 'home' && (
          <main className="grid">
            {items.map((it) => (
              <article className="card" key={it.id} onClick={() => openProduct(it)}>
                <div className="card-img">
                  <img src={it.img} alt={it.title} />
                </div>
                <div className="card-body">
                  <div className="card-title">{it.title}</div>
                  <div className="card-sub">{it.subtitle}</div>
                  <div className="card-row">
                    <div className="rating">★ {it.rating}</div>
                    <button className="fav" aria-label="Favorite">♡</button>
                  </div>
                </div>
              </article>
            ))}
          </main>
        )}

        {view === 'product' && (
          <Product item={activeItem} onBack={() => setView('home')} />
        )}

        {view === 'profile' && (
          <Profile onEdit={() => {}} />
        )}

        <div className="navigation">
          <div className="nav-group">
            <button className={`nav-btn ${activeNav === 'home' ? 'active' : ''}`} aria-label="Home" onClick={() => { setView('home'); setActiveNav('home') }}>
              <img src="/icons/home.png" alt="Home" />
            </button>
            <button className={`nav-btn ${activeNav === 'profile' ? 'active' : ''}`} aria-label="User" onClick={() => { setView('profile'); setActiveNav('profile') }}>
              <img src="/icons/user.png" alt="User" />
            </button>
          </div>

          <div className="nav-center">
            <button className={`nav-btn add ${activeNav === 'add' ? 'active' : ''}`} aria-label="Add" onClick={() => { setActiveNav('add') }}>+</button>
          </div>

          <div className="nav-group">
            <button className={`nav-btn ${activeNav === 'comment' ? 'active' : ''}`} aria-label="Comment" onClick={() => { setView('home'); setActiveNav('comment') }}>
              <img src="/icons/comment.png" alt="Comment" />
            </button>
            <button className={`nav-btn ${activeNav === 'favorites' ? 'active' : ''}`} aria-label="Favorites" onClick={() => { setView('home'); setActiveNav('favorites') }}>
              <img src="/icons/heart.png" alt="Favorites" />
            </button>
            <div className='indicator' data-active={activeNav}></div>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default App
