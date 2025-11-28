import React, { useState } from 'react'

export default function Product({ item, onBack }) {
  if (!item) return null

  const [spice, setSpice] = useState(30) // 0-100
  const [portion, setPortion] = useState(1)
  const basePrice = 8.24

  const price = (basePrice * portion).toFixed(2)

  return (
    <div className="product-screen">
      <div className="product-card large">
        <div className="image-wrap">
          <img className="product-large" src={item.img} alt={item.title} />
          <button className="back-btn overlay" onClick={onBack} aria-label="Back">←</button>
          <button className="icon-btn overlay right" aria-label="Search">🔍</button>
        </div>

        <div className="product-body">
          <h2 className="product-title">{item.title}</h2>
          <div className="product-meta">★ {item.rating} • 26 mins</div>
          <p className="product-desc">The {item.title} is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.</p>

          <div className="prefs">
            <div className="pref">
              <label>Spicy</label>
              <input type="range" min="0" max="100" value={spice} onChange={(e) => setSpice(Number(e.target.value))} />
              <div className="scale"><span className="low">Mild</span><span className="high">Hot</span></div>
            </div>

            <div className="pref portion">
              <label>Portion</label>
              <div className="portion-controls">
                <button onClick={() => setPortion(Math.max(1, portion - 1))}>-</button>
                <div className="portion-value">{portion}</div>
                <button onClick={() => setPortion(portion + 1)}>+</button>
              </div>
            </div>
          </div>

          <div className="product-controls bottom">
            <div className="price red">${price}</div>
            <button className="order pill" onClick={() => alert(`Added ${portion} x ${item.title} to cart`)}>ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}
