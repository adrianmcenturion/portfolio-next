import { addDoc, collection } from "firebase/firestore";
import { dbFirestore } from "../../services/firebase";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../../components/Layout";
import Title from "../../components/Title";

export type MessageProps = {
  about: string;
  description: string;
  img: [string]
  live: string;
  repos: [string]
  technologies: string
  title: string;
};

type TouchedProps = {
    about: boolean;
    description: boolean;
    img: boolean
    live: boolean;
    repos: boolean;
    technologies: boolean
    title: boolean;
};
const Admin = () => {
  const initValues: MessageProps = { about: "", description: "", img: [''], live: '', repos: [''], technologies: '', title: '' };
  const initState = { values: initValues };
  const [state, setState] = useState(initState);
  const [isLoading, setIsloading] = useState(false);
  const [touched, setTouched] = useState<TouchedProps>({} as TouchedProps);
  const { values } = state;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    let toArray = target.name === 'technologies' || target.name === 'img' || target.name === 'repos' ? target.value.split(',') : target.value
      
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: toArray,
        },
      }));
  }

  const onBlur = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const onSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState((prev) => ({ ...prev }));
    setIsloading(true);

    try {
      await addDoc(collection(dbFirestore, "projects"), {
        ...values,
      });
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
      <Title title="Add project" />
      <form onSubmit={onSubmit}>
        <VStack gap={6} pb={20}>
          <FormControl isRequired isInvalid={touched.about && !values.about}>
            <FormLabel>About</FormLabel>
            <Input
              type="text"
              name="about"
              value={values.about}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.description && !values.description}>
            <FormLabel>Description</FormLabel>
            <Input
              type={"text"}
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.title && !values.title}>
            <FormLabel>Title</FormLabel>
            <Input
              type={"text"}
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.live && !values.live}>
            <FormLabel>Live</FormLabel>
            <Input
              type={"text"}
              name="live"
              value={values.live}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.img && !values.img}>
            <FormLabel>Images</FormLabel>
            <Textarea
              
              name="img"
              value={values.img}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl  isInvalid={touched.repos && !values.repos}>
            <FormLabel>Repos</FormLabel>
            <Textarea
              name="repos"
              value={values.repos}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.technologies && !values.technologies}>
            <FormLabel>Technologies</FormLabel>
            <Textarea
              
              name="technologies"
              value={values.technologies}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            disabled={!values.title || !values.description || !values.about}
            isLoading={isLoading}
          >
            Send
          </Button>
        </VStack>
      </form>
    </Layout>
  );
};

export default Admin;
