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
  repo: {
    front: string;
    back: string;
  }
  technologies: string
  title: string;
};

type TouchedProps = {
    about: boolean;
    description: boolean;
    img: boolean
    live: boolean;
    front: boolean;
    back: boolean;
    technologies: boolean
    title: boolean;
};
const Admin = () => {
  const initValues: MessageProps = { about: "", description: "", img: [''], live: '', repo: {front: '', back: ''}, technologies: '', title: '' };
  const initState = { values: initValues };
  const [state, setState] = useState(initState);
  const [isLoading, setIsloading] = useState(false);
  const [touched, setTouched] = useState<TouchedProps>({} as TouchedProps);
  const { values } = state;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    let toArray = target.name === 'technologies' || target.name === 'img' ? target.value.split(',') : target.value
      
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
        <VStack gap={6}>
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
            <FormLabel>title</FormLabel>
            <Input
              type={"text"}
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.img && !values.img}>
            <FormLabel>img</FormLabel>
            <Input
              type={"text"}
              name="img"
              value={values.img}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.live && !values.live}>
            <FormLabel>live</FormLabel>
            <Input
              type={"text"}
              name="live"
              value={values.live}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl  isInvalid={touched.front && !values.repo.front}>
            <FormLabel>front</FormLabel>
            <Input
              type={"text"}
              name="front"
              value={values.repo.front}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl  isInvalid={touched.back && !values.repo.back}>
            <FormLabel>back</FormLabel>
            <Input
              type={"text"}
              name="back"
              value={values.repo.back}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.technologies && !values.technologies}>
            <FormLabel>technologies</FormLabel>
            <Input
              type={"text"}
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
