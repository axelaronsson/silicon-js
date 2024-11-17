import React from 'react'

export default function Clients( { mode } ) {
  return (
    <section className={`clients ${ mode ? 'dark' : ''}`}>
        <div className="clients-wrapper">
            <div>
                <h2>Clients are Loving Our App</h2>
            </div>
            <div className="comments">
                <div className="quote">
                    <img src="/src/assets/quote.svg" alt="" />
                </div>
                <img src="/src/assets/rating1.svg" alt="" />
                <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                <div className="avatar">
                    <img src="/src/assets/avatar1.svg" alt="" />
                    <div>
                        <span>Fannie Summers</span>
                        <p>Designer</p>
                    </div>
                </div>
            </div>
            <div className="comments">
                <div className="quote">
                    <img src="/src/assets/quote.svg" alt="" />
                </div>
                <img src="/src/assets/rating2.svg" alt="" />
                <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                <div className="avatar">
                    <img src="/src/assets/avatar2.svg" alt="" />
                    <div>
                        <span>Albert Flores</span>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
