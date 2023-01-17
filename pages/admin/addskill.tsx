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

export type SkillProps = {
  name: string;
  img: string;
  createdAt: Date
};

type TouchedProps = {
    name: boolean;
    img: boolean;
};
const CreateSkill = () => {
  const initValues: SkillProps = { name: "", img: "", createdAt: new Date() };
  const initState = { values: initValues };
  const [state, setState] = useState(initState);
  const [isLoading, setIsloading] = useState(false);
  const [touched, setTouched] = useState<TouchedProps>({} as TouchedProps);
  const { values } = state;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      }));
  }
  console.log(values)

  const onBlur = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const onSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState((prev) => ({ ...prev }));
    setIsloading(true);

    try {
      await addDoc(collection(dbFirestore, "skills"), {
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
      <Title title="Add Skill" />
      <form onSubmit={onSubmit}>
        <VStack gap={6}>
          <FormControl isRequired isInvalid={touched.name && !values.name}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.img && !values.img}>
            <FormLabel>Img</FormLabel>
            <Input
              type={"text"}
              name="img"
              value={values.img}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            disabled={!values.name || !values.img}
            isLoading={isLoading}
          >
            Send
          </Button>
        </VStack>
      </form>
    </Layout>
  );
};

export default CreateSkill;