import { Button, Grid } from "@mui/material";
import React from "react";
import TextFieldForm from "../Forms/TextFieldForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormikController from "../FormikController";
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  console.log({ ...formik.getFieldProps("message") });

  return (
    
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        padding: "1rem",
        borderRadius: "5px",
        boxShadow:
          "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
      }}
    >
      <Grid container spacing={2} pr={2} pl={2} pb={2}>
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#162D5D",
            padding: "0.5rem",
          }}
        >
          Get In Touch
        </Grid>

        <Grid item xs={12} md={6}>
          <FormikController
            control="textfield"
            name="firstname"
            label="FirstName"
            {...formik.getFieldProps("firstname")}
          />
        
          <span>{formik.touched.firstname ? formik.errors.firstname : ""}</span>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormikController
            control="textfield"
            name="lastname"
            label="LastName"
            {...formik.getFieldProps("lastname")}
          />
          <span>{formik.touched.lastname ? formik.errors.lastname : ""}</span>
        </Grid>

        <Grid item xs={12} md={12}>
          <TextFieldForm name="phone" label="Phone no" />
        </Grid>

        <Grid item xs={12} md={12}>
          <FormikController
            control="textfield"
            name="message"
            label="Message"
            {...formik.getFieldProps("message")}
            rows={4}
          />
          <span>{formik.touched.message ? formik.errors.message : ""}</span>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="small"
            sx={{
              background: "#162D5D",
              color: "#fff",
              padding: "0.5rem",
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Grid>
    
  );
};

export default ContactForm;
