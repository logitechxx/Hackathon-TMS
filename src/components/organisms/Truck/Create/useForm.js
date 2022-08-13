import { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query'

const useForm = () => {
    const [values, setValues] = useState({
        license: '',
        truck: '',
        plate: '',
        year: '',
      });
      const [stnk, setStnk] = useState(null)
      const [kir, setKir] = useState(null)


  // const queryClient = useQueryClient()
  const truckType = [
    { value: 'tronton', label: 'Tronton' },
    { value: 'container', label: 'Container' },
    { value: 'cde', label: 'CDE' },
    { value: 'cdd', label: 'CDD' },
    { value: 'wingbox', label: 'WingBox' },
  ]

  const licenseType = [
    { value: 'Black', label: 'Black' },
    { value: 'yellow', label: 'Yellow' },
  ]
  const [selectedTruck, setSelectedTruck] = useState(truckType[0].value);

  const handleChangeTruck = event => {
    console.log(event);
    setSelectedTruck(event.value);
  };

  const [selectedPlate, setSelectedPlate] = useState(licenseType[0].value);

  const handleChangePlate = event => {
    console.log(event);
    setSelectedPlate(event.value);
  };


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

  // const mutateAddCategory = useMutation((), {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('fetchTrucks')
  //   },
  //   onError: () => {
  //     queryClient.invalidateQueries('fetchTrucks')
  //   }
  // })

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('stnk', stnk)
  }

  return {
    values, stnk, kir, handleChangeKir, handleChangeStnk, onSubmit, handleChange, selectedTruck, handleChangeTruck, selectedPlate, handleChangePlate, truckType,
    licenseType
  };
};

export default useForm;
