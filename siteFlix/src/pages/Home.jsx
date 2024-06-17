import data from '../../articles.json'
import Banner from '../componentes/Banner/Banner';

function Home() {
    return ( 
        <>
        <Banner/>
            <input type="text" id="buscar" placeholder='Buscar uma notícia' />
            <div className='grid grid-cols-3 gap-4'>
            {
                data.map( (artigo, index) => (
                    <div className='card' key={index}>
                        <h2>{artigo.title}</h2>
                        <img className="mb-2" src={artigo.image} alt={artigo.title} />
                        <div className='tags'>
                            {artigo.tags.map( (tag, index) => (
                                <span className="bg-purple-600 p-1 m-1 rounded " key={index}>{tag}</span>
                            ))}
                        </div>
                        <div className='texto'>
                        {artigo.text.map( (paragrafo,index) => (
                            <p key={index}>{paragrafo}</p>
                        ))}
                        </div>

                    </div>
                ))
            }
            </div>
        </>
    );
}

export default Home ;

/*

<div className='card'>
    <h1>Titulo do filme</h1>
    <img src='/' alt=''/>
    <div className='tag'>
        <span>Tags</span>
    </div>
    <p></p>
</div> */