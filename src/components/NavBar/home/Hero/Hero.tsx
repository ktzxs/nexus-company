import Image from 'next/image';
import menu from '../../../../../public/Menu-dot.svg'
import gust from '../../../../../public/gust.png'
import star from '../../../../../public/star.png'

export default function Hero() {
    return (
        <section className='bg-[var(--white)] px-[8%] py-12 lg:px-[10%]'>
            <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row gap-16'>
                <div className='hero-shape3'></div>
                <div className='hero-shape-4'></div>

                {/* Coluna esquerda — textos */}
                <div className='w-full lg:w-1/2'>
                    <div className='hero-content'>
                        <h1 className='Unbounded text-5xl font-semibold leading-[1.05] text-[var(--black)] md:text-6xl lg:text-[5rem]'>
                            Seu estilo começa aqui.
                            <span className='mt-2 flex items-center gap-2'>
                                <span className='text-[var(--second)]'>Estilo streetwear.</span>
                            </span>
                        </h1>

                        <p className='Unbounded mt-5 text-lg text-[var(--black)] md:text-xl'>
                            Frete grátis nas compras acima de{' '}
                            <span className='Unbounded text-[var(--second)]'>R$399,00</span>
                        </p>

                        <div className='mt-8 flex flex-wrap items-center gap-4'>
                            <button className='Unbounded rounded-md bg-[var(--second)] px-6 py-3 text-lg text-[var(--white)] transition-all duration-300 hover:opacity-90'>
                                Comprar
                            </button>

                            <button className='Unbounded rounded-md border border-[var(--black)] px-6 py-3 text-lg text-[var(--black)] transition-all duration-300 hover:bg-[var(--black)] hover:text-[var(--white)]'>
                                Ver Detalhes
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <div className='hero-image'>
                        <div className='hero-shape1'></div>
                        <div className='hero-shape2'></div>
                        <div className='border-shap1'></div>
                        <div className='border-shap2'></div>

                        <div className='star-shape'></div>
                        <div className='star-shape2'></div>
                        <div className='star-shape3'></div>

                        <Image
                            src={gust}
                            alt='Image Banner'
                            className='relative z-10 w-full md:w-[80%] lg:w-[80%]'
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}