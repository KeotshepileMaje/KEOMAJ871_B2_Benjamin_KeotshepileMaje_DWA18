import React from 'react'
import './Form.css'

export default function Form () {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()   
        console.log('Loggin successful')
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form_input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form_input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <button className="form_submit" >Sign-In</button>
            </form>
        </div>
    )
}