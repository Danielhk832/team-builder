import React from "react"


export default function Form(props) {
    const {values, update, submit} = props;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name: 
                    <input 
                        type="text"
                        name="name"
                        placeholder="BADA BING BADA BOOM TYPE YOUR NAME OR FEEL MY GABAGHOUL"
                        onChange={onChange}
                        value={values.name}
                        />
                </label>

                <label>Email:
                    <input 
                      type="email"
                      name="email"
                      placeholder="email@address.com"
                      maxLength="30"
                      onChange={onChange}
                      value={values.email}
                    />
                </label>

                <label>Role:
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value="Student">Student</option>
                        <option value="TL">Team Lead</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Alumni">Alumni</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}