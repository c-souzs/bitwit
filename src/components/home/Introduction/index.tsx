import { roboto, robotoMono } from "@/pages/_app";
import classNames from "classnames";
import React from "react";
import Button from "src/components/ui/Button";
import Container from "src/components/ui/Container";
import useTyping from "src/hooks/useTyping";

const techs = [
    'React, Node.js, Express, MongoDB, Redux',
    'Angular, Spring Boot, PostgreSQL, RxJS, Material UI',
    'Vue.js, Django, SQLite, Nuxt.js, Vuetify',
    'jQuery, Laravel, MySQL, Bootstrap, Font Awesome',
    'Ember.js, Ruby on Rails, PostgreSQL, Handlebars.js, Ember CLI'
  ];

const AlertScroll = () => {
    return (
        <div 
            className='absolute bottom-12 left-2/4 right-2/4 hidden sm:block'
            role='alert'
            aria-label='Role a página para acessar os posts do blog.'
            title='Role para ver mais posts.'
            >
            <div className='h-[21px] w-[14px] rounded-lg transform-none border-emerald-600 border-2'>
                <div className='h-[5px] w-0.5 block my-1 mx-auto bg-emerald-600 relative animate-mouse'/>
            </div>
            <div>
                <span className='block w-[5px] h-[5px] rotate-45 border-emerald-600 border-r-2 border-b-2 mb-[3px] ml-[5px] animate-mouse-scroll delay-100 direction-alternate mt-[6px]' />
                <span className='block w-[5px] h-[5px] rotate-45 border-emerald-600 border-r-2 border-b-2 mb-[3px] ml-[5px] animate-mouse-scroll delay-200 direction-alternate' />
                <span className='block w-[5px] h-[5px] rotate-45 border-emerald-600 border-r-2 border-b-2 mb-[3px] ml-[5px] animate-mouse-scroll delay-300 direction-alternate' />
            </div>
        </div>
    )
}

const Introduction = () => {
    const text = useTyping(techs)

    return (
        <section
            className='h-[calc(100vh-80px)] relative'
        >
            <Container
                type='flex-center'
            >
                <div className='flex flex-col items-center justify-center text-center 
                    lg:mb-24'>
                    <h1 
                        className='text-4xl text-emerald-500 font-semibold mb-3 
                            sm:text-5xl sm:max-w-[675px]'> 
                        Códigos, dicas & tutoriais em um  único acesso 
                        <span 
                            className='inline-block text-3xl ml-1'
                            role='img'
                            aria-label='Emoji de xícara de café'
                        >
                            💻
                        </span>
                    </h1>
                    <p className={classNames('uppercase text-sm text-emerald-500 mb-3 after:content-["|"] after:ml-1 after:font-semibold after:animate-blink', robotoMono.className)}> 
                        &nbsp; { text }
                    </p>
                    <p className={`${roboto.className} text-lg mb-5 max-w-[550px]`}> 
                        Encontre tudo sobre front-end e back-end. Faça qualquer pergunta. Entre para a melhor comunidade. Tudo isso com um preço acessível que cabe no seu bolso. 
                    </p>
                    <Button
                        aria-label='Vai para a página de planos de acesso do blog.'
                    >
                        INSCREVA-SE
                    </Button>
                </div>
            </Container>
            <AlertScroll />
        </section>
    )
}

export default Introduction;