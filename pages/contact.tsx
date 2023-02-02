import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  useState,
} from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { sendContactForm } from "../services/httpRequest";
export type MessageProps = {
  name: string;
  email: string;
  message: string;
};

type TouchedProps = {
  name: boolean;
  email: boolean;
  message: boolean;
};

const Contact = () => {
  const initValues: MessageProps = { name: "", email: "", message: "" };
  const initState = { values: initValues };
  const [state, setState] = useState(initState);
  const [isLoading, setIsloading] = useState(false);
  const [touched, setTouched] = useState<TouchedProps>({} as TouchedProps);
  const { values } = state;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onBlur = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const onSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState((prev) => ({ ...prev }));
    setIsloading(true);

    try {
      await sendContactForm(values);
      setTouched({} as TouchedProps);
      setState(initState);
      setIsloading(false);
    } catch (error) {
      setState((prev) => ({ ...prev }));
      setIsloading(false);
    }
  };

  return (
    <Layout>
      <Title title="Contact Me" />
      <form style={{width: '100%'}} onSubmit={onSubmit}>
        <VStack gap={6} w='100%'>
          <FormControl isRequired isInvalid={touched.name && !values.name} className='form-control'>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
              borderColor='#00C89B'
              focusBorderColor='pink.600'
              transition='0.5s ease-in-out'
              _hover={{borderColor: 'pink.600'}}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.email && !values.email} className='form-control'>
            <FormLabel>Email</FormLabel>
            <Input
              type={"email"}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
              borderColor='#00C89B'
              focusBorderColor='pink.600'
              transition='0.5s ease-in-out'
              _hover={{borderColor: 'pink.600'}}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            className='form-control'
          >
            <FormLabel>Message:</FormLabel>
            <Textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
              rows={4}
              borderColor='#00C89B'
              focusBorderColor='pink.600'
              transition='0.5s ease-in-out'
              _hover={{borderColor: 'pink.600'}}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            disabled={!values.name || !values.email || !values.message}
            isLoading={isLoading}
            color={'#00C89B'}
              colorScheme='pink'
              bg='pink.600'
              transition={'0.4s ease-in-out'}
                _hover={{bg: '#00C89B', color: 'pink.600'}}
          >
            Send
          </Button>
        </VStack>
      </form>
    </Layout>
  );
};
export default Contact;
