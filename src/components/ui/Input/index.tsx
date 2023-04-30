import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    value: string
    changeValue: (newValue: string) => void
}

const Input = ({ label, value, changeValue, id, ...rest }: InputProps) => {
    return (
        <div>
            <div className='flex flex-col'>
                <label htmlFor={id} className='mb-1 font-medium'>{ label }</label>
                <input 
                    value={value}
                    onChange={(e) => changeValue(e.target.value)}
                    id={id}
                    required 
                    {...rest}
                    className='px-3 py-2 bg-[#E9E9E9] rounded border border-transparent transition-shadow hover:outline-none hover:bg-glacial-emerald-50 hover:border-emerald-600 hover:shadow-input focus:outline-none focus:bg-glacial-emerald-50 focus:border-emerald-600 focus:shadow-input'/>
            </div>
        </div>
    )
}

export default Input