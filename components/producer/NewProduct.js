import {Formik} from 'formik';
import React from 'react';
import {AppState, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text, Input, Icon} from 'react-native-elements';
import * as Yup from 'yup';

export default function NewProduct() {
  const addProduct = async (values) => {};
  return (
    <ScrollView>
      <View style={styles.title}>
        <Text h3 style={{color: 'white'}}>
          Add new Product
        </Text>
      </View>
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
          productName: Yup.string().required('Product name is required'),
          productType: Yup.string().required('Product type is required'),
          productDescription: Yup.string().required(
            'Product description is required',
          ),
          price: Yup.number().required('Product price is required'),
          // productImage: Yup.
        })}
        onSubmit={(values) => addProduct(values)}>
        {(props) => (
          <View style={styles.inputContainer}>
            <Input
              label="Product's Name"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('productName')}
              onBlur={props.handleBlur('productName')}
              placeholder="Input the product's name"
              value={props.values.productName}
            />
            {props.touched.productName && props.errors.productName && (
              <Text style={styles.errorText}>* {props.errors.productName}</Text>
            )}
            <Input
              label="Product's Type"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('productType')}
              onBlur={props.handleBlur('productType')}
              placeholder="Input the product's type"
              value={props.values.productType}
            />
            {props.touched.productType && props.errors.productType && (
              <Text style={styles.errorText}>* {props.errors.productType}</Text>
            )}
            <Input
              label="Product's Description"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('productDescription')}
              onBlur={props.handleBlur('productDescription')}
              placeholder="Input the product's description"
              value={props.values.productDescription}
            />
            {props.touched.productDescription &&
              props.errors.productDescription && (
                <Text style={styles.errorText}>
                  * {props.errors.productDescription}
                </Text>
              )}
            <Input
              label="Price"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('price')}
              onBlur={props.handleBlur('price')}
              placeholder="Input the product's price"
              value={props.values.price}
            />
            {props.touched.price && props.errors.price && (
              <Text style={styles.errorText}>* {props.errors.price}</Text>
            )}
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
    color: '#910000',
    fontSize: 20,
    paddingBottom: 20,
  },
  textInput: {
    fontSize: 23,
  },
  textLabel: {
    color: '#910000',
    fontSize: 20,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#910000',
  },
});
