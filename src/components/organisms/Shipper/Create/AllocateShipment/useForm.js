import { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query'

const useForm = () => {
    // const queryClient = useQueryClient()

    const truckType = [
        { value: 'tronton', label: 'Tronton' },
        { value: 'container', label: 'Container' },
        { value: 'cde', label: 'CDE' },
        { value: 'cdd', label: 'CDD' },
        { value: 'wingbox', label: 'WingBox' },
    ]

    const listDriver = [
        { value: 'joni', label: 'Joni' },
        { value: 'tono', label: 'Tono' },
    ]

    const [selectTruck, setSelectedTruck] = useState(truckType[0].value);

    const handleChangeTruck = event => {
        console.log(event);
        setSelectedTruck(event.value);
    };

    const [selectDriver, setSelectedDriver] = useState(listDriver[0].value);

    const handleChangeDriver = event => {
        console.log(event);
        setSelectedDriver(event.value);
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
        e.preventDefault()
        const formData = new FormData()
    }

    return {
        truckType, listDriver, selectTruck, handleChangeTruck, selectDriver, handleChangeDriver, onSubmit
    };
};

export default useForm;
