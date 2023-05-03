import React, { FormEvent } from "react";
import { roboto } from "pages/_app";
import classNames from "classnames";

const SearchIconComponent = () => (
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="#FFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Search Icon</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
)

type SearchPostProps = {
    changeTitleSearch: (title: string) => void
}

const SearchPost = ({ changeTitleSearch }: SearchPostProps) => {
    const [search, setSearch] = React.useState('')
    
    // Altera o valor do campo de busca ao enviar o formulário
    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        
        changeTitleSearch(search)
    }

    // Reseta a listagem quando o input tiver vazio
    const handleBlurSearch = () => {
        if(!search.length) changeTitleSearch('')
    }

    return (
        <section className={classNames('w-full', roboto.className)} data-testid='search-component'>
            <div className='max-w-6xl h-full w-full mx-auto px-5' role='search' aria-label='Área de filtagrem e busca de posts.'>
                <form className='max-w-[80vw] w-full mx-auto pt-6 pb-12' onSubmit={handleSearch}>
                    <div className='flex'>
                        <div className='w-full grid grid-cols-form-search'>
                        <label htmlFor='search-input' className='sr-only'>Search Input</label>
                        <input 
                            type='search'
                            placeholder='Search Mockups, Logos, Design Templates...'
                            aria-label='Digite aqui para pesquisar por posts'
                            autoComplete='off' 
                            required 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onBlur={() => handleBlurSearch()}
                            className='block p-3 w-full z-20 text-gray-900 bg-gray-50 border border-gray-300 outline-none rounded-l-lg' 
                        />

                        <button 
                            type='submit' 
                            className='p-3 font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800' 
                        >
                            <SearchIconComponent />
                            <span className='sr-only'>Search</span>
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SearchPost;