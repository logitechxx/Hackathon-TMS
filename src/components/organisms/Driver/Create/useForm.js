import { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { createDriver } from '../../../../services/account';

const useForm = () => {
  const [values, setValues] = useState({
    name: '',
    phone_numbers: '',
  });
  const [idCard, setIdCard] = useState(null);
  const [driverLicense, setDriverLicense] = useState(null);

  // const queryClient = useQueryClient()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChangeIdCard = (e) => {
    setIdCard(e.target.files[0]);
  };
  const handleChangeDriverLicense = (e) => {
    setDriverLicense(e.target.files[0]);
  };

  // const mutateAddCategory = useMutation((), {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('fetchTrucks')
  //   },
  //   onError: () => {
  //     queryClient.invalidateQueries('fetchTrucks')
  //   }
  // })

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: values.name,
      phone_numbers: values.phone_numbers,
    };

    try {
      createDriver(data);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    values,
    idCard,
    driverLicense,
    handleChangeIdCard,
    handleChangeDriverLicense,
    onSubmit,
    handleChange,
  };
};

export default useForm;
