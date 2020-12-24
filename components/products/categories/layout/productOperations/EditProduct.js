import {Formik} from 'formik';
import React from 'react';
import {Alert} from 'react-native';
import {ScrollView} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import * as Yup from 'yup';
import ButtonComponent from '../../../../layout/ButtonComponent';
import InputComponent from '../../../../layout/InputComponent';
import NigerianStates from '../../../../layout/NigerianStates';
import SelectComponent from '../../../../layout/SelectComponent';
import {API_URL} from '../../../../../app.json';
import Axios from 'axios';

export default function EditProduct(props) {
  const {productDetails} = props.route.params;
  const updateProduct = async (values) => {
    try {
      const data = new FormData();
      data.append('productName', values.productName);
      data.append('productDescription', values.productDescription);
      data.append('price', values.price);
      data.append('productType', values.productType);
      data.append('brandAddress', values.brandAddress);
      data.append('brandEmail', values.brandEmail);
      data.append('brandNumber', values.brandNumber);
      data.append('brandState', values.brandState);
      //   data.append("productImage", values.productImage);

      const response = await Axios.post(
        `${API_URL}/api/updateProduct/${productDetails._id}`,
        data,
      );
      Alert.alert(response.data);
      return props.navigation.push('View Product');
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };
  return (
    <ScrollView>
      <Formik
        initialValues={{
          productName: productDetails.productName,
          productType: productDetails.productType,
          productDescription: productDetails.productDescription,
          price: productDetails.price.toString(),
          brandEmail: productDetails.brandEmail,
          brandAddress: productDetails.brandAddress,
          brandNumber: productDetails.brandNumber,
          brandState: productDetails.brandState,
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
          brandEmail: Yup.string().email('Invalid brand email'),
          brandAddress: Yup.string().required("Brand's address is required"),
          brandNumber: Yup.number('Invaild phone number').required(
            "Brand's number is required",
          ),
          brandState: Yup.string().required("Select brand's state"),
        })}
        onSubmit={(values) => updateProduct(values)}>
        {(props) => (
          <View style={{alignItems: 'center', paddingBottom: 20}}>
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
            <InputComponent
              label="Brand's Email"
              touched={props.touched.brandEmail}
              errors={props.errors.brandEmail}
              onChangeText={props.handleChange('brandEmail')}
              onBlur={props.handleBlur('brandEmail')}
              placeholder="Input brand's email"
              value={props.values.brandEmail}
            />
            <SelectComponent
              title="Brand's State"
              value={props.values.brandState}
              items={NigerianStates}
              onChangeItem={(item) => {
                props.setFieldValue('brandState', item.value);
              }}
              touched={props.touched.brandState}
              errors={props.errors.brandState}
              searchable
            />
            <InputComponent
              label="Brand's Address"
              multiline
              touched={props.touched.brandAddress}
              errors={props.errors.brandAddress}
              onChangeText={props.handleChange('brandAddress')}
              onBlur={props.handleBlur('brandAddress')}
              placeholder="Input brand's adress"
              value={props.values.brandAddress}
            />
            <InputComponent
              label="Brand's Number"
              keyboardType="numeric"
              touched={props.touched.brandNumber}
              errors={props.errors.brandNumber}
              onChangeText={props.handleChange('brandNumber')}
              onBlur={props.handleBlur('brandNumber')}
              placeholder="Input brand's phone number"
              value={props.values.brandNumber}
            />

            <ButtonComponent
              title="Update Product"
              raised
              icon={
                <Icon
                  name="save"
                  size={18}
                  color="white"
                  style={{paddingRight: 10}}
                />
              }
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

const styles = StyleSheet.create({});
