import {Formik} from 'formik';
import React from 'react';
import {AppState, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text, Input, Icon} from 'react-native-elements';
import * as Yup from 'yup';
import InputComponent from '../../layout/InputComponent';
import SelectComponent from '../../layout/SelectComponent';

export default function NewProduct() {
  const addProduct = async (values) => {
    console.log(values);
  };
  return (
    <ScrollView>
      <Formik
        initialValues={{
          productName: '',
          productType: '',
          productDescription: '',
          price: '',
          // productImage: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          productName: Yup.string().required("Product's name is required"),
          productType: Yup.string().required('Select a product type'),
          productDescription: Yup.string().required(
            "Product's description is required",
          ),
          price: Yup.number('Price must be a number').required(
            "Product's price is required",
          ),
          // productImage: Yup.
        })}
        onSubmit={(values) => addProduct(values)}>
        {(props) => (
          <View style={styles.inputContainer}>
            <InputComponent
              label="Product's Name"
              touched={props.touched.productName}
              errors={props.errors.productName}
              onChangeText={props.handleChange('productName')}
              onBlur={props.handleBlur('productName')}
              placeholder="Input the product's name"
              value={props.values.productName}
            />
            <SelectComponent
              title="Product's type"
              value={props.values.productType}
              items={[
                'Poultry',
                'Food',
                'Frozen',
                'Equipment',
                'Training',
                'Medication',
              ]}
              onChangeItem={(item) => {
                props.setFieldValue('productType', item.value);
              }}
              touched={props.touched.productType}
              errors={props.errors.productType}
            />
            <InputComponent
              label="Product's Description"
              multiline
              touched={props.touched.productDescription}
              errors={props.errors.productDescription}
              onChangeText={props.handleChange('productDescription')}
              onBlur={props.handleBlur('productDescription')}
              placeholder="Input the product's description"
              value={props.values.productDescription}
            />
            <InputComponent
              label="Price"
              keyboardType="numeric"
              touched={props.touched.price}
              errors={props.errors.price}
              onChangeText={props.handleChange('price')}
              onBlur={props.handleBlur('price')}
              placeholder="Input the product's price"
              value={props.values.price}
            />

            {/* Product Image */}

            <Button
              title="Add Product"
              raised
              titleStyle={{fontSize: 18}}
              icon={
                <Icon
                  name="plus"
                  type="font-awesome-5"
                  size={18}
                  color="white"
                  style={{paddingRight: 10}}
                />
              }
              buttonStyle={{
                backgroundColor: '#910000',
                height: 50,
                width: 200,
              }}
              onPress={props.handleSubmit}
              disabled={!props.isValid}
              loading={props.isSubmitting}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    padding: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 20,
  },
  textInput: {
    fontSize: 23,
  },
  textLabel: {
    color: '#910000',
    fontSize: 25,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#910000',
  },
});
