import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import userEvent from '@testing-library/user-event'

import Paginated from '.'

import usePosts from 'hooks/usePosts'
import { mswServer } from 'mocks/mswServer'
import * as fetcher from 'service/customFetcher'
import { dataCurretPage01, dataCurretPage02, dataCurretPage03, dataTitleSearch, dataTitleSearchEmpty } from 'mocks/handlers/api/posts'
import { PaginatedProvider } from 'contexts/PaginatedCtx'


jest.mock('service/customFetcher')
const fetcherSpy = jest.spyOn(fetcher, 'fetchPostsByPage')

jest.mock('hooks/usePosts')
const mockedUsePosts = usePosts as jest.Mock<any>;

const queryClient = new QueryClient()

const paginatedRender = (title = '') => render(
    <QueryClientProvider client={queryClient}>
        <PaginatedProvider>
            <Paginated titleSearch={title}/>
        </PaginatedProvider>
    </QueryClientProvider>
)

describe('Paginated Posts List', () => {
    beforeAll(() => {
        mswServer.listen()
    })
    
    afterAll(() => {
        mswServer.close()
    })
    
    afterEach(() => {
        mswServer.resetHandlers()
    })

    it('should render first posts from currentPage 1', async () => {
        fetcherSpy.mockReturnValue(new Promise((resolve, reject) => {
            resolve({
                data: dataCurretPage01.data
            })
        }))
        mockedUsePosts.mockImplementation(() => ({
            setTitle: jest.fn(),
            posts: dataCurretPage01.data, 
            isLoadingPosts: false,
            fetchNextPage: jest.fn(),
            hasNextPage: true
        }))
        
        paginatedRender()

        await waitFor(() => {
            const posts = screen.getAllByTestId('post-card-item')

            expect(posts.length).toBe(2)
        })
    })

    it('should render first posts from currentPage 2 when clicking load more', async () => {
        fetcherSpy.mockReturnValue(new Promise((resolve, reject) => {
            resolve({
                data: dataCurretPage02.data
            })
        }))
        const mockFetchNextPage = jest.fn();

        mockedUsePosts.mockImplementation(() => ({
            setTitle: jest.fn(),
            posts: dataCurretPage02.data, 
            isLoadingPosts: false,
            fetchNextPage: mockFetchNextPage,
            hasNextPage: true
        }))
        
        paginatedRender()

        const button = screen.getByText('Carregar mais')

        userEvent.click(button)

        
        await waitFor(() => {
            const posts = screen.getAllByTestId('post-card-item')
            
            expect(posts.length).toBe(4)
            expect(mockFetchNextPage).toHaveBeenCalled()
        })
    })

    it('should render search posts', async () => {
        const title = 'Redux'

        fetcherSpy.mockReturnValue(new Promise((resolve, reject) => {
            resolve({
                data: dataTitleSearch.data
            })
        }))
        const mockFetchNextPage = jest.fn();

        mockedUsePosts.mockImplementation(() => ({
            setTitle: jest.fn(),
            posts: dataTitleSearch.data, 
            isLoadingPosts: false,
            fetchNextPage: mockFetchNextPage,
            hasNextPage: false
        }))
        
        paginatedRender(title)

        await waitFor(() => {
            const posts = screen.getAllByTestId('post-card-item')

            expect(posts.length).toBe(dataTitleSearch.data.length)
        })
    })

    it('should render search posts result empty', async () => {
        const title = 'Empty'

        fetcherSpy.mockReturnValue(new Promise((resolve, reject) => {
            resolve({
                data: dataTitleSearchEmpty.data
            })
        }))
        const mockFetchNextPage = jest.fn();

        mockedUsePosts.mockImplementation(() => ({
            setTitle: jest.fn(),
            posts: dataTitleSearchEmpty.data, 
            isLoadingPosts: false,
            fetchNextPage: mockFetchNextPage,
            hasNextPage: false
        }))
        
        paginatedRender(title)

        await waitFor(() => {
            const alertEmptySearch = screen.getByTestId('empty-search')

            expect(alertEmptySearch).toBeInTheDocument()
        })
    })

    it('should render Loader', async () => {
        fetcherSpy.mockReturnValue(new Promise((resolve, reject) => {
            resolve({
                data: dataCurretPage03.data
            })
        }))
        const mockFetchNextPage = jest.fn();

        mockedUsePosts.mockImplementation(() => ({
            setTitle: jest.fn(),
            posts: dataCurretPage03.data, 
            isLoadingPosts: true,
            fetchNextPage: mockFetchNextPage,
            hasNextPage: false
        }))
        
        paginatedRender()
        
        const loader = screen.getByTestId('loader')

        expect(loader).toBeInTheDocument()
    })

    it('should render alert of all listed posts', async () => {
        fetcherSpy.mockReturnValue(new Promise((resolve, reject) => {
            resolve({
                data: dataCurretPage03.data
            })
        }))
        const mockFetchNextPage = jest.fn();

        mockedUsePosts.mockImplementation(() => ({
            setTitle: jest.fn(),
            posts: dataCurretPage03.data, 
            isLoadingPosts: false,
            fetchNextPage: mockFetchNextPage,
            hasNextPage: false
        }))
        
        paginatedRender()
        
        const alertEnd = screen.getByText('Todos os posts foram listados')

        expect(alertEnd).toBeInTheDocument()

        await waitFor(() => {
            const posts = screen.getAllByTestId('post-card-item')

            expect(posts.length).toBe(dataCurretPage03.data.length)
        })
    })
})