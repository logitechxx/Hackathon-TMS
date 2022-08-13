import { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query'

const useForm = () => {
    const [values, setValues] = useState({
        loading: '',
    });

    // const queryClient = useQueryClient()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const districts = [
        { value: 'cengkareng', label: 'Cengkareng' },
        { value: 'grogol-petamburan', label: 'Grogol Petamburan' },
        { value: 'kalideres', label: 'Kalideres' },
        { value: 'kebon-jeruk', label: 'Kebon Jeruk' },
        { value: 'kembangan', label: 'Kembangan' },
        { value: 'palmerah', label: 'Palmerah' },
        { value: 'taman-sari', label: 'Taman Sari' },
        { value: 'tambora', label: 'Tambora' },
        { value: 'cempaka-putih', label: 'Cempaka Putih' },
        { value: 'gambir', label: 'Gambir' },
        { value: 'johar-baru', label: 'Johar Baru' },
        { value: 'kemayoran', label: 'Kemayoran' },
        { value: 'menteng', label: 'Menteng' },
        { value: 'sawah-besar', label: 'Sawah Besar' },
        { value: 'senen', label: 'Senen' },
        { value: 'tanah-abang', label: 'Tanah Abang' }
    ]

    const [selectOrigin, setSelectedOrigin] = useState(districts[0].value);

    const handleChangeOrigin = event => {
        console.log(event);
        setSelectedOrigin(event.value);
    };

    const [selectDestination, setSelectedDestination] = useState(districts[0].value);

    const handleChangeDestination = event => {
        console.log(event);
        setSelectedDestination(event.value);
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
        values, districts, handleChange, selectOrigin, handleChangeOrigin, selectDestination,handleChangeDestination, onSubmit
    };
};

export default useForm;
