import { roboto } from "pages/_app";
import React, { FormEvent } from "react";
import classNames from "classnames";

type SearchPostProps = {
    tags: string[]
}

const SearchIconComponent = () => (
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="#FFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Search Icon</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const SearchPost = ({ tags }: SearchPostProps) => {
    const [category, setCategory] = React.useState('')
    const [search, setSearch] = React.useState('')

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()

        console.log(
            category,
            search
        );
        
    }

    return (
        <section className={classNames(roboto.className)}>
            <div className='max-w-6xl h-full w-full mx-auto px-5' role='search' aria-label='Área de filtagrem e busca de posts.'>
                <form className='max-w-[80vw] w-full mx-auto pt-6 pb-12' onSubmit={handleSearch}>
                    <div className='flex'>
                        <label htmlFor='search-category' className='sr-only'>Search Category</label>
                        <select 
                            value={category}
                            aria-label='Selecione uma categoria'
                            onChange={(e) => setCategory(e.target.value)}
                            className='border border-gray-300 rounded-l-lg p-3 bg-white outline-none hidden cursor-pointer sm:block'
                        >
                            <option value='' disabled hidden>Selecione uma categoria</option>
                            {
                                tags.map((tag) => {
                                    const value = tag.replace(/\s+/g, '-').toLowerCase()

                                    return (
                                        <option value={value} key={`tags-${value}`}>{ tag }</option>
                                    )
                                })
                            }
                        </select>
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
                            className='block p-3 w-full z-20 text-gray-900 bg-gray-50 border border-gray-300 outline-none rounded-l-lg sm:border-l-0 sm:rounded-l-none' 
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