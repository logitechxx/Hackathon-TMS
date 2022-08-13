import { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query'

const useForm = () => {
    const shipmentStatus = [
        { value: 'allocated', label: 'Allocated' },
        { value: 'ongoing-origin', label: 'Ongoing to Origin' },
        { value: 'origin', label: 'At Origin' },
        { value: 'ongoing-destination', label: 'Ongoing to Destination' },
        { value: 'destination', label: 'At Destination' },
        { value: 'completed', label: 'Completed' },
    ]

    const [selectStatus, setSelectedStatus] = useState(shipmentStatus[0].value);

    const handleChangeStatus = event => {
        console.log(event);
        setSelectedStatus(event.value);
    };

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
    }

    return {
        shipmentStatus, selectStatus, handleChangeStatus, onSubmit
    };
};

export default useForm;
