import React, { useState, useEffect} from 'react'
import { clientData } from '../data';

export default function Clients( { mode } ) {

    const [data, setData] = useState(clientData)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
                const data = await response.json();
                setData(data)
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        //fetchData();
    }, []);
  return (
    <section className={`clients ${ mode ? 'dark' : ''}`}>
        <div className="clients-wrapper">
            <div>
                <h2>Clients are Loving Our App</h2>
            </div>
            {
                data?.map( obj => {
                    return <div key={obj.id} className="comments">
                                <div className="quote">
                                    <img src="/src/assets/quote.svg" alt="" />
                                </div>
                                <img src={`/src/assets/rating${obj.starRating}.svg`} alt="" />
                                <p>{ obj.comment}</p>
                                <div className="avatar">
                                    <img src={ obj.avatarUrl} alt="" />
                                    <div>
                                        <span>{ obj.author }</span>
                                        <p>{ obj.jobRole }</p>
                                    </div>
                                </div>
                            </div>
                })
            }
        </div>
    </section>
  )
}
