import { DatePickerWithRange } from '@/components/DatePickerRange.tsx'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form.tsx'
import { Textarea } from '@/components/ui/textarea.tsx'
import { Input } from '@/components/ui/input.tsx'

export default function Experience({ form, index }) {
    const [isActive, setIsActive] = useState(false)

    const handleIsActive = () => {
        setIsActive((prev) => !prev)
    }

    return (
        <div>
            <FormField
                control={form.control}
                name={`experience[${index}].company`}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nazwa firmy</FormLabel>
                        <FormControl>
                            <Input
                                placeholder='Meta'
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={`experience[${index}].position`}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Pozycja</FormLabel>
                        <FormControl>
                            <Input
                                placeholder='Zarządca powierzchni płaskich'
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className='flex'>
                <FormField
                    control={form.control}
                    name={`experience[${index}].startDate`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Data rozpoczęcia pracy</FormLabel>
                            <FormControl>
                                <Input
                                    type='date'
                                    placeholder='2023-01-01'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />{' '}
                <FormField
                    control={form.control}
                    name={`experience[${index}].endDate`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Data zakończenia pracy</FormLabel>
                            <FormControl>
                                <Input
                                    type='date'
                                    placeholder='2025-01-01'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={form.control}
                name={`experience[${index}].description`}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Opis</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder='Opisz swoje obowiązki w firmie'
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className='flex items-center space-x-2'>
                <Checkbox
                    id='terms'
                    checked={isActive}
                    onCheckedChange={handleIsActive}
                />
                <label
                    htmlFor='terms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                    {isActive ? 'Aktualna' : 'Nieaktualna'}
                </label>
            </div>
        </div>
    )
}

// checkbox: aktualna?
// isAKtualna: boolean ? datePicker: data rozpoczecia : daterange: data rozpoczecia i zakonczenia
// input: nazwa firmy
// input: stanowisko
// textarea: opis
