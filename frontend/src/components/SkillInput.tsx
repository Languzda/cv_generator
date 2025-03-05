import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form.tsx'
import { Input } from '@/components/ui/input.tsx'

function SkillInput({ index, form }: { index: number; form: any }) {
    return (
        <FormField
            name={`skills[${index}]`}
            control={form.control}
            defaultValue=''
            render={({ field }) => (
                <FormItem>
                    {console.log(field)}
                    <FormLabel>{`Skill number ${index}`}</FormLabel>
                    <FormControl>
                        <Input
                            placeholder='Microsoft Office'
                            {...field}
                        />
                    </FormControl>
                    <FormDescription>
                        This is your public display skill.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default SkillInput
