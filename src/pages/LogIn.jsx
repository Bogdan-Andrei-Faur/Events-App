import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput.jsx";
import StyledText from "../components/StyledText.jsx";
import { loginValidation } from "../validation/login.js";

const initialValues = {
    email: "",
    password: ""
}

const styles = StyleSheet.create({
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)

    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>
                {meta.error}
            </StyledText>}
        </>
        
    )
}

export default function LogIn () {
    return (
        <Formik
            validationSchema={loginValidation}
            initialValues={initialValues}
            onSubmit={values => console.log(values)}>
            {({ handleChange, handleSubmit, values }) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue 
                            placeholder="Email"
                            name="email"/>

                        <FormikInputValue
                            placeholder="Password"
                            name="password"/>

                        <Button
                            onPress={handleSubmit}
                            title="Log In"/>
                    </View>
                )
            }}
        </Formik>
    )
}