// api
import api from "../Configs/api"

// setOTP
const sendOTP =  async(mobile) => {
    try{

        const response = await api.post("auth/send-otp",{mobile});
        return {response}

    } catch (error) {
        return {error}
    }
}

// checkOTP
const checkOTP = async(code,mobile) => {
    try {
        
        const response = await api.post('auth/check-otp',{code,mobile});
        return {response}

    } catch (error) {
        return {error}
    }
}

export {sendOTP,checkOTP}