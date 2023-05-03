import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'


import useSessionAuthor from 'hooks/useSessionAuthor'
import { mswServer } from 'mocks/mswServer'
import { SessionProvider } from 'next-auth/react'
import Introduction from '.'


jest.mock('hooks/useSessionAuthor')
const mockedUseSessionAuthor = useSessionAuthor as jest.Mock<any>;

const queryClient = new QueryClient()

const introductionRender = (hasUser: boolean) => render(
    <SessionProvider session={hasUser ? {
        expires: '3600',
        user: {
            email: 'teste@gmail.com',
            name: 'Teste'
        }
    } : null}>
        <QueryClientProvider client={queryClient}>
            <Introduction dataAnimation={['TEST 01, TESTE 02, TESTE 03, TESTE 04, TESTE 05', 'TESTE 06, TESTE 07, TETSE 08, TESTE 09, TESTE 10']}/>
        </QueryClientProvider>
    </SessionProvider>
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

    it('should render button payment', () => {
        mockedUseSessionAuthor.mockImplementation(() => ({
            session: true,
            status: 'authenticated',
        }))
        
        introductionRender(true)

        const button = screen.getAllByTestId('payment-button')

        expect(button).toBeInTheDocument()
    })

    it('should render button payment, unauthenticated', () => {
        introductionRender(false)

        const button = screen.queryByTestId('payment-button')

        expect(button).toBeNull()
    })
})