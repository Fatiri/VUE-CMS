import Swal from 'sweetalert2'
import router from "../router";
// import {
//     removeAuthCredential
// } from "../misc/Cookies";


export const ResponseMessage = (icon, message) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        width:"400px",
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        width: 500,
        icon: icon,
        title: message
    })
}

export const ResponseLogout = (question) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Swal.fire({
        title: question,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout'
    }).then((result) => {
        if (result.isConfirmed) {
            // removeAuthCredential()
            ResponseMessage("success", "Berhasil Logout")
            router.push("/login")
        }
    })
}

export async function ResponseMessageValidate(question, btnText) {

    const result = await Swal.fire({
        title: question,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: btnText
    })
    if (result.isConfirmed) {
        return true
    } else {
        return false
    }
}