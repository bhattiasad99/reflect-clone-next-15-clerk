import { FC } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { InputType } from '@/types'

type IProps = {
    label?: string,
    placeholder?: string,
    type?: InputType,
    fullWidth?: boolean
}

const TextFieldComponent: FC<IProps> = ({ label, placeholder = '', type = 'text', fullWidth = true }) => {
    const dt = Date.now();
    return (
        <div className={`flex flex-col w-full ${fullWidth ? '' : 'max-w-sm'} gap-1`}>
            {label ? <Label htmlFor={`${dt}`}>{label}</Label> : null}
            <Input type={type} placeholder={placeholder} id={`${dt}`} />
        </div>
    )
}

export default TextFieldComponent