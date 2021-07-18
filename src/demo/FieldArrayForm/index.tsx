import * as Yup from "yup";
import { Grid, makeStyles, Container } from "@material-ui/core";
import BaseFormik from "../../components/common/BaseFormik";
import FormikControl from "../../components/controllers/FormikControl";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: "15px 50px",
    marginTop: "50px",
    borderRadius: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 0 5px gray",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonPrent: {
    display: "inline",
    margin: "2px",
  },
}));

// interface CustomProposal {
//   name: string;
//   email: string;
//   channel: string;
// }

function FormikTest() {
  const classes = useStyles();

  const onSubmit = (values: any) => {
    console.log(values);
  };
  // const onSubmit = (values: Partial<CustomProposal>) => {
  //   console.log(values);
  // };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    comments: Yup.string().required("Required!"),
    email: Yup.string().email("Enter correct Email").required("Required!"),
  });

  const initialValues: any = {
    name: "",
    email: "",
    comments: "",
    social: {
      facebook: "",
      twitter: "",
    },
    numbers: ["", ""],
    elements: [
      {
        num1: "",
        num2: "",
        save: {
          num3: "",
        },
      },
    ],
  };

  const subName = [
    { name: "num1", label: "Enter Num1" },
    { name: "num2", label: "Enter Num2" },
    ,
    { name: "save.num3", label: "Enter Num3" },
  ];

  return (
    <Container maxWidth="lg" className={classes.pageContent}>
      <BaseFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormikControl control="field" name="name" lable="Name" />
          </Grid>
          <Grid item xs={12}>
            <FormikControl control="field" name="email" lable="Email" />
          </Grid>
          <Grid item xs={12}>
            <FormikControl
              control="field"
              name="social.facebook"
              lable="Facebook"
            />
          </Grid>
          <Grid item xs={12}>
            <FormikControl
              control="field"
              name="social.twitter"
              lable="Twitter"
            />
          </Grid>
          <Grid item xs={12}>
            <FormikControl
              control="field"
              name="numbers[0]"
              lable="Number array 1"
            />
          </Grid>
          <Grid item xs={12}>
            <FormikControl
              control="field"
              name="numbers[1]"
              lable="Number array 2"
            />
          </Grid>
          <Grid item xs={12}>
            <FormikControl
              control="fieldArray"
              values={initialValues.elements}
              ArrayName="elements"
              subName={subName}
              parentclass={classes.buttonPrent}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikControl
              control="textArea"
              name="comments"
              label="comments"
            />
          </Grid>
          <Grid item xs={12}>
            <FormikControl control="button" />
          </Grid>
        </Grid>
      </BaseFormik>
    </Container>
  );
}

export default FormikTest;
