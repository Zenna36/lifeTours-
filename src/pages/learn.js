import React from "react"

const ContactUs = () => {
    const [formData, setFormData] = React.useState({
			first_name: "", 
			last_name: "",
			user_name: "", 
			email: "",
			phone_number: "" 
        }
    )
    
    
	function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3001/api/profile/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
				'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            return res.json()
        }).then((body) => {
            console.log(body)
        }) 
    }

	function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form method="POST" onSubmit={handleSubmit} className='contactUsForm'>
            <div className="form">
				<h1 className="contactHeader">curious?
				<br/> create an account with us to learn more</h1>
					<input
						type="text"
						placeholder="first name"
						onChange={handleChange}
						name="first_name"
						value={formData.first_name}
					/>
					<input
						type="text"
						placeholder="last name"
						onChange={handleChange}
						name="last_name"
						value={formData.last_name}
					/>
					<input
						type="text"
						placeholder="user name"
						onChange={handleChange}
						name="user_name"
						value={formData.user_name}
					/>
					<input
						type="email"
						placeholder="email"
						onChange={handleChange}
						name="email"
						value={formData.email}
					/>
					<input
                        type="number"
                        placeholder="phone number"
                        onChange={handleChange}
                        name="phone_number"
                        value={formData.phone_number}
                    />
					<br />
				<button className="submitButton">submit</button>
			</div>
        </form>
    )
}

export default ContactUs;