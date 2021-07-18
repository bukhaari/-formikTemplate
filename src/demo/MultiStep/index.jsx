import * as Yup from "yup";
import { CardContent, Card, Box } from "@material-ui/core";
import { FormikStepper, FormikStep } from "../../components/common/Stepper";
import FormikControl from "../../components/controllers/FormikControl";

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

function MultiStep() {
  // const checkOptions = [
  //   { label: "I'm billionair", value: "billionair" },
  //   { label: "I'm millionair", value: "millionair" },
  //   { label: "I'm kuniolair", value: "kuniolair" },
  // ];

  const onSubmit = async (values) => {
    await sleep(3000);
    console.log(values);
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    millionair: false,
    money: 0,
    description: "",
  };

  return (
    <Card>
      <CardContent>
        <FormikStepper initialValues={initialValues} onSubmit={onSubmit}>
          <FormikStep
            label="Personal Data"
            validationSchema={Yup.object({
              firstName: Yup.string().required("Required!"),
              lastName: Yup.string().required("Required!"),
            })}
          >
            <Box paddingBottom={2}>
              <FormikControl
                control="field"
                name="firstName"
                lable="first Name"
              />
            </Box>
            <Box paddingBottom={2}>
              <FormikControl
                control="field"
                name="lastName"
                lable="Last Name"
              />
            </Box>
            <Box paddingBottom={2}>
              <FormikControl
                control="checkbox"
                formLabel="Type service"
                name="millionair"
                label="I'm millionair"
              />
            </Box>
          </FormikStep>
          <FormikStep
            label="Bank Accounts"
            validationSchema={Yup.object({
              money: Yup.mixed().when("millionair", {
                is: true,
                then: Yup.number().required().min(1_000_000),
                otherwise: Yup.number().required(),
              }),
            })}
          >
            <FormikControl
              control="field"
              type="number"
              name="money"
              lable="Money"
            />
          </FormikStep>
          <FormikStep
            label="More Info"
            validationSchema={Yup.object({
              description: Yup.string().required("Required!"),
            })}
          >
            <FormikControl
              control="field"
              name="description"
              lable="Description"
            />
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}

export default MultiStep;
