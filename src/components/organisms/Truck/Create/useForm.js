import { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query'
import {
  submitAddCategory,
} from '../../../../../services/account'

const useForm = () => {
    const [values, setValues] = useState({
        license: '',
        truck: '',
        plate: '',
        year: '',
      });
      const [stnk, setStnk] = useState(null)
      const [kir, setKir] = useState(null)


  const queryClient = useQueryClient()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleChangeStnk = (e)=>{
    setStnk(e.target.files[0])
  }
  const handleChangeKir = (e)=>{
    setStnk(e.target.files[0])
  }

  const mutateAddCategory = useMutation(submitAddCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('fetchTrucks')
    },
    onError: () => {
      queryClient.invalidateQueries('fetchTrucks')
    }
  })

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('stnk', stnk)
  }

  return {
    values, stnk, kir, handleChangeKir, handleChangeStnk, onSubmit, mutateAddCategory, handleChange
  };
};

export default useForm;
