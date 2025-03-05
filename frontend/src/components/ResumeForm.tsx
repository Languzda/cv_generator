import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import SkillInput from '@/components/SkillInput.tsx'
import { DatePicker } from './DatePicker.tsx'
import Experience from '@/components/Experience.tsx'

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email({ message: 'Invalid email address.' }),
    phone: z.string().min(9, {
        message: 'Phone number must be at least 9 characters.',
    }),

    skills: z.array(z.string()).nonempty({
        message: 'You must have at least one skill.',
    }),

    experience: z
        .array(
            z.object({
                company: z.string().min(2, {
                    message: 'Company name must be at least 2 characters.',
                }),
                position: z.string().min(2, {
                    message: 'Position name must be at least 2 characters.',
                }),
                description: z.string().min(2, {
                    message: 'Description must be at least 2 characters.',
                }),
            })
        )
        .nonempty({
            message: 'You must have at least one experience.',
        }),
})

export function ResumeForm() {
    const [skillInputs, setSkillInputs] = useState(1)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            lastname: '',
            skills: [''],
            experience: [
                {
                    company: '',
                    position: '',
                    description: '',
                },
            ],
        },
    })

    const addInput = () => {
        setSkillInputs((prev) => {
            return prev + 1
        })
    }

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        const data = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            skills: values.skills,
        }

        const response = await fetch(
            'http://localhost:3000/resume/generate-pdf-old',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }
        )

        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        window.open(url)
        console.log(values)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
            >
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='shadcn'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='shadcn'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display email.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>phone</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='shadcn'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display phone.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {Array.from({ length: skillInputs }).map((_, index) => (
                    <SkillInput
                        key={index}
                        index={index}
                        form={form}
                    />
                ))}
                <Experience
                    index={0}
                    form={form}
                />
                <Button type='submit'>Submit</Button>

                <Button
                    type='button'
                    onClick={addInput}
                >
                    {' '}
                    Click me{' '}
                </Button>
            </form>
        </Form>
    )
}
