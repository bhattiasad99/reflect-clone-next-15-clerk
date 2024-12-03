'use client'

import { FC } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Label } from '../ui/label'

export type OptionType = {
    value: string,
    label: string
}

type IProps = {
    options: OptionType[],
    label?: string,
    fullWidth?: boolean,
    placeholder?: string
}

const SelectComponent: FC<IProps> = ({ options, label, fullWidth = true, placeholder = '' }) => {
    return (
        <div className={`flex flex-col w-full ${fullWidth ? '' : 'max-w-sm'} gap-1`}>
            {label ? <Label>{label}</Label> : null}
            <Select onValueChange={(value: string) => {
                console.log({ value })
            }}>
                <SelectTrigger className={`${fullWidth ? '' : 'max-w-sm'}`}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map(eachOpt => <SelectItem key={eachOpt.value} value={eachOpt.value}>{eachOpt.label}</SelectItem>)}
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectComponent