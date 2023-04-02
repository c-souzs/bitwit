import { roboto } from "@/pages/_app";
import classNames from "classnames";
import Container from "src/components/ui/Container";

const SearchIcon = () => (
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="#FFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Search Icon</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const SearchPost = () => {
    return (
        <section className={classNames(roboto.className)}>
            <Container type='block' role='search' aria-label='Área de filtagrem e busca de posts.'>
                <form className='max-w-[80vw] w-full mx-auto pt-6 pb-12'>
                    <div className='flex'>
                        <label htmlFor='search-category' className='sr-only'>Search Category</label>
                        <select 
                            className='border border-gray-300 rounded-l-lg p-3 bg-white outline-none hidden cursor-pointer sm:block'
                        >
                            <option value=''>Category 1</option>
                            <option value=''>Category 2</option>
                            <option value=''>Category 3</option>
                            <option value=''>Category 4</option>
                        </select>
                        <div className='w-full grid grid-cols-form-search'>
                        <label htmlFor='search-input' className='sr-only'>Search Input</label>
                        <input 
                            type='search' 
                            className='block p-3 w-full z-20 text-gray-900 bg-gray-50 border border-gray-300 outline-none rounded-l-lg sm:border-l-0 sm:rounded-l-none' 
                            placeholder='Search Mockups, Logos, Design Templates...'
                            autoComplete='off' 
                            required 
                        />
                        <button 
                            type='submit' 
                            className='p-3 font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800' 
                        >
                            <SearchIcon />
                            <span className='sr-only'>Search</span>
                        </button>
                        </div>
                    </div>
                </form>
            </Container>
        </section>
    );
};

export default SearchPost;