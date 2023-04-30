import Button from "components/ui/Button"

const FirstTime = () => {
    return(
        <div className='flex items-center justify-between mt-12 px-5'>
            <p>É sua primeira fez?</p>
            <Button secondary small>
                GARANTIR ACESSO
            </Button>
        </div>
    )
}

export default FirstTime