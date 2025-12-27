import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    TextField
} from "@radix-ui/themes";
import { useRegister } from "../hooks/register-hook";

const Register = () => {
    const {doSubmit, register, handleSubmit, errors} = useRegister();
    return (
        <Box width="400px" mx="auto" mt="6" height="64px">
            <Heading align="center">Register</Heading>
            <form onSubmit={handleSubmit(doSubmit)}>
                <Box>
                    <Text as="label" size="3" weight="medium">Email</Text>
                    <TextField.Root {...register('email')} type="email" placeholder="Type Email Here" />
                    {errors.email && <Text color="red">{errors.email.message}</Text>}
                </Box>

                <Box>
                    <Text as="label" size="3" weight="medium">Password</Text>
                    <TextField.Root {...register('password')} type="password" placeholder="Type Password Here" />
                    {errors.password && <Text color="red">{errors.password.message}</Text>}
                </Box>

                <Box>
                    <Text as="label" size="3" weight="medium">Name</Text>
                    <TextField.Root {...register('name')} type="text" placeholder="Type Name Here" />
                    {errors.name && <Text color="red">{errors.name.message}</Text>}
                </Box>

                <Flex gap="3">
                        <Button type="submit" size="3" style={{margin:6}}>Register</Button>
                        <Button type="button" variant="soft" size="3" style={{margin:6}}>Reset</Button>
                </Flex>
            </form>
        </Box>
    )
}

export default Register;